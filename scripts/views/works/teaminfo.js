define(['talent'
, 'templates/works']
, function(Talent
, jst) {
	return Talent.ItemView.extend({
		template: jst['works/teaminfo']
		,initialize:function(){
			
		}
	});
});