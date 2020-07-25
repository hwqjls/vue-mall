import Vue from 'vue'
import SvgIcon from '@/components/svgIcon'

Vue.component('svg-icon', SvgIcon)

// require.context函数接受三个参数
//   directory {String} -读取文件的路径
//   useSubdirectories {Boolean} -是否遍历文件的子目录
//   regExp {RegExp} -匹配文件的正则

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)