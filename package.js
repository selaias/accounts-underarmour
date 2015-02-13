Package.describe({
  name: 'selaias:accounts-underarmour',
  version: '0.1.0',
  summary: 'Login service for Under Armour accounts',
  git: 'https://github.com/selaias/accounts-underarmour.git',
  documentation: 'README.md'
});
Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.use('selaias:underarmour@0.1.0', ['client', 'server']);
  
  api.addFiles("underarmour.js");
});