'use client';

import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/datePickerRange';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const page = () => {
  return (
    <main className='mx-4 flex flex-col gap-6'>
      {/* title */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='travel title'>Titolo del viaggio</Label>
        <Input type='text' placeholder='Road trip' />
      </div>

      {/* destinations */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='destinations'>Destinazione</Label>
        <Input type='text' placeholder='Cerca' />
      </div>

      {/* dates */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='dates'>Date del viaggio</Label>
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
    </main>
  );
};
export default page;
