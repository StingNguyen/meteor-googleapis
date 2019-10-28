Package.describe({
  name: 'classcraft:googleapis',
  summary: "Wrapper around npm package : googleapis ^44.0.0",
  version: "44.0.0",
  git: 'https://github.com/classcraft/meteor-googleapis.git'
});

Npm.depends( {
	"googleapis": "^44.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('classcraft:googleapis.js', "server");
  if(api.export) api.export('googleapis');
});
