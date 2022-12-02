<script>
export default {
    name: "not Found",
};
</script>
<template>
    <body>
        <div class="container">
            <h1 class="error-title">ERROR 404</h1>
            <h2 class="error-subtitle">¡¡LOOKS LIKE SOMETING IS WRONG!!</h2>
            <P class="error-text">It seems that the page was not found, check that the url you have is correct</P>
            <figure class="gif">
                <img class="gifMod" src="../assets/img/CGBaddiesErrorPoses.gif" alt="gif" />
            </figure>
        </div>
    </body>
</template>

<style lang="scss">
.container {
    background-color: #2e2e2e;
    padding: 120px 0px;
}

.error-title {
    display: flex;
    justify-content: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 8em;
    line-height: 145px;

    /* ParrotBlue1 */

    color: #1569db;
}

.error-subtitle {
    display: flex;
    justify-content: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 3em;
    line-height: 49px;
    color: #1569db;
}

.error-text {
    display: flex;
    justify-content: center;
    padding-top: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    /* identical to box height */

    color: #ffffff;
}

.gif {
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.gifMod {
    width: 38%;
}

@media all and (max-width: 844px) {
    .gifMod {
        width: 100%;
    }

    .error-title {
        font-size: 3.5em;
        line-height: 55px;
    }

    .error-subtitle {
        display: flex;
        line-height: 33px;
        font-size: 1em;
    }

    .error-text {
        font-size: 16px;
        line-height: auto;
        text-align: center;
    }
}
</style>
