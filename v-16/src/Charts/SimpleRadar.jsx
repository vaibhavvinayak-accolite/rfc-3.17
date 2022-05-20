import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.powercharts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "radar",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Skill Analysis of Harry",
      subcaption: "Scale: 1 (low) to 5 (high)",
      theme: "fusion",
      showlegend: "0",
      showdivlinevalues: "0",
      showlimits: "0",
      showvalues: "1",
      plotfillalpha: "40",
      plottooltext: "Harry's <b>$label</b> skill is rated as <b>$value</b>",
    },
    categories: [
      {
        category: [
          {
            label: "Communication",
          },
          {
            label: "Punctuality",
          },
          {
            label: "Problem Solving",
          },
          {
            label: "Meeting Deadlines",
          },
          {
            label: "Team Player",
          },
          {
            label: "Technical Knowledge",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "User Ratings",
        data: [
          {
            value: "3",
          },
          {
            value: "3",
          },
          {
            value: "4",
          },
          {
            value: "3",
          },
          {
            value: "2",
          },
          {
            value: "4",
          },
        ],
      },
    ],
  },
};

const SimpleRadar = () => <ReactFC {...chartConfigs} />;

export default SimpleRadar;
