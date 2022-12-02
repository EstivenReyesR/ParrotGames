import { defineStore } from "pinia";
// import { router } from "../router/index";
import { db, storage } from "../firebase/config";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

        async UploadPhoto(file, filename) {
            const storageRef = ref(storage, `gameImg/${filename}`);
            let imgUrl = "test";

            await uploadBytes(storageRef, file).then(async (snapshot) => {
                await getDownloadURL(storageRef)
                    .then((url) => {
                        // Or inserted into an <img> element
                        imgUrl = url;
                    })
                    .catch((error) => {
                        // Handle any errors
                    });
            });

            return imgUrl;
        },

        async editProduct(productData, id) {
            const docRef = doc(collection(db, `products`), id);

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
