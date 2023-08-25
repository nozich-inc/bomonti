'use client';

// const data = [
//   {
//     Month: 'Jan 21',
//     Sales: 2890,
//     Profit: 2400,
//   },
//   {
//     Month: 'Feb 21',
//     Sales: 1890,
//     Profit: 1398,
//   },
//   {
//     Month: 'Jan 22',
//     Sales: 3890,
//     Profit: 2980,
//   },
// ];

// const valueFormatter = (number) =>
//   `$ ${Intl.NumberFormat('tr-TR').format(number).toString()}`;

function Chart() {
  return (
    <div className="mt-8">
      <div>Performance</div>

      <div>Comparison between Sales and Profit</div>

      <div
        className="mt-4 h-80"
        // data={data}
        // categories={['Sales', 'Profit']}
        // index="Month"
        // colors={['indigo', 'fuchsia']}
        // valueFormatter={valueFormatter}
      ></div>
    </div>
  );
}

export default Chart;
