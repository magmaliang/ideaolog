// bugfix: find missing events by re-delegating
Marionette.Region.prototype.show = function(view, options){
	this.ensureEl();
	options = options || {};
	if (view !== this.currentView) {
		if(this.currentView) {
			var lastViewEl = $(this.currentView.el).clone();
		}
		this.close();
		
		if(view.isClosed){
			view._initialEvents && view._initialEvents();
		}
		view.render();
		view.undelegateEvents();
		this.open(view, options);
		view.unbindUIElements && view.unbindUIElements();
		view.delegateEvents();
		view.bindUIElements && view.bindUIElements();			
	} else {
		view.render();
	}
	Marionette.triggerMethod.call(view, "show");
	Marionette.triggerMethod.call(this, "show", view);

	this.currentView = view;
	if(options.noAnimate) {
		return ;
	}
	// showAnimation.call(this, view, lastViewEl);
	
	function showAnimation( view, lastViewEl) {
		var self = this;
		
		// add animation
		if(lastViewEl && (navigator.userAgent && navigator.userAgent.indexOf('Chrome') != -1)) {		
			this.$el.bind('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function(){
				self.$el.find(lastViewEl).remove();
				self.$el.removeClass('_animate_container _animate_flip_rotate');				
				self.$el.find(view.el).attr('_animate_end', true).removeClass('_animate_rotate_back');
				//.animate({height : self.$el.find(view.el).height()}, 600);	
			});
			$(lastViewEl).removeClass('_animate_rotate_back').addClass('_animate_rotate_front');
			$(view.el).addClass('_animate_rotate_back');
			this.$el.append(lastViewEl).addClass('_animate_container _animate_flip_rotate');
		} else {
			self.$el.find(view.el).attr('_animate_end', true);
		}
	}
};