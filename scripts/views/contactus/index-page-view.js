define(['talent'
	,"templates/contactus"
	,"./taba"
	,"./tabb"
],function(Talent
	,jst
	,TabA
	,TabB
) {
	var MainView = Talent.Layout.extend({
		template:jst["contactus/index"]
		,className:"bfc container3"
		,events:{
			"click .tab.a":"activeTaba"
			,"click .tab.b":"activeTabb"
		}
		,regions:{
			"content":".content"
		}
		,initialize:function(){

		}
		,onRender:function(){
			this.activeTaba();
		}
		,activeTaba:function(e) {
			this.$(".tab").removeClass("active");
			this.$(".tab.a").addClass("active");
			this.tab = new TabA();
			this.content.show(this.tab);
		}
		,activeTabb:function(e) {
			this.$(".tab").removeClass("active");
			this.$(".tab.b").addClass("active");
			this.tab = new TabB();
			this.content.show(this.tab);
		}
	})

	return Talent.BasePageView.extend({
		mainViewClass : MainView
		,layout:'master-layout'
		,pageTitle: 'ideaology'
	});
});
