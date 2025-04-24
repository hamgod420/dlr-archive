'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/app/ui/theme-context';

export default function ModelRangeChart() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeRing, setActiveRing] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  // Toggle expand/collapse state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Reset active ring when expanding/collapsing
    setActiveRing(null);
  };

  // Handle clicks outside the modal to close it
  useEffect(() => {
    if (!isExpanded) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
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

  // Year data with percentages
  const yearData: {
    [key: string]: {
      'Benzin-ICE': number;
      'Diesel-ICE': number;
      BEV: number;
      PHEV: number;
      description: string;
    };
  } = {
    '2019': {
      'Benzin-ICE': 60,
      'Diesel-ICE': 37,
      BEV: 3,
      PHEV: 0,
      description: 'Ausgangsjahr mit minimaler BEV-Präsenz (3%)',
    },
    '2020': {
      'Benzin-ICE': 55,
      'Diesel-ICE': 38,
      BEV: 6,
      PHEV: 1,
      description: 'Früher Übergang mit 6% BEV-Modellen',
    },
    '2021': {
      'Benzin-ICE': 50,
      'Diesel-ICE': 35,
      BEV: 12,
      PHEV: 3,
      description: 'BEV-Modelle auf 12% gestiegen',
    },
    '2022': {
      'Benzin-ICE': 45,
      'Diesel-ICE': 32,
      BEV: 18,
      PHEV: 5,
      description: 'Signifikantes Wachstum der BEV auf 18% aller Angebote',
    },
  };

  // Handle hover on a year box
  const handleYearHover = (year: string) => {
    setActiveRing(year); // Update activeRing state with the correct year
  };

  // Handle mouse leaving the year box
  const handleYearLeave = () => {
    setActiveRing(null); // Reset activeRing state
  };

  // Get color values based on current theme
  const getRingColors = (year: string) => {
    const isDark = theme === 'dark';
    const colors = {
      '2022': {
        base: isDark ? '#1e3a8a' : '#dbeafe',
        fill: isDark ? '#60a5fa' : '#3b82f6',
      },
      '2021': {
        base: isDark ? '#0c4a6e' : '#e0f2fe',
        fill: isDark ? '#38bdf8' : '#0ea5e9',
      },
      '2020': {
        base: isDark ? '#172554' : '#eff6ff',
        fill: isDark ? '#3b82f6' : '#1d4ed8',
      },
      '2019': {
        base: isDark ? '#334155' : '#f1f5f9',
        fill: isDark ? '#94a3b8' : '#0f172a',
      },
    };
    return colors[year as keyof typeof colors];
  };

  return (
    <div className="w-full h-full relative">
      {/* Preview version */}
      <div 
        className={`w-full h-full ${isExpanded ? 'hidden' : 'block'}`}
        onClick={toggleExpand}
      >
        <div className="h-full flex flex-col">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Modellangebot je Antriebsstrangtechnologie</h3>
          </div>
          <div className="flex-grow flex items-center justify-center cursor-pointer group">
            {/* Donut chart preview - larger size */}
            <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer ring - 2022 */}
                <circle 
                  cx="50" cy="50" r="48" 
                  fill="transparent" 
                  stroke={getRingColors('2022').base}
                  strokeWidth="6" 
                />
                <circle 
                  cx="50" cy="50" r="48" 
                  fill="transparent" 
                  stroke={getRingColors('2022').fill}
                  strokeWidth="6" 
                  strokeDasharray="301.6" 
                  strokeDashoffset="247.3" 
                />
                {/* 2021 ring */}
                <circle 
                  cx="50" cy="50" r="38" 
                  fill="transparent" 
                  stroke={getRingColors('2021').base}
                  strokeWidth="6" 
                />
                <circle 
                  cx="50" cy="50" r="38" 
                  fill="transparent" 
                  stroke={getRingColors('2021').fill}
                  strokeWidth="6" 
                  strokeDasharray="238.8" 
                  strokeDashoffset="209.9" 
                />
                {/* 2020 ring */}
                <circle 
                  cx="50" cy="50" r="28" 
                  fill="transparent" 
                  stroke={getRingColors('2020').base}
                  strokeWidth="6" 
                />
                <circle 
                  cx="50" cy="50" r="28" 
                  fill="transparent" 
                  stroke={getRingColors('2020').fill}
                  strokeWidth="6" 
                  strokeDasharray="176" 
                  strokeDashoffset="163.7" 
                />
                {/* 2019 ring - innermost */}
                <circle 
                  cx="50" cy="50" r="18" 
                  fill="transparent" 
                  stroke={getRingColors('2019').base}
                  strokeWidth="6" 
                />
                <circle 
                  cx="50" cy="50" r="18" 
                  fill="transparent" 
                  stroke={getRingColors('2019').fill}
                  strokeWidth="6" 
                  strokeDasharray="113" 
                  strokeDashoffset="109.6" 
                />
                {/* Center */}
                <circle cx="50" cy="50" r="10" fill={theme === 'dark' ? '#475569' : '#1e293b'} />
              </svg>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-30">
              <div className="bg-white dark:bg-gray-700 rounded-md shadow-md px-4 py-2 border border-gray-100 dark:border-gray-600">
                <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Vollständige Ansicht</span>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="p-2 border-t border-gray-100 dark:border-gray-700 flex justify-center">
            <div className="flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span>BEV: 3% (2019) → 18% (2022)</span>
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
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-auto"
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Modellangebot je Antriebsstrangtechnologie | 2019-2022</h3>
              <button 
                onClick={toggleExpand}
                className="p-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal content */}
            <div className="flex-grow p-6 overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Chart visualization */}
<div className="flex items-center justify-center p-4" ref={chartRef}>
  <div className="relative w-full max-w-[400px] aspect-square">
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      {Object.keys(yearData).reverse().map((year, index) => {
        const radius = 45 - (index * 9); // Adjusted radii with breathing room
        const isActive = activeRing === year;
        const colors = getRingColors(year);
        const circumference = 2 * Math.PI * radius;
        const bevOffset = circumference * (1 - (yearData[year].BEV / 100));

        return (
          <g key={year} className={`transition-transform duration-200 ${isActive ? 'scale-[1.03]' : ''}`}>
            {/* Base ring */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              stroke={colors.base}
              strokeWidth="6" // Reduced stroke width
              className="transition-opacity duration-200"
              opacity={isActive ? 0.8 : 0.6}
            />
            {/* BEV indicator */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              stroke={colors.fill}
              strokeWidth="6" // Reduced stroke width
              strokeDasharray={circumference}
              strokeDashoffset={bevOffset}
              className="transition-opacity duration-200"
              opacity={isActive ? 1 : 0.8}
            />
          </g>
        );
      })}
      {/* Center circle */}
      <circle cx="50" cy="50" r="10" fill={theme === 'dark' ? '#475569' : '#1e293b'} />
      
      {/* Year labels */}
      <text x="82" y="20" fontSize="8" fill={theme === 'dark' ? '#e2e8f0' : '#0f172a'} fontWeight="bold">
        2022
      </text>
      <text x="77" y="35" fontSize="8" fill={theme === 'dark' ? '#e2e8f0' : '#0f172a'} fontWeight="bold">
        2021
      </text>
      <text x="72" y="47" fontSize="8" fill={theme === 'dark' ? '#e2e8f0' : '#0f172a'} fontWeight="bold">
        2020
      </text>
      <text x="67" y="57" fontSize="8" fill={theme === 'dark' ? '#e2e8f0' : '#0f172a'} fontWeight="bold">
        2019
      </text>
    </svg>
  </div>
</div>

                {/* Data and analysis */}
                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    Verteilung der Fahrzeugmodelle nach Antriebstechnologien
                  </h4>
                  <div className="space-y-4 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Diese Visualisierung zeigt, wie sich der deutsche Automobilmarkt von 2019 bis 2022 entwickelt, mit einer deutlichen Verschiebung von konventionellen Verbrennungsmotoren hin zu Elektrofahrzeugen.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bewegen Sie den Mauszeiger über jedes Jahr, um den entsprechenden Ring zu markieren.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Aufschlüsselung nach Jahren</h5>
                    <div className="space-y-3">
                      {Object.keys(yearData).map((year) => (
                        <div
                          key={year}
                          className={`p-3 rounded-md border cursor-pointer ${
                            activeRing === year
                              ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700'
                              : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-100 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/20'
                          }`}
                          onMouseEnter={() => handleYearHover(year)}
                          onMouseLeave={handleYearLeave}
                        >
                          <h6 className="text-sm font-medium mb-1 text-gray-800 dark:text-gray-100">{year}</h6>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                            <div className="flex justify-between text-gray-700 dark:text-gray-300">
                              <span>Benzin-ICE:</span>
                              <span className="font-medium">{yearData[year]['Benzin-ICE']}%</span>
                            </div>
                            <div className="flex justify-between text-gray-700 dark:text-gray-300">
                              <span>Diesel-ICE:</span>
                              <span className="font-medium">{yearData[year]['Diesel-ICE']}%</span>
                            </div>
                            <div className="flex justify-between text-gray-700 dark:text-gray-300">
                              <span>BEV:</span>
                              <span className="font-medium">{yearData[year]['BEV']}%</span>
                            </div>
                            <div className="flex justify-between text-gray-700 dark:text-gray-300">
                              <span>PHEV:</span>
                              <span className="font-medium">{yearData[year]['PHEV']}%</span>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
                            {yearData[year].description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-6">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 mr-1 rounded-sm"></div>
                        <span>Benzin-ICE</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-indigo-700 dark:bg-indigo-500 mr-1 rounded-sm"></div>
                        <span>Diesel-ICE</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 dark:bg-green-400 mr-1 rounded-sm"></div>
                        <span>BEV</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 dark:bg-yellow-400 mr-1 rounded-sm"></div>
                        <span>PHEV</span>
                      </div>
                    </div>
                    <div>
                      BEV = Battery Electric Vehicle, ICE = Internal Combustion Engine, PHEV = Plug-in Hybrid Electric Vehicle
                    </div>
                  </div>
                </div>
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