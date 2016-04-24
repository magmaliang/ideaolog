define(['talent'
	,"templates/home"
],function(Talent
	,jst
) {
	var MainView = Talent.Layout.extend({
		template:jst["home/index"]
	})

	return Talent.BasePageView.extend({
		mainViewClass : MainView
		,layout:'master-layout'
		,pageTitle: 'ideaology'
	});
});
