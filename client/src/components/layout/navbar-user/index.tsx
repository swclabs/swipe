import { logout } from "@/lib/auth"
import { LogOut } from "lucide-react"
import { SessionProviderProps, signOut } from "next-auth/react"
import Link from "next/link"

export default function NavbarUser({ session }: { session: SessionProviderProps["session"] }) {
  return (
    <div className=" w-full bg-gray-100 py-2">
      <div className=" gap-x-3 text-xs w-full flex justify-end font-medium">
        {!session ?
          <div className="flex gap-x-2 items-center">
            <Link href="/auth/sign-up">
              Joins Us
            </Link>
            |
            <Link href="/auth">
              Sign In
            </Link>
          </div>
          :
          <div className="flex gap-x-2 items-center">
            <p>Welcome {session.user?.name} 👋 </p>
            |
            <button className='font-semibold flex items-center gap-x-2' onClick={() => {
              logout()
              signOut({ callbackUrl: '/', redirect: true })
            }}>
              <p>
                LogOut
              </p>
              <LogOut className=" w-3" />
            </button>
          </div>
        }
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div >
  )
}