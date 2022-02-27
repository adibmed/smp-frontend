<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Account
        </h2>
      </div>
      <form class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              v-model="form.name"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              v-model="form.email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              v-model="form.password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <select
              v-model="form.role"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md mt-8 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option v-for="role in roles" :key="role.id" :value="role.id">
                {{ role.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="text-center">
          Already have account ?
          <span class="text-indigo-700"
            ><nuxt-link to="login">Login</nuxt-link></span
          >
        </div>
        <div>
          <button
            @click.prevent="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { REGISTER } from "~/store/actions.type";
export default {
  auth: false,
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        role: 1,
      },
      roles: [
        {
          name: "Submitter",
          id: 1,
        },
        {
          name: "Reviewer",
          id: 2,
        },
        {
          name: "Client",
          id: 3,
        },
      ],
    };
  },

  methods: {
    submit() {
      this.$store.dispatch(`user/${REGISTER}`, this.form);
    },
  },
};
</script>
