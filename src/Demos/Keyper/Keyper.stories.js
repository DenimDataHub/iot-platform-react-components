import mapDataFI from "@highcharts/map-collection/countries/fi/fi-all.geo.json";
import { withKnobs } from "@storybook/addon-knobs";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../../containers/Button/Button";
import { DependencyWheel } from "../../containers/Chart/DependencyWheel/DependencyWheel";
import { Heatmap } from "../../containers/Chart/Heatmap/Heatmap";
import { SemiDonut } from "../../containers/Chart/SemiDonut/SemiDonut";
import { Spline } from "../../containers/Chart/Spline/Spline";
import { TreeMap } from "../../containers/Chart/TreeMap/TreeMap";
import { CheckboxDropdown } from "../../containers/CheckboxDropdown/CheckboxDropdown";
import { SingleDatePicker } from "../../containers/DatePicker/SingleDatePicker/SingleDatePicker";
import { Fullscreen } from "../../containers/Fullscreen/Fullscreen";
import { Cell, Grid } from "../../containers/Grid/Grid";
import { KPICard } from "../../containers/KPICard/KPICard";
import { Map } from "../../containers/Map/Map";
import { Menu } from "../../containers/Menu/Menu";
import { Navigation } from "../../containers/Navigation/Navigation";
import { Typography } from "../../containers/Typography/Typography";

const logins = [
  8052,
  2152,
  7085,
  6063,
  9790,
  7649,
  1298,
  8123,
  6219,
  9943,
  9271,
  9072,
  1969,
  3831,
  3241,
  3308,
  3957,
  8083,
  4220,
  5789,
  6752,
  2861,
  4336,
  3286,
  4831,
  7843,
  4559,
  7176,
  6384,
  6083
];

const activeUsers = [
  1068,
  9641,
  3667,
  9787,
  2471,
  7648,
  5628,
  3380,
  4777,
  1040,
  4612,
  7332,
  4961,
  6425,
  1597,
  4431,
  9885,
  1966,
  3030,
  4524,
  4543,
  9144,
  3796,
  6210,
  6932,
  4136,
  5582,
  9090,
  8860,
  2735
];

const categories = [
  "Jun 26",
  "Jun 27",
  "Jun 28",
  "Jun 29",
  "Jun 30",
  "Jul 1",
  "Jul 2",
  "Jul 3",
  "Jul 4",
  "Jul 5",
  "Jul 6",
  "Jul 7",
  "Jul 8",
  "Jul 9",
  "Jul 10",
  "Jul 11",
  "Jul 12",
  "Jul 13",
  "Jul 14",
  "Jul 15",
  "Jul 16",
  "Jul 17",
  "Jul 18",
  "Jul 19",
  "Jul 20",
  "Jul 21",
  "Jul 22",
  "Jul 23",
  "Jul 24",
  "Jul 25",
  "Jul 26",
  "Jul 27",
  "Jul 28",
  "Jul 29",
  "Jul 30",
  "Jul 31",
  "Aug 1",
  "Aug 2",
  "Aug 3",
  "Aug 4",
  "Aug 5",
  "Aug 6",
  "Aug 7",
  "Aug 8",
  "Aug 9",
  "Aug 10",
  "Aug 11",
  "Aug 12",
  "Aug 13",
  "Aug 14"
];

const splineXAxis = [{ categories }];

const splineSeries = [
  { name: "Logins", data: logins },
  { name: "Active users", data: activeUsers }
];

const dependencySeries = [
  {
    keys: ["from", "to", "weight"],
    data: [
      ["Brazil", "Portugal", 5],
      ["Brazil", "France", 1],
      ["Brazil", "Spain", 1],
      ["Brazil", "England", 1],
      ["Canada", "Portugal", 1],
      ["Canada", "France", 5],
      ["Canada", "England", 1],
      ["Mexico", "Portugal", 1],
      ["Mexico", "France", 1],
      ["Mexico", "Spain", 5],
      ["Mexico", "England", 1],
      ["USA", "Portugal", 1],
      ["USA", "France", 1],
      ["USA", "Spain", 1],
      ["USA", "England", 5],
      ["Portugal", "Angola", 2],
      ["Portugal", "Senegal", 1],
      ["Portugal", "Morocco", 1],
      ["Portugal", "South Africa", 3],
      ["France", "Angola", 1],
      ["France", "Senegal", 3],
      ["France", "Mali", 3],
      ["France", "Morocco", 3],
      ["France", "South Africa", 1],
      ["Spain", "Senegal", 1],
      ["Spain", "Morocco", 3],
      ["Spain", "South Africa", 1],
      ["England", "Angola", 1],
      ["England", "Senegal", 1],
      ["England", "Morocco", 2],
      ["England", "South Africa", 7],
      ["South Africa", "China", 5],
      ["South Africa", "India", 1],
      ["South Africa", "Japan", 3],
      ["Angola", "China", 5],
      ["Angola", "India", 1],
      ["Angola", "Japan", 3],
      ["Senegal", "China", 5],
      ["Senegal", "India", 1],
      ["Senegal", "Japan", 3],
      ["Mali", "China", 5],
      ["Mali", "India", 1],
      ["Mali", "Japan", 3],
      ["Morocco", "China", 5],
      ["Morocco", "India", 1],
      ["Morocco", "Japan", 3],
      ["Japan", "Brazil", 1]
    ],
    name: "Dependency wheel series",
    dataLabels: {
      color: "#333",
      textPath: {
        enabled: true,
        attributes: {
          dy: 5
        }
      },
      distance: 10
    },
    size: "95%"
  }
];

const treemapSeries = [
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

const dropdownItems = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
  { value: "4", label: "Item 4" },
  { value: "5", label: "Item 5" }
];

const repeat = n => new Array(n).fill(null).map((_, i) => i);

const xAxisCategories = ["1", "2", "3", "4", "5", "6", "7"];
const yAxisCategories = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

const values = [
  [71, 45, 100, 40, 59],
  [41, 72, 29, 13, 33],
  [85, 52, 72, 52, 93],
  [84, 72, 100, 49, 92],
  [75, 97, 63, 12, 64],
  [74, 82, 83, 91, 48],
  [52, 91, 56, 57, 93]
];

const data = repeat(xAxisCategories.length)
  .map(i => repeat(yAxisCategories.length).map(n => [i, n, values[i][n]]))
  .reduce((a, b) => [...a, ...b], [])
  .slice(0, 30);

const semiDonutSeries = [
  {
    name: "Browser share",
    innerSize: "50%",
    data: [
      ["Chrome", 58.9],
      ["Firefox", 13.29],
      ["Internet Explorer", 13],
      ["Edge", 3.78],
      ["Safari", 3.42],
      {
        name: "Other",
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }
];

const mapSeries = [
  {
    data: [
      ["fi-3280", 0],
      ["fi-3272", 1],
      ["fi-3275", 2],
      ["fi-3281", 3],
      ["fi-3279", 4],
      ["fi-3276", 5],
      ["fi-3287", 6],
      ["fi-3286", 7],
      ["fi-3290", 8],
      ["fi-3291", 9],
      ["fi-3292", 10],
      ["fi-3293", 11],
      ["fi-3294", 12],
      ["fi-3295", 13],
      ["fi-3296", 14],
      ["fi-3288", 15],
      ["fi-3285", 16],
      ["fi-3289", 17]
    ],
    mapData: mapDataFI,
    name: "Data"
  }
];

const menuItems = [
  {
    name: "Home",
    icon: "home"
  },
  {
    name: "Users",
    icon: "users"
  },
  {
    name: "Devices",
    icon: "rocket"
  },
  {
    name: "Costs",
    icon: "briefcase"
  }
];

const Container = styled.div`
  background: ${({ theme }) => theme.keyperBackground};
  color: #999999;
`;

const HeaderRow = styled.div`
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  width: 170px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ theme }) => theme.logoImg});
`;

const PagingButton = styled.button`
  background: transparent;
  color: #656565;
  padding: 0.6rem 3rem;
  margin-left: 5px;
`;

const PagingButtonSelected = styled(PagingButton)`
  color: #999999;
  background: ${({ theme }) => theme.active};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const KPIGrid = styled.div`
  margin-bottom: 0.5rem;
`;

const KPICell = styled.div`
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
`;

const GridWithCollapsibleMenu = styled(Grid)`
  grid-template-columns: ${({ menuOpen }) => (menuOpen ? 10 : 4)}rem auto;
`;

const FullscreenOnRight = styled.div`
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 10px;
  font-size: 1.5rem;
`;

const PositionRelative = styled.div`
  position: relative;
`;

const NavigatonContainer = styled.div`
  color: ${({ theme }) => theme.menuColor};

  button {
    color: ${({ theme }) => theme.menuColor};
  }
`;

// eslint-disable-next-line no-console
const mockfullscreen = () => console.log("full screen");

export const KeyperDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <Container>
      <Typography fontFamily="openSans">
        <GridWithCollapsibleMenu menuOpen={menuOpen}>
          <Cell as={NavigatonContainer}>
            <Navigation onMenuToggle={setMenuOpen} menuInitialState={menuOpen}>
              <Menu items={menuItems} menuOpen={menuOpen} />
            </Navigation>
          </Cell>
          <Cell>
            <Grid as={HeaderRow}>
              <Cell>
                <Logo />
              </Cell>
              <Cell>
                <CheckboxDropdown
                  label="Channels"
                  items={dropdownItems}
                  isOpen={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              </Cell>
              <Cell>
                <SingleDatePicker
                  name="keyper-calendar-page-1"
                  startDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
              </Cell>
              <Cell>
                <Button onClick={() => {}} color="transparent" as={PagingButtonSelected}>
                  1
                </Button>
                <Button onClick={() => {}} color="transparent" as={PagingButton}>
                  2
                </Button>
              </Cell>
            </Grid>
            <Grid as={KPIGrid}>
              <Cell as={KPICell}>
                <KPICard
                  title="Logins / week"
                  value={3789}
                  growth={-0.145}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Logins / month"
                  value={17283}
                  growth={0.87}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active users / week"
                  value={1054}
                  growth={-0.062}
                  greenValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active users / month"
                  value={1870}
                  growth={0.953}
                  greenValue
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell as={PositionRelative}>
                <Fullscreen onClick={mockfullscreen} as={FullscreenOnRight} />
                <Spline xAxis={splineXAxis} series={splineSeries} />
                <TreeMap series={treemapSeries} />
              </Cell>
              <Cell as={PositionRelative}>
                <Fullscreen onClick={mockfullscreen} as={FullscreenOnRight} />
                <DependencyWheel
                  series={dependencySeries}
                  containerProps={{ style: { height: "100%" } }}
                />
              </Cell>
            </Grid>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const KeyperDemoPage2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <Container>
      <Typography fontFamily="openSans">
        <GridWithCollapsibleMenu menuOpen={menuOpen}>
          <Cell as={NavigatonContainer}>
            <Navigation onMenuToggle={setMenuOpen} menuInitialState={menuOpen}>
              <Menu items={menuItems} menuOpen={menuOpen} />
            </Navigation>
          </Cell>
          <Cell>
            <Grid as={HeaderRow}>
              <Cell>
                <Logo />
              </Cell>
              <Cell>
                <CheckboxDropdown
                  label="Channels"
                  items={dropdownItems}
                  isOpen={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              </Cell>
              <Cell>
                <SingleDatePicker
                  name="keyper-calendar-page-2"
                  startDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
              </Cell>
              <Cell>
                <Button onClick={() => {}} text="1" color="transparent" as={PagingButton}>
                  1
                </Button>
                <Button onClick={() => {}} color="transparent" as={PagingButtonSelected}>
                  2
                </Button>
              </Cell>
            </Grid>
            <Grid as={KPIGrid}>
              <Cell as={KPICell}>
                <KPICard
                  title="Logins / week"
                  value={3789}
                  growth={-0.145}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Logins / month"
                  value={17283}
                  growth={0.87}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active users / week"
                  value={1054}
                  growth={-0.062}
                  greenValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active users / month"
                  value={1870}
                  growth={0.953}
                  greenValue
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell as={PositionRelative}>
                <Heatmap data={data} />
                <Fullscreen onClick={mockfullscreen} as={FullscreenOnRight} />
                <SemiDonut series={semiDonutSeries} />
              </Cell>
              <Cell as={PositionRelative}>
                <Fullscreen onClick={mockfullscreen} as={FullscreenOnRight} />
                <Map
                  title="Finland"
                  minColor="#CCE7E7"
                  maxColor="#048B8A"
                  series={mapSeries}
                  containerProps={{ style: { height: "100%" } }}
                />
              </Cell>
            </Grid>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export default {
  title: "Keyper Demo",
  component: KeyperDemo,
  decorators: [withKnobs]
};
