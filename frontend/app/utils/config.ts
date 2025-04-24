// utils/config.ts

// Define a type for the global window object with our custom runtime config
declare global {
    interface Window {
      __RUNTIME_CONFIG__?: {
        API_URL?: string;
        ENV?: string;
      };
    }
  }
  
  /**
   * Gets the API base URL using the following priority:
   * 1. Runtime config injected by Docker (window.__RUNTIME_CONFIG__.API_URL)
   * 2. Next.js environment variable (process.env.NEXT_PUBLIC_API_URL)
   * 3. Derived from current browser location (for localhost)
   * 4. Server-side environment variables
   * 5. Default fallback to localhost:8000
   * 
   * @returns The API base URL to use for requests
   */
  export function getApiBaseUrl(): string {
    // Client-side logic
    if (typeof window !== 'undefined') {
      // First priority: Runtime config from Docker entrypoint
      if (window.__RUNTIME_CONFIG__?.API_URL) {
        console.log("Using runtime config API URL:", window.__RUNTIME_CONFIG__.API_URL);
        return window.__RUNTIME_CONFIG__.API_URL;
      }
      
      // Second priority: Next.js public environment variable
      if (process.env.NEXT_PUBLIC_API_URL) {
        console.log("Using NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
        return process.env.NEXT_PUBLIC_API_URL;
      }
      
      // Third priority: Derive from browser location
      const protocol = window.location.protocol;
      const hostname = window.location.hostname;
      
      // If we're on localhost, use port 8000, otherwise no port (for production)
      const port = hostname === 'localhost' ? ':8000' : '';
      const derivedUrl = `${protocol}//${hostname}${port}`;
      
      console.log("Using derived URL:", derivedUrl);
      return derivedUrl;
    }
    
    // Server-side logic
    const serverUrl = process.env.API_URL || 
                      process.env.NEXT_PUBLIC_API_URL || 
                      'http://127.0.0.1:8000';
    
    console.log("Server-side API URL:", serverUrl);
    return serverUrl;
  }
  
  /**
   * Gets the current environment (development, production, etc.)
   * 
   * @returns The current environment
   */
  export function getEnvironment(): string {
    if (typeof window !== 'undefined' && window.__RUNTIME_CONFIG__?.ENV) {
      return window.__RUNTIME_CONFIG__.ENV;
    }
    
    return process.env.NODE_ENV || 'development';
  }
  
  /**
   * Checks if we're running in a development environment
   * 
   * @returns True if in development mode
   */
  export function isDevelopment(): boolean {
    return getEnvironment() === 'development';
  }
  
  /**
   * Checks if we're running in a production environment
   * 
   * @returns True if in production mode
   */
  export function isProduction(): boolean {
    return getEnvironment() === 'production';
  }