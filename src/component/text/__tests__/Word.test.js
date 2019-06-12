import React from "react";
import Word from "../Word";
import renderer from "react-test-renderer";

describe("Word", () => {
  describe("generateLetters", () => {
    it("renders the expected word in black", () => {
      const tree = renderer
        .create(
          <Word
            wordIndex={0}
            word={"this"}
            currentWordSubstring={""}
            input={""}
            currentWordIndex={0}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the expected letters in green and black", () => {
      const tree = renderer
        .create(
          <Word
            wordIndex={0}
            word={"this"}
            currentWordSubstring={"th"}
            input={"th"}
            currentWordIndex={0}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the expected letters in red and black", () => {
      const tree = renderer
        .create(
          <Word
            wordIndex={0}
            word={"this"}
            currentWordSubstring={"th"}
            input={"mn"}
            currentWordIndex={0}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the expected letters in green and red", () => {
      const tree = renderer
        .create(
          <Word
            wordIndex={0}
            word={"this"}
            currentWordSubstring={"this"}
            input={"thmn"}
            currentWordIndex={0}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the past words as green", () => {
      const tree = renderer
        .create(
          <Word
            wordIndex={0}
            word={"text"}
            currentWordSubstring={""}
            input={""}
            currentWordIndex={1}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
