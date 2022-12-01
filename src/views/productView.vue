<script>
import { mapStores } from "pinia";
import { shopItem } from "../stores/products";
import { productsDB } from "../stores/Uploadproducts.js";

export default {
    data() {
        return { current: {} };
    },

    computed: {
        ...mapStores(productsDB),
    },

    async mounted() {
        await this.productsDBStore.getProduct(this.$route.params.productId);
        console.log(this.current);
        this.current = this.productsDBStore.productById;
        console.log(this.current);
    },
};
</script>

<template>
    <section class="view__section">
        <div class="view__content">
            <figure class="view__fig">
                <img :src="this.current.image" alt="preview" class="view__img" />
            </figure>
            <div class="view__info">
                <p class="r">{{ $route.params.productId }}</p>
                <p class="information">{{ this.current.description }}</p>
                <p class="titleView">Title</p>
                <p class="information">{{ this.current.type }}</p>
                <p class="priceView">Price</p>
                <p class="information">{{ this.current.price }}</p>
                <p class="unitView">Units available</p>
                <p class="information">{{ this.current.isDiscounted }}</p>
                <button class="buy">Buy</button>
                <RouterLink :key="this.current.title" :to="`/editItem/${this.current.id}`">
                    <button class="edit">edit</button>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.view__section {
    background-color: #2e2e2e;
}

.view__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 131px;

    position: absolute;
    width: 1573px;
    height: 826px;
    left: 174px;
    top: 161px;

    background: #434343;
    border-radius: 25px;
}

.view__section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: #2e2e2e;
    color: rgb(255, 255, 255);
}
.titleView {
}

.buy {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 70px;
    gap: 10px;
    color: white;
    background: #1569db;
    border-radius: 10px;
    border: none;
    outline: none;
}
</style>
