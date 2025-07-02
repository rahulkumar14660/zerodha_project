import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/verify", {
        withCredentials: true,
      });
      setIsAuthenticated(res.data.status === "success");
    } catch {
      setIsAuthenticated(false);
    } finally {
      setAuthLoading(false); 
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkAuth, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
