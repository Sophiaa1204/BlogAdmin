export default () => {

  return <div className="container-fluid p-0">

    <div className="row mb-2 mb-xl-3">
      <div className="col-auto d-none d-sm-block">
        <h3>Analytics</h3>
      </div>

      <div className="col-auto ms-auto text-end mt-n1">
        <button className="btn btn-primary shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-refresh-cw align-middle"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-xl-5 d-flex">
        <div className="w-100">

          <div className="row">
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card illustration flex-fill">
                <div className="card-body p-0 d-flex flex-fill">
                  <div className="row g-0 w-100">
                    <div className="col-6">
                      <div className="illustration-text p-3 m-1">
                        <h4 className="illustration-text">Welcome Back,
                          Chris!</h4>
                        <p className="mb-0">AppStack Dashboard</p>
                      </div>
                    </div>
                    <div className="col-6 align-self-end text-end">
                      <img
                        src="img/illustrations/searching.png"
                        alt="Searching"
                        className="img-fluid illustration-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5 className="card-title">Bounce</h5>
                    </div>

                    <div className="col-auto">
                      <div className="stat stat-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-arrow-up-right align-middle"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="h1 d-inline-block mt-1 mb-4">2.364</span>
                  <div className="mb-0">
                    <span className="badge badge-soft-success me-2"> +3.65% </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-lg-none d-xxl-flex">
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5 className="card-title">Real-Time</h5>
                    </div>

                    <div className="col-auto">
                      <div className="stat stat-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-clock align-middle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="h1 d-inline-block mt-1 mb-4">1.856</span>
                  <div className="mb-0">
                    <span className="badge badge-soft-success me-2"> +2.25% </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12 col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5 className="card-title">Visitors</h5>
                    </div>

                    <div className="col-auto">
                      <div className="stat stat-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-users align-middle"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="h1 d-inline-block mt-1 mb-4">17.212</span>
                  <div className="mb-0">
                    <span className="badge badge-soft-danger me-2"> -1.25% </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-6 col-xl-7">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Real-Time</h5>
          </div>
          <div className="card-body p-2">

          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Languages</h5>
          </div>

        </div>
      </div>

      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Mobile / Desktop</h5>
          </div>
          <div className="card-body d-flex w-100">
            <div className="align-self-center chart">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Interests</h5>
          </div>
          <div className="card-body">
            <div className="chart">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-lg-5 col-xl-4 d-flex">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Source / Medium</h5>
          </div>
          <div className="card-body d-flex">
            <div className="align-self-center w-100">
              <div className="py-3">
                <div className="chart chart-xs">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className=""></div>
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-7 col-xl-8 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-end">
              <div className="dropdown position-relative">
                <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Traffic</h5>
          </div>
        </div>
      </div>
    </div>

  </div>
}
