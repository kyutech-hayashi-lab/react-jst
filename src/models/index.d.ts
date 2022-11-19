import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEvent = {
  readonly id: string;
  readonly user: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly imagePath?: string | null;
  readonly place: Place;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventPlaceId: string;
}

type LazyEvent = {
  readonly id: string;
  readonly user: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly imagePath?: string | null;
  readonly place: AsyncItem<Place>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventPlaceId: string;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event, EventMetaData>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

type EagerPlace = {
  readonly id: string;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly postCode: string;
  readonly address: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlace = {
  readonly id: string;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly postCode: string;
  readonly address: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Place = LazyLoading extends LazyLoadingDisabled ? EagerPlace : LazyPlace

export declare const Place: (new (init: ModelInit<Place, PlaceMetaData>) => Place) & {
  copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}