# state-management-app
The has a vanilla javascript state management library with a demo app. 
There is a **React** App that uses **Redux**, **React-Redux**, and **Redux Thunk**.

The goal is to use this application as a reference to better implement state management in **React** applications using **Redux**. 

1. In **index.js** all the **library** `createStore` function is at the top of the file from lines 1 - 38.
2. Also in **index.js** the Demo **app** code is from line 39 to 152
3. Finally in **index.js** from lines 154 - 261 there is a sample of how to run the app. 
4. In **actions.md** this file explains and gives an example of an **acton** and how to use them to handle them through your applicaiton. 
5. In **pureFunctions.md** this file explains and gives example of how to create **pure functions** for your reducers
6. In **reducerComposition.md** this file explains and give example of **Normalizing** the **Redux Store**
7. In **react-redux.md** Documentation on how to implement the **react-redux** library. 
8. In **index-custom-state-library.html** I UI version of the demo app can be executed in a browser. 
9. In **index-with-redux.html** We remove the `createStore` function and replace it with `Redux.createStore` from **Redux** to prove that the libraries are essentially the same. 
10. In **index-with-only-react-redux.html** transitions the demo html page to a **React** app
11. In **index-with-react-redux-and-context-custom-connect.html** a vanilla version of the `connect` High Order Component function is implemented. 
12. In **index-with-react-redux-connect.html** the `connect` High Order Component from **React Redux** replace the vanilla version of the `connect`. 
