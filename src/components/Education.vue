<template>
  <section class="relative bg-white overflow-hidden pt-24 pb-20 px-6 lg:px-20">
    <!-- Navy blur background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <span class="blur-circle blur-1"></span>
      <span class="blur-circle blur-2"></span>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-20">

        <!-- About Me -->
        <div v-intersect class="lg:w-1/2 fade-up">
          <h2 class="section-title">Tentang Saya</h2>
          <p class="section-text">
            Halo! Saya Bayyinahtun Dwi Sumatri, seorang Mahasiswa Ilmu Komputer. Saya tertarik pada analisis data,
            pengembangan sistem berbasis AI, serta membangun solusi yang berdampak.
            Saya senang belajar dan mengembangkan skill melalui proyek nyata.
          </p>
        </div>

        <!-- Separator -->
        <div class="hidden lg:flex w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

        <!-- Education -->
        <div v-intersect class="lg:w-1/2 fade-up">
          <h2 class="section-title">Riwayat Pendidikan</h2>

          <div class="relative border-l border-slate-300 ml-3 mt-10">
            <div class="timeline-item">
              <span class="timeline-dot"></span>
              <h3 class="timeline-title">SMAN 1 Lawa</h3>
              <p class="timeline-text">
                2019 – 2022 | Matematika dan Ilmu Pengetahuan Alam
              </p>
            </div>

            <div class="timeline-item">
              <span class="timeline-dot"></span>
              <h3 class="timeline-title">Universitas Halu Oleo</h3>
              <p class="timeline-text">
                2022 – Sekarang | S1 Ilmu Komputer
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  directives: {
    intersect: {
      mounted(el) {
        el.classList.add('opacity-0', 'translate-y-10');
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-up');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        observer.observe(el);
      }
    }
  }
}
</script>

<style scope>
  /* Section title */
.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0a2540; /* navy konsisten */
  margin-bottom: 1.5rem;
}

/* Body text */
.section-text {
  font-size: 1.05rem;
  color: #374151;
  line-height: 1.8;
}

/* Navy blur background */
.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.18;
}
.blur-1 {
  width: 460px;
  height: 460px;
  background: #1e3a8a;
  top: -180px;
  left: -180px;
}
.blur-2 {
  width: 560px;
  height: 560px;
  background: #3b82f6;
  bottom: -220px;
  right: -220px;
}

/* Timeline */
.timeline-item {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
}
.timeline-dot {
  position: absolute;
  left: -5px;
  top: 8px;
  width: 8px;
  height: 8px;
  background: #1e3a8a;
  border-radius: 9999px;
}
.timeline-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1f2937;
}
.timeline-text {
  margin-top: 0.25rem;
  color: #4b5563;
  font-size: 0.95rem;
}

/* Fade-up animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(36px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fadeUp 0.9s ease-out forwards;
}

</style>