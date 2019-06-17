var postcss = require('postcss')

module.exports = postcss.plugin('postcss-cubeui-transform', function (opts) {
  opts = opts || {
    include: /(cube-ui)/,
    exclude: /(src)/
  }
  // Work with options here
  return function (css) {
    css.walkRules(function (rule) {
      rule.walkDecls(function(decl) {
        var reg = /\d+px/gi
        decl.value = decl.value.replace(reg, function (val) {
          console.log(`valvalvalvalvalvalvalvalvalvalvalvalvalvalvalvalvalvalvalvalval: ${val}`)
          val = val.toLowerCase()
          if (val === '1px') return val
          return parseFloat(val) * 2 + 'px'
        })
      })
    })
  }
})
