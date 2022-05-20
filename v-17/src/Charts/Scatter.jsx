import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "scatter",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Sales of Ice creams at Broadway Store",
      subcaption: "Sales vs. Avg. Temperature<br>Los Angeles Topanga",
      xaxisname: "Avg. Temperature",
      yaxisname: "Sales (In USD)",
      xaxisminvalue: "20",
      xaxismaxvalue: "100",
      ynumberprefix: "$",
      yaxisminvalue: "1200",
      xnumbersuffix: "°F",
      theme: "fusion",
      showlegend: "0",
      plottooltext:
        "<b>$yDataValue</b> worth <b>$seriesNames</b> were sold,<br>when temperature was <b>$xDataValue</b>",
    },
    categories: [
      {
        verticallinedashed: "1",
        verticallinedashlen: "1",
        verticallinedashgap: "1",
        verticallinethickness: "1",
        verticallinecolor: "#000000",
        category: [
          {
            x: "20",
            label: "20°F",
            showverticalline: "0",
          },
          {
            x: "40",
            label: "40°F",
          },
          {
            x: "60",
            label: "60°F",
          },
          {
            x: "80",
            label: "80°F",
          },
          {
            x: "100",
            label: "100°F",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Ice Cream",
        anchorbgcolor: "5D62B5",
        data: [
          {
            x: "21",
            y: "1450",
          },
          {
            x: "22",
            y: "1490",
          },
          {
            x: "23",
            y: "1560",
          },
          {
            x: "24",
            y: "1500",
          },
          {
            x: "24",
            y: "1680",
          },
          {
            x: "25",
            y: "1780",
          },
          {
            x: "25",
            y: "1620",
          },
          {
            x: "26",
            y: "1810",
          },
          {
            x: "27",
            y: "2310",
          },
          {
            x: "29",
            y: "2620",
          },
          {
            x: "31",
            y: "2500",
          },
          {
            x: "32",
            y: "2410",
          },
          {
            x: "33",
            y: "2530",
          },
          {
            x: "34",
            y: "3280",
          },
          {
            x: "35",
            y: "2880",
          },
          {
            x: "36",
            y: "3910",
          },
          {
            x: "34",
            y: "3960",
          },
          {
            x: "38",
            y: "4080",
          },
          {
            x: "37",
            y: "3880",
          },
          {
            x: "39",
            y: "3910",
          },
          {
            x: "39",
            y: "4210",
          },
          {
            x: "40",
            y: "4190",
          },
          {
            x: "41",
            y: "4170",
          },
          {
            x: "42",
            y: "4280",
          },
          {
            x: "43",
            y: "4350",
          },
          {
            x: "44",
            y: "4880",
          },
          {
            x: "45",
            y: "4700",
          },
          {
            x: "47",
            y: "5100",
          },
          {
            x: "48",
            y: "5190",
          },
          {
            x: "48",
            y: "5000",
          },
          {
            x: "49",
            y: "5210",
          },
          {
            x: "50",
            y: "5110",
          },
          {
            x: "50",
            y: "5200",
          },
          {
            x: "52",
            y: "5210",
          },
          {
            x: "53",
            y: "5330",
          },
          {
            x: "54",
            y: "5180",
          },
          {
            x: "53",
            y: "5770",
          },
          {
            x: "55",
            y: "5900",
          },
          {
            x: "56",
            y: "5940",
          },
          {
            x: "58",
            y: "6090",
          },
          {
            x: "61",
            y: "6086",
          },
          {
            x: "62",
            y: "6185",
          },
          {
            x: "63",
            y: "6815",
          },
          {
            x: "62",
            y: "6273",
          },
          {
            x: "64",
            y: "6143",
          },
          {
            x: "65",
            y: "6151",
          },
          {
            x: "67",
            y: "6100",
          },
          {
            x: "68",
            y: "6200",
          },
          {
            x: "70",
            y: "6360",
          },
          {
            x: "71",
            y: "6860",
          },
          {
            x: "71",
            y: "6150",
          },
          {
            x: "72",
            y: "6150",
          },
          {
            x: "73",
            y: "6273",
          },
          {
            x: "74",
            y: "6650",
          },
          {
            x: "74",
            y: "6133",
          },
          {
            x: "75",
            y: "6450",
          },
          {
            x: "79",
            y: "6650",
          },
          {
            x: "80",
            y: "6710",
          },
          {
            x: "79",
            y: "6975",
          },
          {
            x: "82",
            y: "7000",
          },
          {
            x: "85",
            y: "7150",
          },
          {
            x: "86",
            y: "7160",
          },
          {
            x: "86",
            y: "7200",
          },
          {
            x: "88",
            y: "7230",
          },
          {
            x: "87",
            y: "7210",
          },
          {
            x: "86",
            y: "7480",
          },
          {
            x: "89",
            y: "7540",
          },
          {
            x: "89",
            y: "7400",
          },
          {
            x: "90",
            y: "7500",
          },
          {
            x: "92",
            y: "7640",
          },
          {
            x: "90",
            y: "7340",
          },
          {
            x: "94",
            y: "7840",
          },
          {
            x: "95",
            y: "7140",
          },
          {
            x: "95",
            y: "7510",
          },
          {
            x: "96",
            y: "6940",
          },
          {
            x: "97",
            y: "7100",
          },
          {
            x: "98",
            y: "7840",
          },
        ],
      },
    ],
  },
};

const Scatter = () => <ReactFC {...chartConfigs} />;

export default Scatter;
