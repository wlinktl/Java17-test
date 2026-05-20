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
