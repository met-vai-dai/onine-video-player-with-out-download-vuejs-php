<template>
  <article>
    <div class="Center">
      <div v-if="Video_Link == null || Video_Link == '' || Video_Link == undefined">
        <h3>Video Not Found !</h3>
      </div>
      <div v-else>
        <video class="Video_Player" controls>
          <source :src="Video_Link" type="video/mp4">
          <source :src="Video_Link" type="video/mkv">
          <source :src="Video_Link" type="video/wmv">
          <source :src="Video_Link" type="video/avi">
          <source :src="Video_Link" type="video/vob">
          <source :src="Video_Link" type="video/amv">
          <source :src="Video_Link">
          <h3>Your Browser Not Support The Video !</h3>
        </video>
      </div>
      <router-link :to="'/?n='+this.Name" class="btn btn-dark" style="color: white">Home</router-link>
    </div>
  </article>
</template>

<script>
// import URL_Exist from "url-exist"

export default {
  name: "Player",
  data() {
    return {
      Video_Link: this.$route.query.q,
      Name:this.$route.query.n
    };
  },
  methods: {},
  mounted() {
    if(this.Name == undefined||this.Name == null||this.Name == "")
    {
      this.Name = "";
    }
  },
  metaInfo() {
    return {
      title: "Downloader Player - "+this.Name,
      meta: [
        {
          name: 'description',
          content: 'Online Un Download Video PLayer '+this.Name
        },
        {
          name: 'keywords',
          content: 'Online Un Download Video PLayer'+this.Name
        },
        {
          name: 'author', content: 'Asef Ghorbani'
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ],
    }
  }
}
</script>

<style scoped>

article {
  background-color: #2f2f2f;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.Center {
  text-align: center;
  color: white;
  position: fixed;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 800px;
  height: 120px;
  /*border: white 1px solid;*/
}

.Input_Data {
  background-color: white;
  width: 76%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
}

input {
  width: 84%;
  height: 80%;
  margin-top: 4px;
  border: none;
  outline: none;
}


button {
  height: 80%;
  background-color: white;
  border-radius: 2px;
  border: none;
  outline: none;
  color: black;
}

@media (max-width: 812px) {
  .Center {
    width: 600px;
  }

  input {
    width: 70%;
  }
}

@media (max-width: 612px) {
  .Center {
    width: 360px;
  }

  input {
    width: 50%;
  }
}

@media (max-width: 370px) {
  .Center {
    width: 300px;
  }

  input {
    width: 40%;
  }

  .Center {
    width: 100%;
  }
}

a {
  text-decoration-line: none;
  color: black;
}

.Video_Player{
  width:300px;
  border-radius: 2px;
}
</style>