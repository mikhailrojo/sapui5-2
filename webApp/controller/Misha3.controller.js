sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    return Controller.extend("sap.ui.demo.misha.controller.Misha3", {
        onInit: function(){
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData('data.json');
            this.getView().setModel(oModel);
        }
    });
});
