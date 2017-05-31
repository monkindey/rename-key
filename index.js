module.exports = function(target, modifier) {
  return Object.keys(target).reduce(function(acc, key) {
    acc[modifier(key)] = target[key];
    return acc;
  }, {});
};
