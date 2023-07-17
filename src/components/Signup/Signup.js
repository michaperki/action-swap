import React, { useState } from 'react';
import { signUpWithEmailAndPassword } from '../../firebase/auth';
import { NavLink } from 'react-router-dom';

const Signup = ({ handleUserLogin, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSignup = async (e) => {
    e.preventDefault();

    // Simple email format validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }

    try {
      const user = await signUpWithEmailAndPassword(email, password);
      handleUserLogin(user); // Pass the user information to handleUserLogin
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <section>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Swapster</h2>

          <form onSubmit={onSignup}>
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-gray-700 font-medium">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full border rounded-md px-3 py-2 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="w-full border rounded-md px-3 py-2 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </form>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <p className="text-sm text-gray-700 text-center">
            Already have an account?{' '}
            <NavLink to="/login" className="text-blue-600">
              Login
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
