import type { Metadata } from 'next';

import Nav from '../myglp/Nav';
import Hero from '../myglp/Hero';
import Features from '../myglp/Features';
import Download from '../myglp/Download';
import Support from '../myglp/Support';
import Footer from '../myglp/Footer';

export const metadata: Metadata = {
  title: "MyGLP Companion",
  description: "A simple and beautiful GLP journey tracking app to help you reach your goals.",
};

export default function MyGLPPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Download />
      <Support />
      <Footer />
    </main>
  );
}
