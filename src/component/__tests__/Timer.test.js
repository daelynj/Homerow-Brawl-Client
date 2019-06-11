import React from 'react';
import Timer from '../Timer';
import renderer from 'react-test-renderer';

describe('Timer', () => {
  jest.useFakeTimers();
  const finishTime = jest.fn();

  it('renders the Timer', () => {
    const tree = renderer.create(<Timer/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls tick every 1000 miliseconds', () => {
    const TimerComponent = renderer.create(<Timer time = {0} finishTime = {finishTime}/>);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);

    TimerComponent.update();

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('sets the finish time when unmounted', () => {
    const TimerComponent = renderer.create(<Timer time = {0} finishTime = {finishTime}/>);
    TimerComponent.unmount();

    expect(finishTime).toHaveBeenCalled();
  });
});
