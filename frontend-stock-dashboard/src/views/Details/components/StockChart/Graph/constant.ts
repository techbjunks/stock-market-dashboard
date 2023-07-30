export const INITIAL_DATA = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Last 7 Day",
    },
  },
};

export const MINIMUM_CHART_DAYS = 3;
