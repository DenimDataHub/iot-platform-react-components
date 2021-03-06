import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartSankey from "highcharts/modules/sankey";
import HeatMap from "highcharts/modules/heatmap";
import TreeMap from "highcharts/modules/treemap";
import DarkUnica from "highcharts/themes/dark-unica";
import PropTypes from "prop-types";
import React from "react";

HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);
TreeMap(Highcharts);
DarkUnica(Highcharts);
HeatMap(Highcharts);

const chartDefaults = {
  credits: { enabled: false }
};

/**
 * The `Chart` component should only be used as a building block for other components. Do not use this component directly.
 */
export const Chart = ({
  title,
  xAxis,
  series,
  type,
  options,
  containerProps
}) => {
  const xAxisData = [...(options.xAxis || []), ...(xAxis || [])];
  const chartOptions = {
    ...chartDefaults,
    ...options,
    xAxis: xAxisData.length ? xAxisData : null,
    series,
    title: { ...options.title, text: title },
    chart: { ...options.chart, type },
    plotOptions: {
      ...options.plotOptions,
      series: {
        animation: false
      }
    }
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
      containerProps={containerProps}
    />
  );
};

Chart.propTypes = {
  /** Title of the chart */
  title: PropTypes.string,
  /** Values for X axis */
  // eslint-disable-next-line react/forbid-prop-types
  xAxis: PropTypes.arrayOf(PropTypes.shape({ categories: PropTypes.array })),
  /** Data to be graphed */
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      data: PropTypes.array
    })
  ),
  /** Type of the chart */
  type: PropTypes.oneOf([
    "line",
    "bar",
    "area",
    "spline",
    "areaspline",
    "heatmap",
    "treemap",
    "dependencywheel",
    "pie"
  ]),
  /** You can use highcharts options to extend the chart behavior */
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
  /** Props to be passed to highcharts, such as styles or classname */
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PropTypes.object
};

Chart.defaultProps = {
  title: "",
  xAxis: null,
  series: [],
  type: "line",
  options: {},
  containerProps: null
};
