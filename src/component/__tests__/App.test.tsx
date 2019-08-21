import * as React from "react";
import { mount, configure } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Stats } from "../globalstats/Stats";
import { Authentication } from "../Authentication";
import { App } from "../App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  // it("renders the Stats component", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/stats"]}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find(Authentication)).toHaveLength(0);
  //   expect(wrapper.find(Stats)).toHaveLength(1);
  // });

  it("renders Authentication without a room", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Authentication)).toHaveLength(1);
    expect(wrapper.find(Stats)).toHaveLength(0);
  });

  it("renders Authentication with a room", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/5"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Authentication)).toHaveLength(1);
    expect(wrapper.find(Stats)).toHaveLength(0);
  });

  // it("doesn't render anything a bad URL", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/octane"]}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find(Authentication)).toHaveLength(0);
  //   expect(wrapper.find(Stats)).toHaveLength(0);
  // });
});
