var postcss = require('postcss')

module.exports = postcss.plugin('postcss-cubeui-transform', function (opts) {
  opts = opts || {
    include: /(cube-ui)/,
    exclude: /(src)/
  }

  // Work with options here
  return function (css) {
    css.walkDecls(function (decl) {
      if (opts.exclude && css.source.input.file && css.source.input.file.match(opts.exclude) !== null) return;
      // 只处理cube-ui目录
      if (css.source.input.file.match(opts.include) !== null) {
        var reg = /\d+px/gi
        decl.value = decl.value.replace(reg, function (val) {
          val = val.toLowerCase()
          if (val === '1px') return val
          return parseFloat(val) * 2 + 'px'
        })
      }
    })
  }
})
