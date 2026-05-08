import { useQuery } from '@tanstack/react-query'

export default function DogGroups() {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['groups'],
    queryFn: () => fetch('https://dogapi.dog/api/v2/groups').then(res => res.json())
  })

  if (isPending) return <p>Loading groups...</p>
  if (isError) return <p>Could not load groups.</p>
  if (isSuccess) return (
    <p className="facts-groups"><strong>Dog Group:</strong> {data.data.map(g => g.attributes.name).join(', ')}</p>
  )

}