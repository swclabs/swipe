import { Connection, ProductDetail, Storage } from "@/types/products";

import { motion } from "framer-motion"
import { Button } from "../ui/button";

interface IStorageProps {
  product: ProductDetail<Storage>[];
  version: number;
  color: number;
  specs: Storage;
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Storage) => void;
}
export default function AddToCart({ product, version, color, specs, setSpecs }: IStorageProps) {
  return (
    <>
      {
        product[version] && product[version].color[color] && specs.SSD != "" ?
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
              <div className=" container flex w-4/5 flex-col md:flex-row">
                <div className=" container font-semibold text-3xl p-10">
                  {product[version]?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product[version]?.name} {specs.SSD} {product[version].color[color].name}</div>
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
                  {product[0]?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product[0]?.name} {specs.SSD} {product[0]?.color[0].name}</div>
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
  product: ProductDetail<Connection>[];
  version: number;
  color: number;
  specs: Connection;
  setVersion: (version: number) => void;
  setColor: (color: number) => void;
  setSpecs: (specs: Connection) => void;
}

export function AddWatchToCart({ product, version, color, specs, setSpecs }: IConnectionProps) {
  return (
    <>
      {
        product[version] && product[version].color[color] && specs.name != "" ?
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className=" bg-gray-100 max-h-max mt-10 rounded-xl flex justify-center mb-5">
              <div className=" container flex w-4/5 flex-col md:flex-row">
                <div className=" container font-semibold text-3xl p-10">
                  {product[version]?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product[version]?.name} {specs.name} {product[version].color[color].name}</div>
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
                  {product[0]?.name} mới của bạn.
                  <span className=" text-gray-400">Theo cách bạn muốn.</span>
                </div>
                <div className=" container p-10">
                  <div className=" mb-2">{product[0]?.name} {specs.name} {product[0]?.color[0].name}</div>
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