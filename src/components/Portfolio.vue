<template>
    <section class="bg-light" id="portfolio">
        <div class="container" style="display: table; width: 100%;">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <!--                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>-->
                </div>
            </div>
            <div class="row">
                <div
                    class="col-md-4 col-sm-6 portfolio-item"
                    style=" display: table-cell; padding: 16px;"
                    v-for="portfolio in info">
<!--                    <router-link
                        :to="{ name:'portfolio.portfoliodetail', params: { slug: portfolio.name , detail:portfolio.description,
                        img:portfolio.img_path }}"
                        >-->
                        <img
                            v-bind:src="'/static/img/portfolio/'+portfolio.img_path"
                            class="img-rounded"
                            alt="Cinque Terre"
                            width="304"
                            height="236"
                            data-toggle="modal" data-target="#portfolioModal1"
                            >
<!--                    </router-link>-->
                    <div class="portfolio-caption">
                        <h4>{{portfolio.name}}</h4>
                        <p class="text-muted">{{portfolio.description}}</p>
                    </div>

                </div>

                
                
                
                
                

            <div
                class="portfolio-modal modal fade"
                id="portfolioModal1"
                tabindex="-1"
                role="dialog"
                data-backdrop="false"
                aria-hidden="true"
                >
                <div class="modal-dialog">
                    <div class="modal-content">
                         <button class="btn btn-primary  col-lg-2 mx-auto" data-dismiss="modal" type="button">
                                            <i class="fas fa-times"></i>
                                            Close Project
                                        </button>
                        
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <div class="modal-body" >
                                        <!-- Project Details Go Here -->
<!--                                        <h2 class="text-uppercase">Project Name</h2>
                                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>-->
                                        <img class="img-fluid d-block mx-auto" src="static/img/portfolio/01-full.jpg" alt>
                                        <p>
                                            Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                            blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                                            expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                                        </p>
                                        <ul class="list-inline">
                                            <li>Date: January 2017</li>
                                            <li>Client: Threads</li>
                                            <li>Category: Illustration</li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fas fa-times"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
       
            </div>
            <button class="btn btn-primary" v-on:click="prev()">Previous</button>
            <button class="btn btn-primary" v-on:click="next()">Next</button>




<!--            <router-view :key="$route.params.slug"/>-->



        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                info: null,
                pageNo: 1,
                NoofPages: 0,

            };
        },
        mounted() {

            this.getFunction()

        },
        methods:
                {

                    getFunction() {

                        axios
                                .get("http://localhost/Portfolio/public/api/portfolios?page=" + this.pageNo + "")
                                .then(response => (
                                            this.info = response.data.data,
                                            console.log(this.pageNo),
                                            this.NoofPages = response.data.last_page
                                            ));

                    },

                    prev()
                    {
                        if (this.pageNo >= 2)
                        {
                            this.pageNo = this.pageNo - 1;
                            this.getFunction()
                        } else
                        {
                            this.pageNo = this.pageNo;
                            this.getFunction()
                        }

                    },
                    next()
                    {
                        if (this.NoofPages <= this.pageNo)
                        {
                            this.pageNo = this.pageNo;
                            this.getFunction()
                        } else {
                            this.pageNo = this.pageNo + 1;
                            this.getFunction()
                        }
                    }
                }

    };
</script>