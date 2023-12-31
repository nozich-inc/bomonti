let getRandomValues;

const rnds8 = new Uint8Array(16);

export default function rng() {
  if (!getRandomValues) {
    getRandomValues =
      typeof crypto !== 'undefined' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      );
    }
  }

  return getRandomValues(rnds8);
}
