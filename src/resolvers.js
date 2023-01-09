import * as Query from './resolvers/Query.js';
import * as User from './resolvers/User.js';
import * as Report from './resolvers/Report.js';
import * as Mutation from './resolvers/Mutation.js';
import { DateTime } from './resolvers/DateTime.js';

export const resolvers = {
  Query,
  Mutation,
  User,
  Report,
  DateTime,
}