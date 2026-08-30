"use client"

export default function Sixthbsection() {
    return (
    <div className="bg-gray-100 px-5 md:px-12 pt-10 md:pt-15 pb-16 md:pb-30">
        <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-black text-center h-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[70px] text-primary font-semibold">Freelancers</h1>
            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-2">use Raenest to receive and manage</h2>
            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold">their money — save, spend, and invest.</h2>
            <h2 className="text-sm sm:text-base md:text-[18px] mt-4">At Upwork, Andela, Fiver, Toptal, Contra, YouTube, Freelancer,</h2>
            <h2 className="text-sm sm:text-base md:text-[18px]">Peopleperhour, Deel and anywhere you need to get paid.</h2>
        </div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[47px] text-black font-semibold text-center py-10 md:py-15">
            <h2>Get Paid Globally in 3 Easy Steps</h2>
        </div>

        <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5">
                <div className="w-full max-w-[402px] h-auto md:h-[500px] bg-primary px-6 sm:px-8 pt-8 flex flex-col items-center justify-center gap-3 rounded-3xl">
                <img src="/number1.png" alt="Number 1" className="w-[300px] h-auto"/>
                <div className="w-full h-auto md:h-[300px] bg-[#28179F] py-3 px-5 rounded-b-3xl">
                <h2 className="text-lg sm:text-[20px] text-white font-semibold">Quick Sign up</h2>
                <h2 className="text-sm sm:text-[16px] pt-3 text-white">Create your account in minutes—input legal name, strong password, and confirm verification code.</h2>
                </div>
                </div>
                <div className="w-full max-w-[402px] h-auto md:h-[500px] bg-primary px-6 sm:px-8 pt-8 flex flex-col items-center justify-center gap-3 rounded-3xl">
                <img src="/number3.png" alt="Number 2" className="w-auto h-auto"/>
                <div className="w-full h-auto md:h-[300px] bg-[#28179F] py-3 px-5 rounded-b-3xl">
                <h2 className="text-lg sm:text-[20px] text-white font-semibold">Verify Your Identity</h2>
                <h2 className="text-sm sm:text-[16px] pt-3 text-white">A quick and secure verification process. This is important to help you keep your account safe.</h2>
                </div>
                </div>
                <div className="w-full max-w-[402px] h-auto md:h-[500px] bg-primary px-6 sm:px-8 pt-8 flex flex-col items-center justify-center gap-3 rounded-3xl">
                <img src="/number2.webp" alt="Number 3" className="w-auto h-auto" />
                <div className="w-full h-auto md:h-[300px] bg-[#28179F] py-3 px-5 rounded-b-3xl">
                <h2 className="text-lg sm:text-[20px] text-white font-semibold">Get Your Accounts</h2>
                <h2 className="text-sm sm:text-[16px] text-white pt-3">Start receiving payments, saving in foreign currencies, and spending globally.</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}