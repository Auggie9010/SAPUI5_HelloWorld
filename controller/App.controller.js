sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
// sap/ui/core/mvc/Controllerクラスを拡張して実装
   return Controller.extend("test.helloworld.controller.App", {
      onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sProduct = this.getView().getModel("mPrice").getProperty("/product/name");
            var sMsg = oBundle.getText("helloMessage", [sProduct]);

         // show a native JavaScript alert
         alert(sMsg);
      }
   });
});