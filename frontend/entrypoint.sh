#!/bin/sh
# entrypoint.sh

# Create runtime config to inject environment variables
echo "window.__RUNTIME_CONFIG__ = {" > /app/public/runtime-config.js
echo "  API_URL: \"$API_URL\"," >> /app/public/runtime-config.js
echo "  ENV: \"$NODE_ENV\"" >> /app/public/runtime-config.js
echo "};" >> /app/public/runtime-config.js

# Execute the main command (usually next start)
exec "$@"