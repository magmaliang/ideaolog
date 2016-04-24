define(['talent', 'templates/common', 
	'views/common/page-regions/header-view', 'views/common/page-regions/footer-view', 
	'views/common/page-regions/sidebar-view'],
	function(Talent, jst, HeaderView, FooterView, SidebarView) {

	var Layout = Talent.BaseMasterLayout.extend({
		template: jst['common/layouts/master-layout']
		,regionsClass: {
			header: HeaderView,
			footer: FooterView,
		}
		
	});
	return new Layout;
});