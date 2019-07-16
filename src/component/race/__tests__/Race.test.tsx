import * as React from "react";
import { Race } from "../Race";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const updatePosition = jest.fn();

describe("Race", () => {
  const buildProps = (newProps = {}) => ({
    wordsLength: 40,
    currentWordIndex: 0,
    updatePosition,
    raceState: { players: [{ id: 1, position: 0 }] },
    ID: 1,
    ...newProps
  });

  it("renders an image at position 0", () => {
    const RaceComponent = mount(<Race {...buildProps()} />);
    expect(RaceComponent.find("img").exists()).toBe(true);

    const tree = renderer.create(<Race {...buildProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders an image at position 10%", () => {
    const RaceComponent = mount(
      <Race {...buildProps({ currentWordIndex: 4 })} />
    );

    expect(RaceComponent.find("img").exists()).toBe(true);

    const tree = renderer
      .create(<Race {...buildProps({ currentWordIndex: 4 })} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders two images", () => {
    const payload = {
      players: [{ id: 1, position: 0 }, { id: 2, position: 0 }]
    };
    const RaceComponent = mount(
      <Race {...buildProps({ raceState: payload })} />
    );

    expect(RaceComponent.find("img").exists()).toBe(true);

    const tree = renderer
      .create(<Race {...buildProps({ raceState: payload })} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
