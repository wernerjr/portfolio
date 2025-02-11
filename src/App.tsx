import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './styles/globals.css';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <Home />
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}
