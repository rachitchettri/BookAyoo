// src/App.js
import React from 'react';
import Footer from './footer';
import Payment from './payment';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-16">
        <h1 className="text-center text-2xl mt-10">Welcome to Bookayoo</h1>
     
      </main>
      <Payment/>
      <Footer />
    </div>
  );
}

export default Home;
