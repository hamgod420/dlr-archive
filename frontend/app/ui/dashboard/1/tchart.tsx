'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/app/ui/theme-context';

export default function TChart() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  
  // Sample data for the table
  const tableData = {
    title: "Ranking: Umsatz-/Wertschöpfungspotenzial je Komponente | Europa | konventionell vs. elektrifiziert | 2020 vs. 2030",
    columns: ["2020", "2030"],
    rows: [
      { 
        '2020': { component: "VKM Benzin", value: "9,4 Mrd. €" },
        '2030': { component: "Batteriesystem", value: "38 Mrd. €" }
      },
      { 
        '2020': { component: "Batteriesystem", value: "6,4 Mrd. €" },
        '2030': { component: "E-Motor", value: "6,8 Mrd. €" }
      },
      { 
        '2020': { component: "Abgasanlage", value: "5,1 Mrd. €" },
        '2030': { component: "Leistungselektronik", value: "5,2 Mrd. €" }
      },
      { 
        '2020': { component: "Getriebe", value: "4,4 Mrd. €" },
        '2030': { component: "VKM Benzin", value: "4,6 Mrd. €" }
      },
      { 
        '2020': { component: "VKM Diesel", value: "3,4 Mrd. €" },
        '2030': { component: "Ladesystem", value: "3,2 Mrd. €" }
      },
      { 
        '2020': { component: "ECU", value: "2,4 Mrd. €" },
        '2030': { component: "HV-Kabel", value: "3,0 Mrd. €" }
      },
      { 
        '2020': { component: "Kraftstoffanlage", value: "1,0 Mrd. €" },
        '2030': { component: "Abgasanlage", value: "2,4 Mrd. €" }
      },
      { 
        '2020': { component: "E-Motor", value: "1,0 Mrd. €" },
        '2030': { component: "Getriebe", value: "2,0 Mrd. €" }
      },
      { 
        '2020': { component: "Leistungselektronik", value: "0,8 Mrd. €" },
        '2030': { component: "VKM Diesel", value: "1,4 Mrd. €" }
      },
      { 
        '2020': { component: "HV-Kabel", value: "0,8 Mrd. €" },
        '2030': { component: "BMS", value: "1,3 Mrd. €" }
      },
      { 
        '2020': { component: "Ladesystem", value: "0,4 Mrd. €" },
        '2030': { component: "ECU", value: "1,1 Mrd. €" }
      },
      { 
        '2020': { component: "BMS", value: "0,3 Mrd. €" },
        '2030': { component: "Kraftstoffanlage", value: "0,5 Mrd. €" }
      }
    ]
  };

  // Determine if a component is electric or conventional
  const isElectricComponent = (component: string): boolean => {
    const electricComponents = [
      'Batteriesystem', 'E-Motor', 'Leistungselektronik', 
      'Ladesystem', 'HV-Kabel', 'BMS'
    ];
    return electricComponents.includes(component);
  };

  // Get the appropriate color class based on component type
  const getComponentColorClass = (component: string, isValue: boolean = false): string => {
    if (isElectricComponent(component)) {
      return isValue 
        ? 'text-blue-700 dark:text-blue-400' 
        : 'text-blue-600 dark:text-blue-500';
    }
    return isValue 
      ? 'text-gray-700 dark:text-gray-300' 
      : 'text-gray-600 dark:text-gray-400';
  };

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
        <div className="w-full h-full bg-white dark:bg-gray-800 cursor-pointer group">
          {/* Title overlay at the top */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-3">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Ranking: Umsatz-/Wertschöpfungspotenzial (2020 vs. 2030)</h3>
          </div>
          
          {/* Table preview */}
          <div className="absolute inset-0 pt-12 pb-8 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg h-full overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
              {/* Column headers */}
              <div className="grid grid-cols-2 text-center text-sm border-b border-gray-200 dark:border-gray-700">
                <div className="py-3 px-3 font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">2020</div>
                <div className="py-3 px-3 font-medium text-gray-700 dark:text-gray-300 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">2030</div>
              </div>
              
              {/* Showing only first few rows in preview */}
              <div className="w-full overflow-hidden">
                {tableData.rows.slice(0, 6).map((row, index) => {
                  const leftColorClass = getComponentColorClass(row['2020'].component);
                  const rightColorClass = getComponentColorClass(row['2030'].component);
                  const leftValueClass = getComponentColorClass(row['2020'].component, true);
                  const rightValueClass = getComponentColorClass(row['2030'].component, true);
                  
                  return (
                    <div 
                      key={index}
                      className={`grid grid-cols-2 border-b border-gray-200 dark:border-gray-700 text-xs transition-colors duration-200 ${
                        hoveredRow === index 
                          ? 'bg-gray-50 dark:bg-gray-700' 
                          : 'bg-white dark:bg-gray-800'
                      }`}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <div className="p-2.5 flex justify-between items-center">
                        <span className={`${leftColorClass} flex items-center`}>
                          <span className="w-5 text-right mr-1.5 text-gray-500 dark:text-gray-400 font-medium">{index + 1}.</span>
                          <span>{row['2020'].component}</span>
                        </span>
                        <span className={`${leftValueClass} font-medium`}>{row['2020'].value}</span>
                      </div>
                      <div className="p-2.5 flex justify-between items-center border-l border-gray-200 dark:border-gray-700">
                        <span className={`${rightColorClass} flex items-center`}>
                          <span className="w-5 text-right mr-1.5 text-gray-500 dark:text-gray-400 font-medium">{index + 1}.</span>
                          <span>{row['2030'].component}</span>
                        </span>
                        <span className={`${rightValueClass} font-medium`}>{row['2030'].value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Better fade out effect at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Improved hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-10 dark:bg-opacity-30">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg px-4 py-2 border border-gray-100 dark:border-gray-600 transform transition-transform duration-300 group-hover:scale-105">
              <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Vollständige Tabelle anzeigen</span>
            </div>
          </div>
          
          {/* Attribution */}
          <div className="absolute bottom-0 right-0 p-2 text-xs text-gray-400 dark:text-gray-500">
            © DLR e.V. 2023
          </div>
        </div>
      </div>

      {/* Expanded modal view */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 transition-opacity duration-300">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{tableData.title}</h3>
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
            <div className="flex-grow overflow-auto p-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                {/* Column headers */}
                <div className="grid grid-cols-2 text-center border-b border-gray-200 dark:border-gray-700">
                  <div className="py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                    <div className="flex justify-center items-center space-x-2">
                      <span>{tableData.columns[0]}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">(Konventionell dominiert)</span>
                    </div>
                  </div>
                  <div className="py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                    <div className="flex justify-center items-center space-x-2">
                      <span>{tableData.columns[1]}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">(Elektrifiziert dominiert)</span>
                    </div>
                  </div>
                </div>
                
                {/* Table rows */}
                {tableData.rows.map((row, index) => {
                  const leftColorClass = getComponentColorClass(row['2020'].component);
                  const rightColorClass = getComponentColorClass(row['2030'].component);
                  const leftValueClass = getComponentColorClass(row['2020'].component, true);
                  const rightValueClass = getComponentColorClass(row['2030'].component, true);
                  
                  const isLeftElectric = isElectricComponent(row['2020'].component);
                  const isRightElectric = isElectricComponent(row['2030'].component);
                  
                  return (
                    <div 
                      key={index}
                      className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className={`py-3 px-4 flex justify-between items-center ${isLeftElectric ? 'bg-blue-50 dark:bg-blue-900 bg-opacity-30 dark:bg-opacity-20' : ''}`}>
                        <span className="flex items-center">
                          <span className="w-6 text-right mr-2 text-gray-500 dark:text-gray-400 font-medium">{index + 1}.</span>
                          <span className={`${leftColorClass} font-medium`}>{row['2020'].component}</span>
                          {isLeftElectric && (
                            <span className="ml-2 px-1.5 py-0.5 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-sm">E</span>
                          )}
                        </span>
                        <span className={`${leftValueClass} font-medium`}>{row['2020'].value}</span>
                      </div>
                      <div className={`py-3 px-4 flex justify-between items-center border-l border-gray-200 dark:border-gray-700 ${isRightElectric ? 'bg-blue-50 dark:bg-blue-900 bg-opacity-30 dark:bg-opacity-20' : ''}`}>
                        <span className="flex items-center">
                          <span className="w-6 text-right mr-2 text-gray-500 dark:text-gray-400 font-medium">{index + 1}.</span>
                          <span className={`${rightColorClass} font-medium`}>{row['2030'].component}</span>
                          {isRightElectric && (
                            <span className="ml-2 px-1.5 py-0.5 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-sm">E</span>
                          )}
                        </span>
                        <span className={`${rightValueClass} font-medium`}>{row['2030'].value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center">
                    <span className="h-4 w-1 bg-gray-800 dark:bg-gray-400 mr-2"></span>
                    Erkenntnisse: 2020
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Konventionelle Komponenten wie VKM Benzin (9,4 Mrd. €) dominieren das Ranking in 2020</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Batteriesysteme auf Platz 2 (6,4 Mrd. €) zeigen frühe Elektrifizierung</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>E-Motor nur auf Platz 8 mit 1,0 Mrd. €</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Elektrische Komponenten belegen 4 der Top-12 Plätze</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center">
                    <span className="h-4 w-1 bg-blue-600 dark:bg-blue-400 mr-2"></span>
                    Erkenntnisse: 2030
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-500 dark:text-blue-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Batteriesysteme führen mit 38 Mrd. € - ein Zuwachs von 494% seit 2020</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-500 dark:text-blue-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>E-Motor springt von Platz 8 auf Platz 2 (580% Wachstum)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-500 dark:text-blue-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>VKM Benzin fällt von Platz 1 auf Platz 4 trotz leichtem Wertzuwachs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-500 dark:text-blue-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Elektrische Komponenten dominieren mit 7 der Top-12 Plätze</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-900 dark:to-gray-800 dark:bg-opacity-40 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Transformationszusammenfassung
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Die Daten zeigen eine deutliche Transformation des Automobilkomponentenmarktes von 2020 bis 2030. 
                  Während die Verbrennungsmotorkomponenten im Jahr 2020 dominierten, werden die 
                  Elektrifizierungskomponenten bis 2030 voraussichtlich einen deutlich höheren Wert schaffen. 
                  Allein der Wert der Batteriesysteme wird voraussichtlich um das 6-fache steigen und zur 
                  dominierenden Komponente im europäischen Markt werden.
                </p>
              </div>
            </div>
            
            {/* Modal footer */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Daten basierend auf Marktstudien und Prognosen
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                © DLR e.V. 2023
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}