// src/components/Signup/Signup.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from './Signup';

test('renders signup form', () => {
  render(<Signup />);
  const emailInput = screen.getByPlaceholderText(/Email address/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const signupButton = screen.getByRole('button', { name: /Signup/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});
