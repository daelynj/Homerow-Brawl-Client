import * as React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Authentication } from "../Authentication";

configure({ adapter: new Adapter() });

describe("Authentication", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Authentication />);

    expect(wrapper.find("WebsocketController").length).toEqual(0);
    expect(wrapper.find("Welcome").length).toEqual(0);
  });
});
