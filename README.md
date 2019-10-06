This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run in /app: 

npm i
npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------

UI kit: https://ant.design

Inclusion 
import 'antd/dist/antd.css';

An enterprise-class UI design language for web applications.
A set of high-quality React components out of the box.
Written in TypeScript with complete defined types.
The whole package of development and design resources and tools.

Redux-saga : https://redux-saga.js.org/

Library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

Redux: https://redux.js.org/

React-Router: https://github.com/ReactTraining/react-router

Firebase: https://firebase.google.com/
    
    Password-Based Accounts: https://firebase.google.com/docs/auth/web/password-auth
    Firebase Authentication: https://firebase.google.com/docs/auth
    Add data to Cloud Firestore: https://firebase.google.com/docs/firestore/manage-data/add-data
    Get data with Cloud Firestore: https://firebase.google.com/docs/firestore/query-data/get-data
    Update data with Cloud Firestore: https://firebase.google.com/docs/database/web/read-and-write

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------

Project structure:
 
    Style:
    Main page structure layout: flex
    All component style files are included in : src/index.css
    The main variable color polyester is assembled in containers/style/variable.css
    The main style css /style/app.css

    Containers:
         - Main (list with the ability to edit delete delete read),
         important props: mainMedicationSheet (obj), getDataAll (func)
         - Upsert (form CRUD / 2 steps)
         Important props: mainMedicationSheet (obj) , selectedItem (str)
         - Routes
            Private page: 
                Main 
                Upsert 
                important props: loginStatus (true/false)
            Page: Login   
         - Login
        important props: loginStatus (true/false), loginAuthorization (func)
         - Loader
        important props: loaderStatus (true/false)
    
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
