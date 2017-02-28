/* jshint node: true */
'use strict';

var Command = require('ember-cli/lib/models/command');

module.exports = Command.extend({
  name: 'ts:build',
  description: 'Build visual documentation site',
  works: 'insideProject',
  availableOptions: [
    { name: 'output-path', type: 'Path', default: 'dist/', aliases: ['o'] }
  ],

  run: function(commandOptions) {
    var buildTask = new this.tasks.Build({
      ui: this.ui,
      analytics: this.analytics,
      project: this.project
    });

    process.env['TELLING_STORIES'] = true;

    return buildTask.run(Object.assign(commandOptions, {
      environment: 'test'
    }));
  }
});
