<template>
  <div :class="classObj">
    <div class="sidebar-container">
      <!-- <button @click="toggleBar">展开/收起</button> -->
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
          :unique-opened="true"
          >
          <sidebar-item></sidebar-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem"
export default {
  data() {
    return {
    };
  },
  components:{
    SidebarItem
  },
  computed: {
    ...mapGetters([
      "sidebar",
      'permission_routes'
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openedSidebar: this.sidebar.opened
      };
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  methods: {
    toggleBar() {
      // this.isCollapse = !this.isCollapse
      this.$store.dispatch("app/toggleSideBar");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    console.log('permission_routes:', this.permission_routes)
  }
};
</script>

<style lang="stylus" scoped>

.el-menu-vertical:not(.el-menu--collapse) {
  width: 210px;
  min-height: 400px;
}

.el-menu-vertical {
  background-color: #304156;
}
</style>