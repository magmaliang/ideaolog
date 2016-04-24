/**
 * Project entry function <br />
 * @name module:main~init
 */

require(['config'], function(mainConfigFile){
	require(['talent'],
		function(Talent){
			Talent.app.start(
				_.extend({},window.BSGlobal || {})
			);
	});
});