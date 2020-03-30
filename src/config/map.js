/* eslint-disable no-undef */

export const MAPCONFIG = {
  mapStyle: 'amap://styles/fresh',
  zoom: 9,
  depth: 1,
  resizeEnable: false,
  scrollWheel: true,
  features: []
}

export const DISTRICTSTYLE = {
  fill: '#446b8c',
  'fill-opacity': .8,
  'province-stroke': '#0570b0',
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
  fillColor: '#87c5cb', // 多边形填充颜色
  fillOpacity: .8,
  strokeWeight: 1, // 线条宽度，默认为 1
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

export const POLYGONTEXTSTYLE = {
  padding: '0.3rem',
  'margin-bottom': '1rem',
  'background-color': 'white',
  'border-width': 0,
  'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
  'text-align': 'center',
  'font-size': '12px',
  color: 'blue'
}