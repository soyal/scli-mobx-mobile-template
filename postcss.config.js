module.exports = {
  plugins: [
    //1px border问题
    require('postcss-write-svg'),
    require('postcss-cssnext'),
    // px to vw
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      // selectorBlackList: ['.ignore'] //指定不转换的类
      minPixelValue: 1 // 指定不转化的阈值
    }),
    require('postcss-flexbugs-fixes')
  ]
}
