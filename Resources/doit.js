(function() {
  kk.doit = {};
  kk.doit.something = function(_args) {
    return Ti.API.info(_args + ' tapped');
  };
}).call(this);
