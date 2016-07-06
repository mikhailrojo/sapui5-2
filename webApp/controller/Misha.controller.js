sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    return Controller.extend("sap.ui.demo.misha.controller.Misha", {
        handleOpen: function(oEvent){
            var oButton = oEvent.getSource();

            if (!this._fragment){
                this._fragment = sap.ui.xmlfragment("sap.ui.demo.misha.view.fragments.ActionSheet");
                this.getView().addDependent(this._fragment);
            }
            this._fragment.openBy(oButton);
        },
        handleMenuOpen: function(){
            if(!this._menuItem){
                this._menuItem = sap.ui.xmlfragment("sap.ui.demo.misha.view.fragments.Menu");
                this.getView().addDependent(this._menuItem);
            }
            this._menuItem.open();
        }
    });
});
