sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel){

    return UIComponent.extend("sap.ui.demo.misha.Component", {
        metadata: {
            manifest: "json"
        },
        init: function(){

            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }
    });
});
