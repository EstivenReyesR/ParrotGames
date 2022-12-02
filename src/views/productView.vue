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
                <!-- <p class="r">{{ $route.params.productId }}</p> -->
                <p class="titleView">{{ this.current.title }}</p>
                <p class="information">{{ this.current.description }}</p>
                <p class="information">{{ this.current.type }}</p>
                <p class="priceView">Price</p>
                <p class="information">{{ this.current.price }}</p>
                <!-- <p class="unitView">Units available</p> -->
                <p class="information">{{ this.current.isDiscounted }}</p>

                <div class="buttons__items">
                    <button class="buy">Buy</button>
                </div>
                <div class="buttons__items">
                    <RouterLink :key="this.current.title" :to="`/editItem/${this.current.id}`">
                        <button class="edit">edit</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.view__section {
    display: flex;
    background-color: #2e2e2e;
    justify-content: center;
}

.view__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 300px 0px;
    margin-top: 150px;
    margin-block-end: 150px;
    gap: 131px;
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

.buttons__items {
    padding: 8px;
}

.edit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 170px;
    gap: 10px;
    color: white;
    background: #333333;
    border-radius: 10px;
    border: none;
    outline: none;
}

.buy {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 170px;
    gap: 10px;
    color: white;
    background: #1569db;
    border-radius: 10px;
    border: none;
    outline: none;
}
</style>
