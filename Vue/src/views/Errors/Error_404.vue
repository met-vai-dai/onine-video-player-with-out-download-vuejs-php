<template>
  <article>
    <div class="Center">
      <h3>Page Not Found !</h3>
    </div>
  </article>
</template>

<script>

export default {
  name: "Error_404",
  components: {}
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

  .Center{
    width: 100%;
  }
}

a{
  text-decoration-line: none;
  color: black;
}
</style>