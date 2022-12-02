<script>
import { useAuthenticationStore } from "../stores/authentication.js";
import { mapStores } from "pinia";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        signIn(e) {
            e.preventDefault();
            console.log("presiono iniciar");
            this.authenticationStore.signIn(this.email, this.password);
        },
        logOut(e) {
            e.preventDefault();
            console.log("presiono cerrar");
            this.authenticationStore.logOut();
        },
        deleteaccount(e) {
            e.preventDefault();
            console.log("presiono borrar");
            this.authenticationStore.deleteAccount();
        },
    },
    computed: {
        ...mapStores(useAuthenticationStore),
    },
};
</script>

<template>
    <section class="content">
        <div class="Login">
            <h1 class="h1">Login</h1>
            <div class="input">
                <label class="label">Email</label>
                <input
                    class="input-style"
                    placeholder="Type your email"
                    name="email"
                    type="email"
                    id="email"
                    v-model="email"
                />
            </div>

            <div class="input">
                <label class="label">Password</label>
                <input
                    class="input-style"
                    placeholder="Type your password"
                    name="password"
                    type="password"
                    id="password"
                    v-model="password"
                />
            </div>

            <div class="button">
                <div class="input-forgot">
                    <p class="text">Forgot password</p>
                </div>
                <button class="button-style btn" @click="signIn">Login</button>
                <div class="log out">
                    <h1 class="text">Closed session</h1>
                    <button class="button-style1 btn2" @click="logOut">log out</button>
                </div>
                <div class="cerraCuenta">
                    <h1 class="text">cerrar cuenta</h1>
                    <button class="button-style1 btn2" @click="deleteaccount">cerrar cuenta</button>
                </div>
            </div>
            <div class="icon">
                <p class="text">Or sign up using</p>
                <figure class="svg">
                    <img src="../assets/img/facebook.svg" alt="facebook" />
                    <img src="../assets/img/google.svg" alt="google" />
                </figure>
            </div>

            <p class="text">
                If you haven't register press
                <router-link to="/Register"
                    ><u><b>here</b></u></router-link
                >
            </p>
        </div>
    </section>
</template>

<style lang="scss">
$parrot-gray: #434343;
$bg: #2e2e2e;
$red: #eb5757;

.h1 {
    display: flex;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
}

.label {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
}

.content {
    display: flex;
    justify-content: center;
    padding: 100px;
    background-color: $bg;
}

.Login {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    gap: 20px;

    position: relative;
    width: 50%;
    /* Parrot-gray */

    background: $parrot-gray;
    box-shadow: 0px 4px 12px rgba(95, 95, 95, 0.25);
    border-radius: 25px;
}

.input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 18px;

    width: 44%;

    /* Inside auto layout */

    flex: none;
    flex-grow: 0;

    &-style {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        color: $parrot-gray;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        border: none;
        outline: none;
    }

    &-forgot {
        display: flex;
    }
}

.text {
    display: flex;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 15px 0px;
}

.button {
    width: 44%;
    padding-top: 0px;
}

.button-style {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    color: white;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    width: 100%;

    /* Blue 2 P */

    background: #1569db;
    border-radius: 55px;

    outline: none;
    border: none;
    cursor: pointer;
}

.button-style1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    color: white;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    width: 100%;

    /* Blue 2 P */

    background: $red;
    border-radius: 55px;

    outline: none;
    border: none;
    cursor: pointer;
}

.btn {
    background: #1569db;
}

.btn:hover {
    background: #0045a4;
}

.btn2 {
    background: $red;
}

.btn2:hover {
    background: #b02727;
}

.svg {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 17px;

    width: 100%;
}

@media all and (max-width: 844px) {
    .content {
        padding: 100px 0px;
    }

    .Login {
        width: 90%;
        gap: 12px;
        padding: 30px 0px;
        border-radius: 10px;
    }

    .h1 {
        font-size: 24px;
    }

    .input {
        width: 80%;
        gap: 0px;
    }

    .button {
        width: 80%;
    }

    .button-style {
        gap: 0px;
    }

    .text {
        padding: 5px 0px;
    }

    .svg {
        gap: 12px;
        padding: 5px;
        justify-content: center;
    }
}
</style>
