<template>
  <section class="relative bg-white overflow-hidden pt-24 pb-20 px-6 lg:px-20">

    <!-- Navy blur background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <span class="blur-circle blur-3"></span>
      <span class="blur-circle blur-4"></span>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">

      <!-- Container dua kolom -->
      <div class="flex flex-col lg:flex-row gap-20">

        <!-- ========================= -->
        <!-- Pengalaman Organisasi -->
        <!-- ========================= -->
        <div v-intersect class="lg:w-1/2 fade-up">
          <h2 class="section-title">Pengalaman Organisasi</h2>

          <div class="relative border-l border-slate-300 ml-3 mt-10">

            <div
              v-for="(org, i) in organizations"
              :key="i"
              class="timeline-item"
            >
              <span class="timeline-dot"></span>

              <h3 class="timeline-title">
                {{ org.name }}
              </h3>

              <p class="timeline-text">
                {{ org.period }} | {{ org.role }}
              </p>

              <ul class="timeline-desc">
                <li
                  v-for="(desc, j) in org.description"
                  :key="j"
                >
                  {{ desc }}
                </li>
              </ul>

            </div>

          </div>
        </div>


        <!-- ========================= -->
        <!-- Separator -->
        <!-- ========================= -->
        <div
          class="hidden lg:flex w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"
        ></div>


        <!-- ========================= -->
        <!-- Pengalaman Kerja -->
        <!-- ========================= -->
        <div v-intersect class="lg:w-1/2 fade-up">

          <h2 class="section-title">
            Pengalaman Kerja
          </h2>

          <div class="work-list">

            <div
              v-for="(work, i) in workExperiences"
              :key="i"
              class="work-card"
            >

              <!-- Informasi Utama -->
              <div class="work-main">

                <h3 class="work-title">
                  {{ work.role }}
                </h3>

                <p class="work-company">
                  {{ work.name }} | {{ work.company }}
                </p>

                <p class="work-period">
                  {{ work.period }}
                </p>

              </div>


              <!-- Deskripsi muncul saat hover -->
              <div class="work-details">

                <ul>
                  <li
                    v-for="(desc, j) in work.description"
                    :key="j"
                  >
                    {{ desc }}
                  </li>
                </ul>

              </div>

            </div>

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
        { name: 'Pelatihan Teknologi Informasi FMIPA Universitas Halu Oleo', period: '2022', role: 'Peserta', description: ['Mengikuti pelatihan teknologi informasi untuk meningkatkan pemahaman dan keterampilan dasar dalam pemanfaatan teknologi digital.'] 

        },

        { name: 'Himpunan Mahasiswa Ilmu Komputer', period: '2023 – 2024', role: 'Anggota Divisi Pendidikan', description: ['Berkontribusi dalam mendukung kegiatan pendidikan dan pengembangan akademik mahasiswa Ilmu Komputer melalui kegiatan yang diselenggarakan oleh divisi.'] 

        },

        { name: 'Computer Science Competition Universitas Halu Oleo Tingkat Nasional Antar Mahasiswa', period: '2024', role: 'Ketua Panitia', description: 
        [
          'Memimpin 50 panitia dalam penyelenggaraan kompetisi tingkat nasional dengan 100+ peserta dari beberapa provinsi di Indonesia serta berkoordinasi dengan 3 sponsor.',
          'Memastikan seluruh rangkaian acara berjalan sesuai rencana dan jadwal melalui koordinasi pembagian tugas dan pelaksanaan kegiatan.',
          'Menyusun Laporan Pertanggungjawaban (LPJ) kegiatan, termasuk pencatatan pemasukan dan pengeluaran serta rekapitulasi penggunaan anggaran.'
        ] 
      },

        { name: 'Himpunan Mahasiswa Ilmu Komputer', period: '2024 – 2026', role: 'Anggota Divisi Komunikasi, Relasi dan Sosial', description: [
          'Membuat 3 materi publikasi untuk 2 kegiatan organisasi menggunakan Canva, termasuk carousel Instagram dan caption untuk mendukung penyampaian informasi kepada audiens.'
        ] 
      }
      ],

      workExperiences:[
        {
          name: 'Kuliah Kerja Profesi',
          company: 'Inspektorat Provinsi Sulawesi Tenggara',
          period: 'Januari – Februari 2025',
          role: 'Admin Staff',
          description: [
            'Mengelola 50+ data pegawai dan 50+ data perjalanan dinas menggunakan Microsoft Excel, termasuk pembagian data perencanaan anggaran serta rekapitulasi data.',
            'Mendukung administrasi dan operasional kantor melalui penyusunan surat dan laporan, pengelolaan dokumen, serta pengolahan data pembagian kerja.',
            'Mendukung operasional kegiatan secara online melalui pengelolaan dan koordinasi Zoom.'

          ]

        },

        {
          name: 'Intern',
          company: 'PT. Renjana Sinergi Indonesia',
          period: 'Februari – Mei 2026',
          role: 'Customer Relationship Management',
          description: [
            'Mengikuti program magang dan pembekalan terkait Customer Relationship Management (CRM).',
            'Mempelajari alur kerja dan proses bisnis perusahaan melalui kegiatan pelatihan dan orientasi.',
            'Mengembangkan kemampuan komunikasi, kerja sama tim, dan adaptasi dalam lingkungan kerja profesional.'
          ]

        },

        {
          name: 'Intern',
          company: 'PT. Renjana Sinergi Indonesia',
          period: 'Juni – September 2026',
          role: 'Marketing Communications',
          description:[
            'Melakukan riset mitra serta menginput dan memperbarui data 6 mitra per minggu di wilayah Jawa Timur.',
            'Melakukan verifikasi kesesuaian mitra dengan kebutuhan klien serta memastikan keakuratan dan kelengkapan data.'
          ]

        }

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

.timeline-desc {
  margin-top: 0.6rem;
  padding-left: 1.2rem;
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 560px;
}
.timeline-desc li {
  margin-bottom: 0.4rem;
}

.timeline-desc li::marker {
  color: #1e3a8a;
}

/* Work experience card */

.work-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
}

.work-card {
  position: relative;
  background: #ffffff;
  border: 1.5px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem 1.75rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s ease;
}

.work-card:hover {
  border-color: #3b82f6;
  box-shadow:
    0 0 0 1px rgba(59, 130, 246, 0.25),
    0 0 18px rgba(59, 130, 246, 0.18);
  transform: translateY(-3px);
}

.work-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0a2540;
}

.work-company {
  margin-top: 0.3rem;
  color: #475569;
  font-size: 0.95rem;
}


.work-period {
  margin-top: 0.2rem;
  color: #64748b;
  font-size: 0.9rem;
}
/* Details work */
.work-details {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  margin-top: 0;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease,
    margin-top 0.3s ease;
}

/* Detail muncul saat hover */
.work-card:hover .work-details {
  max-height: 500px;
  opacity: 1;
  margin-top: 1rem;
}

.work-details ul {
  padding-left: 1.2rem;
  color: #374151;
  line-height: 1.7;
}

.work-details li {
  margin-bottom: 0.45rem;
}

.work-details li::marker {
  color: #1e3a8a;
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