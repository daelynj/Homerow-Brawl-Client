import * as React from "react";
import { TypingBox } from "../TypingBox";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TypingBox", () => {
  const onChange = jest.fn();
  const setStart = jest.fn();
  const setCurrentWordIndex = jest.fn();
  const checkLetter = jest.fn();

  const buildProps = (newProps = {}) => ({
    value: "",
    onChange,
    setStart,
    word: "this",
    setCurrentWordIndex,
    currentWordIndex: 0,
    checkLetter,
    countUp: false,
    ...newProps
  });

  it("renders an input field", () => {
    const TypingBoxComponent = renderer
      .create(<TypingBox {...buildProps()} />)
      .toJSON();
    expect(TypingBoxComponent).toMatchSnapshot();
  });

  describe("when the countUp timer has not started", () => {
    it("renders the input field as empty when we pass a value", () => {
      const TypingBoxComponent = mount(<TypingBox {...buildProps()} />);

      TypingBoxComponent.find("input").simulate("change", {
        target: { value: "t" }
      });

      const inputValue = TypingBoxComponent.find("input").props().value;

      expect(inputValue).toEqual("");
    });

    describe("when we start typing", () => {
      const onChange = jest.fn();
      const TypingBoxComponent = mount(<TypingBox {...buildProps()} />);
      TypingBoxComponent.find("input").simulate("change", {
        target: { value: "t" }
      });

      it("does not call onChange", () => {
        expect(onChange).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe("when the countUp timer is started", () => {
    it("renders the input field as empty when we pass an empty value", () => {
      const TypingBoxComponent = mount(
        <TypingBox {...buildProps({ countUp: true })} />
      );
      const inputValue = TypingBoxComponent.find("input").props().value;

      expect(inputValue).toEqual("");
    });

    describe("when we start typing", () => {
      const TypingBoxComponent = mount(
        <TypingBox {...buildProps({ countUp: true })} />
      );
      TypingBoxComponent.find("input").simulate("change", {
        target: { value: "t" }
      });

      it("calls onChange", () => {
        expect(onChange).toHaveBeenCalledWith("t");
      });
    });

    describe("when we press a space", () => {
      const TypingBoxComponent = mount(
        <TypingBox {...buildProps({ countUp: true })} />
      );
      TypingBoxComponent.find("input").simulate("change", {
        target: { value: " " }
      });

      it("calls onChange", () => {
        expect(onChange).toHaveBeenCalledWith(" ");
      });
    });

    describe("when we complete a word", () => {
      const TypingBoxComponent = mount(
        <TypingBox {...buildProps({ countUp: true })} />
      );

      TypingBoxComponent.find("input").simulate("change", {
        target: { value: "this" }
      });
      TypingBoxComponent.find("input").simulate("keyDown", {
        key: "Space",
        keyCode: 32,
        which: 32
      });

      it("renders the input field as empty", () => {
        expect(TypingBoxComponent.find("input").props().value).toEqual("");
      });
    });
  });
});
