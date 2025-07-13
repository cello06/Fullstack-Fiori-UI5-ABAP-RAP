# Changelog

## [0.0.1] -2025-07-13

All notable changes to this project will be documented to this file starting from step 19;
[https://sapui5.hana.ondemand.com/#/topic/bf71375454654b44af01379a3c3a6273]


### Added

* Step-19 : Now that we have established a good structure for our app, it's time to add some more functionality. We start exploring more features of data binding by adding some invoice data in JSON format that we display in a list below the panel.
* Step-20 : The list of invoices is already looking nice, but what is an invoice without a price assigned? Typically prices are stored in a technical format and with a '.' delimiter in the data model. For example, our invoice for pineapples has the calculated price 87.2 without a currency. We are going to use the SAPUI5 data types to format the price properly, with a locale-dependent decimal separator and two digits after the separator.
* Step-21 : Sometimes the predefined types of SAPUI5 are not flexible enough and you want to do a simple calculation or formatting in the view - that is where expressions are really helpful. We use them to format our price according to the current number in the data model.We add the property numberState in our declarative view and introduce a new binding syntax that starts with = inside the brackets. This symbol is used to initiate a new binding syntax, it's called an expression and can do simple calculation logic like the ternary operator shown here.The condition of the operator is a value from our data model. A model binding inside an expression binding has to be escaped with the $ sign as you can see in the code. We set the state to "Error" (the number will appear in red) if the price is higher than 50 and to "Success" (the number will appear in green) otherwise.
* Step-22 : If we want to do a more complex logic for formatting properties of our data model, we can also write a custom formatting function. We will now add a localized status with a custom formatter, because the status in our data model is in a rather technical format.
* Step-23 : In this step, we add a search field for our product list and define a filter that represents the search term. When searching, the list is automatically updated to show only the items that match the search term.
* Step-25 : So far we have worked with local JSON data, but now we will access a real OData service to visualize remote data.(Open a new terminal window in your app root folder and execute npm i -D ui5-middleware-simpleproxy to install this package as a new development dependency in your package.json.)