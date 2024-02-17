const typeDefs = `
type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    orders: [Order]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type OrderItem {
    _id: ID
    order: Order
    product: Product
    quantity: Int
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    purchaseQuantity: Int
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }

  type Query {
    me: User
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    orders: [Order!]!
  }

  query GetUserProfile {
    user {
      
      orders {
        _id
        purchaseDate
        products {
          _id
          name
        }
      }
    }
  }

`;

module.exports = typeDefs;
