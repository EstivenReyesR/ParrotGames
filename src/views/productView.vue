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
                <p class="title">Title</p>
                <p class="information">{{ this.current.type }}</p>
                <p class="title">Price</p>
                <p class="information">{{ this.current.price }}</p>
                <p class="title">Units available</p>
                <p class="information">{{ this.current.isDiscounted }}</p>
                <button class="buy">Buy</button>
                <button class="edit">edit</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.view__section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: #fff;
    color: black;
}
</style>
