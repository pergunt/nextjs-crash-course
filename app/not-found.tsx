import {FC} from 'react'
import Link from "next/link";

const NotFound: FC = () => {
    return (
        <div>
          <h1 className='text-center text-3xl text-red-500'>
            404 - Page not found
          </h1>
          <p className='text-center text-2xl'>
            Oops! This page doesn't exist
          </p>
          <div className="flex justify-center">
            <Link href='/' className='text-blue-400 transition-colors hover:text-blue-300 text-xl'>
              Go back to Home
            </Link>
          </div>
        </div>
    )
}

export default NotFound
