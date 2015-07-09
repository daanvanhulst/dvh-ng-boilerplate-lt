'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './src/';

        this.distPath = './dist';
        this.allTypeScript = this.source + '**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = this.typings + 'tsd.d.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    
		this.mainLessFile = this.source + 'module.less';
	}
    return GulpConfig;
})();
module.exports = GulpConfig;