// page.js
import React from 'react';
import Image from 'next/image';
import Navbar from './_components/navbar';
import Hero from './_components/hero';
import Desc from './_components/desc';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Desc />
    </div>
  );
}