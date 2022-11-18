// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Place } = initSchema(schema);

export {
  Event,
  Place
};