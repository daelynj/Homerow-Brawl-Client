import React from "react";
import GameStats from "../GameStats";
import renderer from "react-test-renderer";

describe("GameStats", () => {
  it("renders the expected game stats", () => {
    const tree = renderer
      .create(
        <GameStats
          words={"this is text".split(" ")}
          finishTime={60}
          incorrectLetters={3}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
