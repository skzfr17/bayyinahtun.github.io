<template>
  <section class="relative bg-white overflow-hidden pt-24 pb-20 px-6 lg:px-20">
    <!-- Navy blur background (continuation) -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <span class="blur-circle blur-3"></span>
      <span class="blur-circle blur-4"></span>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-20">

        <!-- Organization Timeline -->
        <div v-intersect class="lg:w-1/2 fade-up">
          <h2 class="section-title">Pengalaman Organisasi</h2>

          <div class="relative border-l border-slate-300 ml-3 mt-10">
            <div
              v-for="(org, i) in organizations"
              :key="i"
              class="timeline-item"
            >
              <span class="timeline-dot"></span>
              <h3 class="timeline-title">{{ org.name }}</h3>
              <p class="timeline-text">
                {{ org.period }} | {{ org.role }}
              </p>
            </div>
          </div>
        </div>

        <!-- Separator -->
        <div class="hidden lg:flex w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

        <!-- Work Experience -->
        <div v-intersect class="lg:w-1/2 fade-up">
          <h2 class="section-title">Pengalaman Kerja</h2>

          <div class="work-card mt-10">
            <h3 class="work-title">Magang | Inspektorat Provinsi Sulawesi Tenggara</h3>
            <p class="work-period">Januari 2025 – Februari 2025</p>
            <p class="work-desc">
              Melakukan analisis data keuangan dan penyusunan laporan menggunakan Microsoft Word dan
              Microsoft Excel serta membantu tim dalam pengelolaan data audit.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      organizations: [
        { name: 'Pelatihan Teknologi Informasi FMIPA Universitas Halu Oleo', period: '2022', role: 'Peserta' },
        { name: 'Himpunan Mahasiswa Ilmu Komputer', period: '2023 – 2024', role: 'Anggota Divisi Pendidikan' },
        { name: 'Computer Science Competition Universitas Halu Oleo Tingkat Nasional Antar Mahasiswa', period: '2024', role: 'Ketua Panitia' },
        { name: 'Himpunan Mahasiswa Ilmu Komputer', period: '2024 – Sekarang', role: 'Anggota Divisi Komunikasi, Relasi dan Sosial' }
      ]
    }
  },
  directives: {
    intersect: {
      mounted(el) {
        el.classList.add('opacity-0', 'translate-y-10')
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-up')
              observer.unobserve(entry.target)
            }
          })
        }, { threshold: 0.15 })
        observer.observe(el)
      }
    }
  }
}
</script>


<style scoped>
/* Navy blur continuation */
/* Section title (konsisten dengan Education) */
.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0a2540;
  margin-bottom: 1.5rem;
}

/* Navy blur continuation */
.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.18;
}
.blur-3 {
  width: 520px;
  height: 520px;
  background: #1e3a8a;
  top: -200px;
  right: -200px;
}
.blur-4 {
  width: 460px;
  height: 460px;
  background: #3b82f6;
  bottom: -220px;
  left: -180px;
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

/* Work experience card */
.work-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1.5px solid #e5e7eb;
  transition: all 0.35s ease;
}
.work-card:hover {
  border-color: #3b82f6;
  box-shadow:
    0 0 0 1px rgba(59, 130, 246, 0.35),
    0 0 18px rgba(59, 130, 246, 0.5);
  transform: translateY(-4px);
}
.work-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0a2540;
}
.work-period {
  color: #64748b;
  margin: 0.25rem 0 0.75rem;
}
.work-desc {
  color: #374151;
  line-height: 1.7;
}

/* Fade-up animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(36px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fadeUp 0.9s ease-out forwards;
}

</style>