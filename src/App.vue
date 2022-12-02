<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="header--big">
        <div class="page">
            <header>
                <div class="nav">
                    <div class="textItems">
                        <router-link to="/">
                            <img alt="Parrot logo" class="logo" src="../src/assets/img/logo.svg" />
                        </router-link>
                    </div>

                    <!-- here are some items for navagating between the pages -->
                    <div class="textItems1">
                        <div class="shoppingCar">
                            <router-link to="/Car">
                                <img src="./assets/img/shoppingCar.svg" alt="ShoppingCar" />
                            </router-link>
                        </div>
                        <div class="sign">
                            <router-link to="/login">
                                <h2 class="h2Bar bar">Sign in</h2>
                            </router-link>
                        </div>
                        <div class="sign">
                            <router-link to="/Register">
                                <button class="btnBar btn1">Sign on</button>
                            </router-link>
                        </div>
                    </div>
                    <!-- <nav class="navbar" id="navegation menu">
          </nav> -->
                </div>
                <!--mobile Version-->
                <div class="nav--mobile">
                    <div class="textItems--mobile">
                        <router-link to="/">
                            <img alt="Parrot logo" class="logo--mobile" src="../src/assets/img/mobile/logoMobile.svg" />
                        </router-link>
                    </div>

                    <!-- here are some items for navagating between the pages -->
                    <div class="textItems1--mobile">
                        <div class="shoppingCar--mobile">
                            <router-link to="/Car">
                                <img class="carImg" src="./assets/img/shoppingCar.svg" alt="ShoppingCar" />
                            </router-link>
                        </div>
                        <div class="sign--mobile">
                            <router-link to="/login">
                                <h2 class="h2Bar bar--mobile">Sign in</h2>
                            </router-link>
                        </div>
                        <div class="sign--mobile">
                            <router-link to="/Register">
                                <button class="btnBar btn1--mobile">Sign on</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </header>

            <!--mobile Version-->
        </div>
    </header>
    <RouterView />

    <!-- This part is the footer -->
    <footer>
        <div class="footer">
            <figure class="footer--fig">
                <img class="footer--img" src="./assets/img/logoFooter.svg" alt="footlogo" />
            </figure>
            <div class="footer__text">
                <h2 class="footer--h2">Parrot Software</h2>
                <p class="footer--text2">
                    © 2022 Parrot Studio. All rights reserved. All trademarks are the property of their respective
                    owners in the US and other countries. All prices include VAT (where applicable).
                </p>
            </div>
            <div class="footer__help">
                <p class="footer--text2">Privacy Policy | Legal information | About us | Contact us | cookies |</p>
                <p class="footer--text2">| Technical support | Employment | Parrot distribution | Gift cards |</p>
            </div>
            <div class="footer__contact">
                <img class="footer--edit" src="./assets/img/socialv.svg" alt="" />
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
$blue: #1569db;
$gray: #2e2e2e;
$nav: #232323;

.nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    background: rgba(35, 35, 35, 0.8);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    padding: 23px;
    color: #000000;
    z-index: 10;
}

.nav--mobile {
    display: none;
}

//here's footer content
.footer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: $nav;
    color: white;
    font-family: satoshi;
    padding: 20px;
    font-size: 0.8em;

    &--h2 {
        font-weight: bold;
        padding: 0px 10px;
    }

    &--text2 {
        padding: 2px 10px;
    }

    .footer__help {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
    }

    .footer__contact {
        display: flex;
        justify-content: flex-end;
    }
}

.h2Bar {
    color: white;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
}

.bar {
    color: white;
}

.bar:hover {
    color: #1569db;
}

.btnBar {
    color: white;
    display: flex;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    padding: 5px 10px;
    border-radius: 6px;

    outline: none;
    border: solid;
    background: none;
    cursor: pointer;
}

.btn1 {
    color: white;
}

.btn1:hover {
    color: $blue;
}

.sign {
    display: flex;
    align-items: center;
    padding: 10px;
}

.textItems {
    width: 50%;
    display: flex;
    align-items: center;
}

.textItems1 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.shoppingCar {
    display: flex;
    padding-right: 30px;
}

// /////////////////////Mobile version//////////////////////////////

@media only screen and (max-width: 844px) {
    .nav {
        display: none;
    }

    .carImg {
        width: 80%;
    }

    .header--mobile {
        display: flex;
    }

    .nav--mobile {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        position: fixed;
        background: rgba(35, 35, 35, 0.8);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        padding: 23px;
        color: #000000;
        z-index: 10;
    }

    .h2Bar--mobile {
        color: white;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
    }

    .bar--mobile {
        color: white;
        font-size: 14px;
    }

    .bar--mobile:hover {
        color: #1569db;
    }

    .btnBar--mobile {
        color: white;
        display: flex;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        padding: 5px 5px;
        border-radius: 6px;

        outline: none;
        border: solid;
        background: none;
        cursor: pointer;
    }

    .btn1--mobile {
        color: white;
        padding: 5px 5px;
        font-size: 14px;
    }

    .btn1--mobile:hover {
        color: $blue;
    }

    .sign--mobile {
        display: flex;
        align-items: center;
        padding: 0px 10px;
    }

    .textItems--mobile {
        width: 25%;
        display: flex;
        align-items: center;
    }

    .textItems1--mobile {
        width: 74%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .shoppingCar--mobile {
        display: flex;
        padding: 5px 0px;
        padding-right: 10px;
    }
}
</style>
