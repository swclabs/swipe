import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
    return (
        <div className="">
            <Input
                variant="underlined"
                className="bg-gray-50"
                // size="lg"
                type="text"
                placeholder="Tìm kiếm trên Swipe"
                startContent={
                    <CiSearch className="text-black/50 mb-0.5 bg-gray-50 pointer-events-none flex-shrink-0" />
                }
            />
        </div>
    );
}