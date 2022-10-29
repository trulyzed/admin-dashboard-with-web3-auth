**How to run the project**

First, install dependencies

    yarn install
   

There are two ways to run the application. Development mode and production mode.

To run in development mode

    yarn start
  
To run in optimized/production mode

    yarn serve
    
Finally, visit the link in the browser
http://localhost:3000/

---
To run tests

    yarn test

---
**Testing guidelines**

 - Write some unit testing in the **\_\_tests\_\_** folder. [Jest](https://nextjs.org/docs/testing#jest-and-react-testing-library) is used for unit/integration testing
 - First write tests for all the components.
 - Use [Cypress](https://nextjs.org/docs/testing#cypress) for integration/end-to-end testing
 - Write page level tests in Cypress for integration testing
 - Do not write test cases with implementation details on mind
 - Official testing guidelines can be found [here](https://nextjs.org/docs/testing)

---
**Deployment guidelines**

 - The application is built with [Next.js](https://nextjs.org/). The application requires a node environment to run
 - Node version used: **v16.18.0**
 - This application can both be deployed in [SGS](https://nextjs.org/docs/advanced-features/static-html-export) and **SSR** modes
 - Official deployment instructions can be found [here](https://nextjs.org/docs/deployment)
 - Dockerization example file can be found [here](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
 - For SGS build, it is better to serve build files through a CDN for better performance

