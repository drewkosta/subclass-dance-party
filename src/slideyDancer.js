var makeSlideyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSlideyDancer.prototype = Object.create(makeDancer.prototype);
makeSlideyDancer.prototype.constructor = makeSlideyDancer;

makeSlideyDancer.prototype.step = function() {
  // call the old version of step at the beginning of a ny call to this new version of step
  makeDancer.prototype.step.call(this);
  var options = {

  }; 
  this.$node.slideToggle(options);
};

makeSlideyDancer.prototype.size = function() {

};
