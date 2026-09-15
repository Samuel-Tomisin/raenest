"use client"

export default function ContactUs() {
    return (
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
                    </div>
                </div>
            </div>
        </div>
    );
}   