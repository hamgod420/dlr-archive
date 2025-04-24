'use client';

import { useState } from 'react';

export default function TemplatePage() {
  return (
    <main className="grid grid-cols-12 grid-rows-6 gap-2.5 bg-gray-50 dark:bg-gray-900 h-screen p-3 overflow-hidden transition-colors duration-200">
      {/* Header with improved gradient and spacing */}
      <header className="col-span-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between border border-gray-100 dark:border-gray-700 transition-colors duration-200">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center tracking-tight">
          <span className="border-l-4 border-blue-600 pl-3 py-0.5">
            VORLAGE-SEITE
            <span className="text-blue-600 dark:text-blue-400 ml-1.5">TITEL</span>
          </span>
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-normal bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full">
          Untertitel / Beschreibung
        </span>
      </header>
      
      {/* Main content - maintaining original grid layout with improved styling */}
      <div className="col-span-8 row-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        {/* Placeholder for top left panel */}
        <div className="p-3 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Paneltitel 1</h3>
        </div>
        <div className="h-full flex items-center justify-center p-6">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Panel-Inhalt Platzhalter</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Ersetzen Sie mit Ihrem Inhalt</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-4 row-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        {/* Placeholder for top right panel */}
        <div className="p-3 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Paneltitel 2</h3>
        </div>
        <div className="h-full flex items-center justify-center p-6">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Panel-Inhalt Platzhalter</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Ersetzen Sie mit Ihrem Inhalt</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-5 row-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        {/* Placeholder for bottom left panel */}
        <div className="p-3 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Paneltitel 3</h3>
        </div>
        <div className="h-full flex items-center justify-center p-6">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Panel-Inhalt Platzhalter</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Ersetzen Sie mit Ihrem Inhalt</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-3 row-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        {/* Placeholder for bottom middle panel */}
        <div className="p-3 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Paneltitel 4</h3>
        </div>
        <div className="h-full flex items-center justify-center p-6">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Panel-Inhalt Platzhalter</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Ersetzen Sie mit Ihrem Inhalt</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-4 row-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        {/* Placeholder for bottom right panel */}
        <div className="p-3 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Paneltitel 5</h3>
        </div>
        <div className="h-full flex items-center justify-center p-6">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Panel-Inhalt Platzhalter</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Ersetzen Sie mit Ihrem Inhalt</p>
          </div>
        </div>
      </div>
      
      {/* Footer with improved styling */}
      <footer className="col-span-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 px-5 py-3 text-sm text-gray-600 dark:text-gray-300 flex justify-between items-center transition-colors duration-200">
        <div className="flex items-center">
          <span className="font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-md mr-2">Fußzeile-Label</span>
          <span className="opacity-90">Fußzeile-Inhalt</span>
        </div>
        <div className="text-gray-500 dark:text-gray-400 flex items-center">
          <svg className="w-4 h-4 mr-1 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          © DLR e.V. 2023
        </div>
      </footer>
    </main>
  );
}