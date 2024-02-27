import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>

      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm className="form" setUser={setUser} />
        }
        <h2 className='flex-ctr-ctr'>OR

        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up!'}</button>
        </h2>
    </main>
  );
}