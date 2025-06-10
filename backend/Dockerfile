FROM node:18-alpine
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar archivos del proyecto
COPY . .

# Variables de entorno
ENV NODE_ENV=development
ENV PORT=3000
ENV FRONTEND_URL=http://localhost:4200
ENV GOOGLE_API_KEY=
ENV OPENAI_API_KEY=
ENV N8N_WEBHOOK_URL=
ENV SHEET_ID=
ENV DB_USER=
ENV DB_PASS=
ENV NG_APP_API_URL=http://localhost:3000/api
ENV NG_APP_GOOGLE_CLIENT_ID=
ENV NG_APP_ANALYTICS_ID=

# Exponer puerto
EXPOSE 3000

# Iniciar aplicación
CMD ["npm", "start"] 