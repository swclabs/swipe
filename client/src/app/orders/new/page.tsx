import OrderForm from "../_components/form";


export default function Page() {
  return (
    <div className="w-full h-screen">
      <div className=" flex lg:pt-10">
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
        <OrderForm />
        <div className=" sm:w-1/12 shrink-0 snap-center">
          <div className="shrink-0"></div>
        </div>
      </div>
    </div >
  )
}