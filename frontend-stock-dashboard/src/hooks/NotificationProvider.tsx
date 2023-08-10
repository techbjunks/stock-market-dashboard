import { createContext, useState } from "react";

interface NotificationProps {
  children: React.ReactNode;
}

interface Notification {
  id?: string,
  message: string,
  testId?: string,
}

export const NotificationContext = createContext({});

const NotificationProvider = ({ children }: NotificationProps): JSX.Element => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const openNotification = (message:string, testId: string) => {
    const addNotification = {
      id: Math.random().toString(27).substring(8),
      message,
      testId: testId ?? ''
    };
    setNotifications((prevNotifications) => [...prevNotifications, addNotification]);
  };

  const removeNotification = (id:string) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  }

  return (
    <NotificationContext.Provider value={{notifications, openNotification, removeNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
