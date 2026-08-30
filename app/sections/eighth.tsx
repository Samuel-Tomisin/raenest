"use client"

export default function Eightsection() {
    return(
        <div className="px-5 md:px-12 bg-white py-15">
            <div className="text-center font-semibold text-2xl sm:text-3xl md:text-[36px] text-black">
                <h2>Raenest in the News!</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 md:gap-15 pb-10 md:pb-15 pt-8 md:pt-10">
                <img src="/techpoint.png" alt="Techpoint logo" className="w-[80px] sm:w-[95px] md:w-[109px] h-auto"/>
                <img src="/techcabal.png" alt="Techcabal logo" className="w-[110px] sm:w-[130px] md:w-[152px] h-auto" />
                <img src="/techcrunch.jpg" alt="Techcrunch logo" className="w-[90px] sm:w-[105px] md:w-[124px] h-auto"/>
                <img src="/condia.png" alt="Condia logo" className="w-[110px] sm:w-[130px] md:w-[153px] h-auto"/>
                <img src="/finextra.png" alt="Finextra logo" className="w-[110px] sm:w-[130px] md:w-[154px] h-auto"/>
            </div>
        </div>
    );
}