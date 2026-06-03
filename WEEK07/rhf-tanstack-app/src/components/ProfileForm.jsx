import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

function ProfileForm() {
  const queryClient = useQueryClient()

  const { register, handleSubmit, reset, setError, formState: { errors, isDirty } } = useForm()

  // [FETCH] useQuery
  const { data, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3001/profile')
      return res.json()
    }
  })

  // Populate form when data loads
  useEffect(() => {
    if (data) reset(data)
  }, [data, reset])

  // [MUTATION] useMutation
  const mutation = useMutation({
    mutationFn: async (formData) => {
      if (formData.email === 'conflict@example.com') {
        throw {
          field: 'email',
          message: 'This email is already in use.'
        }
      }
      const res = await fetch('http://localhost:3001/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      return res.json()
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] })
      reset(data)
      alert('Profile saved successfully!')
    },
    onError: (error) => {
      setError('email', {
        type: 'server',
        message: error.message || 'Server validation failed'
      })
    }
  })

  const onSubmit = (data) => mutation.mutate(data)

  if (isLoading) {
    return <div className="loading">Loading profile...</div>
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Username */}
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address'
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Bio */}
        <div className="field">
          <label>Bio</label>
          <textarea
            {...register('bio')}
          />
        </div>

        {/* Notifications */}
        <div className="field checkbox-field">
          <input
            type="checkbox"
            id="notifications"
            {...register('notifications')}
          />
          <label htmlFor="notifications">Enable Notifications</label>
        </div>

        {/* Saving Banner */}
        {mutation.isPending && (
          <div className="saving-banner">
            Saving your profile...
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isDirty || mutation.isPending}
        >
          {mutation.isPending ? 'Saving...' : 'Save Changes'}
        </button>

      </form>
    </div>
  )
}

export default ProfileForm