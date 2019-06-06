import React from 'react';
import Text from '../Text';
import renderer from 'react-test-renderer';

describe("Text", () => {
  it("renders the expected text", () => {
    const tree = renderer.create(
      <Text
        words = {["This", "is", "text"]}
        textToCompare = {""}
        input = {""}
        currentWord = {0}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
