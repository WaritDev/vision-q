import React from 'react';

export interface Notification {
  id: number;
  title: string;
  description: string;
  priority: string;
  time: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export interface NotificationListProps {
  notifications: Notification[];
  onDelete: (id: number) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications, onDelete }) => {
  return (
    <div className="space-y-4 pb-16">
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`rounded-lg p-4 shadow-md border-l-4 ${notification.bgColor} ${notification.borderColor} relative`}
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className={`text-xl font-semibold ${notification.textColor}`}>
              {notification.title}
            </h2>
            <span className={`text-sm ${notification.textColor}`}>
              {notification.time}
            </span>
          </div>
          <p className={`${notification.textColor}`}>
            {notification.description}
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className={`text-sm font-medium ${notification.textColor}`}>
              {notification.priority === "emergency" && "ฉุกเฉิน"}
              {notification.priority === "high-risk" && "ความเสี่ยงสูง"}
              {notification.priority === "risk" && "มีความเสี่ยง"}
            </span>
            <div 
              onClick={() => onDelete(notification.id)}
              className={`text-sm font-medium ${notification.textColor} hover:opacity-75 cursor-pointer`}
            >
              ลบ
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;