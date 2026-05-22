initComponent: function() {
    console.log('initComponent:');
    
    var a = this
      , c = a.width
      , b = a.height;
      
    // --- Added Debugging Logic ---
    var componentName = a.name || a.itemId || a.id || 'Unknown';
    var isDisabled = a.disabled ? 'Disabled' : 'Enabled';
    
    var logMsg = 'Initializing: ' + componentName + ' | State: ' + isDisabled;
    
    // Check if the component is a button (or has button-like properties)
    if ((a.isXType && a.isXType('button')) || a.xtype === 'button' || a.xtype === 'menuitem') {
        var btnLabel = a.text || 'No Label';
        
        // Tooltips in ExtJS can sometimes be a string, or a configuration object
        var btnTooltip = 'No Tooltip';
        if (typeof a.tooltip === 'string') {
            btnTooltip = a.tooltip;
        } else if (a.tooltip && a.tooltip.text) {
            btnTooltip = a.tooltip.text;
        }
        
        logMsg += ' | Label: "' + btnLabel + '" | Tooltip: "' + btnTooltip + '"';
    }
    
    console.log(logMsg);
    // -----------------------------

    if (a.plugins && !a.plugins.processed) {
        a.constructPlugins()
    }
    a.pluginsInitialized = !0;
    if (c != null || b != null) {
        a.setSize(c, b)
    }
    if (a.listeners) {
        a.on(a.listeners);
    }
}
