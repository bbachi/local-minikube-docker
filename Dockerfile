FROM node:slim

WORKDIR /usr/home

COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]