import { LuBell, LuUser2 } from 'react-icons/lu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      {/* margin added for the position fixed */}
      <div className='mt-24'></div>

      {/* navbar */}
      <nav className='fixed top-0 z-50 flex w-full bg-white'>
        <div id='logo' className='m-4 flex h-full items-center bg-black'>
          <Link href='/'>
            <h1 className='p-2 text-4xl text-white'>LOGO</h1>
          </Link>
        </div>

        {/* icons */}
        <div className='m-4 flex w-full items-center justify-end gap-2'>
          <LuBell className='size-6' />
          <LuUser2 className='size-6' />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
