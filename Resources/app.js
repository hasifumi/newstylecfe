var kk;
Ti.UI.setBackgroundColor('#fff');
kk = {};
Ti.include('ui.js');
Ti.include('doit.js');
kk.tabGroup = kk.ui.createApplicationTabGroup();
kk.tabGroup.open();