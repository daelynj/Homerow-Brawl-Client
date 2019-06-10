import React from 'react';
import Board from '../Board';
import renderer from 'react-test-renderer';

describe("Board", () => {
  const setStart = jest.fn();
  const setCurrentInput = jest.fn();
  const setCurrentWordIndex = jest.fn();
  const setFinishTime = jest.fn();
  const checkWord = jest.fn();
  const endGame = jest.fn();

  const buildProps = (newProps = {}) => ({
    words: ["this", "is", "text"],
    start: false,
    setStart,
    currentWordSubstring: "",
    currentInput: "",
    setCurrentInput,
    currentWordIndex: 0,
    setCurrentWordIndex,
    endGame,
    finishTime: 0,
    setFinishTime,
    checkWord,
    ...newProps,
  });

  describe("the game before it's running", () => {
    it("renders the expected components", () => {
      const BoardComponent = renderer.create(<Board {...buildProps()}/>).toJSON();
      expect(BoardComponent).toMatchSnapshot();
    });
  });

  describe("the game once it's running", () => {
    it("renders the expected components", () => {
      const BoardComponent = renderer.create(<Board {...buildProps({start: true})}/>).toJSON();
      expect(BoardComponent).toMatchSnapshot();
    });
  });
  
  describe("the game when it is finished", () => {
    const endGame = jest.fn().mockReturnValue(true);

    it("renders the expected components", () => {
      const BoardComponent = renderer.create(<Board {...buildProps({start: true, endGame: endGame})}/>).toJSON();
      expect(BoardComponent).toMatchSnapshot();
    });
  });
});
