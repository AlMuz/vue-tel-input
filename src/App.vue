<template>
  <div id="app">
    <template v-if="!showPlayground">
      <a href="https://www.npmjs.com/package/@almuz/vue-tel-input">
        <img src="https://img.shields.io/npm/dt/@almuz/vue-tel-input.svg" />
      </a>
      &nbsp;
      <a href="https://github.com/almuz/vue-tel-input">
        <img
          src="https://img.shields.io/github/stars/almuz/vue-tel-input.svg"
        />
      </a>
      <div style="width: 500px; margin: 20px auto">
        <vue-tel-input
          :preferred-countries="['us', 'gb', 'ua']"
          valid-characters-only
          @input="onInput"
        />
      </div>
      <div v-if="phone.number" style="color: #e83e8c">
        <span>
          Number:
          <strong>{{ phone.number }}</strong>
          ,&nbsp;
        </span>
        <span>
          Is valid:
          <strong>{{ phone.valid }}</strong>
          ,&nbsp;
        </span>
        <span>
          Country:
          <strong>{{ phone.country }}</strong>
        </span>
      </div>
    </template>
    <!-- built files will be auto injected -->
    <div style="text-align: center; margin-top: 20px">
      View
      <span style="font-size: 15px">
        [
        <a href="https://github.com/almuz/vue-tel-input">github</a>
        ,
        <a href="https://github.com/almuz/vue-tel-input/releases">changelog</a>
        ,
        <a href="https://www.npmjs.com/package/vue-tel-input">npm</a>
        ,
        <a href="" @click.prevent="showPlayground = !showPlayground">
          {{ showPlayground ? 'homepage' : 'playground' }}
        </a>
        ].
      </span>
    </div>
    <div v-if="showPlayground" style="margin-top: 20px">
      <iframe
        src="https://codesandbox.io/embed/0yyyk45q7w?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
        title="Vue Template"
        allow="gyroscope; payment; ambient-light-sensor; encrypted-media"
        style="
          width: 100%;
          height: 80vh;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
        "
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showPlayground: false,
      phone: {
        number: '',
        valid: false,
        country: undefined
      }
    }
  },
  methods: {
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international
      this.phone.valid = valid
      this.phone.country = country && country.name
    }
  }
}
</script>
