import { ResponsiveLine } from "@nivo/line";
import { calculateByYearAndMonth } from "../../model/dataObat";
import PropTypes from "prop-types";

const LineChart = ({ showNextSixMonths, startMonthIndex, endMonthIndex }) => {
  LineChart.propTypes = {
    showNextSixMonths: PropTypes.bool,
    startMonthIndex: PropTypes.bool,
    endMonthIndex: PropTypes.bool,
  };

  const currentYear = new Date().getFullYear();
  const data2024 = calculateByYearAndMonth(currentYear, showNextSixMonths);

  const dataToShow = data2024.slice(startMonthIndex, endMonthIndex);

  const DataPeningkatanSakitPolisi = [
    {
      id: "Sisa Pesediaan Obat",
      data: dataToShow.map((item) => ({
        x: item.bulan,
        y: item.jumlahobat,
      })),
    },
  ];

  return (
    <ResponsiveLine
      data={DataPeningkatanSakitPolisi}
      margin={{ top: 10, right: 5, bottom: 30, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
      }}
      enableGridX={false}
      colors={{ scheme: "purple_orange" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor", modifiers: [] }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableArea={true}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );
};

export default LineChart;
