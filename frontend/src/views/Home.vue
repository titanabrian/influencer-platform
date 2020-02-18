<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
        style="height: 300px;"
      >
        <v-text-field
        class="mb-8"
        outlined>
        </v-text-field>

        <v-text-field
        class="mb-4"
        outlined>
        </v-text-field>
      </v-row>
    </v-col>
  </v-container>    
</template>

<script>
export default {
  name: 'Home',
}
</script>
