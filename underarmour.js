Accounts.oauth.registerService('underArmour');
if (Meteor.isClient) {
  Meteor.loginWithUnderArmour = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    UnderArmour.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.underArmour'],
    forOtherUsers: ['services.underArmour.username']
  });
}
