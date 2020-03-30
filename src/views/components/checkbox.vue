<template>
  <el-card>
    <div class="list">
      <p>
        <img src="@/assets/pin-1.png" />
        <span>&nbsp;&nbsp;高端聚类: {{count['高端聚类'].value}} 客户数量: {{count['高端聚类'].client}}</span>
      </p>
      <p>
        <img src="@/assets/pin-2.png" />
        <span>&nbsp;&nbsp;园区: {{count['园区'].value}} 客户数量: {{count['园区'].client}}</span>
      </p>
      <p>
        <img src="@/assets/pin-3.png" />
        <span>&nbsp;&nbsp;写字楼: {{count['写字楼'].value}} 客户数量: {{count['写字楼'].client}}</span>
      </p>
      <p>
        <img src="@/assets/pin-4.png" />
        <span>&nbsp;&nbsp;专业市场: {{count['专业市场'].value}} 客户数量: {{count['专业市场'].client}}</span>
      </p>
    </div>
  </el-card>
</template>

<script>
import { count } from '@/data/jinan/markers'

export default {
  data() {
    return {
      count: count
    }
  }
}
</script>

<style scoped>
.list {
  text-align: left;
}
.list p {
  margin: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.list img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}
.list span {
  padding-left: 4px;
}
</style>