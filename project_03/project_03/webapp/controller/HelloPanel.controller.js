sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
	Controller, MessageToast
) {
	"use strict";

	return Controller.extend("project_03.controller.HelloPanel", {
        onShowHello() {
         // read msg from i18n model
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // show message
         MessageToast.show(sMsg);
      },
            async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "project_03.view.HelloDialog"
            });
        
            this.oDialog.open();
        },
        onCloseDialog() {
            this.byId("helloDialog").close();
        }
	});
});