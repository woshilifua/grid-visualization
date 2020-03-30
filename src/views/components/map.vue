<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable no-undef */
import remoteLoad from '@/utils/remote-load'
import { region } from '@/config/region'
import {
  MAPURLS,
  MAPCONFIG,
  DISTRICTSTYLE,
  POLYGONSTYLE,
  SCENES
} from '@/config/map'
import { path } from '@/data/jinan/polygon'
import { markers } from '@/data/jinan/markers'
import { polygonValues } from '@/data/jinan/polygon-values'
export default {
  data() {
    return {
      map: null,
      region: region.jinan
    }
  },

  mounted() {
    this.loadMap()
    setTimeout(() => {
      this.setMarkers()
    }, 4000)
  },

  methods: {
    async loadMap() {
      await remoteLoad(MAPURLS.API)
      await remoteLoad(MAPURLS.UI)
      this.map = new AMap.Map(
        'map',
        Object.assign(MAPCONFIG, { center: this.region.center })
      )
      this.setDistrict()
      this.setCustomizeDistrict()
    },

    setDistrict() {
      new AMap.DistrictLayer.Province({
        adcode: [this.region.adcode],
        depth: 2,
        map: this.map,
        styles: DISTRICTSTYLE
      })
    },

    // getCenter(arr) {
    //   var minX, maxX, minY, maxY
    //   for (var i = 0; i < arr.length; i++) {
    //     let arr0 = arr[i].split(',')[0]
    //     let arr1 = arr[i].split(',')[1]
    //     minX = arr[i][0] < minX || minX == null ? arr[i][0] : minX
    //     maxX = arr[i][0] > maxX || maxX == null ? arr[i][0] : maxX
    //     minY = arr[i][1] < minY || minY == null ? arr[i][1] : minY
    //     maxY = arr[i][1] > maxY || maxY == null ? arr[i][1] : maxY
    //   }
    //   return [(minX + maxX) / 2, (minY + maxY) / 2]
    // },

    setPolygonText(key, center) {
      console.log(center)
      // 创建纯文本标记
      if (!polygonValues[key]) return
      var text = new AMap.Text({
        text: `建筑数量: ${polygonValues[key][0]}<br> 客户数量: ${polygonValues[key][1]}`,
        anchor: 'center',
        draggable: true,
        cursor: 'pointer',
        style: {
          padding: '0.3rem',
          'margin-bottom': '1rem',
          'background-color': 'white',
          'border-width': 0,
          'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
          'text-align': 'center',
          'font-size': '12px',
          color: 'blue'
        },
        position: [lng, lat]
      })
      text.setMap(this.map)
    },

    setCustomizeDistrict() {
      let polygons = []
      Object.keys(path).forEach(key => {
        let list = []
        path[key].split(';').forEach((subItemOne, subIndex) => {
          let subItems = subItemOne.split(',')
          let lng = Number(subItems[0])
          let lat = Number(subItems[1])
          if (Number.isNaN(lng) || Number.isNaN(lat) || lat < 10) {
            return
          }
          list.push(new AMap.LngLat(lng, lat))
          if (subIndex === 0) {
            // let center = this.getCenter(path[key].split(';'))
            // this.setPolygonText(key, center)
          }
        })
        let polygon = new AMap.Polygon(
          Object.assign(POLYGONSTYLE, { path: list })
        )
        polygons.push(polygon)
      })
      let overlayGroups = new AMap.OverlayGroup(polygons)
      this.map.add(overlayGroups)
    },

    setMarkers() {
      let markerList = []
      markers.forEach(item => {
        if (SCENES[item[0]]) {
          markerList.push({
            lnglat: [Number(item[1]), Number(item[2])],
            style: SCENES[item[0]].styleKey
          })
        }
      })
      import('@/config/marker-style').then(res => {
        let massMarks = new AMap.MassMarks(markerList, {
          zIndex: 111,
          style: res.default
        })
        massMarks.setData(markerList)
        massMarks.setMap(this.map)
      })
    }
  }
}
</script>

<style scoped>
#map {
  min-height: 100vh;
}
</style>