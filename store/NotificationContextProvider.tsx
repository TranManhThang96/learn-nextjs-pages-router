import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notificationData: any) {},
  hideNotification: function () {},
});

export default function NotificationContextProvider(props: any) {
  const [activeNotification, setActiveNotification] = useState<any>();

  useEffect(() => {
    if (
      activeNotification &&
      ['success', 'error'].includes(activeNotification.status)
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        timer && clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: any) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification, // {title, message, status}
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
