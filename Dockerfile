FROM node:12.16.1-alpine3.9 AS BASE
ENV GENERATE_SOURCEMAP false

# Set a working directory
WORKDIR /usr/src/app

# Set permissions for "node" user
RUN chown -R node:node /usr/src/app
RUN chmod 755 /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

FROM BASE AS BUILD
RUN yarn
COPY . .
RUN yarn run build --release --verbose


# Set NODE_ENV env variable to "production" for faster expressjs
FROM BASE as RELEASE
ENV NODE_ENV production

RUN yarn install --production-only
COPY --from=BUILD /usr/src/app/build ./build

RUN yarn cache clean

COPY public ./public
COPY startServer.sh .

# Run the container under "node" user by default
USER node

CMD [ "sh", "startServer.sh" ]
