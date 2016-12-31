var Common = (function() {

  return {
    silenceUncaughtInPromise: function(promise) {
      return promise.catch(function(err) {
        return err;
      }) && promise;
    }
  };

})();
