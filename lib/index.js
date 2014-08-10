var View = require('atom').View
var $ = View.__super__.constructor
var JsView = require('./js-view')

module.exports = {
  activate: function(){
    atom.workspaceView.command('js-package-sample:pure-jquery', function(){
      var n = $('<div class="overlay from-top">Hey, this is JavaScript!</div>')
      $('.workspace').append(n)
      n.on('click', function(){ n.remove() })
    })

    atom.workspaceView.command('js-package-sample:atom-view', function(){
      var view = new JsView()

      $('.workspace').append(view)
    })
  },
  deactivate: function(){

  }
}
