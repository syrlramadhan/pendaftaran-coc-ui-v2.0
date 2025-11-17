import Layout from "@/components/Layout";
import Image from "next/image"; // Already imported for images
import Link from "next/link"; // Import Link component from next/link

export default function Home() {
  return (
    <Layout>
      {/* End Navbar */}
      <div className="wrapper">
        <div className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-primary">
            {/* <span className="span-150"></span>
            <span className="span-50"></span>
            <span className="span-50"></span>
            <span className="span-75"></span>
            <span className="span-100"></span>
            <span className="span-75"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
            <span className="span-50"></span>
            <span className="span-100"></span> */}
          </div>
          <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <Image
                      src="/assets/img/logo.png"
                      width={120}
                      height={120} // Adjust based on actual logo aspect ratio
                      className="img-fluid"
                      alt="Coconut Open Class Logo"
                      priority // Prioritize loading for hero section image
                    />
                    <p className="display-4 text-white">
                      COCONUT OPEN CLASS BATCH 1<br />
                      <br />
                      <sup>
                        Introduction to Sveltekit: The frontend framework of the
                        future
                      </sup>
                    </p>
                    <div className="btn-wrapper mt-2">
                      <Link href="/dokumentasi" className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0 mr-2 text-dark">
                        <span className="btn-inner--icon">
                          <i className="ni ni-image" />
                        </span>
                        <span className="btn-inner--text">Lihat Dokumentasi</span>
                      </Link>
                                            
                      {/* JIKA PENDAFTARAN DIBUKA - Uncomment link ini */}
                      <Link href="/formulir" className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0 text-dark">
                        <span className="btn-inner--icon">
                          <i className="ni ni-single-copy-04" />
                        </span>
                        <span className="btn-inner--text">Daftar Sekarang</span>
                      </Link>
                    </div>
                    <div className="mt-5">
                      <small className="font-weight-bold mb-0 mr-2 text-white">
                        Made by
                      </small>
                      <Image
                        src="/assets/img/logococonut.png"
                        width={112} // Calculated based on height: 28 and assuming 4:1 aspect ratio
                        height={28}
                        alt="Coconut Computer Club Logo"
                        priority // Prioritize loading for hero section image
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
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
        </div>
        <div className="container container-lg">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Landing Page">
                  <Image
                    src="/assets/img/coc 2024-2025/Webinar2025Promt.jpeg"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Event 1"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2024-2025/Webinar2025.jpg"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Seminar 1"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2024-2025/Coc3.jpg"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Seminar 1"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2024-2025/Coc2.jpg"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Seminar 1"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2024-2025/Coc1.jpg"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Seminar 1"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2023-2024/coc4.jpg"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Event 2"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2023-2024/coc3.png"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Event 3"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2023-2024/coc2.png"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2023-2024 Event 4"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2023-2024/seminar1.png"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2024-2025 Event 1"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="card card-lift--hover shadow border-0">
                <Link href="#" title="Profile Page">
                  <Image
                    src="/assets/img/coc 2023-2024/coc1.png"
                    width={500}
                    height={300}
                    className="card-img"
                    alt="COC 2024-2025 Event 2"
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}