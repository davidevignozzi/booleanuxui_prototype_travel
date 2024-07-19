import { LuHome, LuCompass, LuCalendar, LuMapPin } from 'react-icons/lu';

const Tabbar = () => {
  return (
    <nav className='fixed bottom-0 flex h-[80px] w-full border-t border-black'>
      {/* home */}
      <div className='mt-3 flex size-full flex-col items-center gap-1'>
        <LuHome className='size-5' />
        <span className='text-xs font-medium tracking-[0.5px]'>Home</span>
      </div>

      {/* explore */}
      <div className='mt-3 flex size-full flex-col items-center gap-1'>
        <LuCompass className='size-5' />
        <span className='text-xs font-medium tracking-[0.5px]'>
          Esplora
        </span>
      </div>

      {/* plan */}
      <div className='mt-3 flex size-full flex-col items-center gap-1'>
        <LuCalendar className='size-5' />
        <span className='text-xs font-medium tracking-[0.5px]'>
          Pianifica
        </span>
      </div>

      {/* travels */}
      <div className='mt-3 flex size-full flex-col items-center gap-1'>
        <LuMapPin className='size-5' />
        <span className='text-xs font-medium tracking-[0.5px]'>
          Viaggi
        </span>
      </div>
    </nav>
  );
};
export default Tabbar;
