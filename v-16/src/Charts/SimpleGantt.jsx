import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.gantt";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "gantt",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      dateformat: "mm/dd/yyyy",
      caption: "Event Planning Process",
      theme: "fusion",
      canvasborderalpha: "40",
      ganttlinealpha: "50",
    },
    tasks: {
      color: "#5D62B5",
      task: [
        {
          start: "03/07/2018",
          end: "03/17/2018",
        },
        {
          start: "03/14/2018",
          end: "03/28/2018",
        },
        {
          start: "03/15/2018",
          end: "03/31/2018",
        },
        {
          start: "04/02/2018",
          end: "04/12/2018",
        },
        {
          start: "04/12/2018",
          end: "04/30/2018",
        },
        {
          start: "04/20/2018",
          end: "05/06/2018",
        },
        {
          start: "04/30/2018",
          end: "05/10/2018",
        },
        {
          start: "04/30/2018",
          end: "05/25/2018",
        },
        {
          start: "05/04/2018",
          end: "06/05/2018",
        },
      ],
    },
    processes: {
      headertext: "Task",
      headeralign: "left",
      fontsize: "14",
      isbold: "0",
      align: "left",
      process: [
        {
          label: "Define event goals",
        },
        {
          label: "Source venue options",
        },
        {
          label: "Finalize speaker reach out list",
        },
        {
          label: "Compose sponsorship strategy",
        },
        {
          label: "Reach out to sponsors",
        },
        {
          label: "Create social media campaign",
        },
        {
          label: "Reach out to blogs for backlinks",
        },
        {
          label: "Optimize SEO ranking",
        },
        {
          label: "Publish event lead up vlog series",
        },
      ],
    },
    categories: [
      {
        category: [
          {
            start: "03/05/2018",
            end: "03/31/2018",
            label: "March",
          },
          {
            start: "04/01/2018",
            end: "04/30/2018",
            label: "April",
          },
          {
            start: "05/01/2018",
            end: "05/31/2018",
            label: "May",
          },
          {
            start: "06/01/2018",
            end: "06/10/2018",
            label: "June",
          },
        ],
      },
      {
        category: [
          {
            start: "03/05/2018",
            end: "03/11/2018",
            label: "W 1",
          },
          {
            start: "03/12/2018",
            end: "03/18/2018",
            label: "W 2",
          },
          {
            start: "03/19/2018",
            end: "03/25/2018",
            label: "W 3",
          },
          {
            start: "03/26/2018",
            end: "04/01/2018",
            label: "W 4",
          },
          {
            start: "04/02/2018",
            end: "04/08/2018",
            label: "W 5",
          },
          {
            start: "04/09/2018",
            end: "04/15/2018",
            label: "W 6",
          },
          {
            start: "04/16/2018",
            end: "04/22/2018",
            label: "W 7",
          },
          {
            start: "04/23/2018",
            end: "04/29/2018",
            label: "W 8",
          },
          {
            start: "04/30/2018",
            end: "05/06/2018",
            label: "W 9",
          },
          {
            start: "05/07/2018",
            end: "05/13/2018",
            label: "W 10",
          },
          {
            start: "05/14/2018",
            end: "05/20/2018",
            label: "W 11",
          },
          {
            start: "05/21/2018",
            end: "05/27/2018",
            label: "W 12",
          },
          {
            start: "05/28/2018",
            end: "06/03/2018",
            label: "W 13",
          },
          {
            start: "06/04/2018",
            end: "06/10/2018",
            label: "W 14",
          },
        ],
      },
    ],
  },
};

const SimpleGantt = () => <ReactFC {...chartConfigs} />;

export default SimpleGantt;
