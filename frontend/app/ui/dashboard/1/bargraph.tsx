"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/app/ui/theme-context';

// Define proper TypeScript interfaces
interface YearData {
  [year: string]: number;
}

interface TechnologyData {
  [technology: string]: YearData;
}

export default function Bargraph() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  
  const technologies = ['Benzin-ICE', 'Diesel-ICE', 'Benzin-HEV', 'Diesel-HEV', 'Benzin-PHEV', 'Diesel-PHEV', 'BEV'];
  const years = ['2018', '2019', '2020', '2021', '2022'];
  
  // Sample data (in millions) properly typed
  const data: TechnologyData = {
    'Benzin-ICE': { '2018': 80, '2019': 78, '2020': 56, '2021': 50, '2022': 60 },
    'Diesel-ICE': { '2018': 43, '2019': 35, '2020': 25, '2021': 20, '2022': 20 },
    'Benzin-HEV': { '2018': 2, '2019': 4, '2020': 7, '2021': 17, '2022': 21 },
    'Diesel-HEV': { '2018': 1.5, '2019': 2.5, '2020': 4, '2021': 6, '2022': 8 },
    'Benzin-PHEV': { '2018': 3.5, '2019': 5, '2020': 7, '2021': 10, '2022': 11 },
    'Diesel-PHEV': { '2018': 0.5, '2019': 1.5, '2020': 2, '2021': 2.5, '2022': 2.8 },
    'BEV': { '2018': 3, '2019': 5, '2020': 7, '2021': 13, '2022': 25 }
  };

  // Year color mapping
  const getYearColor = (year: string) => {
    const isDark = theme === 'dark';
    switch (year) {
      case '2018': return isDark ? 'bg-blue-900' : 'bg-blue-800';
      case '2019': return isDark ? 'bg-blue-800' : 'bg-blue-700';
      case '2020': return isDark ? 'bg-blue-700' : 'bg-blue-600';
      case '2021': return isDark ? 'bg-blue-600' : 'bg-blue-500';
      case '2022': return isDark ? 'bg-blue-500' : 'bg-blue-400';
      default: return isDark ? 'bg-gray-700' : 'bg-gray-300';
    }
  };

  // Calculate percentage change dynamically
  const getPercentageChange = (tech: string) => {
    const start = data[tech]['2018'];
    const end = data[tech]['2022'];
    const change = ((end - start) / start) * 100;
    return change >= 0 ? `+${change.toFixed(1)}%` : `${change.toFixed(1)}%`;
  };

  // Get color class for percentage change
  const getChangeColorClass = (tech: string) => {
    const start = data[tech]['2018'];
    const end = data[tech]['2022'];
    return end >= start ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  };

  // Calculate max value for scaling
  const maxValue = Math.max(...Object.values(data).flatMap(yearData => Object.values(yearData)));

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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

  // Handle hover on a technology bar group
  const handleBarHover = (tech: string) => {
    setHoveredBar(tech);
  };

  // Handle mouse leaving the bar
  const handleBarLeave = () => {
    setHoveredBar(null);
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
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Exportumsatz je Antriebsstrangtechnologie | 2018–2022</h3>
          </div>
          
          {/* Bar chart preview */}
          <div className="flex-grow bg-white dark:bg-gray-800 cursor-pointer group relative">
            {/* Simple y-axis */}
            <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between items-end pr-1">
              <div className="text-xs text-gray-400 dark:text-gray-500">80 Mio. €</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">40 Mio. €</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">0 €</div>
            </div>
            
            {/* Light horizontal grid lines */}
            <div className="absolute left-12 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
              <div className="border-t border-gray-100 dark:border-gray-700 w-full"></div>
              <div className="border-t border-gray-100 dark:border-gray-700 w-full"></div>
              <div className="border-t border-gray-100 dark:border-gray-700 w-full"></div>
            </div>
            
            {/* Bar chart */}
            <div className="w-full h-full flex items-end px-4 pb-10 pt-2 pl-14">
              {technologies.map((tech) => (
                <div 
                  key={tech} 
                  className="flex-1 h-full flex justify-center items-end group/tech relative"
                  onMouseEnter={() => handleBarHover(tech)}
                  onMouseLeave={handleBarLeave}
                >
                  <div className="flex space-x-0.5 h-full items-end">
                    {years.map((year) => {
                      const value = data[tech][year];
                      const height = `${(value / maxValue) * 70}%`;
                      return (
                        <div
                          key={`${tech}-${year}`}
                          className={`${getYearColor(year)} w-2 transition-all duration-300`}
                          style={{ height }}
                        ></div>
                      );
                    })}
                  </div>
                  
                  {/* x-axis labels */}
                  <div className="absolute bottom-0 transform translate-y-6 text-xs text-center text-gray-600 dark:text-gray-400 truncate w-full">
                    {tech === 'Benzin-ICE' || tech === 'Diesel-ICE' || tech === 'BEV' ? tech : ''}
                  </div>
                  
                  {/* Hover tooltip */}
                  {hoveredBar === tech && (
                    <div className="absolute bottom-full mb-2 bg-white dark:bg-gray-700 rounded-md shadow-sm p-1.5 text-xs border border-gray-100 dark:border-gray-600 whitespace-nowrap z-10 text-gray-800 dark:text-gray-200">
                      {tech}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-10 dark:bg-opacity-30">
              <div className="bg-white dark:bg-gray-700 rounded-md shadow-md px-4 py-2 border border-gray-100 dark:border-gray-600 transform transition-transform duration-300 group-hover:scale-105">
                <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Vollständige Ansicht</span>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="p-2 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              {years.map((year) => (
                <div key={year} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 ${getYearColor(year)}`}></div>
                  <span>{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded modal view - COMPLETELY REBUILT */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl flex flex-col"
            style={{ maxHeight: '90vh' }}
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Exportumsatz je Antriebsstrangtechnologie | 2018–2022</h3>
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
            
            {/* Modal content - VERTICALLY STACKED */}
            <div className="overflow-auto" style={{ maxHeight: 'calc(90vh - 100px)' }}>
              <div className="p-6 flex flex-col space-y-6">
                {/* Top section - Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                  <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Exportumsatz je Antriebsstrangtechnologie</h4>
                  </div>
                  
                  <div className="p-4 relative" style={{ height: "320px" }}>
                    {/* Y-axis */}
                    <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between items-end pr-1">
                      <div className="text-xs text-gray-400 dark:text-gray-500">80 Mio. €</div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">40 Mio. €</div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">0 €</div>
                    </div>
                    
                    {/* Light horizontal grid lines */}
                    <div className="absolute left-12 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
                      <div className="border-t border-gray-100 dark:border-gray-700 w-full"></div>
                      <div className="border-t border-gray-100 dark:border-gray-700 w-full"></div>
                      <div className="border-t border-gray-100 dark:border-gray-700 w-full"></div>
                    </div>
                    
                    {/* Bar chart */}
                    <div className="w-full h-full flex items-end px-4 pb-10 pt-2 pl-14">
                      {technologies.map((tech) => (
                        <div 
                          key={tech} 
                          className="flex-1 h-full flex justify-center items-end group/tech relative"
                          onMouseEnter={() => handleBarHover(tech)}
                          onMouseLeave={handleBarLeave}
                        >
                          <div className="flex space-x-0.5 h-full items-end">
                            {years.map((year) => {
                              const value = data[tech][year];
                              const height = `${(value / maxValue) * 70}%`;
                              return (
                                <div
                                  key={`${tech}-${year}`}
                                  className={`${getYearColor(year)} w-2 transition-all duration-300`}
                                  style={{ height }}
                                ></div>
                              );
                            })}
                          </div>
                          
                          {/* x-axis labels */}
                          <div className="absolute bottom-0 transform translate-y-6 text-xs text-center text-gray-600 dark:text-gray-400 truncate w-full">
                            {tech}
                          </div>
                          
                          {/* Hover tooltip */}
                          {hoveredBar === tech && (
                            <div className="absolute bottom-full mb-2 bg-white dark:bg-gray-700 rounded-md shadow-sm p-1.5 text-xs border border-gray-100 dark:border-gray-600 whitespace-nowrap z-10 text-gray-800 dark:text-gray-200">
                              {tech}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                      <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                        {years.map((year) => (
                          <div key={year} className="flex items-center gap-1.5">
                            <div className={`w-3 h-3 ${getYearColor(year)}`}></div>
                            <span>{year}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom section - Table */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Exportumsätze nach Antriebstechnologien</h4>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Diese Grafik zeigt die Exporteinnahmen für verschiedene Antriebstechnologien von 
                    2018 bis 2022 und verdeutlicht die Verlagerung von konventionellen Technologien zu 
                    Elektro- und Hybridsystemen. Batterieelektrische Fahrzeuge (BEV) verzeichneten in 
                    diesem Zeitraum mit einem Anstieg von über 700 % das größte Wachstum.
                    </p>
                    
                    {/* Data table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-700">
                            <th className="py-2 px-3 text-left border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Technologie</th>
                            {years.map(year => (
                              <th key={year} className="py-2 px-3 text-right border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{year}</th>
                            ))}
                            <th className="py-2 px-3 text-right border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Änderung</th>
                          </tr>
                        </thead>
                        <tbody>
                          {technologies.map(tech => (
                            <tr key={tech} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <td className="py-2 px-3 text-gray-800 dark:text-gray-300">{tech}</td>
                              {years.map(year => (
                                <td key={year} className="py-2 px-3 text-right text-gray-800 dark:text-gray-300">
                                  {data[tech][year]} Mio. €
                                </td>
                              ))}
                              <td className={`py-2 px-3 text-right font-medium ${getChangeColorClass(tech)}`}>
                                {getPercentageChange(tech)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Acronym explanations */}
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <div>BEV = Battery Electric Vehicle</div>
                      <div>ICE = Internal Combustion Engine</div>
                      <div>HEV = Hybrid Electric Vehicle</div>
                      <div>PHEV = Plug-in Hybrid Electric Vehicle</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal footer */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-700">
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