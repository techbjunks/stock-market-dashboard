import { useContext, useEffect, useRef, useState } from "react";
import { NotificationContext } from "../../../hooks/NotificationProvider";

interface Notification {
  id?: string;
  message: string;
  testId?: string;
}

const Notification = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const timer = useRef(null);
  const isVisible = isNotificationVisible && notifications.length;

  useEffect(() => {
    if (notifications.length) {
      setNotificationVisible(true);
      timer.current = setTimeout(() => {
        setNotificationVisible(false);
      }, 5000);
    }
    return () => {
      setNotificationVisible(false);
      timer.current = null;
    };
  }, [notifications]);

  return (
    isVisible &&
    notifications.map((notification: Notification) => {
      return (
        <div key={notification.id} data-testid={notification.testId}>
          <div>{notification.message}</div>
          <button onClick={() => removeNotification(notification.id)}>
            Remove Notification
          </button>
        </div>
      );
    })
  );
};

export default Notification;
