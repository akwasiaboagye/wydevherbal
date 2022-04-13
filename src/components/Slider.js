const Slider = () => {
  return (
    <div class="slider-area position-relative" >
      <div class="slider-active">
        <div class="single-slider slider-height d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                <div class="hero__caption">
                  <span>Welcome to Wydev</span>
                  <h1 class="cd-headline letters scale">
                      Here We Care about Your
                    <strong class="cd-words-wrapper">
                      <b class="is-visible">Diabetes</b>
                      <b>Stroke</b>
                      <b>Asthma</b>
                      <b>Ulcer</b>
                      <b>Numbness</b>
                      <b>Hepatities B</b>
                    </strong>
                  </h1>
                  <p data-animation="fadeInLeft" data-delay="0.1s">
                    WyDev HERBAL THERAPEUTIC CENTER <br/>
                   Why death, when herbal medicine is the solution
                  </p>
                  <a
                    href="#"
                    class="btn hero-btn"
                    data-animation="fadeInLeft"
                    data-delay="0.5s"
                  >
                    Appointment <i class="ti-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
