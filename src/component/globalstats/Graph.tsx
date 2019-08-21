import * as React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

interface Props {
  gamesPlayed: any;
}

export const Graph = (props: Props) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    let summedGameStats = sumGameStats();
    let labels = [];

    for (var index = 0; index < props.gamesPlayed.length; index++) {
      labels.push("");
    }

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Average WPM",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(0,0,0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: summedGameStats[0]
        },
        {
          label: "Average Mistakes",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(255,165,0,0.4)",
          borderColor: "rgba(255,165,0,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(0,0,0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,165,0,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: summedGameStats[1]
        },
        {
          label: "Average Accuracy",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(255,0,0,0.4)",
          borderColor: "rgba(255,0,0,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(0,0,0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,0,0,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: summedGameStats[2]
        }
      ]
    };

    setData(data);
  }, []);

  const sumGameStats = () => {
    let wpms: Array<number> = [];
    let mistakes: Array<number> = [];
    let accuracies: Array<number> = [];
    let WPMDataPoints: Array<number> = [];
    let mistakesDataPoints: Array<number> = [];
    let accuraciesDataPoints: Array<number> = [];

    for (var index = 0; index < props.gamesPlayed.length; index++) {
      wpms[index] = props.gamesPlayed[index].wpm;
      mistakes[index] = props.gamesPlayed[index].mistakes;
      accuracies[index] = props.gamesPlayed[index].accuracy;

      let sumWPM =
        wpms.reduce((a: number, b: number) => a + b, 0) / (index + 1);
      let sumMistakes =
        mistakes.reduce((a: number, b: number) => a + b, 0) / (index + 1);
      let sumAccuracies =
        accuracies.reduce((a: number, b: number) => a + b, 0) / (index + 1);

      WPMDataPoints[index] = Math.round(sumWPM);
      mistakesDataPoints[index] = Math.round(sumMistakes);
      accuraciesDataPoints[index] = Math.round(sumAccuracies);
    }

    return [WPMDataPoints, mistakesDataPoints, accuraciesDataPoints];
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};
