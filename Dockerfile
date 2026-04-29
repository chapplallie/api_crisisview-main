FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

# Copy all source files
COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
