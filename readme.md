# A boilerplate in which you use webpack

## How to set up
```
npm install --save-dev webpack
npm install --save-dev webpack-dev-server
```

## Usage

### start webpack

start normally

```
./node_modules/.bin/webpack
```

start by using specific config file

```
./node_modules/.bin/webpack --config webpack.config.js
```

by using watch option, project is built and reloaded automatically if a file is updated

```
./node_modules/.bin/webpack --watch
```

### start webpack-dev-server

```
./node_modules/.bin/webpack-dev-server
```