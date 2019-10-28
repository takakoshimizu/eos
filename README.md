# eos
A simple React application to access and display the head of the EOSIO blockchain.

Live demo: https://takakoshimizu.github.io/eos/

## Features
 - Retrieve the 10 most recent blocks from the head of the blockchain.
 - Display those blocks with basic information and the ability to view the entire block as JSON.
 - Utilizes React/Redux with hooks for interactions.
 - Internationalization-ready with LinguiJS.
 - Theme-capable with styled-components. Is able to change between dark and light themes on the fly.
 - Written with minimal moving parts in a functional style.

## Installation
 - Clone this repository and enter the directory via terminal.
 - Run `yarn` to install dependencies.
 - Run `yarn compile` to compile language catalogs.

## To run
 - Run `yarn start` to run a development server.

## To compile for deployment
 - Run `yarn build`
 - Copy files from `./dist` for deployment.

## To run tests
 - Run `yarn test` for Jest output.
