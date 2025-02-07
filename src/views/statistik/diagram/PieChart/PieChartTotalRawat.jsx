import { ResponsivePie } from "@nivo/pie";
import { calculateTotals } from "../../model/dataPegawaiRawat";
import PropTypes from "prop-types";

const PieChart = ({ colors }) => {
  PieChart.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
  };

  const percentages = calculateTotals();

  const data = [
    { id: "BPJS", value: percentages.bpjs },
    { id: "Non-BPJS", value: percentages.nonBpjs },
    { id: "Lainnya", value: percentages.lainnya },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      sortByValue={true}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{ theme: "background" }}
      enableArcLinkLabels={false}
      innerRadius={0.6}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      colors={colors}
      arcLinkLabelsColor={{ from: "color", modifiers: [] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["brighter", 5]],
      }}
      valueFormat={(value) => `${value}%`}
    />
  );
};

export default PieChart;
