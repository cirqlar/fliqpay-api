# Fliqpay API

This is a simple proxy server to add an API to requests before forwarding them to the [fixer api](fixer.io). The api runs on heroku here: [https://cirqlar-fliqpay.herokuapp.com/](https://cirqlar-fliqpay.herokuapp.com/)

## Installation

### Clone the source code 
```bash
git clone https://github.com/cirqlar/fliqpay-api.git
```
### Install dependencies
_Note: Ensure you have changed into the cloned directory before you run this command_
```bash
npm install
```

### Start development server

Replace `YOUR_API_KEY` with your [fixer](fixer.io) api key. Other environment variables you can set are: 
- `PORT`: the port the server will run on. Defaults to `8000`
- `CORS_HOSTS`: a comma separated list of origins that should be allowed through CORS, eg: `"localhost:3000, cirqlar.github.io"`. The `*` character can be used as a wildcard. __NB: The space after the comma is important__. Defaults to `"http://localhost:3000"`
```bash
API_KEY=YOUR_API_KEY npm start
```
You can now view the app on [http://localhost:8000](http://localhost:8000). (change port if you set a different one);