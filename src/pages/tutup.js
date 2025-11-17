import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Tutup() {
  return (
    <Layout>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default" />
        <div className="container py-md">
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-12">
              <div className="mb-3">
                <button type="button" className="btn btn-sm btn-warning">
                  COCONUT OPEN CLASS BATCH 1
                </button>
                <h3 className="text-white">
                  <span className="display-4">
                    Pendaftaran Ditutup
                  </span>
                </h3>
              </div>

              <div className="card shadow">
                <div className="card-body text-center">
                  <div className="py-5">
                    <div className="mb-4">
                      <i className="ni ni-lock-circle-open" style={{ fontSize: "80px", color: "#f5365c" }}></i>
                    </div>
                    
                    <h2 className="display-3 text-danger mb-4">Pendaftaran Ditutup</h2>
                    
                    <div className="alert alert-warning" role="alert">
                      <h4 className="alert-heading">Maaf!</h4>
                      <p className="mb-0">
                        Pendaftaran untuk <strong>COCONUT Open Class</strong> telah ditutup.
                      </p>
                    </div>

                    <div className="my-5">
                      <p className="lead">
                        Terima kasih atas antusiasme Anda untuk mengikuti kegiatan ini. 
                        Silakan pantau terus media sosial kami untuk informasi kegiatan berikutnya.
                      </p>
                    </div>

                    <hr className="my-4" />

                    <div className="row justify-content-center mt-5">
                      <div className="col-lg-8">
                        <div className="alert alert-info" role="alert">
                          <i className="ni ni-bulb-61 mr-2"></i>
                          <strong>Nantikan COCONUT Open Class Batch Selanjutnya!</strong>
                          <p className="mb-0 mt-2">
                            Kami akan segera mengumumkan informasi mengenai COCONUT Open Class batch berikutnya dengan materi dan topik yang lebih menarik. 
                            Pastikan Anda mengikuti media sosial kami agar tidak ketinggalan informasi pendaftaran!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link href="/" className="btn btn-primary btn-lg">
                        <i className="ni ni-bold-left mr-2"></i>
                        Kembali ke Beranda
                      </Link>
                    </div>

                    <div className="mt-5 pt-4 border-top">
                      <p className="text-muted mb-2">Untuk informasi lebih lanjut, hubungi:</p>
                      <a 
                        href="https://api.whatsapp.com/send/?phone=62895605378736&text=assalamualaikum" 
                        className="btn btn-success btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ni ni-chat-round mr-2"></i>
                        Fikri Haekal (WhatsApp)
                      </a>
                    </div>

                    <div className="mt-5">
                      <small className="text-muted">
                        Follow social media kami untuk update kegiatan selanjutnya
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none">
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </Layout>
  );
}
