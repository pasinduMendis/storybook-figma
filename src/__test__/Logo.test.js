import { Label,PropStyleStorie} from "../stories/Logo.stories";
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";

test("should Logo render",()=>{
    render(<Label {...Label.args} />);
    expect(screen.getByTestId("logo-test")).toHaveTextContent(Label.args.label);
})

test("should Logo propstyle render",()=>{
    render(<PropStyleStorie {...PropStyleStorie.args} />);
    expect(screen.getByTestId("logo-test")).toHaveStyle(PropStyleStorie.args.propStyles);
})


