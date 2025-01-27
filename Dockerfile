FROM node:12.13-alpine As development

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache curl bash openssh python udev ttf-freefont chromium git
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

RUN npm install

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
