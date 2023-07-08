import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
