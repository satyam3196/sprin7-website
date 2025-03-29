'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (!success) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoWrapper}>
        <Link href="/login" className="flex items-center relative">
          <h1 className="text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Sprin7
          </h1>
        </Link>
      </div>
      <div className="group relative" style={styles.loginBoxWrapper}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
        <div style={styles.loginBox}>
          <h2 className="text-3xl font-semibold mb-2 text-purple-200">Access Required</h2>
          <p className="text-xl font-semibold mb-2 text-purple-200">Please enter the credentials to view the site.</p>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the email"
              required
              className="text-xl font-semibold text-purple-200 w-full px-4 py-3 bg-gray-900 rounded-lg border border-purple-400/20 focus:outline-none focus:border-purple-400/40"
              style={styles.input}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter the password"
                required
                className="text-xl font-semibold text-purple-200 w-full px-4 py-3 bg-gray-900 rounded-lg border border-purple-400/20 focus:outline-none focus:border-purple-400/40"
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-purple-100 focus:outline-none"
              >
                {showPassword ? (
                  // Eye off icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #2D1B69 0%, #512B81 100%)',
    position: 'relative' as const,
  },
  logoWrapper: {
    padding: '10px 30px 15px 30px',
    width: '100%',
  },
  loginBoxWrapper: {
    width: '90%',
    maxWidth: '400px',
    margin: 'auto',
    position: 'relative' as const,
  },
  loginBox: {
    padding: '40px',
    backgroundColor: '#111827',
    borderRadius: '12px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    zIndex: 1,
    transition: 'transform 0.3s ease',
    transform: 'scale(1)',
    ':hover': {
      transform: 'scale(1.02)',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
    marginTop: '20px',
  },
  input: {
    backgroundColor: 'rgba(17, 24, 39, 0.8)',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  button: { 
    padding: '14px',
    backgroundColor: '#9370DB',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    ':hover': {
      backgroundColor: '#8A2BE2',
    },
  },
  error: {
    color: '#FF6B6B',
    marginBottom: '15px',
    fontSize: '14px',
  },
}; 