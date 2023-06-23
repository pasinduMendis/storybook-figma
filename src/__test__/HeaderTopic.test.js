import { Label,PropStyleStorie} from "../stories/HeaderTopic.stories";
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";


test("should Header render",()=>{
    render(<Label {...Label.args} />);
    expect(screen.getByTestId("headerTopic-test")).toHaveTextContent(Label.args.label);
})

test("should Header propstyle render",()=>{
    render(<PropStyleStorie {...PropStyleStorie.args} />);
    expect(screen.getByTestId("headerTopic-test")).toHaveStyle(PropStyleStorie.args.propStyles);
})


