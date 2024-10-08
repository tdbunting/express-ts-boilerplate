## Prerequisites
Ensure you have the following packages installed globally:

* Node/NPM
* [Netlify CLI](https://docs.netlify.com/cli/get-started/)
### Getting Started
- Copy ```.env.sample``` to ```.env``` and update with appropriate values. 
- Run ```npm install```
#### Running Locally
- ```SERVER_ENV``` in ```.env``` needs to be set to ```local```
- Create a folder called `/certificates` at the app root level
- Add ssl keys under `certificates`. Instructions to create key files can be found in this article: [https://medium.com/responsetap-engineering/nextjs-https-for-a-local-dev-server-98bb441eabd7](https://medium.com/responsetap-engineering/nextjs-https-for-a-local-dev-server-98bb441eabd7)
    - The command in the article will create two files: `localhost.key` and `localhost.crt`
    - Move these two files into `/certificates`
- run `npm start` . This will use nodemon and start a local server on `https://localhost:{port}`

#### Running Netlify Preview
- Remove ```SERVER_ENV``` from ```.env```
- ```npm run preview```