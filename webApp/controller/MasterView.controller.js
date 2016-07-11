sap.ui.define([
    "sap/ui/demo/misha/controller/BaseController"
], function(Controller){
    return Controller.extend("sap.ui.demo.misha.controller.MasterView", {
        onInit: function(){
            //console.log(this.getOwnerComponent().getModel().getData());
            // var oModel = this.getOwnerComponent().getModel()
            //
            // oModel.read("/", {
            //     success: function(data){
            //         console.log(data.results);
            //     },
            //     error: function(error){
            //         console.log(error);
            //     }
            // })
        },
        onObjectListPress: function (oEvent) {

        //    console.log(oEvent.getParameter('listItem').getBindingContext().getProperty("CategoryID"));

            this.getOwnerComponent().getRouter().navTo("object" , {
                id: oEvent.getParameter('listItem').getBindingContext().getProperty("ProductID")
            })
        }
    });
});
