import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Formulir() {
  const router = useRouter();
  
  // ========================================
  // PENGATURAN STATUS PENDAFTARAN
  // ========================================
  // Ubah nilai ini untuk mengaktifkan/menonaktifkan halaman
  const PENDAFTARAN_DIBUKA = false; // true = buka, false = tutup
  // ========================================

  useEffect(() => {
    // Redirect ke halaman tutup jika pendaftaran ditutup
    if (!PENDAFTARAN_DIBUKA) {
      router.replace("/tutup");
    }
  }, [router]);

  // Jika pendaftaran ditutup, return null sementara redirect berlangsung
  if (!PENDAFTARAN_DIBUKA) {
    return null;
  }

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noTelp: "",
    framework: "",
    hasJsFramework: false,
    file: null,
  });
  const [showFramework, setShowFramework] = useState(false);
  const [fileName, setFileName] = useState("Upload Bukti Transfer");

  const endpoint = "https://pendaftaran-coc-api.up.railway.app/api/pendaftar/add";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
    setFileName(file ? file.name : "Upload Bukti Transfer");
  };

  const handleFrameworkToggle = (e) => {
    const hasJsFramework = e.target.value === "ya";
    setFormData((prev) => ({
      ...prev,
      hasJsFramework,
      framework: hasJsFramework ? prev.framework : "belum pernah menggunakan framework js",
    }));
    setShowFramework(hasJsFramework);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("nama-lengkap", formData.namaLengkap);
    payload.append("email", formData.email);
    payload.append("no-telp", formData.noTelp);
    payload.append("bukti-transfer", formData.file);
    payload.append("framework", formData.framework);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <Layout>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default"></div>
        <div className="container py-md">
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-tooltip"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Pendaftaran Berakhir pada Sabtu, 3 February 2024"
                  data-container="body"
                  data-animation="true"
                >
                  COCONUT OPEN CLASS BATCH 1
                </button>
                <h3 className="text-white">
                  <span className="text-white display-4">
                    Introduction to Sveltekit: The frontend framework of the future
                  </span>
                </h3>
              </div>
              <div className="nav-wrapper">
                <ul
                  className="nav nav-pills nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 active"
                      id="tabs-icons-text-1-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-1"
                      role="tab"
                      aria-controls="tabs-icons-text-1"
                      aria-selected="true"
                    >
                      <i className="ni ni-align-left-2 mr-2" /> Informasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-2-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-2"
                      role="tab"
                      aria-controls="tabs-icons-text-2"
                      aria-selected="false"
                    >
                      <i className="ni ni-align-left-2 mr-2" /> Tata Tertib
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-3-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-3"
                      role="tab"
                      aria-controls="tabs-icons-text-3"
                      aria-selected="false"
                    >
                      <i className="ni ni-bag-17 mr-2" /> Benefit
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="tabs-icons-text-1"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-1-tab"
                    >
                      <p className="description">
                        <b>Tipe :</b> Open Class
                        <br />
                        <b>Pemateri :</b> Nurman Awaluddin <br />
                        <b>Moderator :</b> Musdalipa <br />
                        <b>Materi :</b> Sveltekit <br />
                        <b>Tempat :</b> IndigoHub Makassar <br />
                      </p>
                      <p className="description">
                        <b>Deskripsi:</b> Bayangkan kamu ingin membangun aplikasi web yang cepat, interaktif, dan ringan. Svelte adalah framework JavaScript modern yang mempermudah proses pengembangan dengan sintaks yang sederhana dan efisien. Berbeda dengan framework lainnya, Svelte melakukan kompilasi kode pada waktu build, bukan saat runtime, sehingga menghasilkan aplikasi yang lebih cepat dan performa lebih baik.
                        <br />
                        <br />
                        Di Coconut Open Class ini, kami akan membahas pengenalan Svelte, konsep-konsep dasar pengembangannya, dan bagaimana memulai proyek dengan Svelte. Kamu akan belajar cara membuat komponen, mengelola state, dan membangun aplikasi web yang responsif dan ringan.
                        <br /> <br />
                        Jangan lewatkan kesempatan ini untuk memperdalam pengetahuan dan menguasai teknologi Svelte. Daftarkan diri kamu sekarang dan mulai perjalananmu dalam pengembangan web modern!
                      </p>
                      <button type="button" className="btn btn-outline-default">
                        <i className="ni ni-calendar-grid-58 mr-2" />{" "}
                        <b>Jumat, 11 Oktober 2024</b> 13:00 WITA - Selesai
                      </button>
                      <br />
                      <br />
                      <span>
                        Informasi lebih lanjut Hubungi{" "}
                        <a href="https://api.whatsapp.com/send/?phone=62895605378736&text=assalamualaikum&type=phone_number&app_absent=0">
                          Fikri Haekal
                        </a>
                      </span>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tabs-icons-text-2"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-2-tab"
                    >
                      <h3 className="bold">TATA TERTIB KEGIATAN</h3>
                      <p className="description">
                        <b>1. </b>Hadir 5 menit sebelum kegiatan di mulai <br />
                        <b>2. </b>Mengisi daftar hadir yang telah disediakan panitia <br />
                        <b>3. </b>Mengikuti acara pembukaan <br />
                        <b>4. </b>Menggunakan pakaian yang sopan dan rapih <br />
                        <b>5. </b>Peserta dilarang membawa senjata tajam dan obat-obatan terlarang <br />
                        <b>6. </b>Peserta dilarang menggunakan HP selama materi berlangsung <br />
                        <b>7. </b>Peserta dilarang ribut <br />
                        <b>8. </b>Peserta wajib memperhatikan materi yang diberikan <br />
                        <b>9. </b>Membuang sampah pada tempatnya <br />
                        <b>10. </b>Hal-hal yang belum ditetapkan akan di tetapkan dikemudian hari <br />
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tabs-icons-text-3"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-3-tab"
                    >
                      <p className="description">
                        <b>Pendaftaran Gratis</b>
                        <br />
                        1. Ilmu Bermanfaat <br />
                        2. Relasi <br />
                      </p>
                      <p className="description">
                        <b>Pendaftaran Berbayar</b>
                        <br />
                        1. Sertifikat <br />
                        2. Modul Pembelajaran <br />
                        3. Ilmu Bermanfaat <br />
                        4. Relasi <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-lg-auto">
              <div className="transform-perspective-right">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary btn-tooltip"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Lengkapi Formulir di Bawah"
                          data-container="body"
                          data-animation="true"
                        >
                          Formulir Pendaftaran
                        </button>
                      </small>
                    </div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" id="register-form">
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-single-02" />
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Nama Lengkap"
                            id="nama-lengkap"
                            name="namaLengkap"
                            className="form-control form-control-alternative"
                            value={formData.namaLengkap}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-mobile-button" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="no-telp"
                            name="noTelp"
                            placeholder="Masukkan nomor telepon"
                            value={formData.noTelp}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-muted font-weight">
                          Apakah pernah menggunakan framework JavaScript sebelumnya?
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pengalaman_js"
                            id="jsFrameworkYa"
                            value="ya"
                            checked={formData.hasJsFramework}
                            onChange={handleFrameworkToggle}
                          />
                          <label className="form-check-label" htmlFor="jsFrameworkYa">
                            Ya
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pengalaman_js"
                            id="jsFrameworkTidak"
                            value="tidak"
                            checked={!formData.hasJsFramework}
                            onChange={handleFrameworkToggle}
                          />
                          <label className="form-check-label" htmlFor="jsFrameworkTidak">
                            Tidak
                          </label>
                        </div>
                      </div>
                      {showFramework && (
                        <div className="form-group mb-3">
                          <label className="text-muted font-weight">
                            Framework apa yang pernah digunakan?
                          </label>
                          <select
                            className="form-control"
                            id="framework"
                            name="framework"
                            value={formData.framework}
                            onChange={handleInputChange}
                          >
                            <option value="">Pilih framework</option>
                            <option value="React">React</option>
                            <option value="Vue">Vue</option>
                            <option value="Angular">Angular</option>
                            <option value="Svelte">Svelte</option>
                            <option value="Next.js">Next.js</option>
                            <option value="Nuxt.js">Nuxt.js</option>
                          </select>
                        </div>
                      )}
                      <br />
                      <small className="text-uppercase text-muted font-weight">
                        Pendaftaran kegiatan ini benar-benar gratis! Namun, jika ingin menerima sertifikat dan modul pembelajaran eksklusif, cukup dengan membayar Rp15.000 ke rekening BRI 4955 0104 7507 535 A.N. Andi Citra Ayu Lestari dan mengunggah bukti transfer.
                        <br />
                        <br />
                        Mudah, bukan? Ayo gabung dan nikmati manfaatnya bersama kami!
                      </small>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="buktitf"
                              name="file"
                              accept=".jpeg,.jpg,.png"
                              onChange={handleFileChange}
                            />
                            <label className="custom-file-label" htmlFor="buktitf">
                              {fileName}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">
                          Kirim
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-bottom separator-skew">
          <svg
            x={0}
            y={0}
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </Layout>
  );
}