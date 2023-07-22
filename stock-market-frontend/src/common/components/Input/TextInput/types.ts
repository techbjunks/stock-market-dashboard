export enum LABEL_POSITION {
    TOP = 'top',
    BOTTOM = 'bottom',
}

export interface TextInputProps {
    name?: string,
    type?: string,
    value: string,
    label?: string,
    suffix?: string,
    prefix?: string,
    autoFocus?: boolean,
    onBlur?: () => void,
    placeholder?: string,
    validationMessage?: string,
    onFocus?: () => React.FocusEvent,
    labelPosition?: LABEL_POSITION.TOP | LABEL_POSITION.BOTTOM,
    onSubmit?: (e:   React.KeyboardEvent<HTMLInputElement>) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
} 
 