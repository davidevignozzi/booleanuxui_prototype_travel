import CardTravel from '@/components/shared/cardTravel';
import Navbar from '@/components/shared/navbar';
import Tabbar from '@/components/shared/tabbar';

import { LuPlane, LuMapPin } from 'react-icons/lu';

const myTravels = [
  {
    title: 'Milano con il furgone',
    pin: 'Milano',
    dates: '27 gen 2024 - 28 gen 2024',
    accounts: 1
  },
  {
    title: 'Londra con lei <3',
    pin: 'London',
    dates: '02 ago 2023 - 07 ago 2023',
    accounts: 2
  },
  {
    title: 'Route 65 con la moto',
    pin: 'Clyton -> Alber Lea',
    dates: '07 gen 2023 - 01 lug 2023',
    accounts: 1
  }
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='mx-4 flex min-h-screen flex-col gap-4'>
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

        <div id='section--content' className='flex flex-col gap-6'>
          {myTravels.map((travel, i) => (
            <CardTravel
              key={i}
              title={travel.title}
              pin={travel.pin}
              dates={travel.dates}
              accounts={travel.accounts}
            />
          ))}
        </div>
      </main>

      <Tabbar />
    </>
  );
}
