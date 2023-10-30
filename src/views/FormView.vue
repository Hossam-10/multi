<template>
  <div class="d-flex align-center h-100" v-if="!xs">
    <v-card height="580" width="60%" class="pa-2 mx-auto">
      <v-row>
        <v-col cols="3">
          <FormSidebar />
        </v-col>
        <v-col cols="9">
          <Form />
        </v-col>
      </v-row>
    </v-card>
  </div>
  <div v-else>
    <FormSidebarMobile />
    <Form class="mobile-form" />
  </div>
</template>

<script>
import FormSidebar from '@/components/Sidebar/FormSidebar.vue'
import FormSidebarMobile from '@/components/Sidebar/FormSidebarMobile.vue'
import Form from '@/components/Form.vue'
export default {
  name: 'FormView',
  components: {
    FormSidebar,
    Form,
    FormSidebarMobile
  },
  computed: {
    xs() {
      return this.$vuetify.display.xs
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-form {
  position: absolute;
  top: 75px;
  width: 95%;
  left: 2.5%;
  right: 2.5%;
}
</style>
