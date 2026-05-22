initComponent: function() {
    console.log('initComponent:');
    
    var a = this;
    
    // Attempt to identify the component by name, itemId, or id
    var componentName = a.name || a.itemId || a.id || 'Unknown Component';
    var isDisabled = a.disabled ? 'Disabled' : 'Enabled';
    
    console.log('Initializing:', componentName, '| Current State:', isDisabled);

    , c = a.width
    , b = a.height;
    
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







shouldButtonBeVisible: function() {
    var a = this;
    
    // Log the entire component object to the console so you can inspect it
    console.log('****** Debugging Component Instance:', a);
    
    // Also try checking common identifiers
    console.log('ID:', a.id, '| ItemID:', a.itemId, '| Reference:', a.reference, '| XType:', a.getXType());
    
    if (a.autoHide && !a.menu.isVisible() && !a.fieldInFocus && !a.operatorButtonEl.hasCls(a.operatorButtonCls + '-mouse-over-button') && !a.operatorButtonEl.hasCls(a.operatorButtonCls + '-mouse-over-input')) {
        return !1;
    }
    return !0;
},
