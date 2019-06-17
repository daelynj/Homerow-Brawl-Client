import * as React from "react";
import { Race } from "../Race";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Race", () => {
  const buildProps = (newProps = {}) => ({
    wordsLength: 40,
    currentWordIndex: 0,
    ...newProps
  });

  it("renders an image at position 0", () => {
    const RaceComponent = mount(<Race {...buildProps()} />);
    expect(RaceComponent.find("img").exists()).toBe(true);

    const tree = renderer.create(<Race {...buildProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders an image at position 1", () => {
    const RaceComponent = mount(
      <Race {...buildProps({ currentWordIndex: 3 })} />
    );

    expect(RaceComponent.find("img").exists()).toBe(true);

    const tree = renderer
      .create(<Race {...buildProps({ currentWordIndex: 3 })} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
