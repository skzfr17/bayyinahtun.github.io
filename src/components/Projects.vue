<template>
  <section class="relative bg-white overflow-hidden pt-24 pb-20 px-6 lg:px-20">

    <!-- Subtle navy blur background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <span class="blur-circle blur-left"></span>
      <span class="blur-circle blur-right"></span>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">

      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-navy mb-16 text-center">
        Pengalaman Proyek
      </h2>


      <!-- ================================= -->
      <!-- MACHINE LEARNING & DEEP LEARNING -->
      <!-- ================================= -->
      <div class="project-section">

        <h3 class="project-category-title">
          Machine Learning & Deep Learning
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="(project, index) in projects.filter(
              p => p.category === 'Machine Learning & Deep Learning'
            )"
            :key="index"
            v-intersect
            class="project-card fade-up"
          >

            <h4 class="project-title">
              {{ project.title }}
            </h4>

            <p class="project-desc">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="project-tech">
              <span
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

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


      <!-- ================================ -->
      <!-- DATA SCIENCE & DATA ANALYSIS -->
      <!-- ================================ -->
      <div class="project-section">

        <h3 class="project-category-title">
          Data Science & Data Analysis
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="(project, index) in projects.filter(
              p => p.category === 'Data Science & Data Analysis'
            )"
            :key="index"
            v-intersect
            class="project-card fade-up"
          >

            <h4 class="project-title">
              {{ project.title }}
            </h4>

            <p class="project-desc">
              {{ project.description }}
            </p>

            <div class="project-tech">
              <span
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

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


      <!-- ================================ -->
      <!-- WEB DEVELOPMENT -->
      <!-- ================================ -->
      <div class="project-section">

        <h3 class="project-category-title">
          Web Development
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="(project, index) in projects.filter(
              p => p.category === 'Web Development'
            )"
            :key="index"
            v-intersect
            class="project-card fade-up"
          >

            <h4 class="project-title">
              {{ project.title }}
            </h4>

            <p class="project-desc">
              {{ project.description }}
            </p>

            <div class="project-tech">
              <span
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

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


      <!-- ================================ -->
      <!-- SOCIAL MEDIA & CONTENT -->
      <!-- ================================ -->
      <div class="project-section">

        <h3 class="project-category-title">
          Social Media & Content
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="(project, index) in projects.filter(
              p => p.category === 'Social Media & Content'
            )"
            :key="index"
            v-intersect
            class="project-card fade-up"
          >

            <h4 class="project-title">
              {{ project.title }}
            </h4>

            <p class="project-desc">
              {{ project.description }}
            </p>

            <div class="project-tech">
              <span
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="project.github"
              target="_blank"
              class="project-link"
            >
              Lihat Dokumentasi →
            </a>

          </div>

        </div>
      </div>

    </div>
  </section>

  <section id="research" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-navy text-center mb-12">
        Riset dan Karya Ilmiah
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <article class="research-card">
          <h3 class="research-title">
            Deteksi Ketersediaan Parkir Menggunakan Citra Video Berbasis CNN pada YOLO11
          </h3>

          <p class="research-desc">
            Penelitian skripsi mengenai deteksi ketersediaan slot parkir menggunakan YOLO11 berbasis citra video secara real-time dan antarmuka web
          </p>
          <a href="https://ejournal.catursakti.ac.id/index.php/simtek/article/view/1752" target="_blank" class="project-link" rel="noopener noreferrer">Lihat Karya →</a>
        </article>

        <article class="research-card">
          <h3 class="research-title">
            Inovasi Digital Pengolahan Sampah Rumah Tangga (RECLAIM): Deteksi Otomatis dan Rekomendasi Pengolahan Berbasis Kecerdasan Buatan
          </h3>

          <p class="research-desc">
            Karya opini ilmiah mengenai pemanfaatan kecerdasan buatan untuk mendukung pengelolaan sampah rumah tangga melalui aplikasi yang terintegrasi
          </p>

          <a href="https://drive.google.com/file/d/1nYKzg7ph0GXqXK0f_JTzm1D-DiubsNjj/view?usp=sharing" target="_blank" class="project-link" rel="noopener noreferrer">Lihat Karya →</a>
        </article>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
      // Machine learning dan deep learning
          {
            category: 'Machine Learning & Deep Learning',
            title: 'Rainfall Category Prediction using Support Vector Machine with R',
            description:
            'Proyek ini merupakan implementasi pembelajaran mesin untuk memprediksi kategori curah hujan di Kota Kendari berdasarkan data cuaca historis. Model ini dibangun menggunakan R Studio dan menerapkan algoritma Support Vector Machine (SVM) dengan penyetelan hyperparameter.',
            github: 'https://github.com/skzfr17/rainfall-prediction-svm',
            technologies: ['R', 'Support Vector Machine', 'Machine Learning']
          },

          {
            category: 'Machine Learning & Deep Learning',
            title: 'Klasifikasi Sampah Menggunakan CNN dan DenseNet121',
            description:
              'Proyek Klasifikasi Sampah ini bertujuan untuk mengklasifikasikan jenis sampah berdasarkan citra (gambar) menggunakan pendekatan Deep Learning. Pada proyek ini dilakukan perbandingan performa dua model, yaitu Convolutional Neural Network (CNN) dan DenseNet121, untuk melihat model mana yang memberikan hasil klasifikasi terbaik',
            github: 'https://github.com/skzfr17/trash-classification',
            technologies: ['Python', 'TensorFlow', 'Keras']
          },

          {
            category: 'Machine Learning & Deep Learning',
            title: 'Real-Time Pengenalan Bahasa Isyarat BISINDO Menggunakan EfficientNetB0',
            description:
            'Proyek ini bertujuan untuk mengembangkan sistem pengenalan bahasa isyarat BISINDO secara real-time menggunakan model deep learning EfficientNetB0.',
            github: 'https://github.com/skzfr17/real-time-bisindo/tree/main',
            technologies: ['Python', 'EfficientNetB0', 'Computer Vision']
          },


          {
            category: 'Machine Learning & Deep Learning',
            title: 'Audio Transcription System with Machine Learning',
            description:
            'Project ini menggunakan Whisper (OpenAI) untuk melakukan transkripsi audio (.wav / .mp3) menjadi teks. Selain transkripsi standar, project ini juga menguji pengaruh pre-processing / audio cleaning terhadap kualitas hasil transkripsi',
            github: 'https://github.com/skzfr17/portofolio',
            technologies: ['Python', 'Whisper (OpenAI)', 'NLP', 'Audio Processing']
          },

          {
            category: 'Machine Learning & Deep Learning',
            title: 'Deteksi Ketersediaan Parkir Menggunakan Citra Video Berbasis CNN Pada YOLO11',
            description:
            'Proyek skripsi yang mengembangkan sistem deteksi ketersediaan slot parkir menggunakan YOLO11 untuk mengidentifikasi kondisi slot parkir secara otomatis berdasarkan citra video. Hasil deteksi kemudian ditampilkan melalui antarmuka web untuk membantu pengguna memantau ketersediaan parkir.',
            github: 'https://github.com/skzfr17/sistem_parkir',
            technologies: ['Python', 'YOLO11', 'Computer Vision', 'Web Development', 'Flask']
          },
      
      // Data Science dan Analisis Data
        {
          category: 'Data Science & Data Analysis',
          title: 'Analisis Data Penjualan Menggunakan Multiple Dataset',
          description:
            'Analisis data penjualan yang bertujuan untuk memahami pola transaksi, perilaku pelanggan, performa produk, serta distribusi penjual menggunakan beberapa dataset yang saling terhubung.',
          github: 'https://github.com/skzfr17/sales-data-analysis/tree/main',
          technologies: ['Python', 'Pandas', 'EDA', 'Data Analysis']
        },
      
      // Web Development dan Aplikasi Web
        
        {
          category: 'Web Development',
          title: 'Sistem Pakar Diagnosis Penyakit Tanaman Padi',
          description:
            'Aplikasi berbasis web yang membantu pengguna mendiagnosis penyakit tanaman padi menggunakan metode Certainty Factor untuk memberikan hasil diagnosis dan rekomendasi.',
          github: 'https://github.com/skzfr17/expert-system',
          technologies: ['Vue.js', 'Certainty Factor', 'Web Development']
        },

        {
          category: 'Web Development',
          title: 'Document Question Answering using Multimodal RAG',
          description:
            'Aplikasi berbasis Streamlit yang mengimplementasikan Retrieval-Augmented Generation (RAG) untuk menjawab pertanyaan berdasarkan dokumen. Proyek ini menggunakan LlamaParse Cloud untuk parsing dokumen, Groq sebagai Large Language Model (LLM), dan Chroma sebagai vector store untuk proses retrieval.',
          github: 'https://github.com/skzfr17/multimodal-rag',
          technologies: ['Streamlit', 'RAG', 'NLP']
        },

        {
          category: 'Web Development',
          title: 'Website Portofolio',
          description:
            'Website portofolio pribadi yang dikembangkan untuk menampilkan profil, pendidikan, keahlian, pengalaman, dan proyek secara terstruktur. Website ini dibangun menggunakan Vue.js dan Tailwind CSS serta dipublikasikan melalui GitHub Pages.',
          github: 'https://github.com/skzfr17/bayyinahtun.github.io',
          technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'GitHub Pages']
        },

      // Social Media & Content
      {
        category: 'Social Media & Content',
        title: 'Social Media Content dan Copywriting',
        description:
          'Membuat materi publikasi untuk kegiatan organisasi menggunakan Canva, termasuk desain carousel Instagram dan penyusunan caption untuk mendukung penyampaian informasi kepada audiens.',
        github: 'https://drive.google.com/file/d/1-JaknkwXaWX3lJ_ZeSSGcF4Zqrcx8c78/view?usp=sharing',
        technologies: ['Canva', 'Instagram', 'Content Creation', 'Copywriting']
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

.research-card {
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.research-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 0 18px rgba(59, 130, 246, 0.2);
}

.research-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.75rem;
}

.research-desc {
  color: #334155;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

/* Project Category */

.project-section {
  margin-bottom: 5rem;
}

.project-category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a2540;
  margin-bottom: 1.75rem;
  padding-left: 1rem;
  border-left: 4px solid #3b82f6;
}

/* Technology Tags */

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.tech-tag {
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  background: #eff6ff;
  color: #1e3a8a;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Project Card */
.project-card {
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.35s ease;

  display: flex;
  flex-direction: column;
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
  margin-top: auto;
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