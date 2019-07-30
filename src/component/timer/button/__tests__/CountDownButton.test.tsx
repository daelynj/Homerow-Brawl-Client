import * as React from "react";
import { CountDownButton } from "../CountDownButton";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CountDownButton", () => {
  describe("The button render", () => {
    const mockHandleEvent = jest.fn();

    it("renders a Start game button", () => {
      const tree = renderer
        .create(<CountDownButton handleEvent={mockHandleEvent} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("onClick", () => {
    const mockHandleEvent = jest.fn();

    it("triggers an event", () => {
      const wrapper = mount(<CountDownButton handleEvent={mockHandleEvent} />);

      wrapper.find("button").simulate("click");
      expect(mockHandleEvent).toHaveBeenCalled();
    });
  });
});
