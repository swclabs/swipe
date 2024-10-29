import { Button } from '@/components/ui/button';
import { ProductDetail, Specification } from "@/types/products";
import { formatNumber } from '@/utils/fmt';

interface IStorageProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

export default function SpecSSD({ product, color, specs, setSpecs }: IStorageProps) {
  // console.log(version, color, specs)
  return (
    <>
      <div className=" container" id='SSD'>
        <div className=' font-semibold text-2xl'>
          Dung lượng. <span className=' text-gray-400'>Bạn cần bao nhiêu dung lượng?</span>
        </div>

        <div className='pt-0'>
          {
            color === -1 || specs.ram === "" ?
              product.color[0]?.specs?.filter(spec => spec.ram === "8GB").map((value, index) =>
                <Button
                  variant="outline"
                  className={`container ${specs.ssd === value.ssd ? "border-black" : "border-gray-300"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                  key={index}
                  onClick={() => setSpecs({ ...value })}
                  disabled={specs.ram === "" ? true : false}
                >
                  <div className='flex gap-11 justify-between w-full h-full items-center'>
                    <p className='break-words whitespace-normal text-left'>
                      {value.ssd}
                    </p>
                    <p className='break-words whitespace-normal font-normal text-right text-xs'>
                      {formatNumber(parseInt(value.price))}
                    </p>
                  </div>
                </Button>
              ) :
              product.color[color].specs?.filter(spec => spec.ram === specs.ram).map((value, index) =>
                <Button
                  variant="outline"
                  className={`container ${specs.ssd === value.ssd ? "border-black" : "border-gray-300"} border-[1.5px] rounded-xl mt-5 h-[100px]`}
                  key={index}
                  onClick={() => setSpecs({ ...value })}
                  disabled={specs.ram === "" ? true : false}
                >
                  <div className='flex gap-11 justify-between max-w-full w-full h-full items-center'>
                    <p className='break-words whitespace-normal text-left'>
                      {value.ssd}
                    </p>
                    <p className='break-words whitespace-normal font-normal text-right text-xs'>
                      {formatNumber(parseInt(value.price))}
                    </p>
                  </div>
                </Button>
              )
          }
        </div>
      </div >
    </>
  )
}