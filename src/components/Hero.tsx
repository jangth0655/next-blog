import Image from 'next/image';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='mx-auto rounded-full'
        src={profileImage}
        alt='profile'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>Hi, I'm FE</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>꿈을 코딩하는 사람</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
