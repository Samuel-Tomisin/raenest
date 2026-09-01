"use client";


export default function Download() {
  return (
    <div>
      <button className="bg-[#CAC5F3] text-black rounded-2xl text-center text-[14px] cursor-pointer font-semibold">
        <div className="flex items-center gap-2 py-1 px-4">
            <img src="/apple-you.svg" alt="" className="w-8 h-8 brightness-0 invert hover:brightness-100 cursor-pointer text-[14px]"/>
            <h2>Download App</h2>
        </div>
      </button>
    </div>
  );
}
