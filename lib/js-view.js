var View = require('atom').View
var $ = View.__super__.constructor

__extend = function (child, parent) {
  for(var k in parent) {
    if({}.hasOwnProperty.call(parent, k)){
      child[k] = parent[k]
    }
  }
  function ctor() { this.constructor = child }
  ctor.prototype = parent.prototype
  child.prototype = new ctor()
  child.__super__ = parent.prototype
  return child
}

function JsView(){
  View.apply(this, arguments)
}

__extend(JsView, View)

JsView.content = function(){
  return this.div({class: "overlay from-top"}, "Hey, This is JavaScript!")
}
console.log(JsView.content)

JsView.prototype.initialize = function(){
  var self = this
  this.on('click', function(){
    self.remove()
  })
}

module.exports = JsView
