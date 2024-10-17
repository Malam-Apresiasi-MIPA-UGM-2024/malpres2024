// page.js
import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../_components/navbar';
import Vote from './voting';
import Footer from '../_components/footer';

export default function Voting() {
  const belumRilis = true;
    if(belumRilis) {
        notFound();
    }
    
  return (
    <div>
      <Vote/>
      <Footer/>
    </div>
  );
}