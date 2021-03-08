import React from 'react'
import Toggle from '../shared/Togle/Togle'
import Link from '../shared/Link/Link';

function Header() {
    return <nav className="Footer">
    <ul>
      <Link to="/">Posts</Link>
      <Link to="/create-posts">New Post</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </ul>
  </nav>;
  <Toggle />
};

        

export default Header;