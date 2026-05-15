import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function FilterPost() {
  const [userId, setUserId] = useState('')
  const [submittedId, setSubmittedId] = useState('')

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['posts', submittedId],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${submittedId}`).then(res => res.json()),
    enabled: submittedId !== ''
  })

  return (
    <div>
      <h2>Filter by User ID</h2>
      <input value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
      <button onClick={() => setSubmittedId(userId)}>Filter</button>
      {isPending && submittedId !== '' && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
      {isSuccess && (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}