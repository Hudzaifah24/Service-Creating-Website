<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    export default {
        components: {
            Splide,
            SplideSlide,
        },
        data() {
            return {
                options: {
                    rewind: true,
                    width: 800,
                    gap: '1rem',
                }
            }
        }
    }
</script>

<template>
    <section class="px-12 pb-16">
        <div class="py-10 bg-blue-500 rounded-lg">
            <splide class="w-2/4 mx-auto rounded-lg" :options="options">
                <splide-slide>
                    <img class="mx-auto rounded-lg" alt="image 1" src="../assets/meeting.jpg">
                </splide-slide>
                <splide-slide>
                    <img class="mx-auto rounded-lg" alt="image 2" src="../assets/photo1.jpg">
                </splide-slide>
            </splide>
        </div>
    </section>
</template>