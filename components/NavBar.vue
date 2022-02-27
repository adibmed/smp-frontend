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
        <NavBarItem :to="'approved'">
          <NavBarItemLabel :label="'Approved'" />
        </NavBarItem>
      </div>
      <div class="flex flex-1 items-center justify-end">
        <VButton v-if="$auth.loggedIn">
          <nav-bar-item-label :label="userRole" />
        </VButton>

        <VButton v-if="$auth.loggedIn && $auth.user.role_id == 1" :to="'new'">
          <nav-bar-item-label :label="'Submit'" />
        </VButton>

        <VButton v-if="!$auth.loggedIn" :to="'login'">
          <nav-bar-item-label :label="'Login'" />
        </VButton>

        <VButton v-if="!$auth.loggedIn" :to="'register'">
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
export default {
  components: { NavBarItem, NavBarItemLabel, VButton, VAppLogo },
  computed: {
    userRole() {
      return this.$auth.user.role_id == 1
        ? "Submitter"
        : this.$auth.user.role_id == 2
        ? "Reviewer"
        : "Client";
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
