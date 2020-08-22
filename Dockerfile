FROM mhart/alpine-node:10.19

WORKDIR /src

COPY public		    /src/public
COPY node_modules	/src/node_modules
COPY server.js		/src/server.js

EXPOSE 3030

CMD [ "node", "server.js" ] 
