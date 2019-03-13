const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
            .set('assets',resolve('src/assets'))
    }
}

// module.exports = {
//   chainWebpack(config) {
//     config.resolve.alias
//       .set('images', resolve('src/assets/images'))
//       .set('fonts', resolve('src/assets/fonts'))
//       .set('stylus', resolve('src/assets/stylus'))
//   },
//   css: {
//     loaderOptions: {
//       stylus: {
//         'resolve url': true,
//         'import': [
//           './src/theme'
//         ]
//       }
//     }
//   },
//   pluginOptions: {
//     'cube-ui': {
//       postCompile: true,
//       theme: true
//     }
//   }
// }