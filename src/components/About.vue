<template>

 <section class="about" id="about">
    <v-card-text>
        <h1 class="text-xs-center">About Me</h1>
        <!-- <v-img
              :src="profileImage"
              height="200"
              contain
            ></v-img> -->
        
        <h3 class="text-xs-center">A little bit about myself...</h3>
    </v-card-text>

    <ul class="grid">
      <li>
        <i class="fa fa-compass fa-3x"></i>
        <h4>Software Development</h4>
        <p>I have completed intensive software development training with the Code Institute Dublin</p>
      </li>
      <li>
        <i class="fa fa-laptop fa-3x"></i>
        <h4>Computer Engineer</h4>
        <p>I have a degree in Computer Engineering and Maths from Trinity College Dublin</p>
      </li>
      <li>
        <i class="fa fa-coffee fa-3x"></i>
        <h4>Experienced</h4>
        <p>I have worked on teams with Microsoft, Google and Arvato</p>
      </li>
      <li>
        <i class="fa fa-car fa-3x"></i>
        <h4>Driven</h4>
        <p>I am constantly looking to improve and develop new skills and features for my projects</p>
      </li>
      <li>
        <i class="fa fa-pencil fa-3x"></i>
        <h4>Design</h4>
        <p>I believe great functionality needs great design.  User experience and responsive design are core values</p>
      </li>
      <li>
        <i class="fa fa-map fa-3x"></i>
        <h4>Location</h4>
        <p>I am currently based in Dublin, Ireland</p>
      </li>
    </ul>
  </section>

</template>

<script>
export default {
  data () {
    return {
      profileImage: require('../assets/img/header/icons/dave.jpg')
    }
  }
}
</script>

<style scoped>

ul {
    list-style: none;
}

section {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 80px;
    background-color: #f5f5f5;
    box-sizing: border-box;   
}

section h3.title {
    text-transform: capitalize;
    font: bold 32px "Open Sans", sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;    
}

section p {
    max-width: 775px;
    line-height: 2;
    padding: 0 20px;
    margin-bottom: 30px;
    text-align: center;
}

.grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.about .grid li {
    padding: 20px;
    flex-basis: 33%;
    text-align: center;
}

.about .grid li i {
    color: #6cccf1;
}

.about .grid li h4 {
    font-size: 20px;
    margin: 25px 0;
}

@media (max-width: 1100px){

    .about .grid li {
        flex-basis: 50%;
        padding: 20px;
    }

}

@media (max-width: 800px){
    section {
        padding: 50px 20px;
    }

    .about .grid li {
        flex-basis: 100%;
        padding: 20px;
    }

}

</style>
