import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SignInPage = ({children}: Props) => {
  return <SignIn />
}

export default SignInPage