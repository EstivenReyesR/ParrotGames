<script>
import { mapStores } from "pinia";
// import { shopItem } from "../stores/products.js";
import { productsDB } from "../stores/Uploadproducts.js";

export default {
    data() {
        return {
            out: [],
            sortby: "default",
            gender: "",
            discount: null,
        };
    },
    name: "App",

    computed: {
        ...mapStores(productsDB),

        items() {
            let filterItems = this.productsDBStore.getProductsDB;
            if (this.sortby == "lower") {
                filterItems = filterItems.sort((a, b) => {
                    return a.price - b.price;
                });
            }
            if (this.sortby == "highest") {
                filterItems = filterItems.sort((a, b) => {
                    return b.price - a.price;
                });
            }

            if (this.gender != "") {
                filterItems = filterItems.filter((item) => item.type == this.gender);
            }
            if (this.discount) {
                console.log(filterItems);
                filterItems = filterItems.filter((item) => item.isDiscounted == true);
            }
            return filterItems;
        },
    },

    mounted() {
        this.productsDBStore.getProducts();
        this.out = this.items;

        console.log(this.productsDBStore.getProductsDB);
    },
};
</script>
<template>
    <section class="section__banner">
        <figure class="section--fig">
            <img class="figure--img" src="../assets/img/bannershop.png" alt="banner" />
        </figure>
        <figure class="section--fig--mobile">
            <img class="figure--img" src="../assets/img/mobile/shopSectionMobile.png" alt="banner" />
        </figure>
    </section>

    <!-- Filters -->
    <section class="products">
        <div class="products__content">
            <h1 class="products__title">Participate in thematic forums of your favorite games.</h1>
            <div class="products__filter">
                <h2 class="products__subtitle">Find your product</h2>
                <input type="text" class="products__search" placeholder="Search" id="keyboard" />

                <div class="products__select">
                    <p class="products__text">Price</p>
                    <select name="filter" class="product__hl" id="lowertohighest" v-model="sortby">
                        <option value="highest">highest to lower</option>
                        <option value="lower">lower to highest</option>
                    </select>
                </div>

                <div class="products__select">
                    <p class="products__text">sort</p>
                    <select name="filter" class="product__hl" id="lowertohighest" v-model="gender">
                        <option value="">All</option>
                        <option value="Action">Action</option>
                        <option value="JRPG">JRPG</option>
                        <option value="Rhythm">Rhythm</option>
                        <option value="Adventure">Adventure</option>
                        <option value="OpenWorld">Open world</option>
                        <option value="platform">platform</option>
                    </select>

                    <div class="products__select">
                        <button class="product__button" v-on:click="discount = !discount">Discount</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="products__cards" id="products">
        <div class="Card">
            <RouterLink v-for="product in items" :key="product.name" :to="`/productView/${product.id}`" class="yes">
                <div class="Card__content">
                    <img v-bind:src="product.image" alt="preview" class="Card__img" />

                    <div class="Card__text">
                        <h2 class="Card--h2">{{ product.title }}</h2>
                        <div class="Card--box">
                            <p class="Card--text">{{ product.price }}$</p>
                            <button class="Card--button">Buy</button>
                        </div>
                    </div>
                    <!-- <p class="Card--text">{{ product.type}}</p> -->
                </div>
            </RouterLink>
        </div>
    </section>
</template>

<style lang="scss">
$blue: #1569db;
$blue2: #0045a4;
$gray: #2e2e2e;
$nav: #232323;

body {
    background-color: $gray;
    font-family: satoshi;
    color: white;
}

.section__banner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding-top: 250px;
}

.products {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.products__content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 50px;
}
.products__title {
    text-align: center;
    font-size: 1.7em;
    padding: 50px;
}

.section--fig--mobile {
    display: none;
}

.products__filter {
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 50px 100px;
}

.products__subtitle {
    text-align: start;
    font-size: 1.7em;
    font-weight: bold;
    padding: 20px 0px;
}

.products__search {
    width: 100%;
    padding: 20px 30px;
    border-radius: 10px;
    margin-block-end: 20px;
    justify-content: center;
    align-items: center;
}

.products__select {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 1.5em;
    width: 15%;
    padding: 0px 10px;
}

.Card__img {
    width: 100%;
}

.product__button {
    padding: 10px 45px;
    border-radius: 5px;
    margin-left: 50px;
    color: white;
    background-color: $blue;
    cursor: pointer;
    border: none;
    outline: none;
}

.products__cards {
    align-items: center;
    background-color: #363636;
    width: 80%;
    padding: 100px 0px;
    margin-left: 180px;
    border-radius: 40px;
}

.Card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}
.Card__content {
    display: flex;
    flex-direction: column;
    font-family: satoshi;
    padding: 0px;
    background-color: #1b1b1b;
    border-radius: 25px;
    margin: 20px;
}
.Card--button {
    color: white;
    background-color: $blue;
    padding: 10px 45px;
    border-radius: 5px;
    outline: none;
    border: none;
}

.Card--box {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0px;
}

.Card__text {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}
.Card--text {
    display: flex;
    width: 20%;
    margin-left: 20px;
    font-size: 1.5em;
    color: white;
    padding: 0px 60px;
}

.Card--h2 {
    color: white;
    font-size: 2em;
    padding: 0px 60px;
    margin-top: 20px;
    font-weight: bold;
}

.product__hl {
    border-radius: 50px;
    padding-left: 10px;
    margin-left: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    background-color: #535353;
    color: white;
    outline: none;
    border: none;
}

@media all and (max-width: 844px) {
    .section--fig {
        display: none;
    }

    .products__cards {
        display: none;
    }

    .section--fig--mobile {
        display: flex;
        justify-content: center;
    }

    .products {
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .products__content {
        padding: 0px;
    }

    .products__title {
        display: flex;
        font-size: 12px;
        justify-content: center;
        text-align: center;
        padding: 0px;
        padding-top: 20px;
    }

    .products__subtitle {
        font-size: 12px;
    }

    .products__search {
        padding: 10px 20px;
    }

    .products__filter {
        padding: 24px 40px;
    }

    .products__cards {
        margin-left: 0px;
        margin: 0;
    }

    .products__select {
        display: flex;
        flex-direction: row;
        width: 20%;
        font-size: 0.8em;
        padding: 5px;
    }

    .product__hl {
        border-radius: 50px;
        padding-left: 0px;
        margin-left: 0px;
        width: 25%;
        padding: 0px 20px;
    }

    .Card--text {
        display: flex;
        width: 20%;
        margin-left: 0px;
        font-size: 1.5em;
        color: white;
        padding: 0px 60px;
    }

    .product__button {
        padding: 10px 10px;
        margin-left: 0px;
    }

    .products__text {
        padding: 0px;
    }
}
</style>
