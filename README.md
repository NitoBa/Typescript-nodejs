# Typescript, MongoDB and JWT

Studies in NodeJs, creating application (API) in typescript using MongoDB and JWT. Simple register system of users with authentication.

---

# ↓Technologies used

- NodeJs
- Typescript
- MongoDB
- Authentication JWT
- Express
- Design pattern (Service and Repository)
- [] Dependency Injection

# ↓ Quick Start

- clone this project or fork

```jsx
git clone https://github.com/NitoBa/Typescript-nodejs.git
```

- setup your mongo database

On this protect was used Mongodb Atlas

- install dependecies

```jsx
npm intall or yarn 
```

- Run the project with script created

```jsx
yarn dev or npm run dev
```

# ↓Services

- CreateUserService

Create a new user passing fields "username", "email" and "password" into request body

The user created on the database MongoDB own your password encrypted

- AuthenticationUserService

This Service will generate a token JWT for user with expiration of 24hrs

The token will used in others routes

- SessionService

Create a new session for user. This Service is similar to signIn.

The user should pass email and password on the resquest bodu. Once authenticated, he will receive a response of success.

# ↓Endpoints / Routes

- Create a new User in database

/users/singup   http method Post

- List all Users in database

/users/singin https method Post

- List all Users in database

/users http method Get
