<template>
 <v-list-group
            v-if="'subitems' in item"
            no-action
            sub-group
            value="true">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </template>
  
        <v-list-item
          v-for="(subitem, i) in item.subitems"
          :key="i"
          :to="subitem.to"
        >
          <v-list-item-title v-text="subitem.title"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="subitem.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
  </v-list-group>
  <v-list-item v-else :to="item.to">
    <v-list-item-action>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="item.title" />
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: ["item"]
};
</script>