import * as React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "../App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<App />);

    expect(wrapper.find("WebsocketController").length).toEqual(1);
  });
});
