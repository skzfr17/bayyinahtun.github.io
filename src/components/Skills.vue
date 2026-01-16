<template>
  <section
    id="skills"
    ref="sectionRef"
    class="py-20 bg-white transition-all duration-700 ease-out"
    :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <div class="max-w-6xl mx-auto px-6">

      <!-- Title -->
      <h2
        class="text-3xl font-bold text-center text-[#0a2540] mb-16
               transition-all duration-700 delay-100"
        :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Skills & Tools
      </h2>

      <div class="relative grid md:grid-cols-2 gap-16">

        <!-- Vertical Divider -->
        <div
          class="hidden md:block absolute left-1/2 top-0 h-full w-px
                 bg-gradient-to-b from-transparent via-sky-400 to-transparent
                 -translate-x-1/2 transition-opacity duration-700"
          :class="sectionVisible ? 'opacity-100' : 'opacity-0'"
        ></div>

        <!-- Soft Skills & Language -->
        <div
          class="md:pr-10 text-center md:text-left transition-all duration-700 delay-200"
          :class="sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <h3 class="text-xl font-semibold text-[#0a2540] mb-6">
            Soft Skills
          </h3>

          <ul class="space-y-4 inline-block md:block text-left mb-8">
            <li class="bullet-item">Manajemen waktu yang baik</li>
            <li class="bullet-item">Disiplin dan bertanggung jawab</li>
            <li class="bullet-item">Mampu bekerja secara mandiri maupun dalam tim</li>
            <li class="bullet-item">Adaptif dan cepat belajar</li>
            <li class="bullet-item">Teliti dalam mengerjakan tugas</li>
          </ul>

          <!-- Language -->
          <h3 class="text-xl font-semibold text-[#0a2540] mb-6">
            Bahasa
          </h3>

          <ul class="space-y-4 inline-block md:block text-left">
            <li class="bullet-item">Bahasa Indonesia (Fluent)</li>
            <li class="bullet-item">Bahasa Inggris (Intermediate)</li>
          </ul>
        </div>

        <!-- Tools -->
        <div
          class="md:pl-10 text-center md:text-left transition-all duration-700 delay-300"
          :class="sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <h3 class="text-xl font-semibold text-[#0a2540] mb-6">
            Tools & Technologies
          </h3>

          <ul class="space-y-4 inline-block md:block text-left">
            <li class="bullet-item">Microsoft Office (Word, Excel, PowerPoint) - Intermediate</li>
            <li class="bullet-item">Python - Intermediate</li>
            <li class="bullet-item">FastAPI & Flask - Intermediate</li>
            <li class="bullet-item">Vue.js - Beginner</li>
            <li class="bullet-item">Tailwind CSS - Beginner</li>
            <li class="bullet-item">MySQL & SQLite - Intermediate</li>
            <li class="bullet-item">Git & GitHub - Intermediate</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const sectionVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sectionVisible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.2
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

</script>

<style scoped>
.bullet-item {
  position: relative;
  padding-left: 1.25rem;
  color: #0a2540;
  font-size: 0.95rem;
  line-height: 1.6;
}

.bullet-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 6px rgba(56, 189, 248, 0.7);
}
</style>