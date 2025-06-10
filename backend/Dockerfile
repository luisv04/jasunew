FROM node:18-alpine
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar archivos del proyecto
COPY . .

# Exponer puerto
EXPOSE 3000

# Iniciar aplicación
CMD ["npm", "start"] 