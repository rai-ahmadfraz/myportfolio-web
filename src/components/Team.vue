<template>
    <section class="bg-light" id="team">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <!--                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>-->
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" v-for="user in info">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" v-bind:src="'static/img/team/'+user.img_path" alt>
                        <!--                      <img class="mx-auto rounded-circle" src="static/img/team/2.jpg" alt>-->
                        <h4>{{user.name}}</h4>
                        <p class="text-muted">{{user.description}}</p>
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
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <button class="btn btn-primary" v-on:click="prev()">Previous</button>
                    <button class="btn btn-primary" v-on:click="next()">Next</button>
                    <!--                    <p class="large text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam
                                            veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
                                        </p>-->
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
</template>

<script>
    export default {
        data() {
            return {
                info: null,
                pageNo: 1,
                NoofPages: 0,

            };
        }
        ,
        mounted() {

            this.getFunction()

        },
        methods:
                {

                    getFunction() {

                        axios
                                .get("http://localhost/Portfolio/public/api?page=" + this.pageNo + "")
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
