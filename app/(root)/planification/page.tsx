import Link from 'next/link';

const page = () => {
  return (
    <main className='mx-4 flex flex-col justify-center gap-4'>
      <p className='text-2xl tracking-[0.5px]'>
        Non ci sono viaggi <br /> in programma
      </p>
      <Link
        href='plan'
        className='texthover:text-accent-foreground inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-black bg-background py-4 text-xl font-normal tracking-[0.5px] ring-offset-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
      >
        Pianifica un viaggio
      </Link>
    </main>
  );
};
export default page;
