// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Label, Photo, ModelAndIndex, Rect } = initSchema(schema);

export {
  Label,
  Photo,
  ModelAndIndex,
  Rect
};