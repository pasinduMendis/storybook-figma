import { DefaultType} from "../../stories/pagesStorie/myPage.stories";
import {fireEvent, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";

test("should Logo render",()=>{
    render(<DefaultType {...DefaultType.args} />);

    // Assert that the logo component is rendered
  expect(screen.getByText('MY LOGO')).toBeInTheDocument();

  // Assert that the header component is rendered
  expect(screen.getByText('MY HEADER')).toBeInTheDocument();

  // Assert that the button component is rendered
  expect(screen.getByRole('button', { name: 'GET STARTED' })).toBeInTheDocument();
});



test('should call handleClick when button is clicked', () => {

    // Render the mypge 
        render(<DefaultType {...DefaultType.args}/>)
  
    // Simulate a button click
    fireEvent.click(screen.getByRole('button'));
  
    // Expect handleClick to be called
    expect(screen.getByText('button working')).toBeInTheDocument();
  });




