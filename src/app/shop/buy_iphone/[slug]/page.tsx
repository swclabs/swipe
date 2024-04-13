import Banner from "@/components/banner";
import SelectProduct from "@/components/shop/select-product";


export default function Page({ params }: { params: { slug: string } }) {
    let param = params.slug.split("_");
    let iphone = param[0]
    iphone = iphone.substring(0, 1) + iphone.substring(1, 2).toUpperCase() + iphone.substring(2);
    let pro = param[2] === "pro" ? param[2].charAt(0).toUpperCase() + param[2].slice(1) : "";

    // func a(var) => Ham (var)
    // tao ra ham o parent => truyen vao child
    // o child => goi ham do => return ra gia tri muon lay

    // const get = async (value: string) => {
    //     "use server"
    //     console.log(value);
    // }

    return (
        <>

            {/* <Banner /> */}
            <div className=" w-full bg-white">

                {/* Section Welcome */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <p className="text-base text-red-600">
                            Mới
                        </p>
                        <span className=" text-xl sm:text-5xl font-medium">
                            Mua {iphone + " " + param[1].toUpperCase() + " " + pro}
                        </span>
                        <p className="font-normal text-sm pt-6" id="price-title">
                            Từ 28.999.000đ hoặc 1.181.000đ/tháng trong 24 tháng
                        </p>
                        <p className="text-xs pt-2">
                            Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%.
                        </p>
                    </div>
                </div>

                {/* Section Product */}
                <SelectProduct slug={params.slug} />
            </div>
        </>
    )
}