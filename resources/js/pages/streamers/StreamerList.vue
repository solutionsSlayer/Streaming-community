<template>
    <div id="streamer" class="wrapper space-section">
        <section>
            <h1 class="mb-0">Streamers</h1>

            <div>
                <Carousel :settings="mutlipleCarouselSettings" :items="partners" />
            </div>
        </section>
    </div>
</template>

<script>
    import Carousel from "./../../components/ui/carouselPartners";

    export default {
        name: 'streamer-list',
        components: { Carousel },
        data() {
            return {
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
    h1 {
        text-align: center;
        color: rgb(111, 38, 180);
    }

    #streamers {
        height: 75vh;
    }
    
</style>