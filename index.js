/* jshint node: true */
'use strict';

module.exports = {
  name: 'telling-stories-site',

  included: function() {
    this._super.included.apply(this, arguments);
    this.isEnabled = !!process.env['TELLING_STORIES'];
  },

  postBuild: function(result) {
    if (!this.isEnabled) {
      return;
    }

    var dir = result.directory;
    var fs = require('fs');
    var path = require('path');

    fs.unlinkSync(path.resolve(dir, 'index.html'));
    fs.renameSync(path.resolve(dir, 'tests/index.html'), path.resolve(dir, 'runner.html'));
    fs.renameSync(path.resolve(dir, 'telling-stories-site/viewer.html'), path.resolve(dir, 'index.html'));
  },

  includedCommands: function() {
    return require('./lib/commands');
  }
};
