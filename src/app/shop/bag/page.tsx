"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import { Button, Image } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import cartData from "@/faker/cart";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

function BagPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className=" w-full bg-white">
                <Banner />

                <div className='w-1/2 m-auto'>
                    <div className="flex flex-col justify-center items-center mb-4 sticky border-b-1">
                        <p className="text-xl sm:text-4xl font-semibold">Tổng giá trị giỏ hàng của bạn là 46.999.000đ.</p>
                        <p className='text-base mt-4'>Vận chuyển miễn phí đối với mọi đơn hàng.</p>
                        <Link href="#" className='w-72 mt-6 mb-12'>
                            <Button color="primary" radius="md" fullWidth>Thanh toán</Button>
                        </Link>
                    </div>


                    {cartData.map((value, index) => (
                        <div className='h-[40vh] flex flex-row justify-between items-center border-b-1'>
                            <div className="h-full flex w-[20%] mr-2" key={index}>
                                <Image
                                    alt="img"
                                    src={value.img}
                                    className='h-full object-contain'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='pb-4 border-b-1'>
                                    <div className='flex justify-between sticky py-2'>
                                        <p className='text-2xl font-medium'>{value.name}</p>
                                        <p className='text-2xl font-medium'>{value.price}</p>
                                    </div>
                                    <div className='flex justify-between sticky py-2'>
                                        <p className='2xl:text-base text-sm font-light'>{value.desc}</p>
                                        <p className='text-base font-light pl-4'>{value.subdesc}</p>
                                    </div>
                                </div>
                                <div className='mt-8'>

                                    <div className='flex flex-row gap-x-2'>
                                        <Image
                                            alt="img"
                                            src="/img/cart/logistics-delivery-truck-in-movement-svgrepo-com.svg"
                                            className='h-6 w-6 object-contain'
                                        />
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
                    ))}
                </div>
            </div>
        </>
    );
}

export default BagPage;