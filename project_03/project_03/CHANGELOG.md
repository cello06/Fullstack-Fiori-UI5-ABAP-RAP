    # Changelog
    All notable changes to this project will be documented to this file starting from step 19;
    [https://sapui5.hana.ondemand.com/#/topic/bf71375454654b44af01379a3c3a6273]

Step-19 : Now that we have established a good structure for our app, it's time to add some more functionality. We start exploring more features of data binding by adding some invoice data in JSON format that we display in a list below the panel.

Step-20 : The list of invoices is already looking nice, but what is an invoice without a price assigned? Typically prices are stored in a technical format and with a '.' delimiter in the data model. For example, our invoice for pineapples has the calculated price 87.2 without a currency. We are going to use the SAPUI5 data types to format the price properly, with a locale-dependent decimal separator and two digits after the separator.