import { authOptions } from '@/lib/auth'
import { BookOpenText } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { UserAccountNav } from './UserAccountNav'

const Navbar = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
          
          <p className='hidden  text-xl text-red-600 font-extrabold  md:block'>Faction</p>
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

export default Navbar