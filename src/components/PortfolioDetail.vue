<template>
  
    <div>
        <br>
        <img  v-bind:src="'/static/img/portfolio/'+img"  alt="Cinque Terre" width="auto" height="236" >
    
        <h2>{{name}}{{description}}</h2>
       
        
    </div>
    
  
</template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script>
export default {
  created() {
    this.name = this.$route.params.slug;
    this.description = this.$route.params.detail;
    this.img = this.$route.params.img;
  },

  data() {
    return {};
  }
};
</script>