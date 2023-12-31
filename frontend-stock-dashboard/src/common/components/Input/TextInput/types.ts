export enum LABEL_POSITION {
  TOP = "top",
  BOTTOM = "bottom",
}

export interface TextInputProps {
  name: string;
  type?: string;
  value: string;
  label?: string;
  suffix?: string;
  prefix?: string;
  testId?: string;
  autoFocus?: boolean;
  onBlur?: () => void;
  placeholder?: string;
  validationMessage?: string;
  autocomplete?: 'ON' | 'OFF';
  onFocus?: () => React.FocusEvent;
  style?: React.CSSProperties | undefined;
  containerStyle?: React.CSSProperties | undefined;
  labelPosition?: LABEL_POSITION.TOP | LABEL_POSITION.BOTTOM;
  onSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
