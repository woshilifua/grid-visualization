/* eslint-disable no-undef */
import pin_0 from '@/assets/pin-1.png'
import pin_1 from '@/assets/pin-2.png'
import pin_2 from '@/assets/pin-3.png'
import pin_3 from '@/assets/pin-4.png'

export default [
  {
    url: pin_0,
    anchor: new AMap.Pixel(16, 16),
    size: new AMap.Size(16, 16)
  },
  {
    url: pin_1,
    anchor: new AMap.Pixel(16, 16),
    size: new AMap.Size(16, 16)
  },
  {
    url: pin_2,
    anchor: new AMap.Pixel(16, 16),
    size: new AMap.Size(16, 16)
  },
  {
    url: pin_3,
    anchor: new AMap.Pixel(16, 16),
    size: new AMap.Size(16, 16)
  }
]

export const icons = {
  '高端聚类': {
    url: pin_0
  },
  '园区': {
    url: pin_1
  },
  '写字楼': {
    url: pin_2
  },
  '专业市场': {
    url: pin_3
  }
}