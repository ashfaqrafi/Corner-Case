import { mount } from "enzyme";
import React from "react";
import Radio from "../components/Radio";
import { CurrentlyPlaying } from "../components/CurrentlyPlaying";

describe("Radio Component", () => {
  const getSelectedRadio = {
    id: 1,
    name: "Putin Radio",
    frequency: "102,9",
  };

  it("renders the whole component", () => {
    const app = mount(<Radio />);
    expect(app.exists(".radio-wrapper")).toEqual(true);
  });

  it("renders the header section", () => {
    const app = mount(<Radio />);
    expect(app.exists(".radio-header")).toEqual(true);
  });

  it("renders the body section", () => {
    const app = mount(<Radio />);
    expect(app.exists(".radio-body")).toEqual(true);
  });

  it("renders the footer section", () => {
    const app = mount(<Radio />);
    expect(app.exists(".radio-footer")).toEqual(true);
  });

  it("renders all the radio lists", () => {
    const app = mount(<Radio />);
    expect(app.exists(".radio-list")).toEqual(true);
  });

  it("should display the CurrentlyPlaying component when one radio item is clicked", async () => {
    // CurrentlyPlaying does not exists before one radio item is clicked
    const app = mount(<Radio />);
    const displayDivBeforeClick = app.find(".radio-name");
    expect(displayDivBeforeClick.exists()).toBe(false);

    // click simulation in one of the radio from the list
    const getButton = app.find(".radio-item");
    getButton.at(0).simulate("click");

    // CurrentlyPlaying component is mounted
    const wrapper = mount(
      <CurrentlyPlaying selectedRadio={getSelectedRadio} />
    );
    const displayDivAfterClick = wrapper.find(".radio-name");

    // Radio name is displayed after click and the component is mounted
    expect(displayDivAfterClick.exists()).toBe(true);
    expect(displayDivAfterClick.text()).toEqual(getSelectedRadio.name);
  });

  it("should toggle CurrentlyPlaying component when one radio item is clicked", () => {
    const wrapper = mount(<Radio />);
    wrapper.find(".radio-item").at(0).simulate("click");
    expect(wrapper.find(CurrentlyPlaying).exists()).toBe(true);
    expect(wrapper.exists(".radio-name")).toBe(true);
  });
});
