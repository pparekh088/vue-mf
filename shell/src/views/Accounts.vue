<template>
  <div id="AccountsAPP" class="accounts">
  </div>
</template>

<script>

export default {
  name: 'Accounts',

  mounnted() {
    debugger
    this.$nextTick(() => {
      import('accounts/accountsApp').then(AccountsApp => {
        AccountsApp.mount('#AccountsAPP')
      }).catch(error => {
        console.error(error)
      })
    })
  }
}
</script>
