"use client"
import React from "react";
// import { Input } from "@nextui-org/react";
import { User } from "lucide-react";

export default function AccountPage() {

    const user = {
        first_name: "Khoa",
        last_name: "Nguyen",
        email: "anthony2742000@gmail.com",
        phone_number: "0123456789",
    }

    const handleUpload = () => {
        document.getElementById("image")?.click();
    }

    return (
        <div className="mt-8 w-full bg-white mb-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 rounded-lg border p-8 gap-4 md:gap-36">
                <div className="flex justify-center">
                    <div className=" flex justify-center items-center cursor-pointer rounded-full border w-fit p-4" onClick={handleUpload}>
                        <input id="image" className="hidden" type="file">

                        </input>
                        <User size={70} />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-full flex flex-col gap-4 md:gap-2 pt-2">
                        <div className="flex flex-col justify-between border-b-2 pb-4 md:pb-2">
                            <div className="text-sm">
                                First name
                            </div>
                            <div className="font-semibold">
                                {user.first_name}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between border-b-2 pb-4 md:pb-2">
                            <div className="text-sm">
                                Last name
                            </div>
                            <div className="font-semibold">
                                {user.last_name}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between border-b-2 pb-4 md:pb-2">
                            <div className="text-sm">
                                Email
                            </div>
                            <div className="font-semibold">
                                {user.email}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="text-sm">
                                Phone Number
                            </div>
                            <div className="font-semibold">
                                {user.phone_number}
                            </div>
                        </div>
                        {/* <p className=" font-semibold"> Last name : {user.last_name}</p>
                        <p className=" font-semibold">Email: {user.email}</p>
                        <p className=" font-semibold">Số điện thoại: {user.phone_number}</p> */}
                    </div>
                </div>
            </div>
        </div >
    );
}