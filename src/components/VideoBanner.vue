<template>
  <section class="video-container">
    <iframe title="banner" id="video" src="//www.youtube.com/embed/fQigKG_KHR0?
      autoplay=0&
      controls=0&
      loop=1&
      autohide=1&
      rel=0&
      fs=0&
      iv_load_policy=3&
      hd=1&
      showinfo=0
      modestbranding=1&
      disablekb=1&
      enablejsapi=1" frameborder="0">
    </iframe>

    <div class="overlay-desc ">
      <h2 class="text2 text-center">DESIGN, <span class="stresscolor">DEVELOP</span>, DEPLOY</h2>
    </div>

	</section>

</template>

<style scoped>
.video-container {
  position: relative;
}
#video {
  height: 300px;
  vertical-align: middle;
  width: 100%;
}
.overlay-desc {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stresscolor {
  color: #f86d18;
}

.text1 {
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 10px;
  font-family: 'Poppins', "Open Sans"!important;
  color: white;
}

.text2 {
  font-size: 50px;
  line-height: 25px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-top: 0;
  font-family: 'Poppins', "Open Sans"!important;
  color: white;
}
</style>
