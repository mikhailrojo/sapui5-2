sap.ui.define([
    "sap/ui/demo/misha/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
], function(Controller, JSONModel, Filter){

    return Controller.extend("sap.ui.demo.misha.controller.allProducts", {
        onInit: function(){
            var oJSONModel = new JSONModel({
                totalCount: 0,
                discontinued: 0
            });
            this.getOwnerComponent().setModel(oJSONModel, "AllProducts");

            this._mFilter = {
                discontinued: [new Filter("Discontinued", "EQ", true)],
                all: []
            }
        },

        onUpdateFinished: function(oEvent){
            var total = oEvent.getParameter("total"),
                that = this,
                oModel = this.getOwnerComponent().getModel("AllProducts");

            oModel.setProperty("/totalCount", total);

            this.getOwnerComponent().getModel().read('/Products',{
                success: function(data){
                    that.getOwnerComponent().getModel("AllProducts").setProperty("/discontinued", data.results.length);
                },
                filters: this._mFilter.discontinued

            })

        },
        onQuickFilter: function(oEvent){
            var sKey = oEvent.getParameter("key");
            this.getView().byId("table").getBinding("items").filter(this._mFilter[sKey]);
        },

        onSearch: function(oEvent){
            var oFilter = new Filter("ProductName", sap.ui.model.FilterOperator.Contains, oEvent.getParameter("query"));
            this.getView().byId("table").getBinding("items").filter([oFilter]);
        }
    })
});
