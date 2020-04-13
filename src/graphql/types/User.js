export default `

    type User {
        _id: String!
        username: String!
        email: String!
        password: String!
<<<<<<< HEAD
=======
        games: [Game]
>>>>>>> 98f6a10ef544fe085711540cf4f63cfd1b8d41f3
    }

    type Query {
        user(_id: String!): User
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        deleteUser(_id: String!): User
<<<<<<< HEAD
        editUser(_id: String!, username: String, email: String, password: String): User
=======
        editUser(_id: String!, username: String, email: String, password: String, games: [GameInput]): User
>>>>>>> 98f6a10ef544fe085711540cf4f63cfd1b8d41f3
    }

`