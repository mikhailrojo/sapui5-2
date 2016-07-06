sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller, History){

    return Controller.extend("sap.ui.demo.misha.controller.BaseController", {
        onInit: function(){

        },
        onNavBack: function(){
            var sPreviousHash = History.getInstance().getPreviousHash();

				if (sPreviousHash !== undefined) {
					history.go(-1);
				} else {
					this.getOwnerComponent().getRouter().navTo("home", {}, true);
				}
        }
    })
});
