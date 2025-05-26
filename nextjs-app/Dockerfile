# 1. Use official Node.js image as base
FROM node:alpine AS base

# Set working directory
WORKDIR /app

# Copy only the package files for dependency installation
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else echo "No lock file found." && exit 1; \
  fi

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# 2. Production image
FROM node:alpine AS runner

# Set NODE_ENV
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy package.json and next build artifacts
COPY --from=base /app/package.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Optional: If you have server.js or middleware
# COPY --from=base /app/next.config.js ./next.config.js

# Expose the port Next.js runs on
EXPOSE 3000

# Run Next.js
CMD ["npm", "start"]