import Navbar from './components/shared/navbar';
import Tabbar from './components/shared/tabbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='min-h-screen'>
        <h1>Eccoci</h1>
      </main>

      <Tabbar />
    </>
  );
}
