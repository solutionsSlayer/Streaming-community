<template>
  <div>
        <Header />
        <router-view></router-view>
        <Footer />
  </div>
</template>

<script>
import Header from '@/utils/Header.vue'
import Footer from '@/utils/Footer.vue'

export default {
    name: 'app',
    components: {
        Header,
        Footer
    }
}
</script>
