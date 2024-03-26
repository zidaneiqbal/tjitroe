<template>
  <div class="site_header__header_five_wrap">
    <div class="topbar-three topbar-five">
      <div class="container-box">
        <div class="topbar_three_content clearfix">
          <div class="logo-box-three logo-box-five float-left">
            <a href="/index5" class="main-nag__logo">
              <img width="140" height="60" src="/assets/images/resources/tjitroe-logo.png" alt="">
            </a>
          </div>

          <div class="topbar_three_nav_box float-left">
            <nav :class="`header-navigation stricky clearfix ${sticky ? 'stricked-menu stricky-fixed' : ''}`">
              <div class="container">
                <div class="main_nav_header_three_content five clearfix">
                  <div class="mobile_menu_icon_three five">
                    <a href="#" class="side-menu__toggler">
                      <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                    </a>
                  </div>
                  <div class="main-nav__main-navigation five float-left">
                    <ul class=" main-nav__navigation-box">
                      <li class="current">
                        <nuxt-link to="/">Home</nuxt-link>
                      </li>
                      <li class="">
                        <nuxt-link to="/">About</nuxt-link>
                      </li>
                      <li class="dropdown">
                        <nuxt-link to="/">News</nuxt-link>
                      </li>
                      <!-- <li>
                        <nuxt-link to="/contact">Contact</nuxt-link>
                      </li> -->
                    </ul>
                  </div>

                </div>
              </div>
            </nav>
          </div>
          <div class="topbar_three_right_box five">
            <div class="topbar-one__social">
              <a href="#"><i class="fab fa-facebook-square"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <nav class="mobile-nav__container" :style="`display: ${mobileToggle ? 'block' : 'none'}`">
      <!-- content is loading via js -->

      <ul class="main-nav__navigation-box">
        <li class="current">
          <nuxt-link to="/">Contact</nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/">About</nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/">News</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavFive",
    data(){
      return {
        sticky: false,
        mobileToggle: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {

      handleScroll() {
        if (window.scrollY > 70) {
          this.sticky = true
        } else if (window.scrollY < 70) {
          this.sticky = false
        }
      },
    }
  }
</script>

<style scoped>

</style>
