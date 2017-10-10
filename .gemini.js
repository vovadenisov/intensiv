module.exports = {
    rootUrl: 'http://82.202.204.12',
    gridUrl: 'http://localhost:32768/wd/hub',

    browsers: {
        chrome: {
          desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
              args: ["disable-gpu", "no-sandbox"]
            }
          }
        }
    },

    sets: {
        local: {
            files: ['gemini/*.gemini.js'],
            browsers: ['chrome']
        },
    },

    system: {
        parallelLimit: 3,
        plugins: {
            'html-reporter': {
                enabled: true,
                path: 'gemini-report'
            },
        },
    }
};




