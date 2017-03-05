<template>
<div class="container">
        <mt-header title="播放" class="fli">
            <router-link to="/" slot="left">
                <mt-button icon="back" class="return"></mt-button>
            </router-link>
        </mt-header>
</div>
</template>
<style>
.fli{
    height: 7%;
    font-size: 1rem;
}
.fli i{
    font-size: 1rem;
}
.return{
    height: 100%;
}
.mint-header{
    background-color: transparent;
}
</style>
<script>
export default {
    data() {
        return {}
    }
}
</script>
