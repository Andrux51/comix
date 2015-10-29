module.exports = function(config) {
    config.set({
        basePath: '../'

        , frameworks: ['jasmine']

        , files: [
            'src/bower_components/jquery/dist/jquery.js'
            , 'src/bower_components/angular/angular.js'
            , 'src/bower_components/angular-resource/angular-resource.js'
            , 'src/bower_components/angular-route/angular-route.js'
            , 'src/bower_components/angular-mocks/angular-mocks.js'
            , 'src/bower_components/crypto-js/crypto-js.js'

            , 'src/scripts/config.js'
            , 'src/scripts/routes.js'
            , 'src/modules/**/*.js'
            , 'src/services/**/*.js'

            , 'test/fixtures/*.json'

            , 'test/unit/**/*.js'
        ]

        , exclude: []

        , preprocessors: {
            'src/modules/**/*.js': ['coverage']
            , 'test/fixtures/*.json': ['json_fixtures']
        }

        , jsonFixturesPreprocessor: {
            stripPrefix: 'test/fixtures/'
            , prependPrefix: ''
            , variableName: 'jsonMocks'
        }

        , coverageReporter: {
            dir: 'test/coverage'
            , reporters: [{ type: 'lcov', subdir: 'report-lcov' }]
        }

        , reporters: ['dots', 'coverage']

        , port: 9876

        , colors: true

        , logLevel: config.LOG_INFO

        , autoWatch: true

        , browsers: ['PhantomJS']

        , phantomjsLauncher: {
            exitOnResourceError: true
        }

        , singleRun: false
    });
};
