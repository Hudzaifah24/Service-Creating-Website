<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="fixed z-20 flex items-center justify-between w-full bg-white shadow-md">
        <RouterLink to="/" class="ml-12 font-black">
            SIX RED STARS TECH
        </RouterLink>
        <div class="flex flex-row">
            <div class="flex flex-row items-center mr-12 gap-9">
                <span class="py-6 pr-8 hover:text-blue-500 hover:cursor-default">
                    <RouterLink to="/">
                        Home
                    </RouterLink>
                </span>
                <div class="py-6 pr-8 dropdown-service">
                    <span class="hover:cursor-default">
                        Service
                    </span>
                    <div class="rounded-md shadow-lg dropdown-content-service">
                        <RouterLink to="/website" class="w-full py-2 pl-5 pr-10 border-black rounded-md hover:border-l-4 hover:bg-blue-300">Website</RouterLink>
                        <RouterLink to="/android" class="w-full py-2 pl-5 pr-10 border-black rounded-md hover:border-l-4 hover:bg-blue-300">Android</RouterLink>
                    </div>
                </div>
                <span class="py-6 pr-8 hover:text-blue-500 hover:cursor-default">
                    <RouterLink to="/client">
                        Clients
                    </RouterLink>
                </span>
                <span class="py-6 pr-8 hover:text-blue-500 hover:cursor-default">
                    <RouterLink to="/about">
                        About Us
                    </RouterLink>
                </span>
                <div class="py-6 pr-8 dropdown-language">
                    <span class="hover:cursor-default">
                        <i class="text-xl fa-solid fa-earth-asia hover:text-blue-500 hover:cursor-default"></i>
                    </span>
                    <div class="rounded-md shadow-lg dropdown-content-language">
                        <a class="w-full py-2 pl-5 pr-10 border-black rounded-md hover:cursor-pointer hover:border-l-4 hover:bg-blue-300">Indonesia</a>
                        <a class="w-full py-2 pl-5 pr-10 border-black rounded-md hover:cursor-pointer hover:border-l-4 hover:bg-blue-300">English</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-8 mr-12">
                <RouterLink to="/register" class="py-6 hover:text-blue-500 hover:underline hover:cursor-pointer">Register</RouterLink>
                <a href="login">
                    <button class="px-5 py-1 text-white duration-300 bg-blue-500 rounded-md hover:bg-blue-700" type="button">Login</button>
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
    /* Service */
    .dropdown-service {
        display: inline-block;
        position: relative;
    }
    .dropdown-content-service {
        display: none;
        position: absolute;
        left: -10px;
        background-color: white;
        margin-top: 23px;
        z-index: 1;
    }
    .dropdown-service:hover  span {
        color: rgb(59 130 246);
    }
    .dropdown-service:hover .dropdown-content-service {
        display: flex;
        flex-direction: column;
        gap: 1px;
    }

    /* Language */
    .dropdown-language {
        display: inline-block;
        position: relative;
    }
    .dropdown-content-language {
        display: none;
        position: absolute;
        left: -10px;
        background-color: white;
        margin-top: 23px;
        z-index: 1;
    }
    .dropdown-language:hover  span {
        color: rgb(59 130 246);
    }
    .dropdown-language:hover .dropdown-content-language {
        display: flex;
        flex-direction: column;
        gap: 1px;
    }
</style>
