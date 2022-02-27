<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-white shodow-md"
  >
    <VAppLogo :title="'SMP'" />
    <div class="flex-grow flex items-center justify-between w-auto">
      <div class="text-sm flex" v-if="$auth.loggedIn">
        <NavBarItem :to="'/'">
          <NavBarItemLabel :label="'Products'" />
        </NavBarItem>
        <NavBarItem
          v-if="$auth.loggedIn && $auth.user.role === 'reviewer'"
          :to="'/products'"
        >
          <NavBarItemLabel :label="'All Products'" />
        </NavBarItem>
      </div>
      <div class="flex flex-1 items-center justify-end">
        <div
          v-if="$auth.loggedIn"
          class="px-2 font-bold capitalize bg-gray-100 p-1.5 mx-2 rounded-md text-gray-700 cursor-pointer hover:text-gray-900"
        >
          👨 {{ $auth.user.role }}
        </div>

        <VButton
          v-if="$auth.loggedIn && $auth.user.role === 'submitter'"
          :to="'/new'"
        >
          <nav-bar-item-label :label="'Submit'" />
        </VButton>

        <VButton v-if="!$auth.loggedIn" :to="'/login'">
          <nav-bar-item-label :label="'Login'" />
        </VButton>

        <VButton v-if="!$auth.loggedIn" :to="'/register'">
          <nav-bar-item-label :label="'Create Account'" />
        </VButton>

        <VButton @click.native="logout()" v-if="$auth.loggedIn">
          <nav-bar-item-label :label="'Logout'" />
        </VButton>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
import NavBarItemLabel from "./NavBarItemLabel.vue";
import VButton from "./VButton.vue";
import VAppLogo from "./VAppLogo.vue";
import { LOGOUT } from "~/store/actions.type";

export default {
  components: { NavBarItem, NavBarItemLabel, VButton, VAppLogo },

  methods: {
    logout() {
      this.$store.dispatch(`user/${LOGOUT}`);
    },
  },
};
</script>
