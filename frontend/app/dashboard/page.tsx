// app/(dashboard)/page.tsx
import { lusitana } from '@/app/ui/fonts';
import SumOfStock from '@/app/ui/dashboard/1/sum-of-stock';
import ModelRangeChart from '@/app/ui/dashboard/1/model-range-chart';
import Bargraph from '@/app/ui/dashboard/1/bargraph';
import TChart from '@/app/ui/dashboard/1/tchart';
import StatsPanel from '@/app/ui/dashboard/1/stats-panel';

export default function Page() {
  return (
    <main className="grid grid-cols-12 grid-rows-6 gap-2.5 bg-gray-50 dark:bg-gray-900 h-screen p-3 overflow-hidden transition-colors duration-200">
      {/* Header with improved gradient and spacing */}
      <header className="col-span-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between border border-gray-100 dark:border-gray-700 transition-colors duration-200">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center tracking-tight">
            <span className="border-l-4 border-blue-600 pl-3 py-0.5">
              Transformations-Dashboard "Automobilwirtschaft"
            </span>
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 pl-7 pt-1">
            Dynamisches Dashboard auf Basis des{' '}
            <a
              href="https://www.hub-edrive.de/fileadmin/media/Dashboard/01_Automobilwirtschaft/Transformations-Factsheet_1_Automobilwirtschaft.pdf" // Replace with the actual URL
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transformations-Factsheet „Automobilwirtschaft“
            </a>{' '}
            von Juni 2023
          </p>
        </div>
      </header>


      
      {/* Main content - maintaining original grid layout with improved styling */}
      <div className="col-span-8 row-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        <SumOfStock />
      </div>
      
      <div className="col-span-4 row-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        <TChart />
      </div>
      
      <div className="col-span-5 row-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        <Bargraph />
      </div>
      
      <div className="col-span-3 row-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        <ModelRangeChart />
      </div>
      
      <div className="col-span-4 row-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
        <StatsPanel />
      </div>
      
      {/* Footer with improved styling */}
      <footer className="col-span-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 px-5 py-3 text-sm text-gray-600 dark:text-gray-300 flex justify-between items-center transition-colors duration-200">
        <div className="flex items-center">
          <span className="font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-md mr-2">Quelle:</span>
          <span className="opacity-90">Neuzulassungen (KBA), Exportdaten (Statistisches Bundesamt), Wertschöpfungspotenziale (DLR)</span>

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