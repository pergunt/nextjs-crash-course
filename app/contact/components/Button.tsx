'use client'

import {FC} from 'react'

interface ButtonProps {

}

export const Button: FC<ButtonProps> = () => {
    return (
        <button
          onClick={() => {
            console.log('click ')
          }}
        >
          click me
        </button>
    )
}
