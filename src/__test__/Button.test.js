import { Label,PropStyleGreenBackgroundAndFullWidth,Large,Small } from "../stories/Button.stories";
import {fireEvent, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";


test("should button render",()=>{
    render(<Label label={"test me"} />);
    expect(screen.getByRole("button")).toHaveTextContent(/test me/i);
})

test("should styleProp render",()=>{
    render(<PropStyleGreenBackgroundAndFullWidth {...PropStyleGreenBackgroundAndFullWidth.args}/>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle('background: green');
})

test("should size large render",()=>{
    render(<Large {...Large.args}/>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle('padding: 0.75rem 1.5rem');
})

test("should sime sm render",()=>{
    render(<Small {...Small.args}/>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle('padding: 0.375rem 0.75rem');
})

test('should call handleClick when button is clicked', () => {
    // Mock handleClick function
    const handleClick = jest.fn();
  
    // Render the ButtonComponent with the mocked handleClick
    const { getByText } = render(
      <PropStyleGreenBackgroundAndFullWidth label="Test Button" handleClick={handleClick} />
    );
  
    // Simulate a button click
    fireEvent.click(getByText('Test Button'));
  
    // Expect handleClick to be called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });