import * as React from "react";
import { Graph } from "../Graph";
import renderer from "react-test-renderer";

jest.mock("react-chartjs-2", () => ({
  Line: () => "Graph"
}));

describe("Graph", () => {
  let gamesPlayed = [
    { wpm: 80, mistakes: 3, accuracy: 100 },
    { wpm: 111, mistakes: 1, accuracy: 75 },
    { wpm: 96, mistakes: 7, accuracy: 83 },
    { wpm: 120, mistakes: 14, accuracy: 100 }
  ];

  it("renders a graph", () => {
    const tree = renderer.create(<Graph gamesPlayed={gamesPlayed} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
