<template>
  <div id="profileApp" class="accounts">
  </div>
</template>

<script>

export default {
  name: 'Profile',

  mounnted() {
    this.$nextTick(() => {
      import('profile/profileApp').then(profileApp => {
        profileApp.mount('#profileApp')
      }).catch(error => {
        console.error(error)
      })
    })
  }
}
</script>