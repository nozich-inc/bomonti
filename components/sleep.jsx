// sleep function
const sl = (ms) => {
  const begin = new Date();
  console.log(`ms`, ms);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`ms`, ms);

      resolve(
        `Test-${(Math.random() * 100).toFixed(3)} (${new Date() - begin}ms)}`
      );
    }, ms);
  });
};

const Sleep = async ({ ms } = {}) => {
  const begin = new Date();

  const s = await sl(ms);

  return (
    <div>
      Sleep {s} ({new Date() - begin}ms)
    </div>
  );
};

export default Sleep;
