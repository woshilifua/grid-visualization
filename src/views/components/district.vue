<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable no-undef */
import remoteLoad from '@/utils/remote-load'
import { region } from '@/config/region'
import { MAPURLS, MAPCONFIG, POLYGONSTYLE } from '@/config/map'

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
  },

  methods: {
    async loadMap() {
      await remoteLoad(MAPURLS.API)
      await remoteLoad(MAPURLS.UI)
      delete MAPCONFIG.features
      this.map = new AMap.Map(
        'map',
        Object.assign(MAPCONFIG, {
          zoom: 16,
          center: this.region.center
        })
      )
      this.setCustomizeDistrict()
    },

    setCustomizeDistrict() {
      import(`@/data/${this.city}/polygon`).then(res => {
        if (this.$route.params.district !== res.polygon.id) return
        this.map.setCenter(res.polygon.center)
        this.setMarkers(res.polygon.markers)
        let list = []
        res.polygon.path.split(';').forEach(subItemOne => {
          let subItems = subItemOne.split(',')
          let lng = Number(subItems[0])
          let lat = Number(subItems[1])
          list.push(new AMap.LngLat(lng, lat))
        })
        let polygon = new AMap.Polygon(
          Object.assign(POLYGONSTYLE, { path: list, fillOpacity: 0.5 })
        )
        this.map.add(polygon)
      })
    },

    setMarkers(markers) {
      import('@/config/marker-style').then(res => {
        markers.forEach(item => {
          let marker = new AMap.Marker({
            position: [item.lng, item.lat],
            map: this.map,
            icon: new AMap.Icon({
              image: res.icons[item.type].url,
              size: new AMap.Size(30, 30), //图标大小
              imageSize: new AMap.Size(30, 30)
            }),
            anchor: 'top-center'
          })
          marker.setLabel({
            content: item.count,
            direction: 'center'
          })
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
.count {
  background: transparent;
}
</style>