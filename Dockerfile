FROM node:16.10.0

COPY . .

WORKDIR ./TIC-TAC-TOE
RUN pwd
RUN ls
RUN npm install
EXPOSE 3100
CMD ["npm", "start"]
