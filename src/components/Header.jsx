"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 mb-4 md:mb-6 px-4 md:px-6">
      <div className="py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold uppercase align-baseline">
            Booky<span className="text-sky-600">Flights</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
