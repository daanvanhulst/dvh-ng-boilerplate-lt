'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './src/';
        //this.sourceApp = this.source + 'app/';

        this.tsOutputPath = './dist';
        //this.allJavaScript = [this.source + '**/*.js'];
        this.allTypeScript = this.source + '**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = this.typings + 'tsd.d.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;