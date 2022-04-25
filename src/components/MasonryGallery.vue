<script setup>
import { onMounted } from 'vue'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import LightboxDialog from 'components/LightboxDialog.vue';

defineProps({ pic: Object });

onMounted(() => {
    var elem = document.querySelector('.grid');
    if (elem) {
        var msnry = new Masonry(elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: 200,
        });
        var msnry = new Masonry('.grid', {
            //options
        });
    }
    window.dispatchEvent(new Event('resize'));
    console.log('element is: ' + elem)
})

// console.log("galleryPic is: ", $props.pic)
</script>

<template>
    <div class="grid">
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 350, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 140, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 500, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 550, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 300, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 200, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 200, 200)" />
        </div>
        <div class="grid-item">
            <LightboxDialog :img="getCloudinaryUrl(pic.imgName, pic.imgId, pic.imgType, 400, 200)" />
        </div>
    </div>

</template>

<style scoped>
</style>