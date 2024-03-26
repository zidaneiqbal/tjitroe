<template>
  <section class="service_two">
    <div class="container">
      <div class="block-title text-center">
        <p>What we do</p>
        <h3>Activity We Do</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <ul class="service_2_top list-unstyled">
            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img width="214" height="213" src="/assets/images/gallery/tjitroe-bukber.jpg" alt="Activity-2 Image">
              </div>
              <h3><nuxt-link to="/">Tjitroe<br>Bukber</nuxt-link></h3>
            </li>
            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img width="214" height="213" src="/assets/images/gallery/tjitroe-hut.jpg" alt="Activity-2 Image">
              </div>
              <h3><nuxt-link to="/">Tjitroe<br>HUT</nuxt-link></h3>
            </li>
            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img width="214" height="213" src="/assets/images/gallery/tjitroe-halalbihalal.jpg" alt="Activity-2 Image">
              </div>
              <h3><nuxt-link to="/">Tjitroe<br>Halal Bi Halal</nuxt-link></h3>
            </li>
          </ul>
        </div>
      </div>
      <hr>
    </div>
  </section>
</template>

<script>
    export default {
        name: "ServiceTwo"
    }
</script>

<style scoped>

</style>
