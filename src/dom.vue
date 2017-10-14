<template>
  <nav id="contentDom">
      <div class="header">
        <div class="master">
          <a :href="'https://github.com/' + object.username">{{object.username}}</a> /
          <a :href="'https://github.com/' + object.username + '/' + object.repository">{{object.repository}}</a>
        </div>
        <div class="branch">master</div>
      </div>
      <div class="ul" style="height: calc(100% - 54px); overflow: auto;">
          <!-- <a href="###">{{item.text}}</a> -->
          <template v-for="item in arr">
            <ehr-tree :data="item"></ehr-tree>
          </template>
      </div>
  </nav>
</template>
<script>
  import tree from './lib/tree.js';
  export default {
    data () {
      return {
        object: this.master,
        arr: []
      };
    },
    created () {
      this.ajax('get', this.object.url, (res) => {
        this.arr = this.sort(tree(res.tree, this.object));
      });
    },
    methods: {
      ajax (type, url, fun) {
        type = type.toUpperCase();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            fun(JSON.parse(xhr.response));
          }
        }
        xhr.open(type, url, true);
        xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
        xhr.setRequestHeader("Authorization", 'token 1bc9d882fb7131d0b9a89be53fa14a21113ca55a');
        xhr.send(null);
      },
      sort (arr) {
        return arr.sort();
      }
    }
  };
</script>
<style lang="less" scoped>
  #contentDom {
    width: 240px;
    height: 100%;
    background: #fff;
    border-right: 1px solid #e1e4e8;
    position: fixed;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    top: 0;
    left: 0;
    .header {
      width: 100%;
      height: 54px;
      border-bottom: 1px solid #e1e4e8;
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 20px;
      color: #0366d6;
      .master {
        height: 20px;
        overflow: hidden;
      }
      .branch {
        color: #444;
      }
    }
    .ul {
      overflow-y: scroll;
      padding: 0;
      margin: 0;
      li {
        a {
          font-size: 12px;
          line-height: 28px;
          display: block;
          color: #0366d6;
          text-decoration: none;
          &:hover {
            background: #eee;
            color: #333;
          }
        }
      }
    }
  }
</style>
