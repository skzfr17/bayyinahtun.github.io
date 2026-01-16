<template>
  <section
    class="relative min-h-screen bg-navy overflow-hidden flex items-center"
    @mousemove="handleMouseMove"
  >
    <!-- Background rotating wrappers -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="circle-wrapper">
        <span
          class="circle circle1"
          :style="{ transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)` }"
        ></span>
      </div>
      <div class="circle-wrapper">
        <span
          class="circle circle2"
          :style="{ transform: `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)` }"
        ></span>
      </div>
      <div class="circle-wrapper">
        <span
          class="circle circle3"
          :style="{ transform: `translate(${mouseX * 0.03}px, ${mouseY * 0.03}px)` }"
        ></span>
      </div>
    </div>

    <div
      class="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 px-6 lg:px-20"
    >
      <!-- Text Content -->
      <div class="text-left max-w-xl animate-fade-up">
        <p class="text-3xl text-white mb-2 font-light">Halo, Saya</p>
        <h1 class="text-7xl font-extrabold text-white mb-4">
          Bayyinahtun Dwi Sumatri
        </h1>
        <p class="text-3xl text-white font-medium mb-6">
          Mahasiswa Ilmu Komputer
        </p>

        <!-- Contact Info -->
        <div class="flex flex-wrap gap-4 text-white text-lg font-medium mt-4">
          <a href="mailto:bynthdwi@gmail.com" class="neon-link">Email</a>
          <span>|</span>
          <a
            href="https://www.instagram.com/baywithmi/"
            target="_blank"
            class="neon-link"
            >Instagram</a
          >
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/bayyinahtun-dwi-sumatri-684191331/"
            target="_blank"
            class="neon-link"
            >LinkedIn</a
          >
        </div>
      </div>

      <!-- Photo -->
      <div class="mt-10 lg:mt-0">
        <img
          :src="profil"
          alt="Profile"
          class="w-96 h-96 rounded-2xl border-4 border-white shadow-xl object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script>
import profil from '@/assets/profil.png'

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      profil
    }
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX - window.innerWidth / 2
      this.mouseY = event.clientY - window.innerHeight / 2
    }
  }
}
</script>

<style scoped>
/* Background warna Navy */
.bg-navy {
  background: linear-gradient(to bottom right, #0f172a, #1e293b);
}

/* Animasi Fade Up untuk teks */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fadeUp 1s ease-out;
}

/* Wrapper untuk animasi rotate */
.circle-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotate 60s linear infinite;
  pointer-events: none;
}

/* Rotate animation */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Circle blur background */
.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
}

/* Ukuran & warna tiap circle */
.circle1 {
  width: 350px;
  height: 350px;
  background: #3b82f6;
  top: 10%;
  left: 15%;
}

.circle2 {
  width: 450px;
  height: 450px;
  background: #1e3a8a;
  top: 50%;
  left: 70%;
}

.circle3 {
  width: 500px;
  height: 500px;
  background: #60a5fa;
  top: 80%;
  left: 30%;
}

/* Neon Link Effect */
.neon-link {
  color: #fff;
  text-decoration: none;
  padding: 2px 6px;
  transition: 0.3s ease;
  position: relative;
}
.neon-link:hover {
  color: #ffffff;
  text-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 20px #3b82f6,
    0 0 30px #3b82f6;
}
</style>