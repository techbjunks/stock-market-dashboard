import{ ChangeEvent, KeyboardEvent } from 'react';
import { TextInputProps, LABEL_POSITION } from './types';

const TextInput = ({
  label,
  name,
  value,
  onBlur,
  suffix,
  onFocus,
  prefix,
  onChange,
  onSubmit,
  autoFocus,
  placeholder,
  labelPosition,
  type = 'text',
  validationMessage,
}: TextInputProps): JSX.Element => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <>
      {label && labelPosition === LABEL_POSITION.TOP && <label>{label}</label>}
      <div>
        {prefix && <span>{prefix}</span>}
        <input
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyUp={handleKeyUp}
          autoFocus={autoFocus}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {suffix && <span>{suffix}</span>}
      </div>
      {label && labelPosition === LABEL_POSITION.BOTTOM && <label>{label}</label>}
      {validationMessage && <label>{validationMessage}</label>}
    </>
  );
};

export default TextInput;
