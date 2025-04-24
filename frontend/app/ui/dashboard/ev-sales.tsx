// app/ui/dashboard/ev-sales.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getApiBaseUrl } from '@/app/utils/config';

export default function EVsales() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Set up the API URL
  useEffect(() => {
    const url = getApiBaseUrl();
    setApiUrl(url);
    console.log("API URL for EV Sales:", url); // Debugging
  }, []);

  // Handle cleanup when the component unmounts or modal closes
  useEffect(() => {
    // Clean up function to ensure proper unmounting
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
        className={`w-full ${isExpanded ? 'hidden' : 'block'}`}
        onClick={toggleExpand}
      >
        <h3 className="text-sm font-medium mb-3 text-gray-700">EV Sales by Region Over Time</h3>
        
        {/* Mock chart preview - this is a static preview of your chart */}
        <div className="cursor-pointer relative h-[220px] bg-gray-50 rounded-lg overflow-hidden group shadow-sm">
          {/* Static preview image - EV Sales style chart */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50">
              {/* Mock area chart - stacked area chart for EV sales */}
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* X-axis */}
                <line x1="40" y1="180" x2="380" y2="180" stroke="#ccc" strokeWidth="1" />
                {/* Y-axis */}
                <line x1="40" y1="20" x2="40" y2="180" stroke="#ccc" strokeWidth="1" />
                
                {/* Y-axis labels */}
                <text x="25" y="180" fontSize="8" textAnchor="end" fill="#666">0</text>
                <text x="25" y="140" fontSize="8" textAnchor="end" fill="#666">4M</text>
                <text x="25" y="100" fontSize="8" textAnchor="end" fill="#666">8M</text>
                <text x="25" y="60" fontSize="8" textAnchor="end" fill="#666">12M</text>
                <text x="25" y="20" fontSize="8" textAnchor="end" fill="#666">16M</text>
                
                {/* X-axis labels */}
                <text x="40" y="195" fontSize="8" textAnchor="middle" fill="#666">2010</text>
                <text x="160" y="195" fontSize="8" textAnchor="middle" fill="#666">2015</text>
                <text x="280" y="195" fontSize="8" textAnchor="middle" fill="#666">2020</text>
                
                {/* Stacked area chart */}
                <path d="M40,180 L60,179 L80,178 L100,177 L120,176 L140,175 L160,173 L180,170 L200,166 L220,160 L240,152 L260,140 L280,120 L300,95 L320,65 L340,35 L360,20 L380,15 L380,180 L40,180 Z" 
                      fill="rgba(79, 70, 229, 0.7)" />
                <path d="M40,180 L60,180 L80,179 L100,179 L120,178 L140,177 L160,176 L180,175 L200,173 L220,170 L240,165 L260,157 L280,145 L300,130 L320,110 L340,90 L360,75 L380,65 L380,15 L360,20 L340,35 L320,65 L300,95 L280,120 L260,140 L240,152 L220,160 L200,166 L180,170 L160,173 L140,175 L120,176 L100,177 L80,178 L60,179 L40,180 Z" 
                      fill="rgba(236, 72, 153, 0.7)" />
                <path d="M40,180 L60,180 L80,180 L100,180 L120,179 L140,179 L160,178 L180,177 L200,176 L220,174 L240,171 L260,166 L280,158 L300,148 L320,135 L340,120 L360,100 L380,85 L380,65 L360,75 L340,90 L320,110 L300,130 L280,145 L260,157 L240,165 L220,170 L200,173 L180,175 L160,176 L140,177 L120,178 L100,179 L80,179 L60,180 L40,180 Z" 
                      fill="rgba(249, 115, 22, 0.7)" />
                <path d="M40,180 L60,180 L80,180 L100,180 L120,180 L140,180 L160,179 L180,179 L200,178 L220,177 L240,176 L260,174 L280,170 L300,165 L320,158 L340,148 L360,135 L380,120 L380,85 L360,100 L340,120 L320,135 L300,148 L280,158 L260,166 L240,171 L220,174 L200,176 L180,177 L160,178 L140,179 L120,179 L100,180 L80,180 L60,180 L40,180 Z" 
                      fill="rgba(16, 185, 129, 0.7)" />
              </svg>
            </div>
            
            {/* Preview label */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30">
              <div className="bg-white rounded-md shadow-md px-4 py-2 border border-gray-100">
                <span className="font-medium text-sm text-gray-700">Vollständige Ansicht</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded modal view */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">EV Sales by Region Over Time</h3>
              <button 
                onClick={toggleExpand}
                className="p-1.5 rounded-md hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors"
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
                    src={`${apiUrl}/api/excel-chart/`}
                    width="100%"
                    height="100%"
                    style={{ border: "none", minHeight: "600px" }}
                    title="EV Sales Chart"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-gray-500">Loading chart...</div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Footer with data information */}
            <div className="p-4 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                Data represents EV sales across different regions from 2010 to 2022.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}