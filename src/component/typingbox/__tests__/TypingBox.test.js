import React from 'react';
import TypingBox from '../TypingBox';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("TypingBox", () => {
  it("renders a textbox", () => {
    const TypingBoxComponent = renderer.create(<TypingBox/>).toJSON();
    expect(TypingBoxComponent).toMatchSnapshot();
  });

  it("renders correctly with no input", () => {
    const props = {
      value: ""
    }
    const TypingBoxComponent = mount(<TypingBox {...props}/>)
    expect((TypingBoxComponent).prop("value")).toEqual("");
  });

  it("updates the typing box upon input", () => {
    const onChange = jest.fn();
    const start = jest.fn();
    const props = {
        value: "",
        start,
        onChange,
      }
    const TypingBoxComponent = mount(<TypingBox {...props}/>).find("input");

    TypingBoxComponent.simulate('change', {target: {value: "t"}});
    expect(start).toHaveBeenCalledWith(true);
    expect(onChange).toHaveBeenCalledWith("t");
  });

  it("allows spaces when the word being typed is not complete", () => {
    const onChange = jest.fn();
    const start = jest.fn();
    const onWordComplete = jest.fn().mockReturnValue(false);
    const props = {
        value: "",
        start,
        onChange,
        onWordComplete
      }
    const TypingBoxComponent = mount(<TypingBox {...props}/>).find("input");

    TypingBoxComponent.simulate('change', {target: {value: " "}});
    expect(start).toHaveBeenCalledWith(true);
    expect(onChange).toHaveBeenCalledWith(" ");
  });

  it("is emptied upon word completion", () => {
    const onChange = jest.fn();
    const start = jest.fn();
    const onWordComplete = jest.fn().mockReturnValue(true);
    const props = {
        value: "",
        start,
        onChange,
        onWordComplete
      }
    const TypingBoxComponent = mount(<TypingBox {...props}/>).find("input");

    TypingBoxComponent.simulate('keyDown', { keyCode: 32 });
    expect(TypingBoxComponent.props().value).toEqual("");
  });
});
