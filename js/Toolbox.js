// Generated by CoffeeScript 1.6.3
/*
@desc
@author Michael Kaserer e1025263@student.tuwien.ac.at
*/


(function() {
  this.Toolbox = (function() {
    function Toolbox() {
      this.tools = {
        'Window level': new WindowLevel(),
        'Zoom': new Zoom(),
        'Move': new Move(),
        'Roi': new Roi()
      };
      this.currentTool = this.tools['Window level'];
    }

    Toolbox.prototype.setCurrentTool = function(funcName) {
      return this.currentTool = this.tools[funcName];
    };

    return Toolbox;

  })();

}).call(this);
