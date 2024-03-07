<template>
  <div>
    <IconPicker pageSize="100" width="50%" copy="true" />
  </div>
</template>
<script>
  import { IconPicker } from '/@/components/Icon'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: { IconPicker },
  })
</script>
