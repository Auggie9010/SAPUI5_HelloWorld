sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("test.helloworld.Component", {

        metadata : {
// manifest.jsonを参照することを宣言（metadata:の部分）
            manifest: "json"
        },

        init : function () {
// 初期処理の定義
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // additional initialization can be done here
        }

    });
});