import React from 'react';
import Game from '../Game';
import renderer from 'react-test-renderer';

describe("Game", () => {
  it("renders the game", () => {
    const tree = renderer.create(<Game/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
