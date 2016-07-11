sap.ui.define([
    "sap/ui/core/util/MockServer"
], function(MockServer){
    return {
        init: function(){
            var oMockServer= new MockServer({
                rootUri: "http://services.odata.org/Northwind/Northwind.svc/"
            });
            var _sMetadataPath = "sap/ui/demo/misha/localService/metadata";
            var sMetadataUrl = jQuery.sap.getModulePath(_sMetadataPath, ".xml");

            oMockServer.simulate(sMetadataUrl, {
                sMockdataBaseUrl: "../localService/mockdata",
                bGenerateMissingMockData: false
            });

            oMockServer.start();
            console.log("Работает мок сервер");
            jQuery.sap.log.info("Работает мок сервер");
        }
    }
})
