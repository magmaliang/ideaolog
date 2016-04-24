define(['talent', 'templates/common'], function(Talent, jst) {
	/**
	* Footer view class
	* @author nobody
	* @extends {Backbone.View}
	* @class FooterView
	*/
	return Talent.View.extend(
		/** @lends FooterView.prototype */
	{
		template: jst['common/page-regions/footer']
		,className:"footer"
		,ui:{
			// "uiItem":".uiItem li"
		}
		,events: function() {
			var events = {};
			// events["click " + this.ui.uiItem]="clickNavItem";
			return events;
		}
		,initialize: function() {
			// this.listenTo(this.model, 'change', function() {})
		}
		
		,render: function() {
			/*
				Start coding from here
			*/
			var data = {};
			if(this.model){
				data = this.model.toJSON();
			}
			this.$el.html(this.template(data));
			return this.$el;
		}
	});

});