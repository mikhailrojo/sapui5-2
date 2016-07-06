sap.ui.define([
    "sap/ui/demo/misha/controller/BaseController"
], function(Controller){

    return Controller.extend("sap.ui.demo.misha.controller.Supplier", {

        onInit: function(){
            this.getOwnerComponent().getRouter().getRoute("supplier").attachPatternMatched(this._patternMatched, this);
        },

        _patternMatched: function(oEvent){
            this.getView().bindElement({
                path: '/Suppliers('+oEvent.getParameter("arguments").SupplierID+')'
            })
        }
    });
});
