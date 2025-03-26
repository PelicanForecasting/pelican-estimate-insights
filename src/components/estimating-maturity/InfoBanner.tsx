
import React from 'react';
import { AlertCircle } from "lucide-react";

interface InfoBannerProps {
  title: string;
  description: string;
}

const InfoBanner: React.FC<InfoBannerProps> = ({ title, description }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-blue-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">{title}</h3>
          <div className="mt-2 text-sm text-blue-700">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
