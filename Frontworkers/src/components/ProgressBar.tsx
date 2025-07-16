import React from 'react';

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => (
  <div className="mb-2">
    {label && <div className="mb-1 text-sm font-medium text-blue-700">{label}</div>}
    <div className="w-full bg-blue-100 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
    <div className="text-xs text-right text-blue-700 mt-1">{value}%</div>
  </div>
);

export default ProgressBar;
