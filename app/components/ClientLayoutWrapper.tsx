'use client';

import React from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Login from './Login';
import Navbar from './Navbar';
import Footer from './Footer';

// This internal component handles the conditional rendering based on auth state
function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Only show the login form if not authenticated
    return <Login />;
  }

  // Render Navbar, main content, and Footer if authenticated
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main> {/* Apply padding here if needed */}
      <Footer />
    </>
  );
}

// This is the main wrapper component
export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedContent>{children}</ProtectedContent>
    </AuthProvider>
  );
} 