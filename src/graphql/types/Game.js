export default `

<<<<<<< HEAD
=======
    input GameInput {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        price: Float!
    }

>>>>>>> 98f6a10ef544fe085711540cf4f63cfd1b8d41f3
    type Game {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        price: Float!
    }

    type Query {
        game(_id: String!): Game
        games: [Game]
    }

    type Mutation {
        addGame(name: String!, description: String!, imageUrl: String!, price: Float!): Game
        deleteGame(_id: String!): Game
        editGame(_id: String!, name: String, description: String, imageUrl: String, price: Float): Game
    }

`