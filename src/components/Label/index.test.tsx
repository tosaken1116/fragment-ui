import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Label } from ".";

describe("Label component", () => {
    it("renders with a class", () => {
        const { container } = render(<Label>Test</Label>);
        const div = container.firstChild as HTMLElement;
        expect(div.className).toBeTruthy(); // クラス名が存在するかどうかを確認
    });
    it("renders with different class for different color", () => {
        const { container: container1 } = render(
            <Label color="primary">Test</Label>
        );
        const div1 = container1.firstChild as HTMLElement;

        const { container: container2 } = render(
            <Label color="secondary">Test</Label>
        );
        const div2 = container2.firstChild as HTMLElement;
        if (div1 && div2) {
            expect(div1.className).not.toEqual(div2.className); // 異なるcolorプロパティの値に基づいて異なるクラス名が生成されるかどうかを確認
        } else {
            throw new Error("div1 or div2 is undefined");
        }
    });
    it("renders children correctly", () => {
        const { getByText } = render(<Label>Child Content</Label>);
        expect(getByText("Child Content")).toBeInTheDocument();
    });
});
