"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-start bg-[#cc0000] px-[15px]">
      <Image src="https://i.imgur.com/oKSR0Qi.png" width={5000} height={5000} className="w-[120px]" alt="logo" />
    </div>
  );
}
