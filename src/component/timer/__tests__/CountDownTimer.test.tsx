import * as React from "react";
import { CountDownTimer } from "../CountDownTimer";
import renderer from "react-test-renderer";

describe("CountDownTimer", () => {
  jest.useFakeTimers();
  const setCountUp = jest.fn();

  it("renders the CountDownTimer", () => {
    const tree = renderer
      .create(<CountDownTimer setCountUp={setCountUp} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls tick every 1000 miliseconds", () => {
    const TimerComponent = renderer.create(
      <CountDownTimer setCountUp={setCountUp} />
    );

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

    TimerComponent.update(<CountDownTimer setCountUp={setCountUp} />);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});
