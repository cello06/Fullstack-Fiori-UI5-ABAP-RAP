sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("flexiblecolumnlayout.controller.Detail", {
		
		onInit: function () {
			// Optional: initialization logic if needed
		},

		onNavBack: function () {
		 var oFCL = this.getView().getParent().getParent(); // Traverse up to FlexibleColumnLayout

       
        oFCL.setLayout("OneColumn"); // Collapse to master only
          
		}
	});
});
