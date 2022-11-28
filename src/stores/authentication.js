import { defineStore } from "pinia";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    deleteUser,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { router } from "../router/index";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: null,
    }),

    getters: {
        getUser: (state) => [...state.user],
    },

    actions: {
        signIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("logged user", user);
                    router.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        newUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("user created", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        async newUserAwait(email, password) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User create", userCredential.user);
                this.user = userCredential.user;
            } catch (error) {
                alert(error);
            }
        },

        async logOut() {
            signOut(auth)
                .then(() => {
                    console.log("User out");
                })
                .catch((error) => {
                    alert(error);
                });
        },
        async deleteAccount() {
            deleteUser(auth.currentUser)
                .then(() => {
                    console.log("eliminado");
                    router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        checkUser() {
            (auth = getAuth()),
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/firebase.User
                        const uid = user.uid;
                        console.log(user.email);
                    } else {
                        // User is signed out
                        // ...
                        console.log("no registrado");
                    }
                });
        },
    },
});
