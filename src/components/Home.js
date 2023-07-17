import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Swapster</h1>
      <p>
        Swapster is a platform for poker players to swap action in poker
        tournaments.
      </p>
      <p>
        Please <Link to="/login">log in</Link> or{' '}
        <Link to="/signup">sign up</Link> to get started.
      </p>
    </div>
  );
};

export default Home;
