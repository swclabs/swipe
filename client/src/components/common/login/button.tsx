import { Button } from "@nextui-org/react";

export default function LoginButton() {
    return (
        <>
            <a href='/auth/login'>
                <Button color="primary" variant="shadow">
                    <b>LOGIN</b>
                </Button>
            </a>
            <Button color="default" className=' ml-4'>
                <b>SIGNUP</b>
            </Button>
        </>
    )
}