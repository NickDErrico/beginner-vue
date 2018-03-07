//re-usable component
Vue.component('greeting', {
  template: '<p>Hey there, I am {{ otherName }}. <button v-on:click="changeName">Change name</button></p>',
  data: function() {
    return {
      otherName: 'Bowser'
    }
  },
  methods: {
    changeName: function() {
      this.otherName = 'King Kuppa'
    }
  }
})

let vueOne = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One',
    age: 28,
    name: 'Nick',
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: "<a href='http://www.thenetninja.co.uk'>Net Ninja",
    x: 0,
    y: 0,
    dynamicName: '',
    dynamicAge: '',
    a: 0,
    b: 0,
    available: true,
    nearby: false,
    error: true,
    success: false,
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [{
        name: 'Ryu',
        age: 25
      },
      {
        name: 'Yoshi',
        age: 35
      },
      {
        name: 'Ken',
        age: 55
      }
    ]
  },
  methods: {
    greet: function(time) {
      return `Good ${time} ${this.name}`
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert('you clicked me')
    },
    logName: function() {
      console.log('you entered your name');
    },
    logAge: function() {
      console.log('you entered your age');
    }
  },
  computed: {
    addToA: function() {
      return this.a + this.age
    },
    addToB: function() {
      return this.b + this.age
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    },
    greetComputed: function() {
      return 'Hello from app one:)'
    }
  },

});

let vueTwo = new Vue({
  el: '#vue-app-two',

  data: {
    title: 'Vue App Two',
  },

  methods: {
    changeTitle: function() {
      vueOne.title = 'Title changed'
    }
  },
  computed: {
    greetComputed: function() {
      return 'Yo dudes this is app two:)'
    }
  },
});

vueTwo.title = 'changed from the outside';