<template>
  <v-card height="580" width="60%" class="pa-2 mx-auto">
    <v-row>
      <v-col cols="4">
        <FormSidebar />
      </v-col>
      <v-col cols="8">
        <Form />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import FormSidebar from '@/components/Sidebar/FormSidebar.vue'
import Form from '@/components/Form.vue'
export default {
  name: 'FormView',
  components: {
    FormSidebar,
    Form
  }
}
</script>

<style lang="scss" scoped></style>
