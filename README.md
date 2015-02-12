# accounts-underarmour

Login service for Under Armour (mapmyrun mapmybike etc) accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Under Armour login services. Example:

```
ServiceConfiguration.configurations.remove({
    service: "underarmour"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "underarmour" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Under Armour button.