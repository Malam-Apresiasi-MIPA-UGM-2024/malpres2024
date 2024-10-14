// page.js
import React from 'react';
import Navbar from '../_components/navbar';
import Vote from './voting';
import Footer from '../_components/footer';

export default function Voting() {
  return (
    <div>
      <Vote/>
      <Footer/>
    </div>
  );
}