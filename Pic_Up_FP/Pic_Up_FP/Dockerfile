# use node.
FROM node:current-alpine
# use or make a new dir to store the container.
WORKDIR /app

# copy contents of package.json into the dir.
COPY package*.json ./
RUN yarn install

# copy everything into container.
COPY . .
# run the app.
CMD ["yarn", "start"]