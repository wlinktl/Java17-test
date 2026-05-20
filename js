shouldButtonBeVisible: function() {
    // 'this' refers to the component (the button/element)
    var a = this;
    
    // Log the ID and Name (if available) to the console
    console.log('****** Checking visibility for component:', a.id || 'No ID', '| Name:', a.name || 'No Name', '******');
    
    if (a.autoHide && !a.menu.isVisible() && !a.fieldInFocus && !a.operatorButtonEl.hasCls(a.operatorButtonCls + '-mouse-over-button') && !a.operatorButtonEl.hasCls(a.operatorButtonCls + '-mouse-over-input')) {
        return !1;
    }
    return !0;
},
