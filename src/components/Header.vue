<template>
  <div class="container">
    <nav class="navbar navbar-style">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="../../public/images/logolg.png">
        </div>
        <div
          class="navbar-burger burger"
          :class="{'is-active':isNavbar}"
          data-target="navbarExampleTransparentExample"
          @click="isNavbar = !isNavbar"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" :class="{'is-active':isNavbar}" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">{{$t('publicLanguage.s1')}}</a>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Language</a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" @click="setLanguage(key)" v-for="(item,key) in 3" :key="key">
                <template v-if="key == 0">简体中文</template>
                <template v-if="key == 1">繁體中文</template>
                <template v-if="key == 2">English</template>
              </a>
            </div>
          </div>
		  <div class="navbar-item" id="ele"></div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a
                  class="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbar: 0
    };
  },
  created() {
    this.$nextTick(() => {
      // laydate.render({
      //   elem: "#ele",
      //   lang: "en",
      //   type: "datetime",
      //   value: new Date(),
      //   format: "dd/MM/yyyy HH:mm"
      // });
    });
  },
  methods: {
    setLanguage(key) {
      let language = ["cn", "zh", "en"]
      this.$t.locale = language[key]
    }
  }
};
</script>

<style>

</style>
