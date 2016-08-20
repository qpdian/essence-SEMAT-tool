# Essboard : Application  about Essence

## Install dependencies


```
meteor npm install

```

## Run the app

```
meteor

```

## Contents

This application use:

- TypeScript support and Angular 2 compilers for Meteor
- Angular2-Meteor
- Angular2 (core, common, compiler, platform)
- SASS support
- Angular Material

## Folder Structure

The folder structure is a mix between [Angular 2 recommendation](https://johnpapa.net/angular-2-styles/) and [Meteor 1.3 recommendation](https://guide.meteor.com/structure.html).

#### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular 2 application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components (in our example, the context is `demo`).


#### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

#### Both

Example for common files in our app, is the MongoDB collection we create - it located under `/both/collections/parties.ts` and it can be imported from both client and server code.


