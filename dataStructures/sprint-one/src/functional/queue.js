var Queue = function () {
  var someInstance = {};
  var startIndex = 0;
  var endIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[endIndex] = value;
    endIndex++;
  };

  someInstance.dequeue = function () {
    if (endIndex - startIndex <= 0) {
      return 0;
    }
    const temp = storage[startIndex];
    delete storage[startIndex];
    startIndex++;
    return temp;
  };

  someInstance.size = function () {
    return endIndex - startIndex;
  };

  return someInstance;
};
