Example for wallabyjs issue # 2255: https://github.com/wallabyjs/public/issues/2255
Monorepo with both apollo (server) and reactjs (client) projects. `npx jest` executes but wallabyjs only seems to run the server tests.

```
git clone https://github.com/saltzmanjoelh/wallabyjs-2255.git &&
  cd wallabyjs-2255 &&
  npm install && 
  cd server && npm install &&
  cd ../client && npm install &&
  cd .. && npx jest
```