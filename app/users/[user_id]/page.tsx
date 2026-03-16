import {notFound} from 'next/navigation'

const fetchUser = async (user_id: string) => {
  const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)

  if (!response.ok) {
    return null
  }

  return await response.json()
}

const UserDetails = async ({params}: {
  params: Promise<{user_id: string}>
}) => {
  const {user_id} = await params
  const user = await fetchUser(user_id)

  if (!user) {
    notFound()
  }

  return (
      <div>
        <h2 className='text-center'>User details</h2>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>{user.username}</p>
      </div>
  )
}

export default UserDetails
