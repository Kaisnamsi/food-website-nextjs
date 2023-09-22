import React from 'react'
import Image from 'next/image'
import { AiOutlineApple } from 'react-icons/ai'
import { BiLogoPlayStore } from 'react-icons/bi'

export default function Download() {
    return (
        <>
            <section className="text-gray-600 body-font bg-[#fe6a6a1d]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-7xl">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded mx-auto" alt="hero" src='/image/mobile mockup.png' width={300} height={200} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <span className='text-red-400 uppercase font-semibold text-sm mb-2'>Download Our App</span>
                        <h1 className="title-font md:text-5xl sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
                            Get The Groceries App Order More Easily
                        </h1>
                        <p className="mb-8 leading-relaxed text-sm">Groceries food try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex justify-center items-center text-black bg-transparent border-2 border-[#b9b7b76b] py-2 px-6 focus:outline-none hover:bg-white-500 rounded-md font-semibold text-lg">
                                <div className='bg-black p-2 mr-2 rounded-md'>
                                    <AiOutlineApple className='text-2xl text-white' />
                                </div>
                                App Store
                            </button>
                            <button className="inline-flex ml-4 justify-center items-center text-black bg-transparent border-2 border-[#b9b7b76b] py-2 px-6 focus:outline-none hover:bg-white-500 rounded-md font-semibold text-lg">
                                <div className='bg-black p-2 mr-2 rounded-md'>
                                    <BiLogoPlayStore className='text-2xl text-white' />
                                </div>
                                Play Store
                            </button>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
