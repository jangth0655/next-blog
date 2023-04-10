import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPosts from '@/components/FeaturedPost';
import Hero from '@/components/Hero';
import MultiCarousel from '@/components/MultiCarousel';

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />

      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </section>
  );
}
