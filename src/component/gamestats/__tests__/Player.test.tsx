import * as React from "react";
import { Player } from "../Player";
import renderer from "react-test-renderer";

describe("Player", () => {
  it("renders the described Player", () => {
    const tree = renderer
      .create(
        <Player
          name={"octane"}
          WPM={100}
          accuracy={75.0}
          wordsTyped={50}
          time={50}
          mistakes={3}
          place={0}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
