import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const total = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
