import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import PropTypes from "prop-types";
import React from "react";

highchartsMap(Highcharts);

const defaultOptions = {
  credits: {
    enabled: false
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "bottom"
  },
  colorAxis: {
    min: 0,
    reversed: false,
    showFirstLabel: false
  },
  mapNavigation: {
    enabled: true,
    enableMouseWheelZoom: false,
    buttonOptions: {
      verticalAlign: "top"
    }
  }
};

export const Map = ({ title, minColor, maxColor, series, containerProps }) => {
  const mapOptions = {
    title: {
      text: title
    },
    series,
    ...defaultOptions,
    colorAxis: { ...defaultOptions.colorAxis, minColor, maxColor }
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="mapChart"
      options={mapOptions}
      containerProps={containerProps}
    />
  );
};

Map.propTypes = {
  /** Title of the map */
  title: PropTypes.string,
  /** Color code for min values */
  minColor: PropTypes.string,
  /** Color code for max values */
  maxColor: PropTypes.string,
  /** Data to be graphed */
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.array,
      mapData: PropTypes.object
    })
  ),
  /** Props to be passed to highcharts, such as styles or classname */
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PropTypes.object
};

Map.defaultProps = {
  title: "",
  minColor: "",
  maxColor: "",
  series: [],
  containerProps: null
};
