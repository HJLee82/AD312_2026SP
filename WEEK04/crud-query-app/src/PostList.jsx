import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

export default function PostList({ onSelect }) {
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [lastAction, setLastAction] = useState(null)

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
      if (!res.ok) throw new Error('Network response was not ok')
      return res.json()
    })
  })

  const updateMutation = useMutation({
    mutationFn: (updatedPost) => fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    }).then(res => res.json()),
    onSuccess: () => {
      setEditingId(null)
      setLastAction('updated')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    }).then(res => res.json()),
    onSuccess: () => setLastAction('deleted')
  })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Something went wrong!</p>
  if (isSuccess) return (
    <div>
      {lastAction === 'deleted' && <p>Post deleted!</p>}
      {lastAction === 'updated' && <p>Post updated!</p>}
      <ul>
        {data.map(post => (
          <li key={post.id}>
            {editingId === post.id ? (
              <div>
                <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                <input value={editBody} onChange={e => setEditBody(e.target.value)} />
                <button onClick={() => updateMutation.mutate({ id: post.id, title: editTitle, body: editBody, userId: post.userId })}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span>{post.title}</span>
                <div>
                  <button onClick={() => { setEditingId(post.id); setEditTitle(post.title); setEditBody(post.body) }}>Edit</button>
                  <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}