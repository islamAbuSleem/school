<template>
  <div class="max-w-[1400px] mx-auto px-4 md:px-10">
    <AttendanceHeader />
    
    <div class="grid grid-cols-1 lg:grid-cols-[380px,1fr] gap-6 md:gap-10">
      <div class="space-y-6 md:space-y-10">
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
