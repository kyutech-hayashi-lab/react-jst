// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place, Event, Label, Photo, ModelAndIndex, Rect } = initSchema(schema);

export {
  Place,
  Event,
  Label,
  Photo,
  ModelAndIndex,
  Rect
};