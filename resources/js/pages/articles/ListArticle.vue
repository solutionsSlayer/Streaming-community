<template>
    <div id="articles" class="wrapper space-section">
        <header class="articles-header">
            <h1>Profitez des articles !</h1>
        </header>
        <section class="container">
            <article class="articles-list">
                <div
                class="article"
                v-for="(article, i) in articles"
                :key="i">
                    <figure class="figure col-4">
                        <img class="img-thumbnail img-fluid" :src="article.img" :alt="article.description">
                    </figure>
                    <div class="col-8">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.description }}</p>

                    </div>
                </div> 
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'list-article',
    data() {
        return {
            articles: [
                {
                    img: '/img/twitch-1.jpeg',
                    title: 'Article Numéro 1',
                    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
                    creationDate: Date.now(),
                },
                {
                    img: '/img/twitch-2.jpeg',
                    title: 'Article Numéro 2',
                    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
                    creationDate: Date.now(),
                },
                {
                    img: '/img/twitch-3.jpeg',
                    title: 'Article Numéro 3',
                    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
                    creationDate: Date.now(),
                },
                {
                    img: '/img/twitch-1.jpeg',
                    title: 'Article Numéro 4',
                    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
                    creationDate: Date.now(),
                }
            ]
        }
    },
    mounted() {
        console.log(articles)
    }
}
</script>

<style scoped>
    .container {
        max-width: 1200px;
    }
    h1 {
        margin: 20px 0;
        text-align: center;
        color: rgb(102, 59, 143);
    }
    #articles {
        margin-top: 20vh;
    }
    .article {
        display: flex;
        margin-bottom: 25px;
    }
    .articles-header {
        margin: 30px;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>