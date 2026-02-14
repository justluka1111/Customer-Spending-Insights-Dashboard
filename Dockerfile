# Use Node 18 Alpine
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build app with Vite (no tsc)
RUN npm run build

# Expose port (Vite preview uses 4173 by default, you can change to 3000)
EXPOSE 4173

# Start preview server
CMD ["npm", "run", "preview"]