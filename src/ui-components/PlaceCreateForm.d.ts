/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlaceCreateFormInputValues = {
    name?: string;
    latitude?: number;
    longitude?: number;
};
export declare type PlaceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaceCreateFormOverridesProps = {
    PlaceCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    latitude?: FormProps<TextFieldProps>;
    longitude?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaceCreateFormProps = React.PropsWithChildren<{
    overrides?: PlaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlaceCreateFormInputValues) => PlaceCreateFormInputValues;
    onSuccess?: (fields: PlaceCreateFormInputValues) => void;
    onError?: (fields: PlaceCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlaceCreateFormInputValues) => PlaceCreateFormInputValues;
    onValidate?: PlaceCreateFormValidationValues;
}>;
export default function PlaceCreateForm(props: PlaceCreateFormProps): React.ReactElement;
