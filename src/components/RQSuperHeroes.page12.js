import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data)
  }

  const onError = (error) => {
    console.log('Perform side effect after encounting error', error)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes', // can be anything
    fetchSuperHeroes, 
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      // refetchOnMount: 'always'
      // refetchOnWindowFocus: false,
      // refetchInterval: 20000
      // enabled: false

      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name)
        return superHeroNames
      }
    }
  )

  console.log({ isLoading, isFetching })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h2>RQ Super Heroes Page</h2>
    <button onClick={refetch}>Fetch Heroes</button>

    {
      data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })
    }
    </>
  )
  
}