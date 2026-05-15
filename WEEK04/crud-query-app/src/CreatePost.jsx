import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const mutation = useMutation({
    mutationFn: (newPost) => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    }).then(res => res.json())
  })

  return (
    <div>
      <h2>Create Post</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
      <button onClick={() => mutation.mutate({ title, body, userId: 1 })}>
        Create
      </button>
      {mutation.isPending && <p>Creating...</p>}
      {mutation.isError && <p>Something went wrong!</p>}
      {mutation.isSuccess && <p>Post created! ID: {mutation.data.id}</p>}
    </div>
  )
}