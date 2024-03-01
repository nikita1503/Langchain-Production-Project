FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

ENV PATH /frontend/node_modules/.bin:$PATH
COPY package.json package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts
RUN npm install -g nodemon

COPY . ./

# CMD ["npm", "run", "dev"]
CMD ["nodemon", "--exec", "npm", "run", "dev"]