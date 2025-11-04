// components/Loader.jsx
"use client";

import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loader-text">Loading</p>
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #f8f7f6 0%, #e8e7e6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeOut 0.6s ease-in forwards;
          animation-delay: 3s;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            visibility: visible;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .spinner {
          position: relative;
          width: 80px;
          height: 80px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-radius: 50%;
          border-top-color: #3b82f6;
          border-right-color: #1e40af;
          animation: spin 1.5s linear infinite;
        }

        .spinner-ring:nth-child(1) {
          animation-delay: 0s;
        }

        .spinner-ring:nth-child(2) {
          width: 65px;
          height: 65px;
          top: 7.5px;
          left: 7.5px;
          border-top-color: #60a5fa;
          border-right-color: #3b82f6;
          animation-delay: -0.5s;
        }

        .spinner-ring:nth-child(3) {
          width: 50px;
          height: 50px;
          top: 15px;
          left: 15px;
          border-top-color: #93c5fd;
          border-right-color: #60a5fa;
          animation-delay: -1s;
        }

        .spinner-ring:nth-child(4) {
          width: 35px;
          height: 35px;
          top: 22.5px;
          left: 22.5px;
          border-top-color: #bfdbfe;
          border-right-color: #93c5fd;
          animation-delay: -1.5s;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loader-text {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .loader-dots {
          display: flex;
          gap: 6px;
        }

        .loader-dots span {
          width: 8px;
          height: 8px;
          background-color: #3b82f6;
          border-radius: 50%;
          animation: bounce 1.4s infinite;
        }

        .loader-dots span:nth-child(1) {
          animation-delay: 0s;
        }

        .loader-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loader-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          30% {
            transform: translateY(-10px);
            opacity: 0.7;
          }
        }

        @media (max-width: 640px) {
          .spinner {
            width: 60px;
            height: 60px;
          }

          .spinner-ring:nth-child(2) {
            width: 50px;
            height: 50px;
            top: 5px;
            left: 5px;
          }

          .spinner-ring:nth-child(3) {
            width: 40px;
            height: 40px;
            top: 10px;
            left: 10px;
          }

          .spinner-ring:nth-child(4) {
            width: 30px;
            height: 30px;
            top: 15px;
            left: 15px;
          }

          .loader-text {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
