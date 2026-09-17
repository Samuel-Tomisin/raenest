"use client"

import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

export default function ContactUs() {
    return (
<main>
    <Navbar/>
        <div className="bg-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-15">
            <div className="mx-auto max-w-7xl">
                <div className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat min-h-[360px] sm:min-h-[420px] lg:h-[500px] rounded-4xl">
                    <div className="flex flex-col items-center justify-center h-full px-4 py-10 text-center sm:px-8">
                        <h2 className="text-3xl sm:text-5xl lg:text-[65px] text-white font-semibold leading-tight">
                            Contact Us
                        </h2>
                        <p className="mt-3 max-w-xl text-sm sm:text-base lg:text-[18px] text-white font-semibold leading-relaxed pb-8 sm:pb-12 lg:pb-15">
                            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
                        </p>
                        <div className="">
                        <div className="gap-2 flex items-center pb-4">
                            <p>Name:-</p>
                            <input type="name" className="border-white w-120 border-2 py-2 px-2 rounded-2xl"/>
                        </div>

                        <div className="gap-2 flex items-center">
                            <p>Email:-</p>
                            <input type="email" className="border-white w-120 border-2 py-2 px-2 rounded-2xl"/>
                        </div>

                        <div className="gap-1 flex items-center pt-4">
                            <p>Phone:-</p>
                            <input type="number" className="border-white w-120 border-2 py-2 px-2 rounded-2xl"/>
                        </div>

                        <div className="pt-7">
                        <a href="" className="py-2 px-5 bg-gray-900 rounded-2xl text-gray-100 border-2">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <Footer/>
</main>
    );
}   