import SideNav from '@/app/ui/dashboard/sidenav';
import { ThemeProvider } from '@/app/ui/theme-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}