import React from 'react';
import Footer from './footer';
import Contacts from './contacts';
import Author from './author';
import Picks from './picks';
import Explore from './Explore';
import Bestseller from './Bestseller';
import Farousel from './fcarousel';

function Home() {
  return (
    <div className="min-h-screen flex flex-col m-0 p-0">
      <main className="flex-grow py-7">
      </main>
      <Farousel/>
      <Bestseller/>
      <Explore/>
      <Picks/>
      <Author/>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default Home;
