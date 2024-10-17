import { ProductDetail, Specification } from "@/types/products";

import { motion } from "framer-motion"
import { Button } from "../ui/button";

interface IStorageProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}
export default function AddToCart({ product, color, specs, setSpecs }: IStorageProps) {
  return (
    <>
      {
        product && product.color[color] && specs.ssd != "" ?
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
              <div className=" container flex w-4/5 flex-col md:flex-row">
                <div className=" container font-semibold text-3xl p-10">
                  {product?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product?.name} {specs.ssd} {product.color[color].name}</div>
                  <div className=" font-semibold">Tổng cộng {specs.price}</div>
                </div>
                <div className=" container p-10">
                  <div className=" font-semibold">Giao hàng:</div>
                  <div className=" text-sm">Còn hàng</div>
                  <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                  <Button className=" w-full">Thêm vào giỏ hàng</Button>
                </div>
              </div>
            </div>
          </motion.div> :
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
              <div className=" container flex w-4/5 flex-col md:flex-row">
                <div className=" container font-semibold text-3xl p-10">
                  {product.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product.name} {specs.ssd} {product.color[0]?.name}</div>
                  <div className=" font-semibold">Tổng cộng {specs.price}</div>
                </div>
                <div className=" container p-10">
                  <div className=" font-semibold">Giao hàng:</div>
                  <div className=" text-sm">Còn hàng</div>
                  <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                  <Button disabled className=" w-full">Thêm vào giỏ hàng</Button>
                </div>
              </div>
            </div>
          </motion.div>
      }
    </>
  )
}


interface IConnectionProps {
  product: ProductDetail;
  color: number;
  specs: Specification;
  setColor: (color: number) => void;
  setSpecs: (specs: Specification) => void;
}

export function AddWatchToCart({ product, color, specs, setSpecs }: IConnectionProps) {
  return (
    <>
      {
        product && product.color[color] && specs.connection != "" ?
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
              <div className=" container flex w-4/5 flex-col md:flex-row">
                <div className=" container font-semibold text-3xl p-10">
                  {product?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product?.name} {specs.connection} {product.color[color].name}</div>
                  <div className=" font-semibold">Tổng cộng {specs.price}</div>
                </div>
                <div className=" container p-10">
                  <div className=" font-semibold">Giao hàng:</div>
                  <div className=" text-sm">Còn hàng</div>
                  <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                  <Button className=" w-full">Thêm vào giỏ hàng</Button>
                </div>
              </div>
            </div>
          </motion.div> :
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
              <div className=" container flex w-4/5 flex-col md:flex-row">
                <div className=" container font-semibold text-3xl p-10">
                  {product?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product?.name} {specs.connection} {product?.color[0].name}</div>
                  <div className=" font-semibold">Tổng cộng {specs.price}</div>
                </div>
                <div className=" container p-10">
                  <div className=" font-semibold">Giao hàng:</div>
                  <div className=" text-sm">Còn hàng</div>
                  <div className=" text-sm mb-10">Vận chuyển miễn phí</div>

                  <Button disabled className=" w-full">Thêm vào giỏ hàng</Button>
                </div>
              </div>
            </div>
          </motion.div>
      }
    </>
  )
}