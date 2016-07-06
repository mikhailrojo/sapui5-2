sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    return Controller.extend("sap.ui.demo.misha.controller.Misha2", {
        onInit: function(){

            var tockens = {
                "to": [
                    {
                        "name": "Первый",
                        "id": "1"
                    },
                    {
                        "name": "Второй",
                        "id": "2"
                    },
                    {
                        "name": "Третий",
                        "id": "3"
                    },
                    {
                        "name": "Четвертый",
                        "id": "4"
                    },
                    {
                        "name": "Пятый",
                        "id": "5"
                    },
                    {
                        "name": "Шестой",
                        "id": "6"
                    }
                ]
            }

            var oModel = new sap.ui.model.json.JSONModel(tockens);
            this.getView().setModel(oModel);



        }
    });
});
