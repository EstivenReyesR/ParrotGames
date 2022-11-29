import { defineStore } from "pinia";
import { router } from "../router/index";
import { db } from "../firebase/config";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";

export const productsDB = defineStore("productsDB", {
    state: () => ({
        productsDB: [],
        productById: {},
    }),

    getters: {
        getProductsDB: (state) => [...state.productsDB],
    },

    actions: {
        async getProduct(id) {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //console.log("Document data:", docSnap.data());
                this.productById = docSnap.data();
                console.log(this.productById);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        },
        async UploadProduct(productData) {
            const docRef = doc(collection(db, `products`));
            productData.id = docRef.id;

            try {
                await setDoc(docRef, productData);
                alert("Product uploaded");
            } catch (error) {
                console.log(error);
            }
        },

        async getProducts() {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());

                const product = doc.data();

                this.productsDB.push(product);
            });
        },
    },
});
