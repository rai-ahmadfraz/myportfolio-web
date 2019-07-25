<template>
    <div id="app">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#">Portfolios</a>
                <button
                    class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/services">Services</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/portfolio">Portfolio</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/team">Team</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/contact">Contact</router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Header -->
        <header class="masthead">
            <div class="container">
                <div class="intro-text">
                    <div class="intro-lead-in">Welcome To Our Studio!</div>
                    <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
                    <a
                        class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                        href="#services"
                        >Tell Me More</a>
                </div>
            </div>
        </header>

        <router-view/>

        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <span class="copyright">Copyright &copy; Your Website 2019</span>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-inline social-buttons">
                            <li class="list-inline-item">
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-inline quicklinks">
                            <li class="list-inline-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
