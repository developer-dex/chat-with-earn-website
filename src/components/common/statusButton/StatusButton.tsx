import React from 'react';

type StatusType = 'Online' | 'Offline' | 'busy' | 'away';

interface StatusButtonProps {
  status: StatusType;
  onClick?: () => void;
}

const StatusButton: React.FC<StatusButtonProps> = ({ status, onClick }) => {
  const statusStyles: Record<StatusType, string> = {
    Online: 'bg-green',
    Offline: 'bg-red',
    busy: 'bg-red-500',
    away: 'bg-yellow-500',
  };

  const statusText: Record<StatusType, string> = {
    Online: 'Online',
    Offline: 'Offline',
    busy: 'Busy',
    away: 'Away',
  };

  return (
    <div
      className={`${statusStyles[status]} text-base font-normal py-2.5 px-6 text-center text-white rounded-full cursor-pointer`}
      onClick={onClick}
    >
      {statusText[status]}
    </div>
  );
};

export default StatusButton;
