import * as React from "react";
import { Letter } from "../Letter";
import renderer from "react-test-renderer";

describe("Letter", () => {
  it("renders the expected letter in black", () => {
    const tree = renderer
      .create(<Letter color={"black"} letter={"k"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
