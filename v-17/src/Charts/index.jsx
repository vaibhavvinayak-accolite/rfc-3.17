import Column2d from "./Column2d";
import SimpleBar from "./SimpleBar";
import SimpleLine from "./SimpleLine";
import Pie2d from "./Pie2d";
import SimpleBubble from "./SimpleBubble";
import Scatter from "./Scatter";
import Pareto from "./Pareto";
import Rating from "./Rating";
import SimpleGantt from "./SimpleGantt";
import SimpleTreeMap from "./SimpleTreeMap";
import SimpleRadar from "./SimpleRadar";
import MultipleSeriesOnTimeAxis from "./MultipleSeriesOnTimeAxis";
import InteractiveCandleStick from "./InteractiveCandleStick";
import ChordDiagram from './ChordDiagram'
import WorldMap from './WorldMap'

const CHART_LIST = {
  Column2d,
  SimpleBar,
  SimpleLine,
  Pie2d,
  SimpleBubble,
  Scatter,
  Pareto,
  Rating,
  SimpleGantt,
  SimpleTreeMap,
  SimpleRadar,
  MultipleSeriesOnTimeAxis,
  InteractiveCandleStick,
  ChordDiagram,
  WorldMap
};

const DynamicComponent = ({ title, component: Component }) => (
  <div
    style={{
      padding: 8,
      margin: 8,
      border: "1px solid black",
      borderRadius: 8,
    }}
  >
    <h2>{title}</h2>
    <Component />
  </div>
);

const Charts = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    {Object.keys(CHART_LIST).map((el) => (
      <DynamicComponent component={CHART_LIST[el]} title={el} />
    ))}
  </div>
);

export default Charts;
