export const stringify = (val) => {
  if (!val) {
    return `${val}`;
  }

  if (typeof val === 'function') {
    return `[ function ]`;
  }

  if (typeof val === 'object') {
    if (Array.isArray(val)) {
      const arr = [];

      val.forEach(function (v) {
        arr.push(stringify(v));
      });

      return `[${arr.join(',')}]`;
    }

    const obj = [];

    for (const x in val) {
      if (val.hasOwnProperty(x)) {
        const actual = val[x];

        if (typeof actual !== 'undefined') {
          obj.push(`${x}:${stringify(actual)}`);
        }
      }
    }

    return `{${obj.join(',')}}`;
  }

  return `${val}`;
};
