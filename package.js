// Package metadata file for Meteor.js
var packageName = 'aaronroberson:angular-segmentio';
var where = 'client';
var version = '1.0.0';
var summary = 'An AngularJS module for segment.io analytics service';
var gitLink = 'https://github.com/aaronroberson/angular-segmentio';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.2.0', where);

  api.addFiles('angular-segmentio.js', where);
});  