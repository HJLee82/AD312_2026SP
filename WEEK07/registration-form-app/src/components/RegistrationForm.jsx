import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm({ mode: 'onChange' })

  const password = watch('password')

  // Load draft from localStorage on mount
  useEffect(() => {
    const draft = localStorage.getItem('registrationDraft')
    if (draft) {
        try {
            const parsed = JSON.parse(draft)
            Object.keys(parsed).forEach(key => setValue(key, parsed[key], { shouldValidate: true }))
        } catch {
            localStorage.removeItem('registrationDraft')
        }
    }
    }, [setValue])

  // Save draft to localStorage on change
  useEffect(() => {
    const subscription = watch(data => {
      localStorage.setItem('registrationDraft', JSON.stringify(data))
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Submitted:', data)
    reset()
    localStorage.removeItem('registrationDraft')
    alert('Registration successful!')
  }

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Full Name */}
        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            autoFocus
            {...register('fullName', {
              required: 'Full name is required',
              minLength: { value: 3, message: 'Minimum 3 characters' }
            })}
          />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="field">
          <label>Email Address</label>
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

        {/* Password */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Minimum 8 characters' },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message: 'Must contain uppercase, lowercase, and a number'
              }
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="field">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value => value === password || 'Passwords do not match'
            })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        {/* Role */}
        <div className="field">
          <label>Role / Account Type</label>
          <select
            {...register('role', {
              required: 'Please select a role',
              validate: value => value !== '' || 'Please select a role'
            })}
          >
            <option value="">Select a role...</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="productManager">Product Manager</option>
          </select>
          {errors.role && <p className="error">{errors.role.message}</p>}
        </div>

        {/* Terms */}
        <div className="field checkbox-field">
          <input
            type="checkbox"
            id="terms"
            {...register('terms', {
              required: 'You must accept the terms and conditions'
            })}
          />
          <label htmlFor="terms">I agree to the Terms & Conditions</label>
          {errors.terms && <p className="error">{errors.terms.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting || !isValid}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>

      </form>
    </div>
  )
}

export default RegistrationForm