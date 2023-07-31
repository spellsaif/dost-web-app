import { UserButton, UserProfile } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/sign-in' />
    </div>
  )
}
