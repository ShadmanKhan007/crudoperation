# crudoperation
# User CRUD Operations using useReducer and useContext

This repository demonstrates how to implement user CRUD (Create, Read, Update, Delete) operations using the `useReducer` and `useContext` hooks in React.


## Introduction

In many applications, managing user data is a common requirement. This project showcases an example of managing user data using the `useReducer` and `useContext` hooks, which are powerful state management tools provided by React.

The implementation includes a `UserContext` that stores the state and dispatch functions for managing user data, and a `UserCRUD` component that demonstrates how to perform CRUD operations (add, update, delete) on user data.

## Features

- Add a new user with a unique ID
- Update an existing user by ID
- Delete a user by ID

## Installation

1. Clone the repository:

git clone https://github.com/ShadmanKhan007/crudoperation.git

Change to the project directory:
bash
Copy code
cd crud
Install the dependencies:
bash
Copy code
## npm install
Usage
Start the development server:
bash
Copy code
 ## npm run dev
Open your web browser and visit http://localhost:5173/.

The page displays a user interface with buttons to perform CRUD operations:

Add User: Click this button to add a new user to the list.







Update User: Click this button to update an existing user's name.







Delete User: Click this button to delete a user from the list.







Users: The current list of users is displayed below these buttons.








Explore the code in the UserCRUD.js file to understand how the user CRUD operations are implemented using useReducer and useContext.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

Fork the repository.
Create a new branch: git checkout -b my-feature-branch.
Make your changes and commit them: git commit -am 'Add some feature'.
Push to the branch: git push origin my-feature-branch.
Submit a pull request.
License
This project is licensed under the MIT License.
