import { gql } from 'apollo-server-express';
export const typeDefs = gql`

type User {
  id: ID
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  dateOfBirth: String
  avatarUrl: String
  qualification: Qualification
  reports: [Report!]
  createdAt: String
  updatedAt: String
}

type Report {
  id: ID
  longitude: Float
  latitude: Float
  radius: Int
  description: String
  statusCategory: StatusCategory
  reportCategory: ReportCategory
  user: User
  createdAt: String
  updatedAt: String
}

type Query {
  test: String
  users: [User!]
  reports: [Report!]
  user(id: ID!): User
  report(id: ID!): Report
  userReports(id: ID!): [Report!]
  reportUser(id: ID!): User!
}

# type Mutation {
#   createUser(data: UserCreateInput!): User!
#   createReport(data: ReportCreateInput!): Report!
# }

# input UserCreateInput {
#   firstName: String!
#   lastName: String!
#   email: String!
#   password: String!
#   phone: String!
#   dateOfBirth: String!
#   avatarUrl: String
#   qualification: String
# }

# input ReportCreateInput {
#   longitude: Float!
#   latitude: Float!
#   radius: Int!
#   description: String!
#   statusCategory: String
#   reportCategory: String
#   user: 
# }

enum Qualification {
  BASE
  ADMIN
}

enum ReportCategory {
  UNCLEAR
  OBSCURED
  MULTIPLE
  LARGE
  SMALL
}

enum StatusCategory {
  REPORTED
  REVIEWED
  NEUTRALIZED
  DISMISSED
  VERIFIED
  UNCERTAIN
}
`;
