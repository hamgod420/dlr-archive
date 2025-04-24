# Use Node.js 18 Alpine for compatibility with pnpm and Next.js canary
FROM node:18-alpine

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml for caching
COPY package.json pnpm-lock.yaml ./

# Check if "react" is missing in package.json; if so, inject react and react-dom into dependencies.
RUN if ! grep -q '"react":' package.json; then \
      sed -i 's/"dependencies": {/"dependencies": {"react": "^18.2.0", "react-dom": "^18.2.0",/g' package.json; \
    fi

# Optionally, add other packages if needed (e.g., styled-jsx, @swc/helpers, @next/env)
RUN pnpm add styled-jsx @swc/helpers @next/env --save

# Install all dependencies using pnpm with shamefully-hoist to help with peer dependencies
RUN pnpm install --shamefully-hoist

# Create public directory for runtime config
RUN mkdir -p /app/public

# Copy the rest of your application code
COPY . .

# Build the Next.js project for production
RUN pnpm run build

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the Next.js production server
CMD ["pnpm", "start"]