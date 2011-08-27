# define namespace
kk.ui = {}

# set tab-name, window-name
tabname1 = 'Tab1'
tabname2 = 'Tab2'

# create window in tab
kk.ui.createAttendeeWindow = (_attended)->
  window = Ti.UI.createWindow
    title: if !_attended then tabname1 else tabname2
  button = Ti.UI.createButton
    title: if !_attended then tabname1+'Tab' else tabname2+'Tab'
    width: 200,
    height: 50
  window.add button

  button.addEventListener 'click', (e)->
    kk.doit.something button.title

  return window

# create tabGroup
kk.ui.createApplicationTabGroup = ()->
  # create tabGroup
  tabGroup = Ti.UI.createTabGroup()

  # create tab-window
  registered = kk.ui.createAttendeeWindow false
  attended = kk.ui.createAttendeeWindow true

  # create tab
  kk.registeredTab = Ti.UI.createTab
    title: tabname1,
    window: registered,
    icon: 'KS_nav_views.png'
  kk.attendedTab = Ti.UI.createTab
    title: tabname2,
    window: attended,
    icon: 'KS_nav_ui.png'

  # add tabGroup
  tabGroup.addTab kk.registeredTab
  tabGroup.addTab kk.attendedTab

  return tabGroup
