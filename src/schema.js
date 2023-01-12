// Build a graphql schema using the GraphQL schema language based on the prisma schema 

import { gql } from 'apollo-server-express';

export const typeDefs = gql`

scalar DateTime

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  dateOfBirth: DateTime!
  avatarUrl: String
  qualification: Qualification!
  reports: [Report!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Report {
  id: ID!
  longitude: Float!
  latitude: Float!
  radius: Int
  description: String
  statusCategory: StatusCategory
  reportCategory: ReportCategory
  user: User
  userId: Int
  imageUrl: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

# Queries for search and filter reports and users

type Query {
  test: String
  users: [User!]
  reports: [Report!]
  user(id: ID!): User
  report(id: ID!): Report
  usersSearch(search: UsersSearchInput): [User!]
  reportsSearch(search: ReportsSearchInput): [Report!]
  usersFilter(filter: UsersFilterInput): [User!]
  reportsFilter(filter: ReportsFilterInput): [Report!]
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createReport(data: ReportCreateInput!): Report!
  updateUser(id: ID!, data: UserCreateInput!): User!
  updateReport(id: ID!, data: ReportCreateInput!): Report!
  deleteUser(id: ID!) : User!
  deleteReport(id: ID!): Report!
}

input UsersSearchInput {
  id: ID
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  dateOfBirth: DateTime
  qualification: Qualification
  createdAt: DateTime
  updatedAt: DateTime
}

input ReportsSearchInput {
  id: ID
  longitude: Float
  latitude: Float
  radius: Int
  description: String
  statusCategory: StatusCategory
  reportCategory: ReportCategory
  userId: Int
  createdAt: DateTime
  updatedAt: DateTime
}

input UsersFilterInput {
  firstNameIn: [String!]
  lastNameIn: [String!]
  qualificationIn: [Qualification!]
  phoneIn: [String!]
  firstNameContains: String
  lastNameContains: String
  phoneContains: String
}

input ReportsFilterInput {
  longitudeGreaterThan: Float
  longitudeLessThan: Float
  latitudeGreaterThan: Float
  latitudeLessThan: Float
  statusCategoryIn: [StatusCategory!]
  reportCategoryIn: [ReportCategory!]
  descriptionContains: String
  userIdIn: [Int!]
  createdBefore: DateTime
  createdAfter: DateTime
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  dateOfBirth: String!
  avatarUrl: String!
  qualification: Qualification!
}

input ReportCreateInput {
  longitude: Float!
  latitude: Float!
  description: String!
  radius: Int!
  statusCategory: StatusCategory!
  reportCategory: ReportCategory!
  userId: Int!
  imageUrl: String
}

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