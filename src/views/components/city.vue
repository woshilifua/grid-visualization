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
  SCENES,
  POLYGONTEXTSTYLE
} from '@/config/map'

export default {
  data() {
    return {
      map: null,
      region: region[this.$route.params.city],
      city: this.$route.params.city
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

    getCenter(path) {
      var x = 0.0
      var y = 0.0
      for (var i = 0; i < path.length; i++) {
        let lng = path[i].split(',')[0]
        let lat = path[i].split(',')[1]
        x = x + parseFloat(lng)
        y = y + parseFloat(lat)
      }
      x = x / path.length
      y = y / path.length
      return [x, y]
    },

    setPolygonText(key, center) {
      // 创建纯文本标记
      import(`@/data/${this.city}/polygon-values`).then(res => {
        if (!res.polygonValues[key]) return
        var text = new AMap.Text({
          text: `建筑数量: ${res.polygonValues[key][0]}<br> 客户数量: ${res.polygonValues[key][1]}`,
          zooms: [12, 16],
          anchor: 'center',
          draggable: true,
          cursor: 'pointer',
          style: POLYGONTEXTSTYLE,
          position: center
        })
        text.setMap(this.map)
      })
    },

    setCustomizeDistrict() {
      let polygons = []
      import(`@/data/${this.city}/polygons`).then(res => {
        Object.keys(res.path).forEach(key => {
          let list = []
          res.path[key].split(';').forEach((subItemOne, subIndex) => {
            let subItems = subItemOne.split(',')
            let lng = Number(subItems[0])
            let lat = Number(subItems[1])
            if (Number.isNaN(lng) || Number.isNaN(lat) || lat < 10) {
              return
            }
            list.push(new AMap.LngLat(lng, lat))
            if (subIndex === 0) {
              let center = this.getCenter(res.path[key].split(';'))
              this.setPolygonText(key, center)
            }
          })
          let polygon = new AMap.Polygon(
            Object.assign(POLYGONSTYLE, { path: list })
          )
          polygons.push(polygon)
        })
        let overlayGroups = new AMap.OverlayGroup(polygons)
        this.map.add(overlayGroups)
      })
    },

    setMarkers() {
      let markerList = []
      import(`@/data/${this.city}/markers`).then(res => {
        res.markers.forEach(item => {
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