import { useState } from "react";
import FlexBox from "../Box/Flex";
import ErrorBoundary from "../../ui/ErrorBoundary";
import { SelectContainer, SelectInput, DropdownMenu } from "./styled";

interface option {
  label: string;
  value: string | number;
  isSelected?: boolean;
}

interface SelectProps {
  options: option[];
  defaultValue?: option[];
  isMultiSelect?: boolean;
  placeholder?: string;
  testId?: string
  onChange: (updatedValues: [] | string) => void;
}

const transformedInput = (options: option[], values?: option[]): option[] => {
  if (!values || values.length === 0) {
    return options.map((item: option) => ({ ...item, isSelected: false }));
  }

  return options.map((item: option) => {
    const foundOption = values.find(
      (valueItem: option) => valueItem.value === item.value
    );
    item.isSelected = !!foundOption;
    return item;
  });
};

const SelectComponent = ({
  options,
  testId,
  onChange,
  placeholder,
  defaultValue,
  isMultiSelect = false,
}: SelectProps): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectOptions, setSelectedOptions] = useState<option[] | option>(
    isMultiSelect
      ? defaultValue
        ? transformedInput(options, defaultValue)
        : transformedInput(options)
      : transformedInput(options)
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };
  
  const updateSelectedItems = (index: number): void => {
    const updatedArray = structuredClone(selectOptions);
    updatedArray[index].isSelected = !updatedArray[index].isSelected;
    setSelectedOptions(updatedArray);
    onChange(updatedArray);
  };

  return (
    <ErrorBoundary>
      {isMultiSelect ? (
        <SelectContainer>
          <SelectInput
            onClick={() => setIsDropdownOpen((previousValue) => !previousValue)}
          ></SelectInput>
          {isDropdownOpen && (
            <DropdownMenu data-testid={testId}>
              {Array.isArray(selectOptions) &&
                selectOptions.map((item, index) => {
                  return (
                    <FlexBox gap="8px">
                      <input
                        type="checkbox"
                        key={item.label}
                        checked={item.isSelected}
                        onChange={() => updateSelectedItems(index)}
                      />
                      <div>{item.label}</div>
                    </FlexBox>
                  );
                })}
            </DropdownMenu>
          )}
        </SelectContainer>
      ) : (
        <SelectContainer>
          <SelectInput onChange={handleChange}>
            <option value="" disabled selected>
              {placeholder ? placeholder : "Select your option"}
            </option>
            {selectOptions.map((item) => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </SelectInput>
        </SelectContainer>
      )}
    </ErrorBoundary>
  );
};

export default SelectComponent;

/**
 * Good to have features
 * 
 * autoFocus
 * onChange
 * onFocus
 * onBlur
 * testID
 * 
 * Validation props
 * 
 * isRequired
 * validationState
 * helpText
 * errorText
 * 
 * Improvements
 * 
 * CSS for Multiselect can be improved here
 * Padding , Margin
 */