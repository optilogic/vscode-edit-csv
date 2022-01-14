//--- called before dom (body) is rendered

// document.documentElement.style.setProperty('--extension-options-bar-display', initialConfig?.optionsBarAppearance === "collapsed" ? `none` : `block`)

//--- side-panel
if (typeof initialConfig === 'undefined') {
	document.documentElement.style.setProperty('--extension-side-panel-display', `none`)
	document.documentElement.style.setProperty('--extension-side-panel-expand-icon-display', `block`)
	document.documentElement.style.setProperty('--extension-side-panel-collapse-icon-display', `none`)
} else {
	document.documentElement.style.setProperty('--extension-side-panel-display', initialConfig?.sidePanelAppearance === "collapsed" ? `none` : `flex`)
	document.documentElement.style.setProperty('--extension-side-panel-expand-icon-display', initialConfig?.sidePanelAppearance === "collapsed" ? `block` : `none`)
	document.documentElement.style.setProperty('--extension-side-panel-collapse-icon-display', initialConfig?.sidePanelAppearance === "collapsed" ? `none` : `block`)
}
