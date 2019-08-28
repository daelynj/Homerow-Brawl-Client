import * as React from "react";
import { CountUpTimer } from "../CountUpTimer";
import renderer from "react-test-renderer";

describe("CountUpTimer", () => {
  jest.useFakeTimers();
  const setFinishTime = jest.fn();
  const setMakeRequests = jest.fn();

  it("renders the CountUpTimer", () => {
    const tree = renderer
      .create(
        <CountUpTimer
          setMakeRequests={setMakeRequests}
          setFinishTime={setFinishTime}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls tick every 1000 miliseconds", () => {
    const TimerComponent = renderer.create(
      <CountUpTimer
        setMakeRequests={setMakeRequests}
        setFinishTime={setFinishTime}
      />
    );

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

    TimerComponent.update(
      <CountUpTimer
        setMakeRequests={setMakeRequests}
        setFinishTime={setFinishTime}
      />
    );

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  it("sets the finish time when unmounted", () => {
    const TimerComponent = renderer.create(
      <CountUpTimer
        setMakeRequests={setMakeRequests}
        setFinishTime={setFinishTime}
      />
    );
    TimerComponent.unmount();

    expect(setFinishTime).toHaveBeenCalled();
  });
});
