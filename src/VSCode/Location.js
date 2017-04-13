// module VSCode.Location
"use strict";
var vscode_1 = require('vscode');
var Path = require('path');
exports.mkLocation = function (file) { return function (pos) {
    var fullPath = Path.resolve(vscode_1.workspace.rootPath, file);
    return new vscode_1.Location(vscode_1.Uri.file(fullPath), pos);
}; };
