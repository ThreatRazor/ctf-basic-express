# Basic CTF Challenge

## Challenge Description
This challenge involves a Node.js application that allows users to create accounts. The application has a feature that allows users to create admin accounts, but only if they have a valid invite code. The challenge is to find a way to create an admin account without a valid invite code.

## Installation
To install the application, follow these steps:

1. Install Node.js and npm.
2. Clone the repository.
3. Run `npm install` to install the dependencies.

## Usage
To start the application, run `npm start`. The application will start listening on port 5001.

To create a user account, send a POST request to /api/createUser with a JSON payload containing the user's information. To create an admin account, set the isAdmin property to true and include an inviteCode property with a valid invite code.
