"use client"

import Link from "next/link";
import Whitelogo from "./whitelogo";

export default function Footer() {
    return (
        <div className="relative bg-primary-hover lg:bg-[url('/herobg.svg')] md:bg-primary-hover bg-no-repeat bg-left bg-cover">
            <div className="mx-auto max-w-7xl">
            <div className="relative z-10 max-w-8xl mx-auto">
                <div className="flex flex-col gap-12 px-6 py-12 text-[14px] sm:px-6 sm:py-16 lg:flex-row lg:justify-between lg:gap-0 lg:px-8 lg:py-20">
                    <div className="flex flex-col text-white">
                        <Whitelogo/>
                        {/* <Link href="/" className="cursor-pointer">
                            <img src="/raenest.svg" alt="Raenest Logo" className="h-10 w-30 brightness-0 invert sm:h-12.5 sm:w-37.5" />
                        </Link> */}
                        <h2 className="pt-5">7460 Warren Parkway, Suite 100,</h2>
                        <h2 className="pb-5">Frisco, TX 75034, US</h2>
                        <div className="flex items-center gap-4 pt-5">
                            <a href="https://www.youtube.com/@raenest" target="_blank" rel="noopener noreferrer">
                                <img src="/youtube.svg" alt="YouTube" className="h-5 w-5 cursor-pointer brightness-0 invert" />
                            </a>
                            <a href="https://www.instagram.com/raenest" target="_blank" rel="noopener noreferrer">
                                <img src="/instagram.svg" alt="Instagram" className="h-5 w-5 cursor-pointer brightness-0 invert" />
                            </a>
                            <a href="https://x.com/raenest" target="_blank" rel="noopener noreferrer">
                                <img src="/twitter.svg" alt="X (Twitter)" className="h-5 w-5 cursor-pointer brightness-0 invert" />
                            </a>
                            <a href="https://www.linkedin.com/company/raenest" target="_blank" rel="noopener noreferrer">
                                <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5 cursor-pointer brightness-0 invert" />
                            </a>
                        </div>
                    </div>

                    {/*right-side*/}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-white sm:grid-cols-2 md:grid-cols-4 lg:gap-11">
                        <div className="text-[14px]">
                            <h2 className="py-4 font-semibold text-gray-400">Products</h2>
                            <ul className="space-y-4">
                                {/* <li><Link href="/sendmoney" className="cursor-pointer">Send Money</Link></li> */}
                                <li><Link href="/cards" className="cursor-pointer">Cards</Link></li>
                                <li><Link href="/products/receivemoney" className="cursor-pointer">Receive Money</Link></li>
                                {/* <li><Link href="/products/global-accounts" className="cursor-pointer">Global Accounts</Link></li> */}
                                {/* <li><Link href="/products/invoices" className="cursor-pointer">Invoices</Link></li> */}
                            </ul>
                        </div>

                        {/* <div>
                            <h2 className="py-4 font-semibold text-gray-400">Business</h2>
                            <ul className="space-y-4">
                                <li><Link href="/make-payments" className="cursor-pointer">Make Payments</Link></li>
                                <li><Link href="/cards" className="cursor-pointer">Cards</Link></li>
                                <li><Link href="/receive-payments" className="cursor-pointer">Receive Payments</Link></li>
                                <li><Link href="/products/global-accounts" className="cursor-pointer">Global Accounts</Link></li>
                                <li><Link href="/products/invoices" className="cursor-pointer">Invoices</Link></li>
                            </ul>
                        </div> */}

                        <div>
                            <h2 className="py-4 font-semibold text-gray-400">Company</h2>
                            <ul className="space-y-4">
                                {/* <li><Link href="/our-story" className="cursor-pointer">Our Story</Link></li> */}
                                <li className="flex flex-wrap items-center gap-2">
                                    <Link href="/career" className="cursor-pointer">Career</Link>
                                    <Link
                                        href="/career"
                                        className="cursor-pointer rounded-2xl bg-[#E6FF00] px-2 py-1 text-[11px] text-gray-900"
                                    >
                                        We are Hiring!
                                    </Link>
                                </li>
                                {/* <li><Link href="/womens-mentorship" className="cursor-pointer">Women's Mentorship</Link></li> */}
                                <li><Link href="/news-&-blog" className="cursor-pointer">News & Blog</Link></li>
                                {/* <li><Link href="/india" className="cursor-pointer">India</Link></li>
                                <li><Link href="/philippines" className="cursor-pointer">Philippines</Link></li>
                                <li><Link href="/united-states" className="cursor-pointer">United States</Link></li> */}
                            </ul>
                        </div>

                        <div>
                            <h2 className="py-4 font-semibold text-gray-400">Help</h2>
                            <ul className="space-y-4">
                                <li><Link href="/customer-help" className="cursor-pointer">Customer Help</Link></li>
                                <li><Link href="/contact-us" className="cursor-pointer">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse items-start gap-4 px-6 pb-7 text-[14px] text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
                    <h2 className="text-gray-400">© Copyright 2026. All Right Reserved</h2>
                    <div className="flex items-center gap-6 sm:gap-10">
                        <Link href="/terms" className="cursor-pointer">Terms & Conditions</Link>
                        <Link href="/privacy" className="cursor-pointer">Privacy Policy</Link>
                    </div>
                </div>

                <div className="px-6 sm:px-8 lg:px-12">
                    <hr className="border-gray-700 pb-4" />
                </div>

                <div className="px-6 text-[13px] leading-relaxed text-gray-400 sm:px-8 sm:text-[14px] lg:px-12">
                    <h2 className="pt-10">Securevest is a Financial Technology (FinTech) platform, not a traditional bank. We provide digital savings, investment, payment, and other financial solutions through our technology platform and, 
                        where applicable, in partnership with licensed and regulated financial institutions and service providers in Nigeria.

                        Securevest does not provide banking services directly unless otherwise stated. Our services are designed to help users save, invest, receive payments, and manage their finances securely and conveniently. Applicable 
                        financial services, fees, limits, and protections may vary depending on the service and the licensed partners involved.
                        </h2>

                    <h2 className="pt-5">The Securevest Visa Card is a payment card designed to provide users with a convenient and secure way to make online and in-store payments. Securevest provides the platform through which users can 
                        access and manage their card. Card services are provided through authorized financial and payment service partners, while savings, investments, payment receiving, and other financial services are offered separately 
                        within the Securevest platform</h2>

                    <h2 className="pt-5">Securevest is a Financial Technology (FinTech) platform and does not act as a broker-dealer or investment adviser. Investment services available through Securevest are provided in partnership with 
                        appropriately licensed and regulated investment service providers in Nigeria.

                        Securevest does not guarantee investment returns or recommend specific investments or investment strategies. All investments carry risks, and the value of an investment may rise or fall, including the potential loss 
                        of invested capital. Past performance is not a guarantee of future results.

                        Before investing, users should carefully consider their financial goals, investment objectives, risk tolerance, and the terms associated with each investment product. Investment services are subject to applicable 
                        Nigerian laws and regulations and the terms of the licensed investment partners providing the relevant services.
                        </h2>

                    <h2 className="pt-5 pb-15">Securevest is a Financial Technology (FinTech) platform focused on providing savings, investment, payment, and other financial solutions to users in Nigeria. Where applicable, our services are 
                        provided in partnership with licensed and regulated financial institutions and service providers in accordance with applicable Nigerian laws and regulations.

                        Specific financial products and services may be subject to the terms, conditions, licensing requirements, and regulatory oversight of the authorized partners providing them.
                        </h2>
                </div>
            </div>
            </div>
        </div>
    );
}