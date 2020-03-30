/* eslint-disable no-undef */

export const MAPCONFIG = {
  mapStyle: 'amap://styles/normal',
  zoom: 9,
  depth: 1,
  resizeEnable: false,
  scrollWheel: true,
  features: []
}

export const DISTRICTSTYLE = {
  fill: 'rgb(166, 189, 219)',
  'fill-opacity': '0.3',
  'province-stroke': 'cornflowerblue',
  'city-stroke': 'white',
  'county-stroke': 'rgba(255,255,255,0.5)'
}

export const MAPURLS = {
  API: 'https://webapi.amap.com/maps?v=1.4.15&key=169744ea41ba4a739e1cd989337638f0&plugin=AMap.DistrictLayer',
  UI: 'http://webapi.amap.com/ui/1.0/main.js'
}

export const POLYGONSTYLE = {
  path: [],
  strokeStyle: 'solid',
  fillColor: '#0570b0', // 多边形填充颜色
  strokeWeight: 2, // 线条宽度，默认为 1
  strokeColor: 'white' // 线条颜色
}

export const SCENES = {
  '高端聚类': {
    styleKey: 0
  },
  '园区': {
    styleKey: 1
  },
  '写字楼': {
    styleKey: 2
  },
  '专业市场': {
    styleKey: 3
  }
}