<template>
  <div id="app">
    <app-landing></app-landing>
<app-navbar></app-navbar>
<app-hero></app-hero>
<app-about></app-about>
 <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-portfolio></app-portfolio>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
  
  <!-- #app
    #nav 
      router-link(to='/') Home | 
      router-link(to='/about') About
      router-view -->

</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
        fields {
          excerpt
        }
      }
    }
  }
}
</page-query>
<script>
import Landing from "../components/Landing.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About/About.vue";
import Services from "../components/Services/Services.vue";
import Portfolio from "../components/Portfolio/Portfolio.vue";
import Testimonials from "../components/Testimonials/Testimonials.vue";
import Contact from "../components/Contact/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    appLanding: Landing,
    appNavbar: Navbar,
    appHero: Hero,
    appAbout: About,
    appServices: Services,
    appPortfolio: Portfolio,
    appTestimonials: Testimonials,
    appContact: Contact,
    appFooter: Footer
  }
};
</script>

<style lang="sass">



</style>

