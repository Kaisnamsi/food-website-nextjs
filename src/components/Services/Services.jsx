import React from 'react'
import Image from 'next/image'

export default function Services() {
    return (
        <>
            <section className="text-gray-600 body-font bg-[#fe6a6a1d]">
                <div className="container px-5 py-24 mx-auto max-w-7xl">
                    <div className="flex flex-col text-center w-full mb-20">
                        <span className='text-[#FE6A6A] font-semibold mb-5  '>What we serve</span>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Fruits and vegetable delivered to your home</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="bg-white flex justify-center items-center flex-col px-6 py-6 rounded-lg h-56">
                                <Image src='/image/icon.png' alt='' width={100} height={100} />
                                <h2 className="title-font font-medium text-3xl text-gray-900">Free Shipping</h2>
                                <p className="leading-relaxed mt-5 text-sm">Enjoy order in a hand using the freshness of Groceries</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="bg-white flex justify-center items-center flex-col px-6 py-6 rounded-lg h-56">
                                <Image src='/image/Group 1736.png' alt='' width={100} height={100} />
                                <h2 className="title-font font-medium text-3xl text-gray-900">15 Days Return</h2>
                                <p className="leading-relaxed mt-5 text-sm">Enjoy order in a hand using the freshness of Groceries</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="bg-white flex justify-center items-center flex-col px-6 py-6 rounded-lg h-56">
                                <Image src='/image/Group 1737.png' alt='' width={100} height={100} />
                                <h2 className="title-font font-medium text-3xl text-gray-900">Secure Checkout</h2>
                                <p className="leading-relaxed mt-5 text-sm">Enjoy order in a hand using the freshness of Groceries</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
