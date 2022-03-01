const app = Vue.createApp({
  template: `
  <h3 class="title">Select drinks</h3>
  <ul>
    <li v-for="i in drinks" class="li" :class="{secilen:i.sec}" @click="icecekSec(i)">
        {{i.name}}
    </li>
  </ul>
  <hr/>
  <h3 class="title">Selected drinks:</h3>
  <ul>
    <li v-for="i in secilenIcecekler" class="secilen li">
        {{i.name}}
    </li>
  </ul>
    `,
  data() {
    return {
      drinks: [
        { name: "Cola", sec: true },
        { name: "Coffee", sec: false },
        { name: "Tea", sec: false },
        { name: "Water", sec: false },
      ],
    };
  },
  methods: {
    icecekSec(icecek) {
      icecek.sec = !icecek.sec;
    },
    print() {
      const selected = this.drinks.filter((i) => i.sec == true);
      console.log(selected);
    },
  },
  computed: {
    secilenIcecekler() {
      console.log("değişiklik algılandı");
      return (secilenler = this.drinks.filter((i) => i.sec == true));
    },
  },
});

app.mount("#app");
