import * as React from "react";
import { Board } from "../Board";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Board", () => {
  const setStart = jest.fn();
  const setCurrentInput = jest.fn();
  const setCurrentWordIndex = jest.fn();
  const setFinishTime = jest.fn();
  const endGame = jest.fn();
  const checkLetter = jest.fn();
  const updatePosition = jest.fn();
  const setCountUp = jest.fn();
  const setCountDown = jest.fn();
  const updateCountDown = jest.fn();

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
    checkLetter,
    incorrectLetters: 0,
    updatePosition,
    raceState: { players: [{ id: 1, position: 0 }] },
    ID: 1,
    countUp: false,
    countDown: false,
    setCountUp,
    setCountDown,
    updateCountDown,
    ...newProps
  });

  describe("the game before it's running", () => {
    it("renders the expected components", () => {
      const BoardComponent = mount(<Board {...buildProps()} />);

      expect(BoardComponent.find("Text").exists()).toBe(true);
      expect(BoardComponent.find("TypingBox").exists()).toBe(true);
      expect(BoardComponent.find("Race").exists()).toBe(true);
      expect(BoardComponent.find("Timer").exists()).toBe(true);

      expect(BoardComponent.find("GameStats").exists()).toBe(false);
    });
  });

  describe("the game once it's running", () => {
    it("renders the expected components", () => {
      const BoardComponent = mount(<Board {...buildProps({ start: true })} />);

      expect(BoardComponent.find("Text").exists()).toBe(true);
      expect(BoardComponent.find("TypingBox").exists()).toBe(true);
      expect(BoardComponent.find("Timer").exists()).toBe(true);
      expect(BoardComponent.find("Race").exists()).toBe(true);

      expect(BoardComponent.find("GameStats").exists()).toBe(false);
    });
  });

  describe("the game when it is finished", () => {
    it("renders the expected components", () => {
      const endGame = jest.fn().mockReturnValue(true);
      const BoardComponent = mount(
        <Board {...buildProps({ start: true, endGame: endGame })} />
      );

      expect(BoardComponent.find("GameStats").exists()).toBe(true);
      expect(BoardComponent.find("Race").exists()).toBe(true);

      expect(BoardComponent.find("Text").exists()).toBe(false);
      expect(BoardComponent.find("TypingBox").exists()).toBe(false);
      expect(BoardComponent.find("Timer").exists()).toBe(false);
    });
  });
});
