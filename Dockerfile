FROM node:12.16.1-alpine3.9

# Set a working directory
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

# Install Node.js dependencies
RUN yarn 
COPY . .
# Copy application files
RUN yarn run build --release --verbose 

# Set permissions for "node" user
RUN chown -R node:node /usr/src/app
RUN chmod 755 /usr/src/app

# Run the container under "node" user by default
USER node

# Set NODE_ENV env variable to "production" for faster expressjs
ENV NODE_ENV production

CMD [ "node", "build/server.js" ]
