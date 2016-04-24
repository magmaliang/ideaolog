define(['talent'
	,"templates/joinus"
],function(Talent
	,jst
) {
	var MainView = Talent.Layout.extend({
		template:jst["joinus/index"]
		,className:"joinus_container"
	})

	return Talent.BasePageView.extend({
		mainViewClass : MainView
		,layout:'master-layout'
		,pageTitle: 'ideaology'
	});
});
