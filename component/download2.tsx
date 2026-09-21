"use client"


export default function Download2() {
    return (
        <div>
            <a href="https://play.google.com/store/apps?" className="bg-gray-300 text-primary rounded-2xl text-center text-[14px] cursor-pointer font-semibold">
                <div className="flex items-center gap-2 py-1 px-4">
                    <img src="/apple-you.svg" alt="" className="w-8 h-8 brightness-0 invert hover:brightness-100 cursor-pointer text-[14px]" />
                    <h2>Download the App - it's free</h2>
                </div>
            </a>
        </div>
    )
}