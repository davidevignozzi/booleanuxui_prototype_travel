import Image from 'next/image';
import mockedPicture from '@/public/assets/images/mocked_picture.png';

import { LuMapPin, LuCalendar, LuUser2 } from 'react-icons/lu';

interface ICardTravel {
  title: string;
  pin: string;
  dates: string;
  accounts: number;
}

const CardTravel = ({ title, pin, dates, accounts }: ICardTravel) => {
  return (
    <div className='flex w-full items-center gap-4'>
      <div id='card-travel--image'>
        <Image
          src={mockedPicture}
          alt='mocked picture'
          width={98}
          height={98}
        />
      </div>

      <div id='card-travel--desc'>
        <h3 className='tracking-[0.5px]'>{title}</h3>

        <div id='details' className='mt-2 text-[#6a6a6a]'>
          <div className='flex items-center gap-1'>
            <LuMapPin className='size-[17px]' />
            <span className='text-sm'>{pin}</span>
          </div>

          <div className='flex items-center gap-1'>
            <LuCalendar className='size-[17px]' />
            <span className='text-sm'>{dates}</span>
          </div>

          <div className='flex items-center gap-1'>
            <LuUser2 className='size-[17px]' />
            <span className='text-sm'>{accounts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardTravel;
