export default function Page() {
  return (
    <div className="w-full h-screen">
      <div className=" flex">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <div className=" flex flex-col w-full justify-center">
          <div className=" w-full py-10 font-semibold text-xl border-b-1">
            Sản phẩm yêu thích
          </div>
          <div className="lg:flex lg:flex-row flex-col w-full justify-center pt-5 gap-x-5">
            <div className=" lg:w-3/5">
              <h2 className=" font-semibold border-b-1 text-lg">Sản phẩm</h2>
            </div>
            <div className=" sm:w-1/12 shrink-0 snap-center">
              <div className="shrink-0"></div>
            </div>
            <div className=" flex flex-col gap-y-2 lg:w-2/5">
              <h2 className=" font-semibold border-b-1 text-lg">Tổng quan</h2>
              <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5">
                <div className="w-full flex justify-between">
                  <p className="">Order Date</p>
                  <p className="">Full name</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="">Order Time</p>
                  <p className="">Full name</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="">Order ID</p>
                  <p className="">Full name</p>
                </div>
              </div>
              <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5">
                <div className="w-full flex justify-between">
                  <p className="">Subtotal</p>
                  <p className="">Full name</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="">Quantity</p>
                  <p className="">Full name</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="">Estimate Delivery</p>
                  <p className="">Full name</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="">Discount</p>
                  <p className="">Full name</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="">City</p>
                  <p className="">Full name</p>
                </div>
              </div>
              <div className=" text-sm flex flex-col gap-y-2 border-b-1 py-5">
                <div className="w-full flex justify-between">
                  <p className="">Total</p>
                  <p className="">Full name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div>
  )
}