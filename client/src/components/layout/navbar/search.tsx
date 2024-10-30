import CardScroll from "@/components/card/scroll";
import SearchCard from "@/components/card/search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductService } from "@/service/products";
import { SearchProduct } from "@/types/search";
import { LoaderCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { LoadingArea } from "../loading-area";

export default function SearchComponent() {
  const [product, setProduct] = useState<SearchProduct[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const f = async () => {
      try {
        setStatus(false)
        const resp = await ProductService.search(keyword)
        setProduct(resp.data)
        setStatus(true)
      }
      catch (e) {
        console.log(e)
      }
    }
    const delayDebounceFn = setTimeout(() => {
      if (keyword !== "") {
        f()
      }
      else setProduct([])
    }, 500); // 1 giây

    return () => clearTimeout(delayDebounceFn)
  }, [keyword]);

  return (
    <div className="flex flex-col justify-center w-full py-5 z-0">
      <div className=" flex justify-center w-full">
        <div className="flex w-[70%] items-center h-10 rounded-full bg-gray-100">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Search className="text-black/50 bg-gray-100 pointer-events-none flex-shrink-0 rounded-full" />
          </Button>
          <input
            className=" font-semibold w-full border-none focus:border-transparent focus:outline-none mx-2 bg-gray-100"
            type="text"
            placeholder="Tìm kiếm trên Swipe"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      {/* <CardScroll product={product} href="/shop/phone/" /> */}
      {status || keyword === "" ?
        <SearchCard product={product} /> :
        <LoadingArea />
      }
    </div>
  );
}