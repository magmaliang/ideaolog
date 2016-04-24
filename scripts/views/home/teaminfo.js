define(['talent'
	, 'templates/todos/todos']
	, function(Talent, jst) {
	return Talent.ItemView.extend({
		template: jst['todos/add-item']
		,initialize: function() {
			this.listenTo(this.model,'change',this.render);
		}
		,ui:{
			"textInput":".input"
		}
		,events: function() {
			var events = {};
			events["keypress " + this.ui.textInput] = "resetModel";
			return events;
		}
		,resetModel:function(e){
			var newValue =  this.ui.textInput.val().trim();
			if (e.keyCode == 13 && newValue) {
				this.model.set({inputVal:newValue,phase:!this.model.get('phase')});
			}		
		}
		,onRender:function(){
			this.ui.textInput.focus();
		}
	});

});