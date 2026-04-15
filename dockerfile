# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build (compile TypeScript, generate Prisma client)
RUN npm run build --if-present || true

# Production stage
FROM node:20-slim

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./

RUN npm ci --only=production

# Copy built app from builder
COPY --from=builder /app/. .

EXPOSE 5015

ENV NODE_ENV=production

CMD ["node","server.js"]
