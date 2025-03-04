<script setup>
import { useUserStore } from '@renderer/store/modules/useUserStore'
import { get, post } from '@renderer/utils/fetch'
import { ref } from 'vue'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')


const userStore = useUserStore()

const list = ref([])

const getToken = () => {
    userStore.token = '测试'

    post('resource/dict/qry/dicts', { data: { cate_code: "dept_prop" } }).then((res) => {
        console.log(res)
        list.value = res.data
    })

}


</script>

<template>
    <div>首页/登录</div>


    <a href="#/login">登录</a>
    <a href="#/login" target="_blank" rel="noreferrer">Documentation</a>

    <div class="action">
        <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
    <div>
        {{ userStore.token }}
    </div>
    <button @click="getToken">token</button>

    <div>
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>

</template>
