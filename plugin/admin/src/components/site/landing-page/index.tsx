import { Icons } from "@/components/dashboard/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const LandingPageCard = () => {
    return (
        <Link href="/dashboard/site/landing-page">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Landing Page
                    </CardTitle>
                    <Icons.box />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Landing Page</div>
                    <p className="text-xs text-muted-foreground">
                        setting landing page
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}