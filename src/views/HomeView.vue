<script>
  export default {
    data() {
      return {
        time: new Date().getHours(),
      }
    },

    methods: {
      wa(){
        let now = "";
        
        switch (this.time) {
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
              now = "Morning";
            break;

          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
              now = "Afternoon";
            break;
          
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
              now = "Evening";
            break;

          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 1:
          case 2:
          case 3:
              now = "Night";
            break;

          default:
            break;
        }
        
        return "https://wa.me/6281575319184?text=Hello Good " + now + ", PT.SIX RED STARS TECHNOLOGY...";
      }
    },

    // mounted() {
    // }
  }
</script>

<template>
  <main>
    <section id="home" class="px-12 pb-16">
      <div class="flex justify-between items-center">
        <div class="flex flex-col w-1/2">
          <span class="text-start text-black font-bold leading-relaxed text-3xl uppercase">What Website Are You Looking for?</span>
          <span class="text-start text-black font-bold leading-relaxed text-xl">Find Your Interesting Website Here.</span>
          <span class="text-start text-black font-normal leading-relaxed text-base mt-5">
            Anda membutuh jasa pembuatan website?, disini menyediakan layanan tersebut,
            kami siap melayani anda dimanapun dan kapanpun.
            <br>
            <br>
            Anda akan terhubung dengan kami dari whatsapp dan email, jasa yang kami 
            tawarkan lebih tertuju kepada kebutuhan anda.
            <br>
            Pelayanan <b>cepat</b>, <b>tepat</b> dan <b>bersahabat</b>.
          </span>
          <div class="mt-5 flex flex-row gap-5">
            <RouterLink to="" class="bg-blue-500 hover:bg-blue-700 px-5 py-2 rounded-md text-white">Let's Order</RouterLink>
            <a :href="wa()" target="blank" class="border-blue-500 border-2 hover:border-blue-700 px-5 py-2 rounded-md text-blue-500 hover:text-blue-700">Let's Talk</a>
          </div>
        </div>
        <img class="w-1/2" src="../assets/photo1.svg" alt="Gambar 1">
      </div>
    </section>

    <section id="client" class="px-12 py-16">
      <div class="flex justify-between items-center gap-10">
        <div class="flex flex-col bg-blue-400 relative rounded-lg p-3 items-center justify-center content-question">
          <img class="w-full rounded" src="../assets/meeting.jpg" alt="meet">
          <span class="font-normal absolute text-center text-white leading-relaxed w-3/4">"Ingin memulai dan mendapatkan omzet lebih, dengan bisnis online?" <br> ... <br> <span class="font-black">Kami Solusinya</span></span>
        </div>
        <div class="flex flex-col bg-blue-400 relative rounded-lg p-3 items-center justify-center content-question">
          <img class="w-full rounded" src="../assets/meeting.jpg" alt="meet">
          <span class="font-normal absolute text-center text-white leading-relaxed w-3/4">"Ingin belajar mengajar dengan cara jarak jauh?" <br> ... <br> <span class="font-black">Kami Solusinya</span></span>
        </div>
        <div class="flex flex-col bg-blue-400 relative rounded-lg p-3 items-center justify-center content-question">
          <img class="w-full rounded" src="../assets/meeting.jpg" alt="meet">
          <span class="font-normal absolute text-center text-white leading-relaxed w-3/4">"Ingin membangun pondok modern dengan system data digital?" <br> ... <br> <span class="font-black">Kami Solusinya</span></span>
        </div>
      </div>
    </section>

    <section id="client" class="px-12 py-16 border-b-2 border-gray-500">
      <div class="flex justify-between items-center gap-10">
        <div class="flex flex-col relative rounded-full items-center justify-center">
          <div class="flex flex-col bg-blue-400 absolute rounded-full w-72 h-72 top-10"></div>
          <img class="rounded z-10 w-3/4" src="../assets/my-foto.png" alt="meet">
        </div>
        <div class="w-1/2">
          <div class="flex flex-col mb-10">
            <span class="text-xl font-black uppercase mb-3">Pilihan Bersahabat</span>
            <span class="w-3/4">
              Kami dari &nbsp;<span class="text-blue-500 font-bold uppercase"><a href="#">six red stars technology</a></span>&nbsp; siap untuk melaksanakan amanah dari anda, dan memastikan kepuasan anda, dengan harga yang sangat hemat.
            </span>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-black uppercase mb-3">Kenapa Di kami?</span>
            <span class="w-3/4">
              <li>Harga Bersahabat</li>
              <li>Professional</li>
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .content-question span {
    display: none;
  }
  .content-question:hover span {
    display: block;
    transition: 300ms;
  }
  .content-question:hover img {
    filter: blur(5px);
    -webkit-filter: blur(5px);
  }
</style>