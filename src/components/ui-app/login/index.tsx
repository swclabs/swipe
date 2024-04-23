import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
export default function LoginComponent() {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="swc logo"
                    height={40}
                    radius="sm"
                    src="/ico/swc.svg"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">Swipe</p>
                    <p className="text-small text-default-500">admin.swipe.com</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className=" w-80">
                    <Input type="email" label="Email" placeholder="Enter your email" />
                    <Input type="password" label="Password" placeholder="Enter your Password" className=" mt-4" />
                </div>
            </CardBody>
            <Divider />
            <CardFooter className=" grid">
                <Button color="primary" className=" w-full">
                    Continue
                </Button>
                <div className=" text-left font-sans mt-2 ml-1 mb-3 text-sm font-semibold text-blue-600">
                    <a href="/auth/forgot-password">Forgot Password?</a>
                </div>
                <Divider />
                <a href={`${process.env.OAUTH_LOGIN}`}>
                    <Button color="default" className="mt-5 w-full">
                        <Image
                            alt="swc logo"
                            height={30}
                            radius="sm"
                            src="/ico/google.svg"
                            width={30}
                        />
                        Continue with Google
                    </Button>
                </a>
            </CardFooter>

        </Card >
    )
}