import { LuHome, LuCompass, LuCalendar, LuMapPin } from 'react-icons/lu';

const Tabbar = () => {
  return (
    <>
      <nav className='fixed bottom-0 flex h-[80px] w-full border-t border-black bg-white'>
        {/* Home */}
        <div className='mt-3 flex size-full flex-col items-center gap-1'>
          <LuHome className='size-5' />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Home
          </span>
        </div>

        {/* Esplora */}
        <div className='mt-3 flex size-full flex-col items-center gap-1'>
          <LuCompass className='size-5' />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Esplora
          </span>
        </div>

        {/* Pianificati */}
        <div className='mt-3 flex size-full flex-col items-center gap-1'>
          <LuCalendar className='size-5' />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Pianificati
          </span>
        </div>

        {/* Viaggi */}
        <div className='mt-3 flex size-full flex-col items-center gap-1'>
          <LuMapPin className='size-5' />
          <span className='text-xs font-medium tracking-[0.5px]'>
            Viaggi
          </span>
        </div>
      </nav>

      {/* margin added for the position fixed */}
      <div className='mb-24'></div>
    </>
  );
};
export default Tabbar;
