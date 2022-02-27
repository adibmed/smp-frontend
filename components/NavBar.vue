<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-white shodow-md"
  >
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <span class="font-semibold text-xl tracking-tight">SMP</span>
    </div>
    <div class="flex-grow flex items-center w-auto">
      <div class="text-sm flex-grow">
        <nuxt-link
          to="/"
          class=" mt-4 mt-0 hover:text-indigo-700 hover:bg-indigo-50 py-1 px-2 rounded-md mr-4"
        >
          Products
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'approved' }"
          class=" mt-4 mt-0 hover:text-indigo-700 hover:bg-indigo-50 py-1 px-2 rounded-md mr-4"
        >
          Approved
        </nuxt-link>
      </div>
      <div>
        <nuxt-link
          to="new"
          v-if="$auth.loggedIn && $auth.user.role_id == 1"
          class="inline- text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-700 mt-4 mt-0"
        >
          Submit Product
        </nuxt-link>
        <nuxt-link
          v-if="!$auth.loggedIn"
          to="login"
          class="inline- text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-700 mt-4 mt-0"
        >
          Login
        </nuxt-link>

        <nuxt-link
          v-if="!$auth.loggedIn"
          to="register"
          class="inline- text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-700 mt-4 mt-0"
        >
          Create Account
        </nuxt-link>

        <button
          @click="logout()"
          v-if="$auth.loggedIn"
          class="inline- text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-indigo-700 mt-4 mt-0"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
