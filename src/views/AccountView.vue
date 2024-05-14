<script>
import MockProfile from "@/components/accountComponents/MockProfile.vue";
import AccountStatistics from "@/components/accountComponents/AccountStatistics.vue";
export default {
  name: "AccountView",
  components: { MockProfile, AccountStatistics },
  // props: {
  //   authUser: {required: true},
  // }
}
</script>

<template>

  <MockProfile/>
  <AccountStatistics/>

</template>
