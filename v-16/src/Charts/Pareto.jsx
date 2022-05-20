import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "pareto2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Late arrivals by reported cause",
      subcaption: "Last month",
      pyaxisname: "No. of Occurrence",
      theme: "fusion",
      showsecondarylimits: "0",
      showdivlinesecondaryvalue: "0",
      plottooltext:
        "Due to $label, late arrivals count is : <b>$dataValue</b> of the total <b>$sum</b> employees",
      drawcrossline: "1",
    },
    data: [
      {
        label: "Traffic",
        value: "5680",
      },
      {
        label: "Family Engagement",
        value: "1036",
      },
      {
        label: "Public Transport",
        value: "950",
      },
      {
        label: "Weather",
        value: "500",
      },
      {
        label: "Emergency",
        value: "140",
      },
      {
        label: "Others",
        value: "68",
      },
    ],
  },
};

const Pareto = () => <ReactFC {...chartConfigs} />;

export default Pareto;
