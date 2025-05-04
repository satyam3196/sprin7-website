'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, pass: string) => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, pass: string): boolean => {
    // Simple frontend check (not secure)
    const validEmails = ['visitor@sprin7.com', 'y.paramitasari@sprin7.com', 's.sharma@sprin7.com'];
    const correctPass = 'Sprin7!';

    if (validEmails.includes(email) && pass === correctPass) {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 