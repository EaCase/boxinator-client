# Boxinator client

This repository contains client for the Boxinator application. Client utilizes React and project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was made for the Noroff Accelerate case period task and project also includes server which can be found at [boxinator-server](https://github.com/EaCase/boxinator-server).

# Local development

### Requirements

You will need to have [Node](https://nodejs.org/en) and npm (Node Package Manager) on your machine. Usually npm is included in Node installation but check the corresponding site how to setup them in your machine.

### Get project running

- Clone or fork this repository
- `npm install` in project root to install dependencies
- `npm start` in project root to start project in development mode
- Once compiling finishes site will be accessible in `localhost:3000`

### Environment variables

- `REACT_APP_API_URL` * not required for local development

Api url defaults to `http://localhost:8080/` when environment variable is not set.

# Deployment

### Currently

Client has been deployed with [Vercel](https://vercel.com). For the time being application can be found at [Boxinator](https://boxinator-client.vercel.app/).

### Notes about deployment

For the deployment you will need to set environment variable for the server address. Depending on your setup you might want to have `.env` file in your project root with `REACT_APP_API_URL=apiurl` set to your API.

You can utilize [Vercel](https://vercel.com) or [Railway](https://railway.app/) for rather effortless deployment. Please refer to each site's guides how to handle environment variables in their platforms.


## Contributors

Mika Hoffren, Aino Ylä-Outinen


## License: MIT

Copyright 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
