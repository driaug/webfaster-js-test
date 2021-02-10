<template>
  <div class="bg-green-100">
    <div class="pt-4 flex justify-center items-center">
      <input type="text" @keyup="load()" v-model="x" id="search" class="w-1/2 h-16 m-3 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" placeholder="Search!">
    </div>

  <table class="min-w-full divide-y divide-gray-200 mt-5">
    <thead class="bg-gray-100">
    <tr>
      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500">
        API
      </th>
      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500">
        Category
      </th>
      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500">
        URL
      </th>
    </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="api in data">
        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 capitalize">{{api.API}}</td>
        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 capitalize">{{api.Category}}</td>
        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-blue-500 capitalize">
          <a :href="api.Link">
            Visit API
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

const fetch = require('node-fetch');

export default {
  name: 'home',
  data: function () {
    return {
      data: [],
      object: {},
      x: '',
    }
  },
  methods: {
    load: function () {
      const _self = this;

      fetch('http://localhost:4000/items?x=' + this.x).then(res => res.json()).then(body => {
        _self.data = body.data.entries
      });
    },
  },
  mounted() {
    this.load()
  }
}
</script>

<style></style>
