import { mount } from "enzyme";
import React from "react";
import App from "../pages/index";
import { CurrentPlay } from "../components/CurrentPlay";

describe("Radio Component", () => {
  const getSelectedRadio = {
    id: 1,
    name: "Putin Radio",
    frequency: "102,9",
  };

  it("renders the whole component", () => {
    const app = mount(<App />);
    expect(app.exists(".radio-wrapper")).toEqual(true);
  });

  it("renders the header section", () => {
    const app = mount(<App />);
    expect(app.exists(".radio-header")).toEqual(true);
  });

  it("renders the body section", () => {
    const app = mount(<App />);
    expect(app.exists(".radio-body")).toEqual(true);
  });

  it("renders the footer section", () => {
    const app = mount(<App />);
    expect(app.exists(".radio-footer")).toEqual(true);
  });

  it("renders all the radio lists", () => {
    const app = mount(<App />);
    expect(app.exists(".radio-list")).toEqual(true);
  });

  it("should call mock function when a radio item from the list is clicked", () => {
    const mockCallBack = jest.fn();
    const app = mount(<App />);
    const getItem = app.find(".radio-item");
    getItem.at(0).simulate("click");
    const tree = mount(<div className="radio-item" onClick={mockCallBack} />);
    tree.simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should display the CurrentPlay component when one radio item is clicked", async () => {
    // CurrentPlay does not exists before one radio item is clicked
    const app = mount(<App />);
    const displayDivBeforeClick = app.find(".radio-name");
    expect(displayDivBeforeClick.exists()).toBe(false);

    // click simulation in one of the radio from the list
    const getButton = app.find(".radio-item");
    getButton.at(0).simulate("click");

    // CurrentPlay component is mounted
    const wrapper = mount(<CurrentPlay selectedRadio={getSelectedRadio} />);
    const displayDivAfterClick = wrapper.find(".radio-name");

    // Radio name is displayed after click and the component is mounted
    expect(displayDivAfterClick.exists()).toBe(true);
    expect(displayDivAfterClick.text()).toEqual(getSelectedRadio.name);
  });

  it("should toggle CurrentPlay component when one radio item is clicked", () => {
    const wrapper = mount(<App />);
    wrapper.find(".radio-item").at(0).simulate("click");
    expect(wrapper.find(CurrentPlay).exists()).toBe(true);
    expect(wrapper.exists(".radio-name")).toBe(true);
  });
});
