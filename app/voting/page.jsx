"use client"
// page.js
import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../_components/navbar';
import { useState, useEffect } from 'react';
import Vote from './voting';
import LoadingScreen from "../_components/loadingscreen";
import Footer from '../_components/footer';

export default function Voting() {
  const belumRilis = true;
  if(belumRilis) {
      notFound();
  }

  return (
    <div>
      <Vote />
      <Footer />
    </div>
  );
}