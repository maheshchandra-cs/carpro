import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
      {/*  <Services /> */}
      {/*  <Review /> */}
      {/* I used team.js file to add images of services*/}
      <Team/>
      </main>
      <footer style={{ backgroundColor: '#e4ebef' }} className=" py-5">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
