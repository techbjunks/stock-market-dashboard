import { TextInputProps, LABEL_POSITION } from './types';

const TextInput = ({
  label,
  name,
  value,
  style,
  onBlur,
  suffix,
  onFocus,
  prefix,
  onChange,
  onSubmit,
  autoFocus,
  testId,
  placeholder,
  labelPosition,
  containerStyle,
  type = 'text',
  validationMessage,
}: TextInputProps): JSX.Element => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit?.(event);
    }
  };
  return (
    <>
      {label && labelPosition === LABEL_POSITION.TOP && <label>{label}</label>}
      <div style={containerStyle}>
        {prefix && <span>{prefix}</span>}
        <input
          name={name}
          type={type}
          value={value}
          style={style}
          onBlur={onBlur}
          onFocus={onFocus}
          data-testid={testId ?? name}
          onKeyUp={handleKeyUp}
          autoFocus={autoFocus}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {suffix && <span>{suffix}</span>}
        {validationMessage && <label>{validationMessage}</label>}
      </div>
      {label && labelPosition === LABEL_POSITION.BOTTOM && (
        <label>{label}</label>
      )}
    </>
  );
};

export default TextInput;
