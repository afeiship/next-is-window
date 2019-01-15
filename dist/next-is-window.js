(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isWindow = function(inObj) {
    // In IE8 window.window !== window.window, so we allow == here.
    return inObj != null && inObj == inObj.global;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isWindow;
  }
})();
