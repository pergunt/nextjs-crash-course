'use client'
import {useState} from 'react'

const testPostReq = async () => {
  const res = await fetch(`/api/hello`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
    })
  })

  const data = await res.json()

  return {
    data
  }
}

const Test = ({params}: {
  params: Promise<{user_id: string}>
}) => {
  const [message, setMessage] = useState('')

  const onClick = async () => {
    const {data} = await testPostReq()

    setMessage(data.message)
  }
  return (
    <h2 className='text-center'>
      <p className='text-green-500'>api res : {message}</p>

      <button
        onClick={onClick}
        className='border-1 rounded-md border-amber-300 hover:border-amber-400'
      >
        Send post request
      </button>
    </h2>
  )
}

export default Test
