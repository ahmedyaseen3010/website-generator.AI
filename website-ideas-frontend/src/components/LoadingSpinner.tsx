import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <p>Loading...</p>
      <style jsx>{`
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;