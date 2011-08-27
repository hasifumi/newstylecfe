(function() {
  var tabname1, tabname2;
  kk.ui = {};
  tabname1 = 'Tab1';
  tabname2 = 'Tab2';
  kk.ui.createAttendeeWindow = function(_attended) {
    var button, window;
    window = Ti.UI.createWindow({
      title: !_attended ? tabname1 : tabname2
    });
    button = Ti.UI.createButton({
      title: !_attended ? tabname1 + 'Tab' : tabname2 + 'Tab',
      width: 200,
      height: 50
    });
    window.add(button);
    button.addEventListener('click', function(e) {
      return kk.doit.something(button.title);
    });
    return window;
  };
  kk.ui.createApplicationTabGroup = function() {
    var attended, registered, tabGroup;
    tabGroup = Ti.UI.createTabGroup();
    registered = kk.ui.createAttendeeWindow(false);
    attended = kk.ui.createAttendeeWindow(true);
    kk.registeredTab = Ti.UI.createTab({
      title: tabname1,
      window: registered,
      icon: 'KS_nav_views.png'
    });
    kk.attendedTab = Ti.UI.createTab({
      title: tabname2,
      window: attended,
      icon: 'KS_nav_ui.png'
    });
    tabGroup.addTab(kk.registeredTab);
    tabGroup.addTab(kk.attendedTab);
    return tabGroup;
  };
}).call(this);
