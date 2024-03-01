import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import KnifeLibraryPage from '../KnifeLibrary/KnifeLibraryPage'
import KnifeDetailPage from '../KnifeDetailPage/KnifeDetailPage';
import ResourcesPage from '../ResourcesPage/ResourcesPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}              
              <Route path="/" element={<HomePage />} />
              <Route path="/library" element={<KnifeLibraryPage />} />
              <Route path="/library/:idx" element={<KnifeDetailPage />} />
              <Route path='/resources' element={<ResourcesPage/>} />
            </Routes>
          </>
      ):(
          <>
            <NavBar user={user} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/resources' element={<ResourcesPage/>} />
                <Route path="/login" element={<AuthPage setUser={setUser} />} />
            </Routes>
          </>
      )}
    </main>
  );
}
