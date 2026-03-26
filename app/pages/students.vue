<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <StudentManagementHeader />

    <div class="grid grid-cols-1 lg:grid-cols-[450px,1fr] gap-8 md:gap-12 mb-8 md:mb-12">
      <StudentManagementStats />
      <StudentManagementFilters />
    </div>

    <StudentManagementTable />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
      <StudentManagementPerformanceSnapshot />
      <StudentManagementAttendanceWarning />
    </div>
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
