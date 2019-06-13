import React from "react";
import Word from "../Word";
import renderer from "react-test-renderer";

describe("Word", () => {
  describe("generateLetters", () => {
    it("renders the expected word in black", () => {
      const tree = renderer
        .create(
          <Word
            onCurrentWord={true}
            onPastWords={false}
            word={"this"}
            currentWordSubstring={""}
            input={""}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the expected letters in green and black", () => {
      const tree = renderer
        .create(
          <Word
            onCurrentWord={true}
            onPastWords={false}
            word={"this"}
            currentWordSubstring={"th"}
            input={"th"}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the expected letters in red and black", () => {
      const tree = renderer
        .create(
          <Word
            onCurrentWord={true}
            onPastWords={false}
            word={"this"}
            currentWordSubstring={"th"}
            input={"mn"}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the expected letters in green and red", () => {
      const tree = renderer
        .create(
          <Word
            onCurrentWord={true}
            onPastWords={false}
            word={"this"}
            currentWordSubstring={"this"}
            input={"thmn"}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the past words as green", () => {
      const tree = renderer
        .create(
          <Word
            onCurrentWord={false}
            onPastWords={true}
            word={"text"}
            currentWordSubstring={""}
            input={""}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
