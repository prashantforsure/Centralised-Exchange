import { authOptions } from '@/lib/auth'
import { BookOpenText } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { UserAccountNav } from './UserAccountNav'

export default async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
     <div className='fixed top-0 inset-x-0 h-fit  border-b backdrop-blur-md border-gray-200 z-[10] py-2'>
    <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
      {/* logo */}
      <Link href='/' className='flex gap-2 items-center'>
        
      <h1 className='text-xl font-bold tracking-tighter text-blue-500 sm:text-2xl'>
            My Music.
          </h1>
      </Link>

      {/* search bar */}
     

      {/* actions */}
      {session?.user ? (
        <UserAccountNav user={session.user} />
      ) : (
        <Link href='/sign-in' className={buttonVariants()}>
          Sign In
        </Link>
      )}
    </div>
  </div>
  )
}
