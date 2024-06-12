## build stage
FROM node:20.10-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

## run stage
FROM nginx:alpine
COPY --from=build /app/build /run
COPY nginx.conf /etc/nginx/nginx.conf