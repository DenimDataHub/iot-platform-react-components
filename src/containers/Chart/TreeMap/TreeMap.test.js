import { mount } from "enzyme";
import React from "react";

import { TreeMap } from "./TreeMap";

const series = [
  {
    data: [
      {
        id: "A",
        name: "Apples",
        color: "#EC2500"
      },
      {
        id: "B",
        name: "Bananas",
        color: "#ECE100"
      },
      {
        id: "O",
        name: "Oranges",
        color: "#EC9800"
      },
      {
        name: "Anne",
        parent: "A",
        value: 5
      },
      {
        name: "Rick",
        parent: "A",
        value: 3
      },
      {
        name: "Peter",
        parent: "A",
        value: 4
      },
      {
        name: "Anne",
        parent: "B",
        value: 4
      },
      {
        name: "Rick",
        parent: "B",
        value: 10
      },
      {
        name: "Peter",
        parent: "B",
        value: 1
      },
      {
        name: "Anne",
        parent: "O",
        value: 1
      },
      {
        name: "Rick",
        parent: "O",
        value: 3
      },
      {
        name: "Peter",
        parent: "O",
        value: 3
      },
      {
        name: "Susanne",
        parent: "Kiwi",
        value: 2,
        color: "#9EDE00"
      }
    ]
  }
];

describe("Tree Map", () => {
  it("should render tree map", () => {
    const component = mount(<TreeMap />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render tree map with data", () => {
    const component = mount(<TreeMap series={series} />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render tree map with title and data", () => {
    const component = mount(<TreeMap title="Chart" series={series} />);

    expect(component).toMatchHtmlSnapshot();
  });
});
