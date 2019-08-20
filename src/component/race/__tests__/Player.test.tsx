import * as React from "react";
import { Player } from "../Player";
import renderer from "react-test-renderer";

describe("Player", () => {
  it("renders the described Player", () => {
    const tree = renderer
      .create(<Player position={10} name={"octane"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
