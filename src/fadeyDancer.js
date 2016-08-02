var makeFadeyDancer = function(top, left, timeBetweenFades) {
  makeDancer.call(this, top, left, timeBetweenFades);
};

makeFadeyDancer.prototype = Object.create(makeDancer.prototype);
makeFadeyDancer.prototype.constructor = makeFadeyDancer;

makeFadeyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var timeBetweenFades = this.timeBetweenSteps;
  var options = {

    duration: timeBetweenFades  
  };
  // this.$node.css({color:"yellow"});
  this.$node.fadeToggle(timeBetweenFades);
};