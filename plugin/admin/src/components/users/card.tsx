import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/dashboard/icons"
import Link from "next/link"


export const UserCard = () => {
    return (
        <Link href="/dashboard/users/user">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Users
                    </CardTitle>
                    <Icons.user />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">User</div>
                    <p className="text-xs text-muted-foreground">
                        customer and admin
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}

export const ProfileCard = () => {
    return (
        <Link href="/dashboard/users/profile">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Users
                    </CardTitle>
                    <Icons.profile />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Profile</div>
                    <p className="text-xs text-muted-foreground">
                        create a new profile
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}

export const EmployeeCard = () => {
    return (
        <Link href="/dashboard/users/employee">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Users
                    </CardTitle>
                    <Icons.employee />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Employee</div>
                    <p className="text-xs text-muted-foreground">
                        from store
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}
