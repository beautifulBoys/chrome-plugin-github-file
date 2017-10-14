<template>
  <ul v-if="data">
    <li v-for="(item, index) in data">
      <ehr-tree :data="item"></ehr-tree>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'tree-content',
  props: ['data']
}
</script>
<style lang="less" scoped>
  ul {
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
    margin-left: 15px;
    li {
      padding: 0;
      margin: 0;
    }
  }
</style>
