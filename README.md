## Files/Compnonents

  # Compnonents
  - Header 
  - Auth
  - Todos

  ## Services
  - client
  - auth
  - todos

  ## Hooks
  - useTodo

  ## Other js files
  - App.js
  - index.js

## User Events

  # Sign in page
  - User chooses to sign in or sign up 
  - Enter email and password
  - click submit button/ redirected to todo page

  # Todo page
  - input for user to add new task
  - submit task button
  - on submit task is displayed with clickable checkbox
  
  # Header
  - when on todo page logout button is displayed/when clicked user is logged out and redirected to sign in page

## State

  # Auth component
  - email, setEmail
  - password, setPassword

  # Todo component
  - name, setName

  # UserContext
  - user, setUser

  # useTodo
  - todo, setTodo

## Header
- get user and setUser from useContext(UserContext);
- create handleLogOut function

## Todo
- import hook and get state from hook
- import useContext and get user from useContext(UserContext)
- create conditional that redirects user that isn't signed in
- create handleClick function that toggles todo from complete to incomplete 
- create handleNewTodo that displays new todo on click of add todo button

## Context
- creatContext
- create UserProvider function
- export both

## Services

  # auth
  - set up getUser, authUser and signout async functions

  # todos
  - set up getTodos, createTodo, toggleTodo async functions

## Hook
  # useItem
  - set up useTodo function with useEffect
  - import getTodos
  - set up fetch Todos async function in useEffect
  - return state

## App.js
- import components
- set up Switch/Route/paths
- get user from useContext(UserContext)
- create conditional Redirect for signed in/ signed out user

## Index.js
- import BrowserRouter 
- import UserProvider from UserContext
- wrap App component in BrowserRouter
- wrap BrowserRouter in UserProvider







