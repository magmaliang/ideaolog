define(['talent','templates/common'], function(Talent, jst) {
	return Talent.CompositeView.extend(
	{
		template: jst['common/page-regions/header']
		,className:"header"
		,initialize: function() {
			Talent.app.vent.on('route',this.setActive, this);
		}
		,onRender: function() {
			this.setActive();
		}
		,setActive: function() {
			Talent.app.request('history:getFragments').done(_.bind(function(fragments) {
				this.$el.find('.menu li').removeClass('active');
				this.$el.find('li.'+ fragments[0]).addClass('active');
			},this));
		}
	});

});