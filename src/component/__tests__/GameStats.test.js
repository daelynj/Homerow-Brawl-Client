import React from "react";
import GameStats from "../GameStats";
import renderer from "react-test-renderer";

describe("GameStats", () => {
  it("renders the expected game stats", () => {
    const tree = renderer
      .create(<GameStats wordsLength={60} finishTime={60} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
