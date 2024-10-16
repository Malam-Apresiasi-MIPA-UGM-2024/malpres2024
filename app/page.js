
import React from 'react';
import Navbar from './_components/navbar';
import Hero from './_components/hero';
import Desc from './_components/desc';
import BintangTamu from './_components/bintangtamu';
import Timeline from './_components/timeline';
import Tema from './_components/tema';
import ApresiasiNominasi from './_components/apresiasinominasi';
import KilasBalik from './_components/kilasbalik';
import Sponsor from './_components/sponsor';
import Footer from './_components/footer';
import Acaratamu from './_components/acaratamu';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Desc />
      <BintangTamu />
      <Acaratamu />
      <Timeline />
      <Tema />
      <ApresiasiNominasi />
      <KilasBalik />
      {/* <Sponsor /> */}
      <Footer />
    </div>
  );
}