sap.ui.define([
	"sap/m/library",
	"sap/m/ObjectAttribute",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/type/Currency",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (mobileLibrary, ObjectAttribute, Controller, Currency,Filter,FilterOperator) => {
	"use strict";

	return Controller.extend("project_05.controller.App", {
		formatMail(sFirstName, sLastName) {
			const oBundle = this.getView().getModel("i18n").getResourceBundle();

			return mobileLibrary.URLHelper.normalizeEmail(
				`${sFirstName}.${sLastName}@example.com`,
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		},

		formatStockValue(fUnitPrice, iStockLevel, sCurrCode) {
			return new Currency().formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
		},

		onItemSelected(oEvent) {
			const oSelectedItem = oEvent.getSource();
			const oContext = oSelectedItem.getBindingContext("products");
			const sPath = oContext.getPath();
			const oProductDetailPanel = this.byId("productDetailsPanel");
			oProductDetailPanel.bindElement({ path: sPath, model: "products" });
		},

		productListFactory(sId, oContext) {
			let oUIControl;
			// Decide based on the data which dependent to clone
			if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
				// The item is discontinued, so use a StandardListItem
				oUIControl = this.byId("productSimple").clone(sId);
			} else {
				// The item is available, so we will create an ObjectListItem
				oUIControl = this.byId("productExtended").clone(sId);

				// The item is temporarily out of stock, so we will add a status
				if (oContext.getProperty("UnitsInStock") < 1) {
					oUIControl.addAttribute(new ObjectAttribute({
						text : {
							path: "i18n>outOfStock"
						}
					}));
				}
			}

			return oUIControl;
		},
        onFilterInvoices(oEvent) {
		    var sQuery = oEvent.getParameter("query");
            var oModel = this.getView().getModel();
            var aEmployers = oModel.getProperty("/employers");

            // Filter the list of employers based on the search query
            var oFilteredData = aEmployers.filter(function (employer) {
                return employer.firstName.toLowerCase().includes(sQuery.toLowerCase()) ||
                       employer.lastName.toLowerCase().includes(sQuery.toLowerCase());
            });

            if (oFilteredData.length > 0) {
                // If a matching person is found, set their data into the model
                var selectedPerson = oFilteredData[0]; // assuming you want to select the first match
                oModel.setProperty("/firstName", selectedPerson.firstName);
                oModel.setProperty("/lastName", selectedPerson.lastName);
                oModel.setProperty("/address", selectedPerson.address);
                oModel.setProperty("/salesAmount", selectedPerson.salesAmount);
                oModel.setProperty("/currencyCode", selectedPerson.currencyCode);
                oModel.setProperty("/enabled", selectedPerson.enabled);
            }




		}
	});
});