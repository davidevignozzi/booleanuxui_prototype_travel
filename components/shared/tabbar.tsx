'use client';

import { LuHome, LuCompass, LuCalendar, LuMapPin } from 'react-icons/lu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Tabbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className='fixed bottom-0 flex h-[80px] w-full border-t border-black bg-white'>
        {/* Home */}
        <Link
          href='/'
          className={`mt-3 flex size-full flex-col items-center gap-1 ${
            pathname === '/' ? 'text-[#007AFF]' : ''
          }`}
        >
          <LuHome
            className={`size-5 ${
              pathname === '/' ? 'text-[#007AFF]' : ''
            }`}
          />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Home
          </span>
        </Link>

        {/* Esplora */}
        <Link
          href='/'
          className={`mt-3 flex size-full flex-col items-center gap-1 ${
            pathname === '/explore' ? 'text-[#007AFF]' : ''
          }`}
        >
          <LuCompass
            className={`size-5 ${
              pathname === '/explore' ? 'text-[#007AFF]' : ''
            }`}
          />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Esplora
          </span>
        </Link>

        {/* Pianificati */}
        <Link
          href='/planification'
          className={`mt-3 flex size-full flex-col items-center gap-1 ${
            pathname === '/plan' || pathname === '/planification'
              ? 'text-[#007AFF]'
              : ''
          }`}
        >
          <LuCalendar
            className={`size-5 ${
              pathname === '/plan' || pathname === '/planification'
                ? 'text-[#007AFF]'
                : ''
            }`}
          />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Pianificati
          </span>
        </Link>

        {/* Viaggi */}
        <Link
          href='/'
          className={`mt-3 flex size-full flex-col items-center gap-1 ${
            pathname === '/trips' ? 'text-[#007AFF]' : ''
          }`}
        >
          <LuMapPin
            className={`size-5 ${
              pathname === '/trips' ? 'text-[#007AFF]' : ''
            }`}
          />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Viaggi
          </span>
        </Link>
      </nav>

      {/* margin added for the position fixed */}
      <div className='mb-24'></div>
    </>
  );
};

export default Tabbar;
