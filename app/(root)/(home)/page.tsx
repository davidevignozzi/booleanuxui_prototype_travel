import Navbar from '@/components/shared/navbar';
import Tabbar from '@/components/shared/tabbar';

import { LuPlane, LuMapPin } from 'react-icons/lu';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='mx-4 min-h-screen'>
        {/* section "i miei viaggi" */}
        <h1 className='section-title'>I miei viaggi</h1>
        <div className='flex w-full justify-end gap-2'>
          <div className='flex items-center'>
            <LuPlane className='size-6' />
            <span className='text-xl'>5</span>
          </div>

          <div className='flex items-center'>
            <LuMapPin className='size-6' />
            <span className='text-xl'>3</span>
          </div>
        </div>
      </main>

      <Tabbar />
    </>
  );
}
