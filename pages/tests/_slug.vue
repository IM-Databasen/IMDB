<template>
    <div>
        <p>bø</p>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        test: 's'
      }
    },
    content: {
      nestedProperties: ['author.name']
    },
    async asyncData({ params }: any) {
      console.log(params)
    },
    methods: {
      
    },
    mounted() {
      
    },
    computed: {

    }
  }
  </script>