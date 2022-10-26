<script>
    export default {
        data() {
            return {
                active: false
            }
        },
    }
</script>

<template>
    <section class="px-12 pb-16">
        <div class="relative">
            <h1 class="text-2xl text-black text-center font-black mb-10">Services WebSite With Hosting</h1>
            <div class="flex justify-between items-center">
                <div class="rounded-lg bg-white w-1/4">
                    <h1 class="font-black text-xl text-white text-center p-5 bg-blue-700 rounded-t-lg">
                        E-commerce
                    </h1>
                    <div class="p-5 border-x-2 border-gray-500">
                        <h2 class="text-2xl font-black text-left">
                            Rp 12.000.000
                        </h2>
                        <hr class="border">
                        <div class="flex flex-col gap-3 text-left">
                            <div class="mt-5 text-black">
                                <li>Gratis Konsultasi</li>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-500 p-3 rounded-b-lg w-full text-white hover:bg-green-700">Choose</button>
                </div>
                <div class="rounded-lg bg-white w-1/4">
                    <h1 class="font-black text-xl text-white text-center p-5 bg-blue-700 rounded-t-lg">
                        PonPes System
                    </h1>
                    <div class="p-5 border-x-2 border-gray-500">
                        <h2 class="text-2xl font-black text-left">
                            Rp 12.000.000
                        </h2>
                        <hr class="border">
                        <div class="flex flex-col gap-3 text-left">
                            <div class="mt-5 text-black">
                                <li>Gratis Konsultasi</li>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-500 p-3 rounded-b-lg w-full text-white hover:bg-green-700">Choose</button>
                </div>
                <div class="rounded-lg bg-white w-1/4">
                    <h1 class="font-black text-xl text-white text-center p-5 bg-blue-700 rounded-t-lg">
                        Citizen System
                    </h1>
                    <div class="p-5 border-x-2 border-gray-500">
                        <h2 class="text-2xl font-black text-left">
                            Rp 12.000.000
                        </h2>
                        <hr class="border">
                        <div class="flex flex-col gap-3 text-left">
                            <div class="mt-5 text-black">
                                <li>Gratis Konsultasi</li>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-500 p-3 rounded-b-lg w-full text-white hover:bg-green-700">Choose</button>
                </div>
            </div>
            <hr v-if="active == false" class="absolute border-2 border-red-800 top-36 w-full rotate-12">
            <hr v-if="active == false" class="absolute border-2 border-red-800 top-36 w-full -rotate-12">
            <div v-if="active == false" class="mt-5 text-red-500">
                *This Not Activated Because Not Already Of Team There
            </div>
        </div>
        <hr class="mt-10 border-2">
        <div class="mt-10 relative">
            <h1 class="text-2xl text-black font-black text-center mb-10">Services WebSite Without Hosting</h1>
            <div class="flex justify-between items-center">
                <div class="rounded-lg bg-white w-1/4">
                    <h1 class="font-black text-xl text-white text-center p-5 bg-blue-700 rounded-t-lg">
                        E-commerce
                    </h1>
                    <div class="p-5 border-x-2 border-gray-500">
                        <h2 class="text-2xl font-black text-left">
                            Rp 12.000.000
                        </h2>
                        <hr class="border">
                        <div class="flex flex-col gap-3 text-left">
                            <div class="mt-5 text-black">
                                <li>Gratis Konsultasi</li>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-500 p-3 rounded-b-lg w-full text-white hover:bg-green-700">Choose</button>
                </div>
                <div class="rounded-lg bg-white w-1/4">
                    <h1 class="font-black text-xl text-white text-center p-5 bg-blue-700 rounded-t-lg">
                        PonPes System
                    </h1>
                    <div class="p-5 border-x-2 border-gray-500">
                        <h2 class="text-2xl font-black text-left">
                            Rp 12.000.000
                        </h2>
                        <hr class="border">
                        <div class="flex flex-col gap-3 text-left">
                            <div class="mt-5 text-black">
                                <li>Gratis Konsultasi</li>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-500 p-3 rounded-b-lg w-full text-white hover:bg-green-700">Choose</button>
                </div>
                <div class="rounded-lg bg-white w-1/4">
                    <h1 class="font-black text-xl text-white text-center p-5 bg-blue-700 rounded-t-lg">
                        Citizen System
                    </h1>
                    <div class="p-5 border-x-2 border-gray-500">
                        <h2 class="text-2xl font-black text-left">
                            Rp 12.000.000
                        </h2>
                        <hr class="border">
                        <div class="flex flex-col gap-3 text-left">
                            <div class="mt-5 text-black">
                                <li>Gratis Konsultasi</li>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-500 p-3 rounded-b-lg w-full text-white hover:bg-green-700">Choose</button>
                </div>
            </div>
        </div>
    </section>
</template>