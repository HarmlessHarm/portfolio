// ======================= DOM Utility Functions from PastryKit =============================== //

// Sure, we could use jQuery or XUI for these, 
// but these are concise and will work with plain vanilla JS

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};

// ======================= DDD mini framework =============================== //

(function(){



var DDD = {};
// again, borrowed from PastryKit
DDD.isTangible = !!('createTouch' in document);
DDD.CursorStartEvent = DDD.isTangible ? 'touchstart' : 'mousedown';
DDD.CursorMoveEvent = DDD.isTangible ? 'touchmove' : 'mousemove';
DDD.CursorEndEvent = DDD.isTangible ? 'touchend' : 'mouseup';

// get i.e. 'WebkitTransform'
var transformProp = Modernizr.prefixed('transform');

/* ==================== EventHandler ==================== */

DDD.EventHandler = function() {};

DDD.EventHandler.prototype.handleEvent = function( event ) {
  if ( this[event.type] ) {
    this[event.type](event);
  }
};




/* ==================== Start Up ==================== */


DDD.init = function() {
  
  var ranges = document.querySelectorAll('input[type="range"]'),
      rangesLen = ranges.length,
      i;
  
  if ( rangesLen ) {
    
     // create range output display
    for ( i=0; i < rangesLen; i++ ) {
      new DDD.RangeDisplay( ranges[i] );
    }
    
    // check browser support for range input
    // this has been hacked together from Modernizr range input test
    // -> Thanks Faruk Ates, Paul Irish, and Mike Taylor http://modernizr.com
    var isRangeSupported = (function() {
      var isSupported = ranges[0].type !== 'text';
      if ( isSupported ) {
        var appearanceProp = Modernizr.prefixed('appearance');
        isSupported = getComputedStyle( ranges[0] )[ appearanceProp ] !== 'textfield';
      }
      return isSupported;
    })();
    
    // create range inputs for iOS
    if ( !isRangeSupported ) {
      for ( i=0; i < rangesLen; i++ ) {
        new DDD.ProxyRange( ranges[i] );
      }
    }
    
  }
  
};


window.addEventListener( 'DOMContentLoaded', DDD.init, false);

// put in global namespace
window.DDD = DDD;

})();
