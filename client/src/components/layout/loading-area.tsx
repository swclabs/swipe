import { LoaderCircle } from "lucide-react";

export function LoadingArea() {
  return (
    <div className="flex justify-center h-[30vh] items-center w-full">
      <LoaderCircle className="animate-spin" />
    </div>
  )
}