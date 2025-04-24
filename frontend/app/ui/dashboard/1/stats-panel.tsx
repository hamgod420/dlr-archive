'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/app/ui/theme-context';

export default function StatsPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  // Stats data from the provided images
  const statsData = [
    {
      category: "Neuzulassungen",
      title: "Neuzulassungen elektrifizierter Fahrzeuge in Deutschland (in Stück)",
      values: {
        "2018": "0,16 Mio.",
        "2022": "1,31 Mio."
      },
      subtitle: "Anteil an Gesamtneuzulassungen",
      percentages: {
        "2018": "4,8% (BEV: 1,0%)",
        "2022": "49,6% (BEV: 17,8%)"
      },
      trend: "up",
      icon: "🚗"
    },
    {
      category: "Fahrzeugproduktion",
      title: "Fahrzeugproduktion Inland (in Stück)",
      values: {
        "2018": "4,67 Mio.",
        "2022": "3,48 Mio."
      },
      subtitle: "Anteil E-Fahrzeuge",
      percentages: {
        "2018": "3,9%",
        "2022": "25,4%"
      },
      trend: "up",
      icon: "🏭"
    },
    {
      category: "Exportwert",
      title: "Exportwert je Fahrzeug Durchschnitt",
      values: {
        "2018": "32.784 €",
        "2022": "55.932 €"
      },
      trend: "up",
      icon: "📈"
    },
    {
      category: "China-Anteil",
      title: "Anteil China am Gesamtabsatz",
      values: {
        "2018-2022": "36,7%"
      },
      icon: "🌏"
    },
    {
      category: "Umsatz",
      title: "Umsatz Automobilindustrie",
      values: {
        "2018": "426 Mrd. €",
        "2022": "506 Mrd. €"
      },
      subtitle: "Anteil Inland",
      percentages: {
        "2018": "35,1%",
        "2022": "30,4%"
      },
      trend: "down",
      icon: "💰"
    },
    {
      category: "Exportumsatz",
      title: "Exportumsatz Automobilindustrie",
      values: {
        "2018": "131 Mrd. €",
        "2022": "148 Mrd. €"
      },
      trend: "up",
      icon: "🚢"
    },
    {
      category: "EU-Exportanteil",
      title: "Exportanteil EU Durchschnitt",
      values: {
        "2018": "55,4%",
        "2022": "60,9%"
      },
      trend: "up",
      icon: "🇪🇺"
    }
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setActiveCategory(null);
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
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Statistiken der Automobilindustrie (2018-2022)</h3>
          </div>

          {/* Stats preview grid */}
          <div className="absolute inset-0 pt-12 pb-8 px-4">
            <div className="h-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 gap-3 h-full">
                {/* Preview of key stats */}
                <div className="flex flex-col justify-between border-r border-gray-200 dark:border-gray-600 pr-2">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Zulassungen von Elektrofahrzeugen</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">2018</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">0,16 Mio.</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">2022</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">1,31 Mio.</span>
                    </div>
                    <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">+718% Steigerung</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">BEV Marktanteil</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">2018</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">1,0%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">2022</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">17,8%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between pl-2">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Exportwert pro Fahrzeug</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">2018</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">32.784 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">2022</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">55.932 €</span>
                    </div>
                    <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">+70% Steigerung</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Gesamteinnahmen der Industrie</div>
                    <div className="text-center mt-1">
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">506 Mrd. €</span>
                      <div className="text-xs text-blue-500 dark:text-blue-400">+19% seit 2018</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fade effect at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-700 to-transparent"></div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-30">
            <div className="bg-white dark:bg-gray-700 rounded-md shadow-md px-4 py-2 border border-gray-100 dark:border-gray-600 transform transition-transform duration-300 group-hover:scale-105">
              <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Vollständige Ansicht</span>
            </div>
          </div>

          {/* Attribution */}
          <div className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 text-xs text-gray-400 dark:text-gray-500">
            © DLR e.V. 2023
          </div>
        </div>
      </div>

      {/* Expanded modal view */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 transition-opacity duration-300">
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Deutsche Automobilindustrie Statistiken | 2018-2022</h3>
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
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {statsData.map(stat => (
                  <button
                    key={stat.category}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === stat.category
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    onClick={() => setActiveCategory(activeCategory === stat.category ? null : stat.category)}
                  >
                    {stat.icon} {stat.category}
                  </button>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statsData
                  .filter(stat => !activeCategory || stat.category === activeCategory)
                  .map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-white dark:bg-gray-800 rounded-lg border overflow-hidden transition-all duration-300 ${activeCategory === stat.category
                          ? 'shadow-md scale-[1.03] border-blue-200 dark:border-blue-800'
                          : 'shadow-sm border-gray-200 dark:border-gray-700'
                        }`}
                    >
                      <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{stat.title}</h4>
                      </div>

                      <div className="p-4">
                        <div className="flex justify-between items-end mb-4">
                          {Object.entries(stat.values).map(([year, value], i) => (
                            <div key={i} className="text-center">
                              <div className="text-xs text-gray-500 dark:text-gray-400">{year}</div>
                              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-1">{value}</div>
                            </div>
                          ))}

                          {/* Show trend arrow if available */}
                          {stat.trend && (
                            <div className="px-4">
                              <svg
                                className={`h-10 w-8 ${stat.trend === 'up'
                                    ? 'text-blue-500 dark:text-blue-400'
                                    : 'text-red-500 dark:text-red-400 rotate-180'
                                  }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Show subtitle and percentages if available */}
                        {stat.subtitle && stat.percentages && (
                          <>
                            <div className="text-xs text-center text-gray-500 dark:text-gray-400 border-t border-b border-gray-200 dark:border-gray-700 py-1 mb-2">
                              {stat.subtitle}
                            </div>
                            <div className="flex justify-between items-center">
                              {Object.entries(stat.percentages).map(([year, percentage], i) => (
                                <div key={i} className="text-center">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}</div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                }
              </div>

              {/* Summary section */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 className="text-base font-semibold text-blue-800 dark:text-blue-300 mb-3">Wichtige Einblicke</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Die Zulassungen von Elektrofahrzeugen stiegen drastisch von 0,16 Millionen im Jahr 2018 auf 1,31 Millionen im Jahr 2022</li>
                      <li>Der Marktanteil von batteriebetriebenen Elektrofahrzeugen (BEV) wuchs von 1,0 % auf 17,8 %</li>
                      <li>Der Exportwert pro Fahrzeug stieg um 70 % (32.784€ auf 55.932€)</li>
                      <li>China macht 36,7 % des Gesamtabsatzes aus (2018-2022)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Die Gesamtfahrzeugproduktion ging von 4,67 auf 3,48 Millionen Einheiten zurück</li>
                      <li>Der Anteil der Elektrofahrzeuge an der Produktion stieg jedoch von 3,9% auf 25,4%</li>
                      <li>Der Gesamtumsatz der Automobilindustrie stieg um 19% (von 426 auf 506 Mrd. €)</li>
                      <li>Der EU-Exportanteil stieg von 55,4% auf 60,9%</li>
                    </ul>
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