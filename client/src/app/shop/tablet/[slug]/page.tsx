import { auth } from "@/lib/oauth"
import TabletPageBody from "./page-body"

export default async function Page({ params }: { params: { slug: number } }) {
  const session = await auth()
  return (
    <TabletPageBody session={session} id={params.slug} />
  )
}