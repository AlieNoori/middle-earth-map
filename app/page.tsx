import localFont from 'next/font/local';
import Link from 'next/link';

const ringBearer = localFont({
  src: '../public/assets/fonts/RingbearerMedium.ttf',
});

export default function Home() {
  return (
    <section className='mt-[280px] flex flex-col items-center justify-center gap-8'>
      <h1
        className={`${ringBearer.className} text-center text-[3rem] font-normal drop-shadow-text md:text-[5rem] lg:text-[6rem]`}
      >
        Welcome to Middle-Earth
      </h1>
      <Link
        href='/main'
        className={`mx-auto bg-inherit p-4 text-2xl font-bold shadow-home-btn hover:opacity-90 hover:shadow-home-btn-hover lg:text-3xl`}
      >
        See Map
      </Link>
    </section>
  );
}
