'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/app/ui/theme-context';

export default function SideNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-r border-gray-200 dark:border-gray-700">
      <Link
        className="mb-4 flex h-16 items-end justify-end rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-800 dark:to-blue-700 p-4 shadow-md transition-all duration-300 hover:from-blue-800 hover:to-blue-700 dark:hover:from-blue-900 dark:hover:to-blue-800 md:h-28 relative"
        href="/"
      >
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-24 md:w-28">
          <svg width="52" height="40" viewBox="0 0 82 70" fill={theme === 'dark' ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <g clipPath="url(#clip0_207_79)">
              <rect width="82" height="70" fill="none" />
              <path fillRule="evenodd" clipRule="evenodd" d="M59.6417 0L37.3503 23.0564H18.2221L0 41.8815L22.4382 41.8832V65L44.8283 41.8752H63.7908L82 23.0564H59.6417V0ZM55.0623 11.4479V23.0706H43.8097L55.0623 11.4479ZM58.4822 27.8095H70.9363L61.9176 37.1311H49.4695L58.4822 27.8095ZM39.2192 27.8095H52.0022L42.9869 37.1311H30.2073L39.2192 27.8095ZM20.0772 27.8095H32.7151L23.6964 37.1311H11.0645L20.0772 27.8095ZM26.9824 41.8744H38.3681L26.9824 53.6621V41.8744Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M73.2371 61.8454H72.3409V58.1232H73.2371C74.5955 58.1232 76.1132 58.2643 76.1132 59.9251C76.1132 61.6459 74.5767 61.8454 73.2371 61.8454ZM76.1508 62.9328V62.8936C77.8816 62.6566 78.9525 61.3113 78.9525 59.6872C78.9525 55.8482 75.4695 55.9458 72.5532 55.9458H69.6172V69.7622H72.3409V64.0237H73.2149C74.361 64.0237 74.7102 64.4184 75.1014 65.4457L76.7346 69.7622H79.7673L77.5915 64.3574C77.3184 63.7449 76.8904 62.9929 76.1508 62.9328Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M48.9929 67.5848H47.4787V58.1232H48.9929C51.2673 58.1232 53.4654 59.8467 53.4654 62.8544C53.4654 65.8631 51.2673 67.5848 48.9929 67.5848ZM48.4691 55.9458H44.7559V69.7622H48.4691C52.6283 69.7622 56.3038 68.3367 56.3038 62.8544C56.3038 57.3739 52.6283 55.9458 48.4691 55.9458Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M61.9102 55.9458H59.1865V69.7622H67.1779V67.5848H61.9102V55.9458Z" />
            </g>
            <defs>
              <clipPath id="clip0_207_79">
                <rect width="82" height="70" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>

      <div className="mt-2 mb-6 px-2">
        <div className="text-xs uppercase text-gray-400 dark:text-gray-300 tracking-wider font-medium">Hauptmenü</div>
      </div>

      <div className="flex grow flex-col space-y-2">
        <div className="px-2">
          <NavLinks />
        </div>

        <div className="hidden h-auto w-full grow rounded-md md:block"></div>

        <div className="px-2 py-4 mt-4">
          <button
            onClick={toggleTheme}
            className="flex h-[48px] w-full items-center justify-start gap-3 rounded-lg text-gray-600 dark:text-gray-300 p-3 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="px-2 py-4 md:mt-auto">
          <div className="mb-2 text-xs uppercase text-gray-400 dark:text-gray-300 tracking-wider font-medium">Account</div>
          <form>
            <button className="flex h-[48px] w-full items-center justify-start gap-3 rounded-lg text-gray-600 dark:text-gray-300 p-3 text-sm font-medium transition-colors hover:bg-red-50 dark:hover:bg-red-600 dark:hover:text-white">
              <PowerIcon className="w-5 h-5" />
              <div>Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}