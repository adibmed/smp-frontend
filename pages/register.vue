<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in
        </h2>
      </div>
      <form class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              v-model="form.name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div class="pt-6">
            <label for="role">You are ?</label>
            <select
              id="role"
              v-model="form.role"
              name="role"
              type="role"
              autocomplete="current-role"
              required
              class="appearance-none pt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="role"
            >
              <option v-for="role in roles" :value="role.id">
                {{ role.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="text-center">
          Have an account ?
          <span class="text-indigo-700"
            ><nuxt-link to="login">Login</nuxt-link></span
          >
        </div>
        <div>
          <button
            @click.prevent="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "mohamed",
        email: "mohamed@gmail.com",
        password: "password1234",
        role: 1,
      },

      roles: [
        { name: "submitter", id: 1 },
        { name: "reviewer", id: 2 },
        { name: "client", id: 3 },
      ],
    };
  },
  methods: {
    submit() {
      this.$axios
        .post("register", this.form)
        .then((response) => {
          this.login();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    login() {
      this.$auth
        .loginWith("laravelJWT", {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })
        .then(() => {
          this.$router.push({ name: "index" });
        })
        .catch(() => {});
    },
  },
};
</script>
