import Link from 'next/link'
import React from 'react'
import UserAuthForm from './UserAuthForm'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
    <div className='flex flex-col space-y-3 text-center '>
        <h1 className='text-xl font-bold text-black'>
        Sign Up
        </h1>
            <p className='text-medium  text-black'>
            By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
            </p>
        
    </div>
    <UserAuthForm />
    <p className='px-8 text-center text-sm text-muted-foreground'>
    Already a user?{' '}
    <Link
      href='/sign-up'
      className='hover:text-brand text-sm underline underline-offset-4'>
      Sign Up
    </Link>
  </p>
</div>
  )
}

export default SignUp