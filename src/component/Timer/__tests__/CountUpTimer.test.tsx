import * as React from "react";
import { CountUpTimer } from "../CountUpTimer";
import renderer from "react-test-renderer";

describe("CountUpTimer", () => {
  jest.useFakeTimers();
  const setFinishTime = jest.fn();

  it("renders the CountUpTimer", () => {
    const tree = renderer
      .create(<CountUpTimer setFinishTime={setFinishTime} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls tick every 1000 miliseconds", () => {
    const TimerComponent = renderer.create(
      <CountUpTimer setFinishTime={setFinishTime} />
    );

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);

    TimerComponent.update(<CountUpTimer setFinishTime={setFinishTime} />);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it("sets the finish time when unmounted", () => {
    const TimerComponent = renderer.create(
      <CountUpTimer setFinishTime={setFinishTime} />
    );
    TimerComponent.unmount();

    expect(setFinishTime).toHaveBeenCalled();
  });
});
