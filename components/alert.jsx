'use client';

import { HiExclamationTriangle } from 'react-icons/hi2';

const Alert = ({ icon = <HiExclamationTriangle />, text = 'Uyarı!' }) => {
  return (
    <div className="h-12 my-4 bg-yellow-100 rounded-md flex items-center space-x-2 px-4 py-2">
      {icon}

      <span>{text}</span>
    </div>
  );
};

export default Alert;
