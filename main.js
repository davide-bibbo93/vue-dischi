new Vue({
  el: '#app',
  data: {
    dischi: [],
    generi: ['All'],
    selected: '',
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((resp) => {
        // stampo tutti i dischi
        this.dischi = resp.data.response;

        // ciclo i generi
        this.dischi.forEach((disco) => {
          if (!this.generi.includes(disco.genre) ) {
            this.generi.push(disco.genre)
          }
        });

      });
  }
});
Vue.config.devtools = true
