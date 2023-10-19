import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerModelAndIndex = {
  readonly name: string;
  readonly index: number;
}

type LazyModelAndIndex = {
  readonly name: string;
  readonly index: number;
}

export declare type ModelAndIndex = LazyLoading extends LazyLoadingDisabled ? EagerModelAndIndex : LazyModelAndIndex

export declare const ModelAndIndex: (new (init: ModelInit<ModelAndIndex>) => ModelAndIndex)

type EagerRect = {
  readonly width?: number | null;
  readonly height?: number | null;
}

type LazyRect = {
  readonly width?: number | null;
  readonly height?: number | null;
}

export declare type Rect = LazyLoading extends LazyLoadingDisabled ? EagerRect : LazyRect

export declare const Rect: (new (init: ModelInit<Rect>) => Rect)

type LabelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}



type EagerLabel = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLabel = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Label = LazyLoading extends LazyLoadingDisabled ? EagerLabel : LazyLabel

export declare const Label: (new (init: ModelInit<Label, LabelMetaData>) => Label) & {
  copyOf(source: Label, mutator: (draft: MutableModel<Label, LabelMetaData>) => MutableModel<Label, LabelMetaData> | void): Label;
}

type EagerPhoto = {
  readonly id: string;
  readonly name: string;
  readonly rect: Rect;
  readonly size: number;
  readonly key?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly id: string;
  readonly name: string;
  readonly rect: Rect;
  readonly size: number;
  readonly key?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo>) => MutableModel<Photo> | void): Photo;
}