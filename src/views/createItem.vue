<script>
import { productsDB } from "../stores/Uploadproducts.js";
import { mapStores } from "pinia";
import { shopItem } from "../stores/products";
// import { storage } from "../firebaseconf"

// const ref = storage.ref();

export default {
    components: {},
    data() {
        return {
            // image: [],
            title: "",
            price: "",
            units: "",
            sort: "",
            description: "",
            file: "",
            imgUrl: "../assets/img/imgicon.png",
        };
    },

    computed: {
        ...mapStores(productsDB),
    },

    methods: {
        async createNewProduct() {
            let finalUrl = " ";

            finalUrl = await this.productsDBStore.UploadPhoto(this.file, this.title);

            const newProduct = {
                title: this.title,
                price: this.price,
                units: this.units,
                sort: this.sort,
                description: this.description,
                imgUrl: finalUrl,
            };

            this.productsDBStore.UploadProduct(newProduct);

            this.title = "";
            this.price = "";
            this.units = "";
            this.sort = "";
            this.description = "";
        },

        readImage(e) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            this.file = e.target.files[0];

            reader.addEventListener("load", () => {
                this.imgUrl = reader.result;
            });
        },

        // clickImage(e){
        //     this.imgUrl = e.target.files[0];
        //     console.log(this.imgUrl)
        // },

        // uploadImage(){
        //     const refImg = ref.child("products/"+this.imgUrl.name)
        //     const metadata = {contetType: 'img/jpeg'};
        //     refImg.put(this.imgUrl, metadata)
        //     .then(e => console.log(e))
        // }
    },
};
</script>
<template>
    <div class="container">
        <section class="create">
            <div class="create__item">
                <form @submit.prevent="uploadImage" id="form" class="create__content">
                    <label for="title" class="item__title">Title</label>
                    <input type="text" id="title" class="create__input" v-model="title" />

                    <label for="price" class="item__price">Price</label>
                    <input type="number" id="price" class="create__input2" v-model="price" />

                    <label for="units" class="item__price">Units available</label>
                    <input type="number" id="units" class="create__input2" v-model="units" />

                    <label for="tags" class="item__title">sort</label>
                    <select name="sort" id="tags" class="create__input" v-model="sort">
                        <option value="Action">Action</option>
                        <option value="JRPG">JRPG</option>
                        <option value="Rhythm">Rhythm</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Open world">Open world</option>
                        <option value="platform">Platform</option>
                    </select>

                    <label for="description" class="create__description">Description</label>
                    <input
                        type="text"
                        cols="50"
                        rows="5"
                        id="description"
                        class="create__inputT"
                        v-model="description"
                    />

                    <div class="create__c2">
                        <figure class="create__photo">
                            <img class="create__photos" :src="imgUrl" alt="img" />
                            <img class="create__photosM" src="../assets/img/mobile/img.png" alt="img" />
                        </figure>

                        <label for="img" class="create__img">Select your image</label>
                        <input type="file" id="img" class="create__images" multiple="multiple" @change="readImage" />
                    </div>
                    <div class="create__btn">
                        <button type="submit" class="create__upload" @click="(e) => createNewProduct()">Public</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
$blue: #1569db;
$gray: #2e2e2e;
$nav: #232323;

body {
    background-color: $nav;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 150px;
}

.create {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: satoshi;
    border-radius: 25px;
    font-size: 1.2em;
    width: 80%;
    padding: 50px;
    color: white;
    background-color: #434343;
    justify-content: center;
    box-shadow: 0px 9px 20px 1px rgba(0, 0, 0, 0.25);
}
.create__photosM {
    display: none;
}
.create__item {
    display: flex;
    text-align: space-around;
}

.create__content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.item__title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 0px;
}

.create__input {
    border-radius: 5px;
    padding: 10px 0px;
    outline: none;
    border: none;
}

.create__input2 {
    padding: 10px 0px;
    border-radius: 5px;
    outline: none;
    border: none;
}

.create__images {
    padding: 10px 0px;
}

.create__upload {
    background-color: $blue;
    width: 50%;
    color: white;
    padding: 15px 0px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
    font-family: Poppins;
    cursor: pointer;
}

.create__photos {
    display: flex;
    padding-top: 50px;
    padding-block-end: 20px;
}

.create__photo {
    display: flex;
    justify-content: center;
}
.create__btn {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.create__inputT {
    padding: 50px 0px;
    border-radius: 5px;
    outline: none;
    border: none;
}

@media all and (max-width: 844px) {
    .create {
        padding: 50px 60px;
    }
    .container {
        width: 100%;
        padding: 100px 20px;
    }
    .create {
        width: 100%;
        border-radius: 10px;
    }
    .create__photos {
        display: none;
    }

    .create__upload {
        width: 100%;
        padding: 20px;
    }

    .create__photosM {
        display: flex;
        padding-top: 50px;
        padding-block-end: 20px;
        display: flex;
        width: 100%;
    }
}
</style>
