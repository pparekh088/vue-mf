<template>
  <div id="profileApp" class="accounts">
  </div>
</template>

<script>
import * as ScanditSDK from "scandit-sdk";


export default {
  name: 'Profile',

  async mounnted() {
    // inside an async function
    await ScanditSDK.configure("YOUR_LICENSE_KEY_IS_NEEDED_HERE", {
      engineLocation: "dist/",
    });
  }
}
</script>