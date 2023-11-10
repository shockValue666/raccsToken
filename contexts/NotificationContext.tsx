"use client";
import React, { createContext, useState, useContext } from 'react';

interface Notification {
  message: string;
  type: string;
}

interface NotificationContextType {
  notification: Notification | null;
  showNotification: (message: string, type?: string) => void;
  hideNotification: () => void;
}

interface NotificationProviderProps{
  children:React.ReactNode
}

const defaultContextValue: NotificationContextType = {
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
};


const NotificationContext = createContext<NotificationContextType>(defaultContextValue);

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: string = 'error') => {
    setNotification({ message, type });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
