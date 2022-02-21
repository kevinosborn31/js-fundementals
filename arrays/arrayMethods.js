Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (i === 0 && initialValue === undefined) {
        accumulator = this[i];
      } else {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };