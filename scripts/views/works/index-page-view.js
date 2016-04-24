define(['talent'
	,"templates/home"
	,"./teaminfo"
],function(Talent
	,jst
	,TeamInfo
) {
	var MainView = Talent.Layout.extend({
		template:jst["home/index"]
		,regions:{
			"TeamRegion":".teamgroup"
		}
	})

	return Talent.BasePageView.extend({
		mainViewClass : MainView
		,layout:'master-layout'
		,pageTitle: 'ideaology'
	});
});
