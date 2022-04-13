const Nav = () => {
  return (
    <header>
      <div class="header-area" >
        <div class="main-header header-sticky" style={{backgroundColor:"#1dec12"}}>
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10">
                <div class="menu-main d-flex align-items-center justify-content-end">
                  <div class="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="doctor.html">Doctors</a>
                        </li>
                        <li>
                          <a href="department.html">Department</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                          <ul class="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                 
                </div>
              </div>

              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
