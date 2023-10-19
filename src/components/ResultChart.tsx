/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Card } from 'react-bootstrap';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Chart.register(...registerables);

function ResultChart(props: {
  authID: string
}) {
  const { authID } = props;

  const labels = [
    'プラスチック製品',
    'ペットボトル',
    '缶',
    'ガラス類',
    '金属類',
    '紙類',
    'ゴム類',
    '発泡スチロール',
    'ロープ・ひも類',
    'タバコ',
    'その他',
  ];

  const plasticLabels = [7, 21, 24, 27, 29, 32, 36, 38, 39, 41, 45, 47, 48, 49, 50];
  const petLabels = [4, 5];
  const canLabels = [10, 12];
  const glassLabels = [6, 9, 23, 26];
  const metalLabels = [0, 2, 38, 28, 52];
  const paperLabels = [14, 15, 16, 17, 18, 19, 20, 22, 30, 31, 33, 34, 35, 56];
  const rubberLabels = [13];
  const styrofoamLabels = [46, 57];
  const ropeLabels = [51];
  const cigarettesLabels = [59];
  const othersLabels = [1, 11, 25, 37, 40, 42, 43, 44, 53, 58];

  const [chartData, setChartData] = useState(
    { labels,
      datasets: [
        { data: new Array(labels.length).fill(0) },
      ],
    },
  );
  const [numPhotos, setNumPhotos] = useState(0);
  const [numGarbages, setNumGarbages] = useState(0);

  const createLabelAndData = (rawData: number[]) => {
    const countByLabels = new Array<{label:string, value: number}>(labels.length);
    rawData.map((value, index) => {
      // プラスチック類
      if (plasticLabels.includes(index)) {
        countByLabels[0] = { label: labels[0], value };
      }
      // ペットボトル
      if (petLabels.includes(index)) {
        countByLabels[1] = { label: labels[1], value };
      }
      // 缶
      if (canLabels.includes(index)) {
        countByLabels[2] = { label: labels[2], value };
      }
      // ガラス類
      if (glassLabels.includes(index)) {
        countByLabels[3] = { label: labels[3], value };
      }

      // 金属類
      if (metalLabels.includes(index)) {
        countByLabels[4] = { label: labels[4], value };
      }

      // 紙類
      if (paperLabels.includes(index)) {
        countByLabels[5] = { label: labels[5], value };
      }

      // ゴム類
      if (rubberLabels.includes(index)) {
        countByLabels[6] = { label: labels[6], value };
      }

      // 発泡スチロール類
      if (styrofoamLabels.includes(index)) {
        countByLabels[7] = { label: labels[7], value };
      }

      // ロープ・ひも類
      if (ropeLabels.includes(index)) {
        countByLabels[8] = { label: labels[8], value };
      }

      // タバコ
      if (cigarettesLabels.includes(index)) {
        countByLabels[9] = { label: labels[9], value };
      }

      // その他
      if (othersLabels.includes(index)) {
        countByLabels[10] = { label: labels[10], value };
      }

      return 0;
    });

    return countByLabels;
  };

  interface EventResult {
    [name: string]: number;
  }
  const getResult = async (key :string) => {
    const blob = await Storage.get(key, { level: 'public', download: true });
    if (!(blob.Body instanceof Blob)) {
      throw new Error();
    }
    const blobText = await blob.Body.text();
    const json = JSON.parse(blobText) as EventResult;

    setNumGarbages(json.total);

    return json;
  };

  const listStorage = async () => {
    const storage = await Storage.list(`${authID}/`, {
      level: 'public',
    });

    return storage;
  };

  useEffect(() => {
    (async () => {
      const storage = await listStorage();
      const resultKey = storage.find((v) => v.key && v.key.split('.').pop() === 'results');
      const numPhotosLocal = storage.filter((v) => v.key && v.key.split('.').pop() === 'json').length;
      setNumPhotos(numPhotosLocal);
      if (!resultKey || !resultKey.key) {
        throw new Error('結果が存在しません。');
      }
      const result = await getResult(resultKey.key);
      const rawData: number[] = new Array(labels.length).fill(8) as number[];
      Object.keys(result).forEach((objId) => {
        rawData[Number(objId)] = result[objId];
      });
      const data = createLabelAndData(rawData);
      data.sort((a, b) => b.value - a.value);

      setChartData({
        labels: data.map((v) => v.label),
        datasets: [{
          data: data.map((v) => v.value),
        }],
      });
    })().catch((e) => console.log(e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pieStyle = {
    maxWidth: '500px',
  };

  return (
    <>
      <div className="d-flex">
        <div className="col-6">
          <Card className="mt-2 p-2 col-6">
            <Card.Body>
              <p className="fs-5">画像枚数</p>
              <p className="fs-2">{`${numPhotos}枚`}</p>
              <p className="fs-5">ゴミ検出数</p>
              <p className="fs-2">{`${numGarbages}個`}</p>
            </Card.Body>
          </Card>
        </div>
        <Card className="m-2 p-5 col-6" style={pieStyle}>
          <Card.Title>ゴミ種類 割合</Card.Title>
          <Card.Body>
            <Pie
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                  },
                },
              }}
            />
          </Card.Body>
        </Card>
      </div>
      <Card className="p-5">
        <Card.Title>ゴミ種類 個数</Card.Title>
        <Card.Body>
          <Bar
            aria-sort="ascending"
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                },
              },
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default ResultChart;
