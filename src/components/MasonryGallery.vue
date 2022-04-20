<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    var elem = document.querySelector('.grid');
    if (elem) {
        var msnry = new Masonry(elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: 200
        });
        var msnry = new Masonry('.grid', {
            //options
        });
    }

    console.log('element is: ' + elem)
})

</script>

<template>
    <div class="grid">
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_350,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_100,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_400,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_1000,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_800,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_100,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_600,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_350,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
        <div class="grid-item">
            <img
                src="https://res.cloudinary.com/htatemitchell/image/upload/h_500,w_200,c_fill/v1650404500/gamestoretour/madnessthumbnail_smlvw9.jpg" />
        </div>
    </div>

</template>

<style scoped>
.grid-item img {
    width: 100%;
    max-width: 200px;
    display: block;
}

.grid-item {
    width: 200px;
}

.grid-item--width2 {
    width: 400px;
}
</style>