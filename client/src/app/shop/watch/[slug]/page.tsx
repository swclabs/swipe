import { auth } from "@/lib/oauth";
import WatchPageBody from "./page-body";


export default async function Page({ params }: { params: { slug: number } }) {
  const session = await auth()
  return <WatchPageBody id={params.slug} session={session} />
}