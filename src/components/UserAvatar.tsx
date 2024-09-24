import { User } from '@prisma/client'
import Image from 'next/image'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarProps } from '@radix-ui/react-avatar'
import { CircleUserRound } from 'lucide-react'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className='relative aspect-square h-full w-full'>
       <CircleUserRound  className="h-8 w-8 mr-2 "/>
       <span>menu</span>
        </div>
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}
          
          </span>
         
        </AvatarFallback>
      )}
    </Avatar>
  )
}