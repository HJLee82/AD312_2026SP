import { useQuery } from '@tanstack/react-query'

export default function BreedList({ onSelect }) {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['breeds'],   //Unique identifier
    queryFn: () => fetch('https://dogapi.dog/api/v2/wrong').then(res => res.json())    //get the data and convert to json
  })

  if (isPending) return <p>Loading...</p>   //handling responses
  if (isError) return <p>Something went wrong!</p>
  if (isSuccess) return (
    <div>
        <h1>Dog Breeds</h1>
        <ul>
        {data.data.map(breed => (
            <li key={breed.id} onClick={() => onSelect(breed.id)} style={{cursor: 'pointer'}}>
                {breed.attributes.name}
            </li>
        ))}
        </ul>
    </div>
    )
}