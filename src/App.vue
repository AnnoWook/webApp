<template>
    <div class="container" id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>
    .container {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: rgba(0, 0, 0, .1);
    }
</style>

<style>
    /*@charset "utf-8";*/
    /* CSS Document */

    body,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    fieldset,
    input,
    textarea,
    p,
    blockquote,
    th,
    td {
        margin: 0;
        padding: 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    fieldset,
    img {
        border: 0 none;
        /*有些浏览器默认这些标签有边框，所以要清除默认边框*/
        display: block;
    }

    address,
    caption,
    cite,
    code,
    dfn,
    em,
    i,
    u,
    b,
    strong,
    th,
    var {
        font-style: normal;
        font-weight: normal;
        /*清除标签默认文本样式和加粗*/
    }

    input,
    textarea {
        outline: 0 none;
        /*去掉文本框的默认轮廓线*/
    }

    ol,
    ul {
        list-style: none;
        /*清除列表默认样式*/
    }

    caption,
    th {
        text-align: left;
        /*清除标签默认文本居中对齐*/
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
        /*清除标题标签的默认样式*/
    }

    a {
        text-decoration: none;
        /*大部分页面中的链接没有下划线*/
    }

    .clearfix:after {
        height: 0;
        content: " ";
        display: block;
        overflow: hidden;
        clear: both;
    }

    .clearfix {
        zoom: 1;
        /*IE低版本浏览器不支持after伪类所以要加这一句*/
    }
    /*控制第一层容器都是撑满全屏*/

    html,
    body {
        height: 100%;
        width: 100%;
    }

    html {
        font-size:20px;
    }
    @media screen and (min-width: 75vh){
        html{
            width: 75vh;
            margin: 0 auto;
            font-size: 22px;

        }

        ::-webkit-scrollbar{
            width: 1px;
        }
        .play{
            width: 75vh !important;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
        .swiper-pagination{
            width: 75vh !important;
        }
        .miniplay{
            width: 75vh !important;
        }
    }

    @media screen and (width:320px) {
        html {
            font-size: 16px;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
    }

    @media screen and (width:360px) {
        html {
            font-size: 18px;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
    }

    @media screen and (width:375px) {
        html {
            font-size: 18px;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
    }

    @media screen and (width:384px) {
        html {
            font-size: 20px;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
    }

    @media screen and (width:412px) {
        html {
            font-size: 20px;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
    }

    @media screen and (width:414px) {
        html {
            font-size: 22px;
        }
        .recommend ul:first-child li img {
            width: 100%;
        }
    }
    @media screen and (width:1024px) {
        html {
            font-size: 44px;
        }
        .main {
            margin-top: 10% !important;
        }
        .main .new {
            height: 40% !important;
        }
        .swiper-pagination {
            height: 7% !important;
        }
        .swiper-pagination>span {
            line-height: 230% !important;
        }
    }
    @media screen and (width:768px) {
        html {
            font-size: 34px;
        }
        .main {
            margin-top: 10% !important;
        }
        .main .new {
            height: 40% !important;
        }
        .swiper-pagination>span {
            line-height: 200% !important;
        }
    }
/*
    @media screen and (width:960px) {
        html {
            font-size: 36px;
        }
        .main {
            margin-top: 5% !important;
        }
        .main .new {
            height: 40% !important;
        }
    }



    @media screen and (width:1280px) {
        html {
            font-size: 40px;
        }
        .main {
            margin-top: 4% !important;
        }
        .main .new {
            height: 40% !important;
        }
    }

    @media screen and (width:1366px) {
        html {
            font-size: 40px;
        }
        .main {
            margin-top: 5% !important;
        }
        .main .new {
            height: 70% !important;
        }
        .swiper-pagination {
            height: 10.5% !important;
        }
        .swiper-pagination>span {
            line-height: 160% !important;
        }
    }*/

    h5 {
        font-weight: 700;
    }
</style>

<style>

</style>
