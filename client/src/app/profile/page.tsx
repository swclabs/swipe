"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Image from "next/image"
import {useEffect, useState} from "react";
import UserService from "@/service/users";
import {LoaderCircle} from "lucide-react";
import {User} from "@/types/users"
import {ProfileForm} from "@/app/profile/_components/profile-form";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const f = async () => {
      try {
        const resp = await UserService.getUser()
        // setUser(resp.data)
      } catch (e) {
        console.log(e)
      }
    }
    f()
  }, [])

  console.log("user", user)
  return (
    <div className="w-full max-h-max mb-10 min-h-screen">
      <div className=" flex">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" flex flex-col w-full justify-center">
          <div className=" w-full py-6 font-semibold text-xl border-b-1">
            Thông tin tài khoản
          </div>
          {user ? <div className="flex py-5">
              <div className=" container flex flex-1">
                <div className=" flex flex-col space-y-5 max-w-[310px]">
                  <div className=" container">
                    <Label>Firstname</Label>
                    <Input className=" h-9 w-full" defaultValue={user.first_name}/>
                  </div>
                  <div className=" container">
                    <Label>Lastname</Label>
                    <Input className=" h-9 w-full" defaultValue={user.last_name}/>
                  </div>
                  <div className=" container">
                    <Label>Email</Label>
                    <Input className=" h-9 w-full" defaultValue={user.email}/>
                  </div>
                  <div className=" container">
                    <Label>Mobile</Label>
                    <Input className=" h-9 w-full" defaultValue={user.phone_number}/>
                  </div>
                  <div>
                    <Button size="sm">Save</Button>
                  </div>
                </div>
              </div>
              <div className=" flex-1 flex justify-center">
                <div className=" max-w-[300px] flex space-y-5 flex-col">
                  <Label htmlFor="picture">Profile Picture</Label>
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      alt="avt"
                      width={150}
                      height={150}
                      src="/avt.png"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Upload</Label>
                    <Input id="picture" type="file"/>
                  </div>
                </div>
              </div>
            </div>
            :
            // <div className="h-[80vh] flex justify-center items-center">
            //   <LoaderCircle className="animate-spin" />
            // </div>}
            <ProfileForm/>
          }
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div>
  )
}