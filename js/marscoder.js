// marscoder.js
// by cntomxu

(function() {
	var win = this;

	var $mc = function() {

	}

    $mc.alert = function(str) { alert(str); }

	win.$mc = $mc;
}).call(this);