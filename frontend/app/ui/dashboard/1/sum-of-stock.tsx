"use client";

import React, { useState, useEffect, useRef } from 'react';
import { getApiBaseUrl } from '@/app/utils/config';
import { useTheme } from '@/app/ui/theme-context';

export default function SumOfStock() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Set up the API URL
  useEffect(() => {
    // const url = getApiBaseUrl();
    const url = "https://edrive-dashboard-api.nimbus.dlr.de";
    setApiUrl(url);
  }, []);

  // Handle cleanup when the component unmounts or modal closes
  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current = null;
      }
    };
  }, []);

  // Handle clicks outside the modal to close it
  useEffect(() => {
    if (!isExpanded) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    // Use a timeout to attach the event listener to avoid immediate trigger
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  return (
    <div className="w-full h-full relative">
      {/* Preview version */}
      <div 
        className={`w-full h-full ${isExpanded ? 'hidden' : 'block'}`}
        onClick={toggleExpand}
      >
        {/* Title overlay at the top */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-3">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Bestand an elektrifizierten Pkw weltweit</h3>
        </div>
        
        {/* Minimalist chart preview */}
        <div className="w-full h-full cursor-pointer group">
          <div className="absolute inset-0 pt-12 pb-8 px-4">
            {/* Clean, minimalist area chart */}
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                {/* Ultra subtle grid lines */}
                <g className="text-gray-50 dark:text-gray-700" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="150" x2="400" y2="150" />
                  <line x1="100" y1="0" x2="100" y2="200" strokeDasharray="4,4" />
                  <line x1="200" y1="0" x2="200" y2="200" strokeDasharray="4,4" />
                  <line x1="300" y1="0" x2="300" y2="200" strokeDasharray="4,4" />
                </g>
                
                {/* No numeric axis labels - keeping it minimalistic */}
                
                {/* Minimalistic time period indicators, no years */}
                <g className="text-xs text-gray-300 dark:text-gray-600" fill="currentColor">
                  <text x="0" y="195" textAnchor="start">•</text>
                  <text x="133" y="195" textAnchor="middle">•</text>
                  <text x="266" y="195" textAnchor="middle">•</text>
                  <text x="400" y="195" textAnchor="end">•</text>
                </g>
                
                {/* Line curves - cleaner with subtle gradients */}
                {/* Electrified line */}
                <path 
                  d="M0,160 L50,155 L100,145 L150,130 L200,105 L250,75 L300,40 L350,15 L400,5" 
                  fill="none" 
                  stroke={theme === 'dark' ? "rgba(129, 140, 248, 0.9)" : "rgba(99, 102, 241, 0.9)"} 
                  strokeWidth="2.5"
                  className="transition-all duration-300 group-hover:opacity-100"
                />
                <path 
                  d="M0,160 L50,155 L100,145 L150,130 L200,105 L250,75 L300,40 L350,15 L400,5 L400,200 L0,200 Z" 
                  fill="url(#electrifiedGradient)" 
                  className="transition-all duration-300 opacity-40 group-hover:opacity-50"
                />
                
                {/* Conventional line */}
                <path 
                  d="M0,165 L50,160 L100,155 L150,150 L200,140 L250,125 L300,105 L350,80 L400,60" 
                  fill="none" 
                  stroke={theme === 'dark' ? "rgba(244, 114, 182, 0.9)" : "rgba(236, 72, 153, 0.9)"}
                  strokeWidth="2.5"
                  className="transition-all duration-300 group-hover:opacity-100"
                />
                <path 
                  d="M0,165 L50,160 L100,155 L150,150 L200,140 L250,125 L300,105 L350,80 L400,60 L400,200 L0,200 Z" 
                  fill="url(#conventionalGradient)" 
                  className="transition-all duration-300 opacity-40 group-hover:opacity-50"
                />
                
                {/* Total line */}
                <path 
                  d="M0,163 L50,157 L100,153 L150,145 L200,135 L250,120 L300,100 L350,75 L400,50" 
                  fill="none" 
                  stroke={theme === 'dark' ? "rgba(251, 191, 36, 0.9)" : "rgba(245, 158, 11, 0.9)"}
                  strokeWidth="2.5"
                  className="transition-all duration-300 group-hover:opacity-100"
                />
                
                {/* Definitions for gradients */}
                <defs>
                  <linearGradient id="electrifiedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={theme === 'dark' ? "rgba(129, 140, 248, 0.5)" : "rgba(99, 102, 241, 0.5)"} />
                    <stop offset="100%" stopColor={theme === 'dark' ? "rgba(129, 140, 248, 0.05)" : "rgba(99, 102, 241, 0.05)"} />
                  </linearGradient>
                  <linearGradient id="conventionalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={theme === 'dark' ? "rgba(244, 114, 182, 0.5)" : "rgba(236, 72, 153, 0.5)"} />
                    <stop offset="100%" stopColor={theme === 'dark' ? "rgba(244, 114, 182, 0.05)" : "rgba(236, 72, 153, 0.05)"} />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Simplified legend - cleaner design */}
              <div className="absolute top-3 right-3 bg-white dark:bg-gray-700 rounded-md p-2 shadow-sm border border-gray-50 dark:border-gray-600">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-sm"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">USA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-2 bg-pink-500 dark:bg-pink-400 rounded-sm"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">China</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-2 bg-amber-500 dark:bg-amber-400 rounded-sm"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">Deutschland</span>
                  </div>
                </div>
              </div>

              {/* No y-axis label for minimalistic look */}
            </div>
          </div>
          
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-10 dark:bg-opacity-30">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg px-4 py-2 transform transition-transform duration-300 group-hover:scale-105">
              <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Vollständige Ansicht</span>
            </div>
          </div>
        </div>
        
        {/* Attribution - more subtle */}
        <div className="absolute bottom-0 right-0 p-2 text-xs text-gray-400 dark:text-gray-500">
          © DLR e.V. 2023
        </div>
      </div>

      {/* Expanded modal view */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 transition-opacity duration-300">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Bestand an elektrifizierten Pkw weltweit</h3>
              <button 
                onClick={toggleExpand}
                className="p-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal content */}
            <div className="flex-grow overflow-hidden p-4">
              <div className="w-full h-full min-h-[600px]">
                {/* Only create the iframe when modal is open and API URL is available */}
                {apiUrl ? (
                  <iframe
                    ref={iframeRef}
                    src={`${apiUrl}/api/chart/`}
                    width="100%"
                    height="100%"
                    style={{ border: "none", minHeight: "600px" }}
                    title="Sum of Stock Chart"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-gray-500 dark:text-gray-400">Loading chart...</div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Modal footer */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
              <div className="text-xs text-gray-400 dark:text-gray-500 text-right">
                © DLR e.V. 2023
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}