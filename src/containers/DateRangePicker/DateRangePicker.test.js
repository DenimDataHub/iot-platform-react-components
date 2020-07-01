import moment from "moment";
import React from "react";
import renderer from "react-test-renderer";

import { DateRangePicker } from "./DateRangePicker";

const mockDate = new Date("2020-06-19");
const RealDate = Date;

describe("DateRangePicker", () => {
  beforeAll(() => {
    global.Date = class extends RealDate {
      constructor() {
        super();
        return mockDate;
      }
    };
  });

  afterAll(() => {
    global.Date = RealDate;
  });

  it("should render", () => {
    const component = renderer.create(
      <DateRangePicker name="test" onDatesChange={() => null} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("DateRangePicker with given date", () => {
  it("should render DateRangePicker starting from date provided", () => {
    const component = renderer.create(
      <DateRangePicker
        name="start-end-end"
        onDatesChange={() => null}
        startDate={moment(new Date(2020, 6, 1))}
        endDate={moment(new Date(2020, 6, 12))}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});