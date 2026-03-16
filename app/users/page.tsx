import Link from "next/link";

const Users = async () => {
  console.log('isServer or client')

  const response  = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return (
      <div>
        <h2 className='text-center'>Users page</h2>
        <ul>
          {users.map((item: any) => (
            <li key={item.id}>
              <Link
                href={`/users/${item.id}`}
                className='text-blue-400 transition-colors hover:text-blue-300'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Users
