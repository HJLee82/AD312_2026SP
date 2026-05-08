import { useQuery } from '@tanstack/react-query'

export default function BreedDetail({ id }) {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['breed', id],
    queryFn: () => fetch(`https://dogapi.dog/api/v2/breeds/${id}`).then(res => res.json())
  })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Something went wrong!</p>
  if (isSuccess) return (
    <div>
        <h2 className="breed-name">{data.data.attributes.name}</h2>
        <div className="breed-detail">
        <p>{data.data.attributes.description}</p>
        <p>Min Life: {data.data.attributes.life.min} years</p>
        <p>Max Life: {data.data.attributes.life.max} years</p>
        </div>
    </div>
    )

}