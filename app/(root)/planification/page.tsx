import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <main className='mx-4 flex flex-col justify-center gap-4'>
      <p className='text-2xl tracking-[0.5px]'>
        Non ci sono viaggi <br /> in programma
      </p>
      <Button
        variant='outline'
        className='w-full border-black p-6 text-xl font-normal tracking-[0.5px]'
      >
        Pianifica un viaggio
      </Button>
    </main>
  );
};
export default page;
