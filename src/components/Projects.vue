<template>
  <section class="relative bg-white overflow-hidden pt-24 pb-20 px-6 lg:px-20">
    <!-- Subtle navy blur background (integrated) -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <span class="blur-circle blur-left"></span>
      <span class="blur-circle blur-right"></span>
    </div>

    <div class="relative z-10">
      <h2 class="text-4xl font-bold text-navy mb-12 text-center">
        Pengalaman Proyek
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-intersect
          class="project-card fade-up"
        >
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">
            {{ project.description }}
          </p>
          <a
            :href="project.github"
            target="_blank"
            class="project-link"
          >
            Lihat di GitHub →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Audio Transcription System with Machine Learning',
          description:
            'Project ini menggunakan Whisper (OpenAI) untuk melakukan transkripsi audio (.wav / .mp3) menjadi teks. Selain transkripsi standar, project ini juga menguji pengaruh pre-processing / audio cleaning terhadap kualitas hasil transkripsi',
          github: 'https://github.com/skzfr17/portofolio'
        },
        {
          title: 'Rainfall Category Prediction using Support Vector Machine with R',
          description:
            'Proyek ini merupakan implementasi pembelajaran mesin untuk memprediksi kategori curah hujan di Kota Kendari berdasarkan data cuaca historis. Model ini dibangun menggunakan R Studio dan menerapkan algoritma Support Vector Machine (SVM) dengan penyetelan hyperparameter.',
          github: 'https://github.com/skzfr17/rainfall-prediction-svm'
        },
        {
          title: 'Sistem Pakar Diagnosis Penyakit Tanaman Padi',
          description:
            'Sistem Pakar Diagnosis Penyakit Tanaman Padi adalah aplikasi berbasis web yang bertujuan untuk membantu petani atau pengguna dalam mendiagnosis penyakit pada tanaman padi menggunakan metode Certainty Faktor untuk memberikan hasil diagnosis dan rekomendasi',
          github: 'https://github.com/skzfr17/expert-system'
        },
        {
          title: 'Klasifikasi Sampah Menggunakan CNN dan DenseNet121',
          description:
            'Proyek Klasifikasi Sampah ini bertujuan untuk mengklasifikasikan jenis sampah berdasarkan citra (gambar) menggunakan pendekatan Deep Learning. Pada proyek ini dilakukan perbandingan performa dua model, yaitu Convolutional Neural Network (CNN) dan DenseNet121, untuk melihat model mana yang memberikan hasil klasifikasi terbaik',
          github: 'https://github.com/skzfr17/trash-classification'
        },
        {
          title: 'Real-Time Pengenalan Bahasa Isyarat BISINDO Menggunakan EfficientNetB0',
          description:
            'Proyek ini bertujuan untuk mengembangkan sistem pengenalan bahasa isyarat BISINDO secara real-time menggunakan model deep learning EfficientNetB0.',
          github: 'https://github.com/skzfr17/real-time-bisindo/tree/main'
        },
        {
          title: 'Analisis Data Penjualan Menggunakan Multiple Dataset',
          description:
            'Analisis data penjualan yang bertujuan untuk memahami pola transaksi, perilaku pelanggan, performa produk, serta distribusi penjual menggunakan beberapa dataset yang saling terhubung.',
          github: 'https://github.com/skzfr17/sales-data-analysis/tree/main'
        }
      ]
    }
  },
  directives: {
    intersect: {
      mounted(el) {
        el.classList.add('opacity-0', 'translate-y-10')
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up')
                observer.unobserve(entry.target)
              }
            })
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
/* Navy color */
.text-navy {
  color: #1e3a8a;
}

/* Background blur */
.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.2;
}
.blur-left {
  width: 420px;
  height: 420px;
  background: #1e40af;
  top: -160px;
  left: -160px;
}
.blur-right {
  width: 500px;
  height: 500px;
  background: #3b82f6;
  bottom: -180px;
  right: -180px;
}

/* Project Card */
.project-card {
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.35s ease;
}

/* Neon border hover */
.project-card:hover {
  border-color: #3b82f6;
  box-shadow:
    0 0 0 2px rgba(59, 130, 246, 0.4),
    0 0 18px rgba(59, 130, 246, 0.6);
}

/* Card content */
.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.75rem;
}
.project-desc {
  color: #334155;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
.project-link {
  font-weight: 600;
  color: #1e3a8a;
  transition: color 0.3s ease;
}
.project-link:hover {
  color: #2563eb;
}

/* Fade-up animation */
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
  animation: fadeUp 0.9s ease-out forwards;
}
</style>