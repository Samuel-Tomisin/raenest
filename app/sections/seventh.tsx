"use client"

export default function Seventhsection() {
    return (
        <div className="bg-white px-5 md:px-12 pt-16 md:pt-25 pb-10 md:pb-15">
            <div className="mx-auto max-w-7xl">            
        <div className="text-gray-800 text-center h-full">
                    <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold pb-10">The latest from Securevest: Tips, News and Updates</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center pb-10 pt-8 md:pt-0">
                <div className="bg-white border border-gray-200 rounded-2xl w-full max-w-100.25 h-auto md:h-83.75">
                    <img src="/ladywithring.jpg" alt="Lady with Nose Ring" className="p-3 rounded-3xl w-full h-[220px] sm:h-[250px] md:h-[280px] object-cover"/>
                    <h2 className="text-gray-800 text-[14px] font-semibold px-5 pb-4">Securevest Diaries: How Visibility Took Ore Badmus from Teaching to Global Talent Visa</h2>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl w-full max-w-100.25 h-auto md:h-83.75">
                    <img src="/twoladies.jpg" alt="Two ladies discussing" className="p-3 rounded-3xl w-full h-55 sm:h-62.5 md:h-70 object-cover"/>
                    <h2 className="text-gray-800 text-[14px] font-semibold px-5 pb-4">10 Practical Ways To Increase Your Business's Visibility In AI Search</h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl w-full max-w-100.25 h-auto md:h-83.75">
                    <img src="/ghanafiverr.jpg" alt="Ghana with fiverr" className="p-3 rounded-3xl w-full h-55 sm:h-62.5 md:h-70 object-cover"/>
                    <h2 className="text-gray-800 text-[14px] font-semibold px-5 pb-4">Securevest Diaries: How Visibility Took Ore Badmus from Teaching to Global Talent Visa</h2>
                </div>
            </div>
            <div className="text-gray-400">
            <hr/>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-5 md:gap-0 pt-7 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold text-gray-900">Get the latest update straight into your mail</h2>
                <div className="gap-3 flex flex-col sm:flex-row w-full md:w-auto">
                <div className="w-full sm:w-auto">
                    <input type="text" placeholder="Enter your email address" className="border text-gray-400 px-3 w-full sm:w-75 md:w-114 py-3 rounded-2xl text-[13px] border-gray-300"/>
                </div>
                <div>
                    <button className="border-0 px-4 py-3 bg-primary font-semibold text-white w-full sm:w-36.25 rounded-2xl text-[14px] cursor-pointer">Join newsletter</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}