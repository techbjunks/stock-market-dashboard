import { render, screen } from "@testing-library/react";
import Button from "../../../../common/components/Button";
import { ButtonProps } from "../../../../common/components/Button/types";

describe("Button", () => {
  const renderButton = (props: ButtonProps) => {
    return render(<Button {...props}>{props.children}</Button>);
  };

  test("should render a button with the correct props", () => {
    const onClickMockFn = () => {}; // TODO : Jest setup needs to be checked pass a ref for jest.fn()
    const props = {
      onClick: onClickMockFn,
      variant: "primary",
      children: "Clicked",
    };
    renderButton(props);
    const buttonElement = screen.getByText(props.children)
    expect(buttonElement).toBeInTheDocument();
    // await userEvent.click(buttonElement);
    // expect(onClickMockFn).toHaveBeenCalled();
  });
});
