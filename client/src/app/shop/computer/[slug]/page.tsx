import { auth } from "@/lib/oauth";
import ComputerPageBody from "./page-body";


export default async function Page({ params }: { params: { slug: number } }) {
  const session = await auth();
  return (
    <ComputerPageBody session={session} id={params.slug} />
  );
}