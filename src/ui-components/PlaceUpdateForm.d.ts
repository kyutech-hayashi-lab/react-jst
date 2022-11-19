/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Place } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlaceUpdateFormInputValues = {
    name?: string;
    latitude?: number;
    longitude?: number;
};
export declare type PlaceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaceUpdateFormOverridesProps = {
    PlaceUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    latitude?: FormProps<TextFieldProps>;
    longitude?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    place?: Place;
    onSubmit?: (fields: PlaceUpdateFormInputValues) => PlaceUpdateFormInputValues;
    onSuccess?: (fields: PlaceUpdateFormInputValues) => void;
    onError?: (fields: PlaceUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlaceUpdateFormInputValues) => PlaceUpdateFormInputValues;
    onValidate?: PlaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlaceUpdateForm(props: PlaceUpdateFormProps): React.ReactElement;
