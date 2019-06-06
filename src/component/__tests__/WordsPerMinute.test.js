import React from 'react';
import WordsPerMinute from '../WordsPerMinute';
import renderer from 'react-test-renderer';

describe("WordsPerMinute", () => {
  it("renders the expected words per minute", () => {
    const tree = renderer.create(
      <WordsPerMinute
        wordsLength = {60}
        finishTime = {60}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
