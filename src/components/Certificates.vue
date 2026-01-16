<template>
  <section id="certificates" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Title -->
      <h2 class="text-3xl font-bold text-center text-[#0a2540] mb-14">
        Sertifikat
      </h2>

      <!-- Cards -->
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Certificate Card -->
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          class="certificate-card fade-card"
          :style="{ transitionDelay: `${index * 120}ms` }"
          v-intersect
        >
          <a
            :href="cert.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="cert.image"
              :alt="cert.title"
              class="certificate-image"
            />
          </a>

          <div class="mt-4 text-center">
            <h3 class="text-base font-semibold text-[#0a2540]">
              {{ cert.title }}
            </h3>
            <p class="text-sm text-slate-600 mt-1">
              {{ cert.year }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const certificates = [
  {
    title: 'MySkill Short Class Microsoft Excel: VLOOKUP & HLOOKUP',
    year: '2024',
    image: '/src/assets/posters/sertifikat_7.png',
    link: 'https://drive.google.com/file/d/1x54qeXH4l-b0cMDH33uyJ6K4FouRV7cV/view?usp=sharing'
  },
  {
    title: 'Dicoding Academy: Belajar Dasar Data Science',
    year: '2024',
    image: '/src/assets/posters/sertifikat_1.png',
    link: 'https://drive.google.com/file/d/1g6mJmOPaFPkx7S8yLD75gODZq-GaCkib/view?usp=drive_link'
  },
  {
    title: 'Dicoding Academy: Belajar Dasar AI',
    year: '2024',
    image: '/src/assets/posters/sertifikat_2.png',
    link: 'https://drive.google.com/file/d/1QnxXlkIRZj50VPUBFtwmjcYlrXJq-uEB/view?usp=sharing'
  },
  {
    title: 'Dicoding x avpn: AI Praktis untuk Produktivitas',
    year: '2025',
    image: '/src/assets/posters/sertifikat_3.png',
    link: 'https://drive.google.com/file/d/1xDMUCTrDl53a1bOu0-3gBwfuPx_ZmOPR/view?usp=sharing'
  },
  {
    title: 'Dicoding x avpn: Belajar Penggunaan Generative AI',
    year: '2025',
    image: '/src/assets/posters/sertifikat_4.png',
    link: 'https://drive.google.com/file/d/1UJSewkkMsU7IY5KlX1qX-xdl-FOFfbSU/view?usp=sharing'
  },
  {
    title: 'Forum Ekonomi Sulawesi Tenggara oleh Bank Indonesia',
    year: '2025',
    image: '/src/assets/posters/sertifikat_5.png',
    link: 'https://drive.google.com/file/d/1Qqgh_ItHtDQFHiLXZ9GIVwZT0mRaD0Kh/view?usp=sharing'
  }
]
</script>

<script>
export default {
  directives: {
    intersect: {
      mounted(el) {
        el.classList.add('hidden-card')
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('show-card')
              observer.unobserve(el)
            }
          },
          { threshold: 0.15 }
        )
        observer.observe(el)
      }
    }
  }
}
</script>

<style scoped>
/* =========================
   CARD STYLE
========================= */
.certificate-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  border: 1.5px solid #e5e7eb;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease,
    opacity 0.5s ease;
}

/* Neon hover */
.certificate-card:hover {
  transform: translateY(-6px);
  border-color: #3b82f6;
  box-shadow:
    0 0 0 1px rgba(59, 130, 246, 0.4),
    0 0 18px rgba(59, 130, 246, 0.6);
}

.certificate-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.75rem;
  transition: transform 0.35s ease;
}

.certificate-card:hover .certificate-image {
  transform: scale(1.025);
}

/* =========================
   STAGGER SCROLL ANIMATION
========================= */
.hidden-card {
  opacity: 0;
  transform: translateY(40px);
}

.show-card {
  opacity: 1;
  transform: translateY(0);
}
</style>