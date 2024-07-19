const Navbar = () => {
  return (
    <>
      {/* margin added for the position fixed */}
      <div className='mt-24'></div>

      {/* navbar */}
      <nav className='fixed top-0 flex w-full bg-red-500'>
        <div id='logo' className='m-4 flex h-full items-center bg-black'>
          <h1 className='p-2 text-4xl text-white'>LOGO</h1>
        </div>

        {/* icons */}
        <div></div>
      </nav>
    </>
  );
};
export default Navbar;
