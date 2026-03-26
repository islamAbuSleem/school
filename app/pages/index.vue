<template>
  <div class="max-w-[1400px] mx-auto">
    <AttendanceHeader />
    
    <div class="grid grid-cols-[380px,1fr] gap-10">
      <div class="space-y-10">
        <QRScanner />
        <UnaccountedAlert />
      </div>
      
      <div>
        <AttendanceRoll />
      </div>
    </div>
    
    <AttendanceStats />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
