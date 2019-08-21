import * as React from "react";
import { Game } from "../Game";
import renderer from "react-test-renderer";

describe("Game", () => {
  let game = {
    created_at: "Monday",
    time: 3,
    wpm: 15,
    accuracy: 100,
    mistakes: 0,
    words_typed: 4,
    letters_typed: 20
  };

  it("renders a game", () => {
    const tree = renderer.create(<Game game={game} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
