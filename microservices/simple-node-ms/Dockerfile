FROM node:16-slim
WORKDIR /app
COPY . .
RUN npm install --production

EXPOSE 8081
CMD [ "node", "index.js" ]
