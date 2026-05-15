import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function UpdatePost() {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const mutation = useMutation({
    mutationFn: (updatedPost) => fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    }).then(res => res.json())
  })

  return (
    <div>
      <h2>Update Post (PUT)</h2>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="Post ID" />
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New Title" />
      <input value={body} onChange={e => setBody(e.target.value)} placeholder="New Body" />
      <button onClick={() => {
        if (Number(id) > 100) return
        mutation.mutate({ id: Number(id), title, body, userId: 1 })
      }}>
        Update
      </button>
      {mutation.isPending && <p>Updating...</p>}
      {mutation.isError && <p>Something went wrong!</p>}
      {Number(id) > 100 && <p>Please use an ID between 1 and 100</p>}
      {mutation.isSuccess && <p>Post updated! ID: {mutation.data.id}</p>}
    </div>
  )
}