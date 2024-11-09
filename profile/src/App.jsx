import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import Buypets from './components/Buypets.jsx';
import Sellpets from './components/Sellpets.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import HomePage from './components/HomePage.jsx';
import Dogs from './components/Dogs.jsx';
import Cats from './components/Cats.jsx';
import Others from './components/Others.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AdoptionForm from './components/AdoptionForm'; // Correct import of the form

function App() {
  return (
    <Router>
      <Menu />
      <div className="mt-2 p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy-pets" element={<Buypets />} />
          <Route path="/sell-pets" element={<Sellpets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/others" element={<Others />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adopt/:id" element={<AdoptionForm />} /> {/* New route for AdoptionForm */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
