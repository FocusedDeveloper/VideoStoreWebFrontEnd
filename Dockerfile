FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#Stage 2
FROM nginx:alpine
COPY src/nginx/ect/conf.d/default.conf /ect/nginx/conf/default.conf
COPY --from=node /app/dist/moviestore /usr/share/nginx/html
#CMD ["npm","start"]

