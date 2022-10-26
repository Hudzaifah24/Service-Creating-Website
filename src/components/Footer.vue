<script>
    import { RouterLink, RouterView } from "vue-router";

    export default {
        data() {
            return {
                out: null,
                toyear: 2022,
                year: new Date().getFullYear(),
            }
        },
        
        mounted() {
            if (this.year == this.toyear) {
                this.out = "2022"
            } else if (this.year > this.toyear) {
                this.out = "2022 - " + this.year
            }
        },
    }
</script>

<template>
    <footer class="bg-gray-500 text-white w-full pt-12 px-12 pb-5">
        <div class="flex flex-row justify-between gap-3">
            <div class="flex flex-col gap-2 w-5/12 pr-5">
                <span class="font-black text-xl">Six Red Stars Tech</span>
                <span class="font-medium text-base text-justify w-3/4">Kami menyediakan layanan dalam pembuatan Website dan Andoid dengan fitur lengkap dan implementasi sesuai dari kebutuhan anda.</span>
                <div class="mt-1">
                    <div class="flex flex-row gap-2 items-center">
                        <i class="fa-regular fa-envelope text-lg"></i>
                        <span class="font-normal text-sm">hudz1357@gmail.com</span>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <i class="fa-brands fa-whatsapp text-xl"></i>
                        <span class="font-normal text-sm">+62 815 7531 9184</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 w-2/6 px-5">
                <span class="font-black text-xl">Our Services</span>
                <span>
                    <RouterLink to="/website">Website</RouterLink>
                </span>
                <span>
                    <RouterLink to="/android">Android</RouterLink>
                </span>
            </div>
            <div class="flex flex-col gap-3 w-2/6">
                <span class="font-black text-xl">Our Office</span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d254.39446123643938!2d107.03754074557345!3d-6.526947176803195!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1666101197713!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="text-center mt-10">
            <div class="flex mx-auto justify-center gap-5 mb-3">
                <a href="https://bit.ly/3MYpCdM" target="blank" class="rounded-full w-10 h-10 border-2 flex justify-center items-center">
                    <i class="fa-brands fa-whatsapp text-xl"></i>
                </a>
                <a href="#" class="rounded-full w-10 h-10 border-2 flex justify-center items-center">
                    <i class="fa-brands fa-facebook-f text-xl"></i>
                </a>
                <a href="#" class="rounded-full w-10 h-10 border-2 flex justify-center items-center">
                    <i class="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="#" class="rounded-full w-10 h-10 border-2 flex justify-center items-center">
                    <i class="fa-brands fa-linkedin-in text-xl"></i>
                </a>
            </div>
            <span class="text-sm">
                Copyright &copy; {{ out }} PT.SIX RED STARS TECHNOLOGY.
            </span>
        </div>
    </footer>
</template>