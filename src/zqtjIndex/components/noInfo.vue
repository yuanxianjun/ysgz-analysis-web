<template>
  <div class="noInfo">
    <span class="noInfo-text">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "noInfo"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.noInfo {
  width: 100%;
  height: 100%;
  text-align: center;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.noInfo-text {
  line-height: 60px;
  font-size: 20px;
  color: #909399;
  width: 50%;
}
</style>
