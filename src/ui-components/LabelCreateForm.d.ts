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
export declare type LabelCreateFormInputValues = {
    name?: string;
};
export declare type LabelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabelCreateFormOverridesProps = {
    LabelCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabelCreateFormProps = React.PropsWithChildren<{
    overrides?: LabelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LabelCreateFormInputValues) => LabelCreateFormInputValues;
    onSuccess?: (fields: LabelCreateFormInputValues) => void;
    onError?: (fields: LabelCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LabelCreateFormInputValues) => LabelCreateFormInputValues;
    onValidate?: LabelCreateFormValidationValues;
} & React.CSSProperties>;
export default function LabelCreateForm(props: LabelCreateFormProps): React.ReactElement;
