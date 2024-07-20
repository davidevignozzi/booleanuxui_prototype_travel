'use client';

import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/datePickerRange';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { LuPencil, LuX } from 'react-icons/lu';

import { useState } from 'react';

const Page = () => {
  /**
   ** travel title logic
   */
  const [titleTravelConfirmed, isTitleTravelConfirmed] = useState(false);
  const [travelTitle, setTravelTitle] = useState('');

  const confirmTitle = (e: any) => {
    if (e.key === 'Enter') {
      travelTitle === '' || isTitleTravelConfirmed(true);
    }
  };

  /**
   ** destination logic
   */
  const destinationArray: Array<string> = [];

  const [destinations, setDestinations] =
    useState<string[]>(destinationArray);
  const [destination, setDestination] = useState('');

  // push destination
  const confirmDestination = (e: any) => {
    if (e.key === 'Enter') {
      destination === '' ||
        setDestinations([...destinations, destination]);

      setDestination('');
    }
  };

  // remove destination
  const removeDestination = (index: number) => {
    setDestinations(destinations.filter((_, i) => index !== i));
  };

  return (
    <main className='mx-4 flex flex-col gap-6'>
      {/* title */}
      {titleTravelConfirmed ? (
        <div className='flex flex-col gap-2'>
          <div className='flex w-full items-center justify-between'>
            <Label htmlFor='travel title'>Titolo del viaggio</Label>
            <LuPencil
              className='size-5 cursor-pointer text-[#94A3B8]'
              onClick={() => isTitleTravelConfirmed(false)}
            />
          </div>
          <h2 className='text-xl font-medium'>{travelTitle}</h2>
        </div>
      ) : (
        <div className='flex flex-col gap-2'>
          <Label htmlFor='travel title'>Titolo del viaggio</Label>
          <Input
            type='text'
            placeholder='Road trip'
            value={travelTitle}
            onChange={(e) => {
              setTravelTitle(e.currentTarget.value);
            }}
            onKeyUp={(e) => confirmTitle(e)}
          />
        </div>
      )}

      {/* destinations */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='destinations'>
          Destinazione o percroso <span className='text-red-600'>*</span>
        </Label>
        {destinations.length === 0 || (
          <>
            {destinations.map((destinationItem, i) => (
              <div
                key={i}
                className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
              >
                <p>{destinationItem}</p>
                <LuX
                  className='size-5 text-[#94A3B8]'
                  onClick={() => removeDestination(i)}
                />
              </div>
            ))}
          </>
        )}
        <Input
          type='text'
          placeholder='Cerca'
          onChange={(e) => {
            setDestination(e.currentTarget.value);
          }}
          onKeyUp={(e) => confirmDestination(e)}
          value={destination}
        />
      </div>

      {/* dates */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='dates'>
          Date del viaggio <span className='text-red-600'>*</span>
        </Label>
        <DatePickerWithRange />
      </div>

      {/* travel friends */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='travel friends'>Compagni di viaggio</Label>
        <Input type='text' placeholder='@' />
      </div>

      {/* to do */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='to do'>Cose da fare</Label>
        <Button
          variant='ghost'
          className='flex justify-end text-sm font-medium text-[#94A3B8]'
        >
          + Aggiungi un task
        </Button>
      </div>

      {/* notes */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='notes'>Note sul viaggio</Label>
        <Button
          variant='ghost'
          className='flex justify-end text-sm font-medium text-[#94A3B8]'
        >
          + Aggiungi una nota
        </Button>
      </div>

      {/* photos */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='photos'>Foto</Label>
        <Input id='picture' type='file' />
      </div>

      {/* booking */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='booking'>Prenotazioni</Label>
        <Input id='booking' type='file' />
      </div>

      <Button variant='outline' className='border-black'>
        Conferma
      </Button>
    </main>
  );
};
export default Page;
