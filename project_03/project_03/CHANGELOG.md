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
* Step-26 : We just ran our app against a real service, but for developing and testing our app we do not want to rely on the availability of the "real" service or put additional load on the system where the data service is located.
We copy the index.html to a separate file in the webapp/test folder and name it mockServer.html. We will now use this file to run our app in test mode with mock data loaded from a JSON file. Test pages should not be placed in the application root folder but in a subfolder called test to clearly separate productive and test coding.

From this point on, you have two different entry pages: One for the real "connected" app (index.html) and one for local testing (mockServer.html). You can freely decide if you want to do the next steps on the real service data or on the local data within the app.

We modify the mockServer.html file and change the page title to distinguish it from the productive start page. In the bootstrap, the data-sap-ui-resource-roots property is also changed. The namespace now points to the folder above ("../"), because the mockServer.html file is now in a subfolder of the webapp folder. Instead of loading the app component directly, we now call a script initMockServer.js.