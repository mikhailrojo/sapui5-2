sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){

    return Controller.extend("sap.ui.demo.misha.controller.App", {
        onInit: function(){

            var oSplitApp = this.getView().byId("app");

            var mi = oSplitApp.getMasterPages();
            console.log(oSplitApp);
            console.log(mi);
        }
    })
});
