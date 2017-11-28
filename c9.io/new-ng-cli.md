# new ng cli

> v1.5.4

_                      _                 ____ _     ___
/ \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
/ 鈻?\ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
/ ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
|___/

Angular CLI: 1.5.4
Node: 8.9.1
OS: win32 x64
Angular: undefined
...

@angular/cli: 1.5.4
@angular-devkit/build-optimizer: 0.0.33
@angular-devkit/core: 0.0.21
@angular-devkit/schematics: 0.0.37
@ngtools/json-schema: 1.1.0
@ngtools/webpack: 1.8.4
@schematics/angular: 0.1.7
typescript: 2.6.1
webpack: 3.8.1



```sh

G:\wwwRoot\Angular2-4-6>ng --help
ng build <options...>
  Builds your app and places it into the output path (dist/ by default).
  aliases: b
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: false) Run build when files change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --app (String) Specifies app name or index to use.
    aliases: -a <value>, -app <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --subresource-integrity (Boolean) (Default: false) Enables the use of subresource integrity validation.
    aliases: -sri, --subresourceIntegrity
  --bundle-dependencies (none, all) (Default: none) Available on server platform only. Which external dependencies to bundle into the module. By
default, all of node_modules will be kept as requires.
    aliases: --bundleDependencies <value>
  --stats-json (Boolean) (Default: false) Generates a `stats.json` file which can be analyzed using tools such as: `webpack-bundle-analyzer` or https://webpack.github.io/analyse.
    aliases: --statsJson

ng completion <options...>
  Adds autocomplete functionality to `ng` commands and subcommands.
  --all (Boolean) (Default: true) Generate a completion script compatible with both bash and zsh.
    aliases: -a, -all
  --bash (Boolean) (Default: false) Generate a completion script for bash.
    aliases: -b, -bash
  --zsh (Boolean) (Default: false) Generate a completion script for zsh.
    aliases: -z, -zsh

ng doc <keyword> <options...>
  Opens the official Angular API documentation for a given keyword.
  --search (Boolean) (Default: false) Search whole angular.io instead of just api.
    aliases: -s, --search

ng e2e <options...>
  Run e2e tests in existing project.
  aliases: e
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: false) Run build when files change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --app (String) Specifies app name or index to use.
    aliases: -a <value>, -app <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --subresource-integrity (Boolean) (Default: false) Enables the use of subresource integrity validation.
    aliases: -sri, --subresourceIntegrity
  --bundle-dependencies (none, all) (Default: none) Available on server platform only. Which external dependencies to bundle into the module. By
default, all of node_modules will be kept as requires.
    aliases: --bundleDependencies <value>
  --port (Number) (Default: 0) The port to use to serve the application.
    aliases: -p <value>, -port <value>
  --host (String) (Default: localhost) Listens only on localhost by default.
    aliases: -H <value>, -host <value>
  --proxy-config (Path) Proxy configuration file.
    aliases: -pc <value>, --proxyConfig <value>
  --ssl (Boolean) (Default: false) Serve using HTTPS.
    aliases: -ssl
  --ssl-key (String) (Default: ssl/server.key) SSL key to use for serving HTTPS.
    aliases: --sslKey <value>
  --ssl-cert (String) (Default: ssl/server.crt) SSL certificate to use for serving HTTPS.
    aliases: --sslCert <value>
  --open (Boolean) (Default: false) Opens the url in default browser.
    aliases: -o, -open
  --live-reload (Boolean) (Default: true) Whether to reload the page on change, using live-reload.
    aliases: -lr, --liveReload
  --public-host (String) Specify the URL that the browser client will use.
    aliases: --live-reload-client <value>, --publicHost <value>
  --disable-host-check (Boolean) (Default: false) Don't verify connected clients are part of allowed hosts.
    aliases: --disableHostCheck
  --serve-path (String) The pathname where the app will be served.
    aliases: --servePath <value>
  --hmr (Boolean) (Default: false) Enable hot module replacement.
    aliases: -hmr
  --config (String) Use a specific config file. Defaults to the protractor config file in angular-cli.json.
    aliases: -c <value>, --config <value>
  --specs (Array) (Default: ) Override specs in the protractor config. Can send in multiple specs by repeating flag (ng e2e --specs=spec1.ts --specs=spec2.ts).
    aliases: -sp <value>, --specs <value>
  --element-explorer (Boolean) (Default: false) Start Protractor's Element Explorer for debugging.
    aliases: -ee, --elementExplorer
  --webdriver-update (Boolean) (Default: true) Try to update webdriver.
    aliases: -wu, --webdriverUpdate
  --serve (Boolean) (Default: true) Compile and Serve the app. All non-reload related serve options are also available (e.g. --port=4400).
    aliases: -s, --serve

ng eject <options...>
  Ejects your app and output the proper webpack configuration and scripts.
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: false) Run build when files change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --subresource-integrity (Boolean) (Default: false) Enables the use of subresource integrity validation.
    aliases: -sri, --subresourceIntegrity
  --bundle-dependencies (none, all) (Default: none) Available on server platform only. Which external dependencies to bundle into the module. By
default, all of node_modules will be kept as requires.
    aliases: --bundleDependencies <value>
  --force (Boolean) Overwrite any webpack.config.js and npm scripts already existing.
    aliases: --force
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>

ng generate <schematic> <options...>
  Generates and/or modifies files based on a schematic.
  aliases: g
  --dry-run (Boolean) (Default: false) Run through without making any changes.
    aliases: -d, --dryRun
  --force (Boolean) (Default: false) Forces overwriting of files.
    aliases: -f, --force
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>
  --collection (String) Schematics collection to use.
    aliases: -c <value>, --collection <value>
  --lint-fix (Boolean) Use lint to fix files after generation.
    aliases: -lf, --lintFix

ng get <options...>
  Get a value from the configuration. Example: ng get [key]
  --global (Boolean) (Default: false) Get the value in the global configuration (in your home directory).
    aliases: --global

ng help <command-name (Default: all)> <options...>
  Shows help for the CLI.
  --short (Boolean) (Default: false) Display command name and description only.
    aliases: -s, --short

ng lint <options...>
  Lints code in existing project.
  aliases: l
  --fix (Boolean) (Default: false) Fixes linting errors (may overwrite linted files).
    aliases: -fix
  --type-check (Boolean) (Default: false) Controls the type check for linting.
    aliases: --typeCheck
  --force (Boolean) (Default: false) Succeeds even if there was linting errors.
    aliases: --force
  --format (String) (Default: prose) Output format (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).
    aliases: -t <value>, --format <value>

ng new <options...>
  Creates a new directory and a new Angular app eg. "ng new [name]".
  aliases: n
  --dry-run (Boolean) (Default: false) Run through without making any changes. Will list all files that would have been created when running "ng
new".
    aliases: -d, --dryRun
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --skip-install (Boolean) (Default: false) Skip installing packages.
    aliases: -si, --skipInstall
  --skip-commit (Boolean) (Default: false) Skip committing the first commit to git.
    aliases: -sc, --skipCommit
  --collection (String) Schematics collection to use.
    aliases: -c <value>, --collection <value>

ng serve <options...>
  Builds and serves your app, rebuilding on file changes.
  aliases: server, s
  --target (String) (Default: development) Defines the build target.
    aliases: -t <value>, -dev (--target=development), -prod (--target=production), --target <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --output-path (Path) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --aot (Boolean) Build using Ahead of Time compilation.
    aliases: -aot
  --sourcemaps (Boolean) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --vendor-chunk (Boolean) Use a separate bundle containing only vendor libraries.
    aliases: -vc, --vendorChunk
  --common-chunk (Boolean) (Default: true) Use a separate bundle containing code used across multiple bundles.
    aliases: -cc, --commonChunk
  --base-href (String) Base url for the application being built.
    aliases: -bh <value>, --baseHref <value>
  --deploy-url (String) URL where files will be deployed.
    aliases: -d <value>, --deployUrl <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: -v, --verbose
  --progress (Boolean) (Default: true) Log progress to the console while building.
    aliases: -pr, --progress
  --i18n-file (String) Localization file to use for i18n.
    aliases: --i18nFile <value>
  --i18n-format (String) Format of the localization file specified with --i18n-file.
    aliases: --i18nFormat <value>
  --locale (String) Locale to use for i18n.
    aliases: --locale <value>
  --missing-translation (String) How to handle missing translations for i18n.
    aliases: --missingTranslation <value>
  --extract-css (Boolean) Extract css from global styles onto css files instead of js ones.
    aliases: -ec, --extractCss
  --watch (Boolean) (Default: true) Rebuild on change.
    aliases: -w, --watch
  --output-hashing=none|all|media|bundles (String) Define the output filename cache-busting hashing mode.
    aliases: -oh <value>, --outputHashing <value>
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --app (String) Specifies app name or index to use.
    aliases: -a <value>, -app <value>
  --delete-output-path (Boolean) (Default: true) Delete output path before build.
    aliases: -dop, --deleteOutputPath
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --extract-licenses (Boolean) (Default: true) Extract all licenses in a separate file, in the case of production builds only.
    aliases: --extractLicenses
  --show-circular-dependencies (Boolean) (Default: true) Show circular dependency warnings on builds.
    aliases: -scd, --showCircularDependencies
  --build-optimizer (Boolean) Enables @angular-devkit/build-optimizer optimizations when using `--aot`.
    aliases: --buildOptimizer
  --named-chunks (Boolean) Use file name for lazy loaded chunks.
    aliases: -nc, --namedChunks
  --subresource-integrity (Boolean) (Default: false) Enables the use of subresource integrity validation.
    aliases: -sri, --subresourceIntegrity
  --bundle-dependencies (none, all) (Default: none) Available on server platform only. Which external dependencies to bundle into the module. By
default, all of node_modules will be kept as requires.
    aliases: --bundleDependencies <value>
  --port (Number) (Default: 4200) Port to listen to for serving.
    aliases: -p <value>, -port <value>
  --host (String) (Default: localhost) Listens only on localhost by default.
    aliases: -H <value>, -host <value>
  --proxy-config (Path) Proxy configuration file.
    aliases: -pc <value>, --proxyConfig <value>
  --ssl (Boolean) (Default: false) Serve using HTTPS.
    aliases: -ssl
  --ssl-key (String) (Default: ssl/server.key) SSL key to use for serving HTTPS.
    aliases: --sslKey <value>
  --ssl-cert (String) (Default: ssl/server.crt) SSL certificate to use for serving HTTPS.
    aliases: --sslCert <value>
  --open (Boolean) (Default: false) Opens the url in default browser.
    aliases: -o, -open
  --live-reload (Boolean) (Default: true) Whether to reload the page on change, using live-reload.
    aliases: -lr, --liveReload
  --public-host (String) Specify the URL that the browser client will use.
    aliases: --live-reload-client <value>, --publicHost <value>
  --disable-host-check (Boolean) (Default: false) Don't verify connected clients are part of allowed hosts.
    aliases: --disableHostCheck
  --serve-path (String) The pathname where the app will be served.
    aliases: --servePath <value>
  --hmr (Boolean) (Default: false) Enable hot module replacement.
    aliases: -hmr

ng set <options...>
  Set a value in the configuration.
  --global (Boolean) (Default: false) Set the value in the global configuration rather than in your project's.
    aliases: -g, --global

ng test <options...>
  Run unit tests in existing project.
  aliases: t
  --watch (Boolean) Run build when files change.
    aliases: -w, --watch
  --code-coverage (Boolean) (Default: false) Coverage report will be in the coverage/ directory.
    aliases: -cc, --codeCoverage
  --config (String) Use a specific config file. Defaults to the karma config file in .angular-cli.json.
    aliases: -c <value>, --config <value>
  --single-run (Boolean) Run tests a single time.
    aliases: -sr, --singleRun
  --progress (Boolean) (Default: true) Log progress to the console while in progress.
    aliases: --progress
  --browsers (String) Override which browsers tests are run against.
    aliases: --browsers <value>
  --colors (Boolean) Enable or disable colors in the output (reporters and logs).
    aliases: --colors
  --log-level (String) Level of logging.
    aliases: --logLevel <value>
  --port (Number) Port where the web server will be listening.
    aliases: -port <value>
  --reporters (String) List of reporters to use.
    aliases: --reporters <value>
  --sourcemaps (Boolean) (Default: true) Output sourcemaps.
    aliases: -sm, --sourcemap, --sourcemaps
  --poll (Number) Enable and define the file watching poll time period (milliseconds).
    aliases: -poll <value>
  --environment (String) Defines the build environment.
    aliases: -e <value>, --environment <value>
  --preserve-symlinks (Boolean) (Default: false) Do not use the real path when resolving modules.
    aliases: --preserveSymlinks
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>

ng version
  Outputs Angular CLI version.
  aliases: v, --version, -v

ng xi18n <options...>
  Extracts i18n messages from source code.
  --i18n-format (String) (Default: xlf) Output format for the generated file.
    aliases: -f <value>, -xmb (--i18n-format=xmb), -xlf (--i18n-format=xlf), --xliff (--i18n-format=xlf), --i18nFormat <value>
  --output-path (Path) (Default: null) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: --verbose
  --progress (Boolean) (Default: true) Log progress to the console while running.
    aliases: --progress
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>
  --locale (String) Specifies the source language of the application.
    aliases: -l <value>, --locale <value>
  --out-file (String) Name of the file to output.
    aliases: -of <value>, --outFile <value>


G:\wwwRoot\Angular2-4-6>

```
