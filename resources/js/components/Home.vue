<template>
    <main>
        <div 
            id="myCarousel" 
            class="carousel slide mt-50"
            data-bs-ride="carousel">
            <div 
                class="carousel-inner position-relative linear"
                style="height: 95vh;" >
                 <div class="center text-white text-center fw-bold">
                    <p class="fs-4">Streaming Community a pour but d'informer de l'actualité de twitch,</p>
                    <p class="fs-4">de mettre en avant les créateurs qui débutent mais également de partager de bons moments entre créateurs et abonnés !</p>
                </div>
                <div class="carousel-item active"></div>
                <div class="btn-group center-bottom " role="group" aria-label="group button">
                    <button type="button" class="btn btn-outline-light mr-5 fs-5">Rejoindre notre Discord</button>
                    <button type="button" class="btn btn-outline-light fs-5">Suivre notre Twitter</button>
                </div>
            </div>
        </div>

        <div class="container marketing">
            <div class="row d-flex justify-content-center pt-5 pb-5">
                <h2 class="text-center p-5">Nos Partenaires</h2>
                    <Carousel :settings="mutlipleCarouselSettings" :items="partners" />
            </div>

            <hr class="featurette-divider">

            <div class="row featurette pt-5 pb-5">
                <div class="col-md-7 d-flex flex-column justify-content-around">
                    <div>
                        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <a href="#">Plus d'infos</a>
                </div>
                <div class="col-md-5">
                    <figure>
                        <img 
                            :src="this.url + '/img/gaming.jpeg'" 
                            alt="mannete de console"
                            class="img-fluid img-thumbnail">
                    </figure>
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7 d-flex flex-column justify-content-around order-md-2">
                    <div>
                        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <a href="#">Plus d'infos</a>
                </div>
            <div class="col-md-5 order-md-1">
                <img 
                    :src="this.url + '/img/gaming-1.jpeg'" 
                    alt="mannete de console"
                    class="img-fluid img-thumbnail">
            </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette pt-5 pb-5">
                <div class="col-md-7 d-flex flex-column justify-content-around">
                    <div>
                        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <a href="#">Plus d'infos</a>
                </div>
                <div class="col-md-5">
                    <figure>
                        <img 
                            :src="this.url + '/img/gaming.jpeg'" 
                            alt="mannete de console"
                            class="img-fluid img-thumbnail">
                    </figure>
                </div>
            </div>
            <hr class="featurette-divider">

        </div>
    </main>
</template>

<script>

import Carousel from "./ui/carouselPartners";

export default {
    name: 'home',
    components: {
        Carousel
    },
    data() {
        return {
            url: window.location.origin,
            mutlipleCarouselSettings: {
                "centerMode": true,
                "centerPadding": "20px",
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "speed": 500
            },
            partners: [
                {
                    url: 'https://robohash.org/1?set=set2',
                    metaDescription: 'Partenaire',
                    name: 'Alexis Bayle'
                },
                {
                    url: 'https://robohash.org/2?set=set2',
                    metaDescription: 'Partenaire',
                    name: 'John Doe'
                },
                {
                    url: 'https://robohash.org/3?set=set2',
                    metaDescription: 'Partenaire',
                    name: 'Gregory Dupont'
                }
            ],
        }
    }
}
</script>

<style scoped>
    main {
       font-family: Arial, Helvetica, sans-serif; 
    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }

    .center-bottom {
        position: absolute;
        left: 50%;
        top: 75%;
        transform: translate(-50%, -25%);
        z-index: 1000;
    }

    .linear {
        background-image: 
            linear-gradient(to right ,rgba(74, 0, 224, .85), rgba(142, 45, 226, .65)), 
            url("/img/twitch-1.jpeg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .svg {
        width: 50px;
    }
</style>