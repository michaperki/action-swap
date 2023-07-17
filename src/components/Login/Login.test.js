import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText(/Email address/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const loginButton = screen.getByRole('button', { name: /Login/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});