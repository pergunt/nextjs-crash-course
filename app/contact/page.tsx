import {Button} from './components/Button'

import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'A lot of keywords',
  keywords: 'about, company, mission, ai, saas',
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Twitter'
  }
}

const Contact = async () => {
  const response  = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return (
      <div>
        Contact
        <br />
        <Button />
      </div>
  )
}

export default Contact
