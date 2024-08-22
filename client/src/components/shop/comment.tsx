import { ArrowDown, ArrowUp, ChevronDown, Reply, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import moment from 'moment';
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

const Level = ({ level }: { level: number }) => {
  return (
    <>
      {
        Array.from({ length: level }).map((_, index) => (
          <div className=" w-[40px] shrink-0 snap-center" key={index}>
            <div className="shrink-0"></div>
          </div>
        ))
      }
    </>
  )
}

const Block = ({ level }: { level: number }) => {
  return (
    <div className=" flex gap-2 md:gap-7 items-center flex-1">
      <Level level={level} />
      <div className=" flex flex-col justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="font-normal flex flex-col gap-y-1 break-words whitespace-normal">
        <div className="font-semibold text-xs break-words whitespace-normal">
          user_1778
        </div>
        <div className="md:text-sm text-xs break-words whitespace-normal">
          If you can do that , You deserve to be 1700+ (given the problems are DIV 2 . C) , because as of now , I can barely do 4 or 3 C problems a day , despite doing them for 5+ hours
        </div>
        <div className=" flex gap-3 items-center">
          <div className=" text-xs">
            {moment().startOf('day').fromNow()}
          </div>
          <div className=" flex items-center text-xs md:text-sm text-blue-600">
            <Button size="icon" variant="ghost">
              <ArrowUp className="text-blue-600" size={20} />
            </Button>
            <p>+50</p>
          </div>
          <div className=" flex items-center text-xs md:text-sm text-red-600">
            <Button size="icon" variant="ghost">
              <ArrowDown className=" text-red-600" size={20} />
            </Button>
            <p>+50</p>
          </div>
          <Button size="icon" variant="ghost">
            <Reply size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Comment() {

  return (
    <div className="bg-gray-50 rounded-md p-2 md:p-10">
      <div className=" flex flex-row gap-2 py-5">
        <Textarea placeholder="Type your message here." />
        <Button className=" flex justify-center items-center gap-2"><Send /> Gửi</Button>
      </div>
      <ScrollArea className=" max-h-max">
        <div className=" flex flex-col gap-y-4">
          <Block level={0} />
          <Block level={1} />
          <Block level={1} />
          <Block level={1} />
          <Block level={1} />
          <Block level={0} />
          <Block level={0} />
        </div>
      </ScrollArea>
      <div className=" flex flex-row gap-2 justify-center">
        <Button variant="ghost" className="flex justify-center items-center gap-2">Xem thêm <ChevronDown /></Button>
      </div>
    </div>
  )
}