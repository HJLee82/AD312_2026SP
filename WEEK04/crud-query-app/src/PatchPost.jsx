import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function PatchPost() {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')

  const mutation = useMutation({
    mutationFn: (patchData) => fetch(`https://jsonplaceholder.typicode.com/posts/${patchData.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: patchData.title })
    }).then(res => res.json())
  })

  return (
    <div>
      <h2>Patch Post (Title Only)</h2>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="Post ID" />
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New Title" />
      <button onClick={() => {
        if (Number(id) > 100) return
        mutation.mutate({ id: Number(id), title })
      }}>
        Patch
      </button>
      {mutation.isPending && <p>Updating...</p>}
      {mutation.isError && <p>Something went wrong!</p>}
      {Number(id) > 100 && <p>Please use an ID between 1 and 100</p>}
      {mutation.isSuccess && <p>Post updated! ID: {mutation.data.id}</p>}
    </div>
  )
}