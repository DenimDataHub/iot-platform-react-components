import { mount } from "enzyme";
import moment from "moment";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../../../styles/theme";
import { DateRangePicker } from "./DateRangePicker";

jest.mock("moment", () => {
  const mockedMoment = jest.requireActual("moment");
  const mockedDate = "2020-06-19";
  const momentInstance = mockedMoment(mockedDate);
  jest.spyOn(momentInstance, "format");

  function fakeMoment() {
    return momentInstance;
  }

  Object.assign(fakeMoment, mockedMoment);

  return fakeMoment;
});

const themes = [
  { name: "light", theme: lightTheme },
  { name: "dark", theme: darkTheme }
];

themes.forEach(({ name, theme }) => {
  describe(`DateRangePicker ${name}`, () => {
    it("should render", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <DateRangePicker name="test" onDatesChange={() => null} />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render with custom date format", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <DateRangePicker
            name="test-format"
            onDatesChange={() => null}
            dateFormat="MM/DD/yyyy"
          />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should fire onDatesChange event handler", () => {
      const handleClick = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <DateRangePicker
            name="test-onDatesChange"
            onDatesChange={handleClick}
          />
        </ThemeProvider>
      );
      expect(handleClick).not.toHaveBeenCalled();

      wrapper
        .children()
        .props()
        .onDatesChange({ startDate: moment(), endDate: moment() });

      expect(handleClick).toHaveBeenCalled();
    });

    it("should call onDatesChange event handler when date is changed", () => {
      const handleClick = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <DateRangePicker
            name="test-onDatesChange"
            onDatesChange={handleClick}
          />
        </ThemeProvider>
      );
      const event = {
        target: {
          value: "2020-07-12"
        }
      };
      expect(handleClick).not.toHaveBeenCalled();
      wrapper
        .find("input")
        .first()
        .simulate("change", event);

      expect(handleClick).toHaveBeenCalled();
    });

    // TODO: this test seems like a stub for now, it's only for improving coverage
    it("should change focus of the inputs", () => {
      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <DateRangePicker name="test-onclick" onDatesChange={() => null} />
        </ThemeProvider>
      );
      wrapper
        .find("input")
        .first()
        .simulate("focus");
    });
  });

  describe("DateRangePicker with given date", () => {
    it("should render DateRangePicker starting from date provided", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <DateRangePicker
            name="start-end-end"
            onDatesChange={() => null}
            dateFormat="MM/DD/yyyy"
            startDate={moment("2020-07-01", "YYYY-MM-DD")}
            endDate={moment("2020-07-12", "YYYY-MM-DD")}
          />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
