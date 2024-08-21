import React from 'react';
import Footer from './footer';
import Contacts from './contacts';
import Author from './author';
import Picks from './picks';

function Home() {
  return (
    <div className="min-h-screen flex flex-col m-0 p-0">
      <main className="flex-grow">
        <h1 className="text-center text-2xl mt-10">Welcome to Bookayoo</h1>
      </main>
      <Picks/>
      <Author/>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default Home;
