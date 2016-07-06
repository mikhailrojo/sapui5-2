sap.ui.define([
    "sap/ui/demo/misha/controller/BaseController"
], function(BaseController){
    return BaseController.extend("sap.ui.demo.misha.controller.ObjectView", {
        onInit: function(){
            this.getOwnerComponent().getRouter().getRoute("object").attachPatternMatched(this._onShow, this);
        },
        _onShow: function(oEvent){
            var id = oEvent.getParameter("arguments").id,
            that = this;
            this.getView().getModel().read("/Products("+id+")",{
                success: function(data){
                    that.getView().byId("supplierTable").bindElement({
                        path: "/Suppliers("+data.SupplierID+")"
                    });
                },
                error: function(err){
                    console.log(err);
                }
            });

            this.getView().bindElement({
                path: "/Products("+id+")"
            })



        },
        onSelectProduct: function(oEvent){
            this.getOwnerComponent().getRouter().navTo("supplier", {
                SupplierID: oEvent.getSource().getParent().getBindingContext().getProperty("SupplierID")
            });
        }
    });
});
