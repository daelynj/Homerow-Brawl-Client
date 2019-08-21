import * as React from "react";
import { GameStats } from "../GameStats";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const updateStats = jest.fn();
const endGame = jest.fn();

describe("GameStats", () => {
  const buildProps = (newProps = {}) => ({
    words: "this is text that is being written in a typing test".split(" "),
    finishTime: 15,
    incorrectLetters: 3,
    ID: 5,
    updateStats,
    endGame,
    statsState: {
      type: "stats",
      players: [
        {
          id: 1,
          name: "octane",
          words_typed: 11,
          wpm: 120,
          time: 7,
          mistakes: 3,
          accuracy: 86.0
        }
      ]
    },
    ...newProps
  });

  it("renders the expected game stats", () => {
    const tree = renderer.create(<GameStats {...buildProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders two stat blocks", () => {
    const payload = {
      type: "stats",
      players: [
        {
          id: 1,
          name: "octane",
          words_typed: 11,
          wpm: 120,
          time: 7,
          mistakes: 3,
          accuracy: 86.0
        },
        {
          id: 2,
          name: "dominus",
          words_typed: 11,
          wpm: 60,
          time: 14,
          mistakes: 0,
          accuracy: 100.0
        }
      ]
    };

    const tree = renderer
      .create(<GameStats {...buildProps({ statsState: payload })} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
