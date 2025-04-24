// app/ui/dashboard/new-registrations.tsx
'use client';

import React from 'react';

export default function NewRegistrations() {
  return (
    <div className="w-full h-full">
      <h2 className="text-sm font-medium text-gray-700 mb-4">
        Neuzulassungen elektrifizierter<br />
        Fahrzeuge in Deutschland (in Stück)
      </h2>
      
      <div className="flex justify-between mb-2">
        <div>
          <div className="text-xs text-gray-500">2018</div>
          <div className="text-2xl font-bold text-gray-800">0,16 Mio.</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">2022</div>
          <div className="text-2xl font-bold text-gray-800">1,31 Mio.</div>
        </div>
      </div>
      
      <div className="text-xs text-center my-2 text-gray-500 border-t border-b border-gray-200 py-1">
        Anteil an Gesamtneuzulassungen
      </div>
      
      <div className="flex justify-between mt-3">
        <div className="text-sm">
          4,8%<br />
          <span className="text-xs text-gray-500">BEV: 1,0%</span>
        </div>
        <div className="flex items-center">
          <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <div className="text-sm">
          49,6%<br />
          <span className="text-xs text-gray-500">BEV: 17,8%</span>
        </div>
      </div>
    </div>
  );
}