"use client"

import Link from "next/link";

export default function Footer() {
    return (
        <div className="relative overflow-hidden bg-[url('/footerbg.svg')] bg-no-repeat">
            <div className="relative z-10 bg-black">
                <div className="flex flex-col gap-12 px-6 py-12 text-[14px] sm:px-8 sm:py-16 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:py-20">
                    <div className="flex flex-col text-white">
                        <Link href="/" className="cursor-pointer">
                            <img src="/raenest.svg" alt="Raenest Logo" className="h-[40px] w-[120px] brightness-0 invert sm:h-[50px] sm:w-[150px]" />
                        </Link>
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
                            <h2 className="py-4 font-semibold text-gray-400">Personal</h2>
                            <ul className="space-y-4">
                                <li><Link href="/sendmoney" className="cursor-pointer">Send Money</Link></li>
                                <li><Link href="/cards" className="cursor-pointer">Cards</Link></li>
                                <li><Link href="/products/receivemoney" className="cursor-pointer">Receive Money</Link></li>
                                <li><Link href="/products/global-accounts" className="cursor-pointer">Global Accounts</Link></li>
                                <li><Link href="/products/invoices" className="cursor-pointer">Invoices</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="py-4 font-semibold text-gray-400">Business</h2>
                            <ul className="space-y-4">
                                <li><Link href="/make-payments" className="cursor-pointer">Make Payments</Link></li>
                                <li><Link href="/cards" className="cursor-pointer">Cards</Link></li>
                                <li><Link href="/receive-payments" className="cursor-pointer">Receive Payments</Link></li>
                                <li><Link href="/products/global-accounts" className="cursor-pointer">Global Accounts</Link></li>
                                <li><Link href="/products/invoices" className="cursor-pointer">Invoices</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="py-4 font-semibold text-gray-400">Company</h2>
                            <ul className="space-y-4">
                                <li><Link href="/our-story" className="cursor-pointer">Our Story</Link></li>
                                <li className="flex flex-wrap items-center gap-2">
                                    <Link href="/career" className="cursor-pointer">Career</Link>
                                    <Link
                                        href="/career"
                                        className="cursor-pointer rounded-2xl bg-[#E6FF00] px-2 py-1 text-[11px] text-black"
                                    >
                                        We are Hiring!
                                    </Link>
                                </li>
                                <li><Link href="/womens-mentorship" className="cursor-pointer">Women's Mentorship</Link></li>
                                <li><Link href="/news-&-blog" className="cursor-pointer">News & Blog</Link></li>
                                <li><Link href="/india" className="cursor-pointer">India</Link></li>
                                <li><Link href="/philippines" className="cursor-pointer">Philippines</Link></li>
                                <li><Link href="/united-states" className="cursor-pointer">United States</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="py-4 font-semibold text-gray-400">Help</h2>
                            <ul className="space-y-4">
                                <li><Link href="/customer-help" className="cursor-pointer">Customer Help</Link></li>
                                <li><Link href="/contact" className="cursor-pointer">Contact us</Link></li>
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
                    <h2 className="pt-10">Raenest is a Financial Technology (FinTech) Company, not a Bank. Banking services are provided by Regent Bank, Member FDIC. Raenest is not FDIC insured. FDIC deposit insurance up to
                        $250,000 per qualified customer account on a "pass-through" basis, for which certain conditions must be satisfied. FDIC insurance only covers the failure of Regent Bank, Member FDIC.
                        Mastercard Card services are provided by Raenest's technology partners, authorized by Visa and Mastercard to issue cards operating over their networks.</h2>

                    <h2 className="pt-5">The Raenest USD Visa Card is a standalone payment card, powered by the Visa Inc.. Raenest provides the platform interface through which users can access and manage the card. The card itself is a separate
                        product from the broader Raenest platform. Services such as global accounts, stablecoins, currency conversion, money transfers, and investments are independent offerings available within the Raenest platform.</h2>

                    <h2 className="pt-5">Raenest is not a broker-dealer, investment adviser or member of FINRA. Securities offered by Alpaca Securities LLC ("Alpaca Securities"). Alpaca Securities is a member of FINRA and the Securities Investor Protection
                        Corporation. Raenest does not recommend any specific securities or investment strategies. Investing involves risk & investments may lose value, including the loss of principal. Past performance does not guarantee future results.
                        Investors should consider their investment objectives and risks carefully before investing. U.S. stock investments are held with Alpaca Securities LLC, a U.S.-licensed broker-dealer regulated by the SEC and FINRA. Your assets are
                        custodied under strict regulatory and security standards, and you retain full visibility into your holdings and performance at all times. Investment feature is offered in partnership with City Investment Capital Limited, a firm licensed
                        by the Securities and Exchange Commission of Nigeria.</h2>

                    <h2 className="pt-5">Raenest Inc. Canada is registered with FINTRAC as a Money Services Business (Registration No. 1443707-1). Registered Office: 212 King Street West, 6th Floor, Toronto, ON M5H 1K5.</h2>

                    <h2 className="pt-5 pb-15">Raenest Inc. is licensed by the Central Bank of Nigeria as an International Money Transfer Operator. Banking services in the UK are provided by Clear Junction Ltd, authorised and regulated by the
                        Financial Conduct Authority (FCA) as an Electronic Money Institution. U.S. securities brokerage services are provided by Alpaca Securities LLC (“Alpaca Securities”), a member of FINRA and SIPC,
                        and a wholly-owned subsidiary of AlpacaDB, Inc.</h2>
                </div>
            </div>
        </div>
    );
}