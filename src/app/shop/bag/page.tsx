"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import { Button, Image } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import cartData from "@/faker/cart";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { VscSymbolMethod } from "react-icons/vsc";

function BagPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    let totalPrice = 0;

    function formatNumber(totalPrice: number) {
        const str = totalPrice.toString();
        const result = [];

        for (let i = str.length; i > 0; i -= 3) {
            const start = Math.max(i - 3, 0);
            result.unshift(str.slice(start, i));
        }

        return result.join('.');
    }

    return (
        <>
            <div className=" w-full bg-white">
                {/* <Banner /> */}
                <div className='w-4/5 m-auto'>

                    <div className="flex justify-center items-center mt-4 mb-12">
                        <p className="text-base">Xin lưu ý rằng chúng tôi không chấp nhận đổi trả đối với các đơn hàng trực tuyến.</p>

                    </div>

                    <div className="flex flex-col justify-center items-center mb-4 sticky border-b-1">
                        <p className="text-xl sm:text-4xl font-semibold">Tổng giá trị giỏ hàng của bạn là 46.999.000đ.</p>
                        <p className='text-base mt-4'>Vận chuyển miễn phí đối với mọi đơn hàng.</p>
                        <Link href="#" className='w-72 mt-6 mb-12'>
                            <Button color="primary" radius="md" fullWidth>Thanh toán</Button>
                        </Link>
                    </div>


                    {cartData.map((value, index) => (
                        totalPrice += parseInt(value.price.replace(/\D/g, '')),
                        <div className='flex flex-col'>
                            <div className='h-[40vh] flex flex-row justify-around items-center border-b-1'>
                                <div className="h-full flex w-[25%]  pt-16 mr-2" key={index}>
                                    <Image
                                        alt="img"
                                        src={value.img}
                                        className='w-full max-h-[400px] object-cover'
                                    />
                                </div>
                                <div className='flex flex-col'>

                                    <div className='pb-4 border-b-1'>
                                        <div className='flex justify-between sticky py-2'>
                                            <p className='text-2xl font-medium'>{value.name}</p>
                                            <p className='text-2xl font-medium'>{value.price}</p>
                                        </div>
                                        <div className='flex justify-between sticky py-2'>
                                            <p className='2xl:text-base text-sm font-light w-[80%]'>{value.desc}</p>
                                            <p className='text-base font-light pl-4'>{value.subdesc}</p>
                                        </div>
                                    </div>

                                    <div className='mt-8'>
                                        <div className='flex flex-row gap-x-2'>
                                            {/* <Image
                                                alt="img"
                                                src="/img/cart/logistics-delivery-truck-in-movement-svgrepo-com.svg"
                                                className='h-6 w-6 object-contain'
                                            /> */}
                                            <div className='pt-1'>
                                                <VscSymbolMethod />
                                            </div>
                                            <div className='flex flex-col'>
                                                <p>Đặt hàng hôm nay. Giao hàng đến:</p>
                                                <p className='font-semibold text-sm'>Th 2 20/05/2024 — Miễn Phí</p>
                                            </div>

                                            <Button onPress={onOpen}>Thành phố Hồ Chí Minh</Button>
                                            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                                <ModalContent>
                                                    {(onClose) => (
                                                        <>
                                                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                                            <ModalBody>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                                                </p>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                                                </p>
                                                                <p>
                                                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                                                </p>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button color="danger" variant="light" onPress={onClose}>
                                                                    Close
                                                                </Button>
                                                                <Button color="primary" onPress={onClose}>
                                                                    Action
                                                                </Button>
                                                            </ModalFooter>
                                                        </>
                                                    )}
                                                </ModalContent>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                    <div className='flex flex-col w-full items-end'>
                        <div className='flex flex-col w-3/4 mt-8 border-b-1 gap-y-2'>
                            <div className='grid grid-cols-2'>
                                <p className='text-base'>Tổng giá trị:</p>
                                <div className='flex justify-end'>
                                    <p className='text-base'>{formatNumber(totalPrice) + "đ"}</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mb-2'>
                                <p className='text-base'>Vận chuyển</p>
                                <div className='flex justify-end'>
                                    <p className='text-base'>MIỄN PHÍ</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-3/4 mt-4'>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p className='text-2xl font-semibold'>Thanh toán toàn bộ</p>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p className='text-2xl font-semibold'>{formatNumber(totalPrice) + "đ"}</p>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-sm font-light'>Bao gồm thuế GTGT 14.714.000đ</p>
                            </div>
                        </div>
                        <div className='flex flex-col w-3/4 mt-4'>
                            <div className='flex justify-end'>
                                <Link href="#" className='w-72 mt-6 mb-12'>
                                    <Button color="primary" radius="md" fullWidth>Thanh toán</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default BagPage;