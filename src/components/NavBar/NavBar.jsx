import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    {user ? (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/library">Knife Library</Link>
        <Link to="resources">Resources</Link>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
      ) : (
      <nav>
        <Link to="/">Home</Link>
        <Link to="resources">Resources</Link>
        <Link to="/login">Log In/Sign Up</Link>
      </nav>
        )
      }
      </>
  );
}