import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const images = [
  '/barber1.jpg',
  '/barber2.jpg',
  '/barber3.jpg',
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo rotativo */}
      <div className="absolute inset-0 -z-10 transition-all duration-1000">
        <Image
          src={images[bgIndex]}
          alt="Barbearia"
          fill
          className="object-cover brightness-50 transition-all duration-1000"
          priority
        />
      </div>
      {/* Card central */}
      <div className="bg-[#393939]/95 rounded-2xl flex flex-col items-center px-8 py-10 w-full max-w-md shadow-2xl">
        {/* Espaço para logo */}
        <div className="bg-[#FFC233] w-72 h-40 rounded-xl flex items-center justify-center mb-8">
          {/* Suba seu logo aqui futuramente */}
          <span className="text-2xl font-bold text-[#393939]">LOGO</span>
        </div>
        <span className="text-[#FFC233] text-lg font-semibold mb-2 tracking-widest">CLIQUE:</span>
        <Link href="/agendar" className="w-full flex justify-center mb-6">
          <button className="bg-[#FFC233] text-[#222] font-extrabold text-3xl rounded-2xl px-10 py-4 w-full max-w-xs shadow-lg hover:scale-105 transition-all border-4 border-[#FFC233]">
            AGENDAR
          </button>
        </Link>
        <div className="mt-4 mb-2 text-[#FFC233] text-base font-semibold">Redes sociais</div>
        <div className="flex gap-6 mb-6">
          <a href="#" aria-label="WhatsApp" className="text-[#FFC233] text-3xl hover:scale-110 transition-all">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.94 14.37l-1.05 3.85a1 1 0 0 0 1.22 1.22l3.85-1.05A10 10 0 1 0 12 2Zm5.93 15.07a8 8 0 0 1-11.31 0A8 8 0 1 1 17.93 17.07Zm-2.12-2.12a1 1 0 0 0-1.41 0l-.71.71a6 6 0 0 1-4.24-4.24l.71-.71a1 1 0 0 0 0-1.41l-1.42-1.42a1 1 0 0 0-1.41 0A8 8 0 0 0 12 20a8 8 0 0 0 5.66-2.34a1 1 0 0 0 0-1.41l-1.42-1.42Z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-[#FFC233] text-3xl hover:scale-110 transition-all">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10Zm-5 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm6.5 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"/></svg>
          </a>
        </div>
        <div className="text-[#FFC233] text-lg font-bold tracking-widest mt-2">DESDE 2025</div>
      </div>
    </div>
  );
} 