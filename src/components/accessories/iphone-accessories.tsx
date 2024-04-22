'use client';
import { Image } from "@nextui-org/react";
import { iPhoneAccessories } from "@/faker/iphone-accessory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


export default function AccessoryIphone() {

    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (
            <div
                className={"flex h-10 w-10 absolute top-[50%] left-[100%] p-2 border rounded-full bg-gray-50"}
                onClick={onClick}
            >
                <Image
                    alt=""
                    src="/img/accessory/right-chevron.svg"
                    className=" bg-gray-50"
                />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { onClick } = props;
        return (
            <div
                className={"flex h-10 w-10 absolute top-[50%] left-[-36px] p-2 border rounded-full bg-gray-50"}
                onClick={onClick}
            >
                <Image
                    alt=""
                    src="/img/accessory/left-chevron-chevron-svgrepo-com.svg"
                    className=" bg-gray-50"
                />
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="w-1/2 m-auto">
            <div className="slider-container">
                <Slider {...settings}>
                    {iPhoneAccessories.map((value) => (
                        <div className="bg-slate-100 h-[450px] text-black rounded-xl">
                            <div className="flex justify-center items-center content-center">
                                <Image
                                    alt=""
                                    className=" w-[266px] h-[291px] object-cover"
                                    src={value.img}
                                />
                            </div>
                            <div className="h-3 flex justify-center items-center content-center gap-x-2">
                                {value.color?.map((color) => (
                                    <Image
                                        alt=""
                                        className=" h-3 w-3 object-cover"
                                        src={color.img}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-sm text-red-500 h-6">{value.tag}</p>
                                <h2 className="text-center text-base font-semibold w-[267px] h-12">{value.name}</h2>
                                <p className="text-sm font-light">{value.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}