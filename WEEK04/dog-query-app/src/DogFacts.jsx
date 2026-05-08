import { useQuery } from '@tanstack/react-query'

export default function DogFacts({ selectedId }) {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['facts', selectedId],
    queryFn: () => fetch('https://dogapi.dog/api/v2/facts').then(res => res.json())
  })

  if (isPending) return <p>Loading fact...</p>
  if (isError) return <p>Could not load fact.</p>
  if (isSuccess) return (
    <p className="facts-groups"><strong>Random Dog Fact:</strong> {data.data[0].attributes.body}</p>
  )
}