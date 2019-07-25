import * as React from "react";
import { WelcomeButton } from "../WelcomeButton";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("WelcomeButton", () => {
  describe("The button render", () => {
    const mockHandleEvent = jest.fn();

    it("renders a Generate lobby button", () => {
      const tree = renderer
        .create(<WelcomeButton handleEvent={mockHandleEvent} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("onClick", () => {
    const mockHandleEvent = jest.fn();

    it("triggers an event", () => {
      const wrapper = mount(<WelcomeButton handleEvent={mockHandleEvent} />);

      wrapper.find("button").simulate("click");
      expect(mockHandleEvent).toHaveBeenCalled();
    });
  });
});
