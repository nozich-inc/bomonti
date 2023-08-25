'use client';

import dateformat from 'dateformat';

const statics = [
  { name: 'Other', color: '#f06eaa', colorName: 'pink' },
  { name: 'Cluster', color: '#c9c2af', colorName: 'slate' },
  { name: 'Queuening', color: '#c2b79b', colorName: 'gray' },
  { name: 'Network', color: '#9f9371', colorName: 'zinc' },
  { name: 'Administrative', color: '#717354', colorName: 'neutral' },
  { name: 'Configuration', color: '#5c440b', colorName: 'stone' },
  { name: 'Commit', color: '#e46800', colorName: 'orange' },
  { name: 'Application', color: '#c02800', colorName: 'red' },
  { name: 'Concurrency', color: '#8b1a00', colorName: 'rose' },
  { name: 'System I/O', color: '#0094e7', colorName: 'sky' },
  { name: 'User I/O', color: '#004ae7', colorName: 'blue' },
  { name: 'Scheduler', color: '#ccffcc', colorName: 'lime' },
  { name: 'CPU + CPU Wait', color: '#00cc00', colorName: 'green' },
];

function TopActivity({ data }) {
  const { TZOffset, sd, sdMetadata, sliderLeft, sliderRight } =
    JSON.parse(data);

  console.log(
    'TZOffset, sliderLeft, sliderRight',
    TZOffset,
    sliderLeft,
    sliderRight
  );

  const colors = sdMetadata[0].color.map(
    (color) =>
      statics.find((item) => item.color === `#${color.slice(2)}`)?.colorName
  );

  const categories = sdMetadata[0].legend;

  const chartData = sd.map((item) => {
    const row = Object.values(item).slice(1);

    return {
      date: dateformat(new Date(Number(item.time[0])), 'HH:mm'),
      ...Object.fromEntries(categories.map((c, i) => [c, row[i][0]])),
    };
  });

  return (
    <div className="mt-8">
      <div>Top Activity</div>

      <div>Active Sessions</div>

      <div
        className="mt-4 h-80"
        // data={chartData}
        // categories={categories}
        // index="date"
        // colors={colors}
        // stack={true}
      ></div>
    </div>
  );
}

export default TopActivity;
