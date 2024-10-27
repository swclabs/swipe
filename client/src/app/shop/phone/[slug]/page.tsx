import { auth } from "@/lib/oauth";
import PhonePageBody from "./page-body";


export default async function Page({ params }: { params: { slug: number } }) {
  const session = await auth()
  return (
    <PhonePageBody session={session} id={params.slug} />
  )
}