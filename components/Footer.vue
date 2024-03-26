<template>
    <div>
      <footer class="site-footer">
        <div class="site-footer_farm_image"><img src="/assets/images/resources/site-footer-farm.png"
                                                 alt="Farm Image"></div>
        <div class="container">
          <div class="row no-gutters">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="footer-widget__column footer-widget__about wow fadeInUp" data-wow-delay="100ms">
                <div class="footer-widget__title">
                  <h3>About</h3>
                </div>
                <div class="footer-widget_about_text">
                  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque
                    venenatis sem non lacus ac auctor.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6">
              <div class="footer-widget__column footer-widget__link wow fadeInUp" data-wow-delay="200ms">
                <div class="footer-widget__title">
                  <h3>Explore</h3>
                </div>
                <ul class="footer-widget__links-list list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Our Projects</a></li>
                  <li><a href="#">Meet the Farmers</a></li>
                  <li><a href="#">Latest News</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="footer-widget__column footer-widget__contact wow fadeInUp" data-wow-delay="400ms">
                <div class="footer-widget__title">
                  <h3>Contact</h3>
                </div>
                <div class="footer-widget_contact">
                  <!-- <p>66 Broklyn Street, New Town<br>DC 5752, New Yrok</p> -->
                  <a href="mailto:needhelp@agrikol.com">raja.zidaneiqbal@gmail.com</a><br>
                  <!-- <a href="tel:666-888-0000">666 888 0000</a> -->
                  <div class="site-footer__social">
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="site-footer_bottom">
        <div class="container">
          <div class="site-footer_bottom_copyright">
            <p>@ All copyright 2024, <a href="#">Zidane Iqbal</a></p>
          </div>
          <div class="site-footer_bottom_menu">
            <ul class="list-unstyled">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>

      <a @click="scrollTop" href="#" class="scroll-to-target scroll-to-top" :style="`display: ${scrollBtn ? 'block' : 'none'}`"><i class="fa fa-angle-up"></i></a>

    </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }

      }
    }
</script>

<style scoped>

</style>
