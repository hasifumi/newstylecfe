Ti.UI.setBackgroundColor '#fff'

# define namespace
kk = {}

# read UI
Ti.include 'ui.js'

# read logic
Ti.include 'doit.js'

# create tabGroup
kk.tabGroup = kk.ui.createApplicationTabGroup()

# open tabGroup
kk.tabGroup.open()

