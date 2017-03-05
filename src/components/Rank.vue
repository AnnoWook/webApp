<template>
    <div>
        <div class="main">
            <div class="search2">
                <a>
                    <input type="text" name="" value="" placeholder="搜索歌曲、歌手..." @click='so({ name : true })'>
                </a>
                <button type="button" name="button"><i class="mintui mintui-search"></i></button>
            </div>
            <div class="rank">
                <h5>巅峰榜</h5>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="hotImag">
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hotItems" @click="play({songdata : hotItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hotItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="salesImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in salesItems" @click="play({songdata:salesItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in salesItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="hongkongImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hongkongItems" @click="play({songdata:hongkongItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hongkongItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="balladImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in balladItems" @click="play({songdata:balladItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in balladItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="rockImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in rockItems" @click="play({songdata:rockItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in rockItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="americaImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in americaItems" @click="play({songdata:americaItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in americaItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="koreaImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in koreaItems" @click="play({songdata:koreaItems[key]})" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in koreaItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="jpImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in jpItems" @click="play({songdata:jpItems[key]})"  class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in jpItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
    .search2 {
        margin-top: 3rem;
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search2 a {
        display: inline-block;
        width: 80%;
    }

    .search2 input {
        height: 1.3rem;
        width: 100%;
        border: none;
        border-radius: 1rem;
        text-indent: .7rem;
        font-size: .7rem;
        background-color: rgba(0, 0, 0, .1);
        color: rgb(0, 0, 0, 1);
    }

    .search2 button {
        height: 1rem;
        width: 10%;
        font-size: .9rem;
        color: rgba(0, 0, 0, 1);
        background: rgba(0, 0, 0, 0);
        border: none;
        padding-left: .5rem;
        margin: 0;
        outline-style: none;
    }

    .search2 button i {
        font-size: 1.1rem;
    }

    .rank {
        margin: 0 1rem 0 1rem;
    }

    .rank h5 {
        font-size: 1rem;
    }

    .rank .recommend {
        border-top: .05rem solid rgba(0, 0, 0, .2);
        padding-top: .5rem;
        margin: .5rem 0;
    }
</style>
<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                rq: [],

                hotItems: '',
                hotImag: '',
                salesItems: '',
                salesImag: '',
                hongkongItems: '',
                hongkongImag: '',
                balladItems: '',
                balladImag: '',
                rockItems: '',
                rockImag: '',
                americaItems: '',
                americaImag: '',
                koreaItems: '',
                koreaImag: '',
                jpItems: '',
                jpImag: '',
            }
        },
        mounted: function() {
            this.$store.dispatch('getHot',).then((response) => {
                this.hotItems = response.body.showapi_res_body.pagebean.songlist
                this.hotImag = this.hotItems[0].albumpic_big
            })
            this.$store.dispatch('getSales',).then((response) => {
                this.salesItems = response.body.showapi_res_body.pagebean.songlist
                this.salesImag = this.salesItems[0].albumpic_big
            })
            this.$store.dispatch('getHongkong',).then((response) => {
                this.hongkongItems = response.body.showapi_res_body.pagebean.songlist
                this.hongkongImag = this.hongkongItems[0].albumpic_big
            })
            this.$store.dispatch('getBallad',).then((response) => {
                this.balladItems = response.body.showapi_res_body.pagebean.songlist
                this.balladImag = this.balladItems[0].albumpic_big
            })
            this.$store.dispatch('getRock',).then((response) => {
                this.rockItems = response.body.showapi_res_body.pagebean.songlist
                this.rockImag = this.rockItems[0].albumpic_big
            })
            this.$store.dispatch('getAmerica',).then((response) => {
                this.americaItems = response.body.showapi_res_body.pagebean.songlist
                this.americaImag = this.americaItems[0].albumpic_big
            })
            this.$store.dispatch('getKorea',).then((response) => {
                this.koreaItems = response.body.showapi_res_body.pagebean.songlist
                this.koreaImag = this.koreaItems[0].albumpic_big
            })
            this.$store.dispatch('getJp',).then((response) => {
                this.jpItems = response.body.showapi_res_body.pagebean.songlist
                this.jpImag = this.jpItems[0].albumpic_big
            })
        },
        methods: {
            ...mapMutations({
                play : 'getData' ,
                so : 'getName',
            })
        }
    }
</script>
