<template>
    <div>
        <nav 
            class="navbar navbar-expand-md navbar fixed-top bg-light"
            style="z-index: 2000;">
            <div class="container-fluid">
                <figure class="m-0">
                    <img 
                        :src="this.url + '/img/logo.png'" 
                        style="width: 125px;" 
                        alt="logo">
                </figure>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto mb-2 mb-md-0">
                        <li class="nav-item active">
                            <a class="nav-link" aria-current="page" href="/">Acceuil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/events">Events</a>
                        </li>
                        <li class="nav-item">
                            <a href="/articles" class="nav-link">Articles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/streamers">Streamers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/partners">Partenaires</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            url: window.location.origin
        }
    }
}
</script>

<style scoped>
    a {
       color: rgb(142, 45, 226)
    }
</style>