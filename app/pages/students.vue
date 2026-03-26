<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <StudentManagementHeader />

    <div class="grid grid-cols-[450px,1fr] gap-12 mb-12">
      <StudentManagementStats />
      <StudentManagementFilters />
    </div>

    <StudentManagementTable />

    <div class="grid grid-cols-2 gap-12 mt-16">
      <StudentManagementPerformanceSnapshot />
      <StudentManagementAttendanceWarning />
    </div>
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
