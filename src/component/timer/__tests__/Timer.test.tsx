import * as React from "react";
import { Timer } from "../Timer";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Timer", () => {
  jest.useFakeTimers();
  const setFinishTime = jest.fn();
  const setCountDown = jest.fn();
  const setCountUp = jest.fn();
  const updateCountDown = jest.fn();
  const setMakeRequests = jest.fn();

  const buildProps = (newProps = {}) => ({
    setCountDown,
    setCountUp,
    updateCountDown,
    countDown: false,
    countUp: false,
    setFinishTime,
    setMakeRequests,
    ...newProps
  });

  describe("when the game has not been started", () => {
    it("renders the CountDownButton", () => {
      const wrapper = mount(<Timer {...buildProps()} />);
      const tree = renderer.create(<Timer {...buildProps()} />).toJSON();

      expect(wrapper.find("CountDownButton").length).toEqual(1);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("when the button has been pressed", () => {
    it("renders the CountDownTimer", () => {
      let timer = <Timer {...buildProps({ countDown: true })} />;
      const wrapper = mount(timer);
      const tree = renderer.create(timer).toJSON();

      expect(wrapper.find("CountDownButton").length).toEqual(0);
      expect(wrapper.find("CountDownTimer").length).toEqual(1);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("when the CountDownTimer is finished", () => {
    it("renders the CountUpTimer", () => {
      let timer = <Timer {...buildProps({ countDown: true, countUp: true })} />;
      const wrapper = mount(timer);
      const tree = renderer.create(timer).toJSON();

      expect(wrapper.find("CountDownButton").length).toEqual(0);
      expect(wrapper.find("CountDownTimer").length).toEqual(0);
      expect(wrapper.find("CountUpTimer").length).toEqual(1);
      expect(tree).toMatchSnapshot();
    });
  });
});
