import * as React from "react";
import { Timer } from "../Timer";
import renderer from "react-test-renderer";

describe("Timer", () => {
  jest.useFakeTimers();
  const setFinishTime = jest.fn();

  it("renders the Timer", () => {
    const tree = renderer
      .create(<Timer setFinishTime={setFinishTime} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls tick every 1000 miliseconds", () => {
    const TimerComponent = renderer.create(
      <Timer setFinishTime={setFinishTime} />
    );

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);

    TimerComponent.update(<Timer setFinishTime={setFinishTime} />);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it("sets the finish time when unmounted", () => {
    const TimerComponent = renderer.create(
      <Timer setFinishTime={setFinishTime} />
    );
    TimerComponent.unmount();

    expect(setFinishTime).toHaveBeenCalled();
  });
});
