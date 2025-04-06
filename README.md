# NetflixGpt

- Create React App 

    - install using vite
    `npm create vite@latest my-app -- --template react`

    - select package name

    -install parcel
    `npm install --save-dev parcel`
    
    -install compatible version of nodejs
    npm install node@version

    - install npm

    - Modify your vite.config.js

    ` import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import { webcrypto } from 'node:crypto';

    // Fix for crypto.getRandomValues error
    globalThis.crypto = webcrypto;

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react()],
    });`

    -run project
    `npm run dev`

- Configure TailwindCss
- install Router package 
 `npm i -D react-router-dom` 

# Feature
-Login/Sign Up
    - Sign In /Sign up From
    - redirection to Browser Page
-Browser(After authentication)
    - Header
    - Main Movie
        -Tailer in Background
        - Title & Description
        -MovieSuggestion
            -MovieLists * N
-NetflixGpt
    -Search Bar
    -Movie Suggestion

