import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
    test('Check if project title is displayed', () => {
        render(<Navigation isIconVisible={false}/>);
        const text = screen.getByText('DAMAGE PREVENTION', {exact: false});
        expect(text).toBeInTheDocument();
    });

    test('Check if icon is being displayed when the flag isIconVisible is true', () => {
        render(<Navigation isIconVisible />);
        const images = screen.queryAllByRole('img');
        //having 2 img elements means that the logo and the icon are being displayed
        expect(images).toHaveLength(2);
    })
})