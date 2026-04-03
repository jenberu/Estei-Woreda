import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Kebeles } from './pages/Kebeles';
import { PublicInfo } from './pages/PublicInfo';
import { Tourism } from './pages/Tourism';
import { Community } from './pages/Community';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/kebeles" element={<Kebeles />} />
              <Route path="/admin" element={<PublicInfo />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/news" element={<Community />} />
              <Route path="/contact" element={<Community />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;