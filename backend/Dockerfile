FROM node:18-alpine
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar archivos del proyecto
COPY . .

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000
ENV FRONTEND_URL=http://localhost:4200

# Exponer puerto
EXPOSE 3000

# Iniciar aplicación
CMD ["npm", "start"] 