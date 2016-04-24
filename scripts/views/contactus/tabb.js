define(['talent'
, 'templates/contactus']
, function(Talent
, jst) {
	return Talent.ItemView.extend({
		template: jst['contactus/tabb']
		,initialize:function(){
			
		}
	});
});