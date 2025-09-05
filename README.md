# Assignment: Build a RESTful API using Node.js and Express

This project implements the  routes for Performing Crud operation for sample user data.  
📂 GitHub Repo: [vjbravo123/RESTful-API-](https://github.com/vjbravo123/RESTful-API-.git)

## Tech
- Node.js + Express
- In-memory data array (resets on restart)
- Custom middlewares for logging and validation
- Centralized error handling

## Project Structure
```
node-rest-api-assignment/
├─ server.js
├─ package.json
├─ routes/
│  └─ users.js
└─ middleware/
   ├─ logger.js
   └─ validateUser.js
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the server:
   ```bash
   npm start    # starts on http://localhost:3000
   # or
   npm run dev  # with nodemon
   ```

## API Routes
- `GET /users` – Fetch all users
- `GET /users/:id` – Fetch user by ID
- `POST /user` – Create a new user (requires `firstName`, `lastName`, `hobby`)
- `PUT /user/:id` – Update an existing user (requires all three fields)
- `DELETE /user/:id` – Delete user by ID

### Sample User Payload
```json
{
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

## Example cURL Tests
Create a user:
```bash
curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d '{"firstName":"Anshika","lastName":"Agarwal","hobby":"Teaching"}'
```

Get all users:
```bash
curl http://localhost:3000/users
```

Get a user by id:
```bash
curl http://localhost:3000/users/1
```

Update a user:
```bash
curl -X PUT http://localhost:3000/user/1 -H "Content-Type: application/json" -d '{"firstName":"Anshika","lastName":"Agarwal","hobby":"Reading"}'
```

Delete a user:
```bash
curl -X DELETE http://localhost:3000/user/1
```

## Postman / Thunder Client
- Import the included **postman_collection.json** and run the requests.
- Add your own screenshots to your submission document after testing locally.
