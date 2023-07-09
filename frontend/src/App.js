import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import AthleteScreen from './screens/AthleteScreen';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/athlete" element={<AthleteScreen />} exact />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
