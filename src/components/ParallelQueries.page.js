import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}


export const ParallelQueriesPage = () => {

  const { data: superHeroes} = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends} = useQuery('friends', fetchFriends)

  return (
    <div>
      <div>
        <h2>Parllel for Super Heroes</h2>

        {
        superHeroes?.data.map(hero => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
      </div>

      <div>
      <h2>Parllel for Friends</h2>

      {
      friends?.data.map(friend => {
        return <div key={friend.id}>{friend.name}</div>
      })
      }
      </div>
    </div>
  )
}