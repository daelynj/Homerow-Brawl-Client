import React from 'react';
import TextBox from '../TextBox';
import renderer from 'react-test-renderer';

describe("TextBox", () => {
  it("renders the expected text", () => {
    const tree = renderer.create(
      <TextBox
        text = {["This", "is", "text"]}
        textToCompare = {""}
        input = {""}
        currentWord = {0}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
