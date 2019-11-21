<template>
   <section id="skills">
        <div class="container">
            <div class="title-area text-center">
                <h2 class="title">SKILLS</h2>
                <h5 class="subtitle">SOME OF THE MAIN TECHNOLOGIES I USE IN DEVELOPMENT, I AM CONSTANTLY UPDATING AND ADDING NEW SKILLS</h5>
            </div>
            <br>

            <div class="row">
                <div class="col-lg-4 col-sm-6 img-block" v-for="(data,index) in skillsData" :key="index">
                    <img :src="data.imageLink" alt="" class="center-block">

                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      skillsData: [
        {
          id: 1,
          imageLink: require('../assets/img/header/icons/html.png')
        },
        {
          id: 2,
          imageLink: require('../assets/img/header/icons/js.png')
        },
        {
          id: 3,
          imageLink: require('../assets/img/header/icons/vue icon.png')
        },
        {
          id: 4,
          imageLink: require('../assets/img/header/icons/python.png')
        },
        {
          id: 5,
          imageLink: require('../assets/img/header/icons/flask.png')
        },
        {
          id: 6,
          imageLink: require('../assets/img/header/icons/sql.png')
        },
        {
          id: 7,
          imageLink: require('../assets/img/header/icons/lightroom.jpg')
        },
        {
          id: 8,
          imageLink: require('../assets/img/header/icons/adobe-photoshop-cs6.svg')
        },
        {
          id: 9,
          imageLink: require('../assets/img/header/icons/adobe-illustrator-cs6.svg')
        }
      ]
    }
  }
}

</script>

<style scoped>
.title-area {
  background-color: white;
}

#skills {
  background-color: #fff;
  padding: 25px 0 50px 0;
}

img {
  border: 0;
  height: 100px;
  max-width: 100%;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.img-block {
  padding: 25px;
}

.title {
  font-weight: 900;
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 0;
  color: #222;
  font-family: 'Poppins', "Open Sans"!important;
  line-height: 13px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.subtitle {
  display: block;
  font-size: 110%;
  line-height: 20px;
  text-transform: uppercase;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 15px;
  letter-spacing: 1px;
  padding: 0;
  font-weight: 400;
  color: rgb(71, 71, 71);
}
</style>
