<script setup lang="ts">
import { MapPin, Bus, Navigation, Plus, Minus, Target } from 'lucide-vue-next'

const mapContainer = ref<HTMLElement | null>(null)
let map: any = null
let busMarker: any = null
let L: any = null

// Mock Route Coordinates (Simplified path)
const routePath = [
  [51.505, -0.09],
  [51.506, -0.08],
  [51.507, -0.07],
  [51.508, -0.06],
  [51.509, -0.05],
  [51.510, -0.04],
]

const currentStep = ref(0)
const arrivalTime = ref(12)

const updateBusPosition = () => {
  if (!busMarker || !L) return

  const nextPos = routePath[currentStep.value % routePath.length]
  busMarker.setLatLng(nextPos)
  
  // Simulate arrival time decreasing
  if (arrivalTime.value > 1) {
    arrivalTime.value -= 1
  } else {
    arrivalTime.value = 15 // Reset for demo
  }

  currentStep.value++
}

onMounted(async () => {
  // Dynamically load Leaflet
  if (!process.client) return

  // Load CSS
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  document.head.appendChild(link)

  // Load JS
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
  script.onload = () => {
    L = (window as any).L
    if (!mapContainer.value) return

    map = L.map(mapContainer.value, {
      zoomControl: false,
      attributionControl: false
    }).setView([51.505, -0.09], 15)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(map)

    // Custom Bus Icon
    const busIcon = L.divIcon({
      html: `
        <div class="relative">
          <div class="absolute -top-6 -left-6 w-12 h-12 bg-indigo-500/20 rounded-full animate-ping"></div>
          <div class="w-10 h-10 bg-white rounded-xl shadow-xl flex items-center justify-center border-2 border-indigo-600 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s1-1.33 1-3c0-3.13-2.42-4.5-5-4.5H7c-2.58 0-5 1.37-5 4.5 0 1.67 1 3 1 3h3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
          </div>
        </div>
      `,
      className: 'custom-bus-icon',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    })

    busMarker = L.marker([51.505, -0.09], { icon: busIcon }).addTo(map)

    // Add Stop Markers
    const stopIcon = L.divIcon({
      html: '<div class="w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg"></div>',
      className: 'custom-stop-icon',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    })

    L.marker([51.510, -0.04], { icon: stopIcon }).addTo(map)
      .bindTooltip("North Park Station", { permanent: true, direction: 'bottom', className: 'map-tooltip' })

    // Start Simulation
    setInterval(updateBusPosition, 3000)
  }
  document.head.appendChild(script)
})

const zoomIn = () => map?.zoomIn()
const zoomOut = () => map?.zoomOut()
const recenter = () => {
  if (busMarker) map?.setView(busMarker.getLatLng(), 16)
}
</script>

<template>
  <div class="bg-indigo-50 rounded-[48px] h-[600px] relative overflow-hidden group shadow-inner ring-1 ring-slate-200 border-8 border-white">
    <!-- Map Container -->
    <div ref="mapContainer" class="absolute inset-0 z-0"></div>

    <!-- Overlay Info -->
    <div class="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-[32px] shadow-2xl ring-1 ring-slate-200 group-hover:scale-105 transition-transform z-10">
      <p class="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-1">ESTIMATED ARRIVAL</p>
      <h3 class="text-4xl font-black text-slate-800 tracking-tighter">{{ arrivalTime }} Minutes</h3>
    </div>

    <!-- Status Bar -->
    <div class="absolute bottom-8 left-8 right-24 bg-slate-900/95 backdrop-blur-md p-6 rounded-[32px] shadow-2xl ring-1 ring-white/10 flex items-center justify-between z-10">
      <div class="flex items-center space-x-6">
        <div class="p-3 bg-indigo-500/20 rounded-2xl">
          <Navigation class="w-6 h-6 text-indigo-400 animate-pulse" stroke-width="2.5" />
        </div>
        <div>
          <h4 class="text-lg font-black text-white tracking-tight mb-0.5">Live Tracking</h4>
          <p class="text-indigo-200/60 text-[10px] font-bold leading-tight uppercase tracking-widest">Route 42B • Approaching Oak Ridge Dr.</p>
        </div>
      </div>
      
      <div class="hidden md:flex items-center space-x-8 px-8 border-l border-white/10">
        <div>
          <p class="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">SPEED</p>
          <p class="text-sm font-black text-white">42 KM/H</p>
        </div>
        <div>
          <p class="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">STOPS LEFT</p>
          <p class="text-sm font-black text-white">3 / 5</p>
        </div>
        <div>
          <p class="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">FUEL LEVEL</p>
          <p class="text-sm font-black text-green-400">88%</p>
        </div>
      </div>
    </div>

    <!-- Map Controls -->
    <div class="absolute bottom-8 right-8 flex flex-col space-y-3 z-10">
      <button @click="zoomIn" class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all border border-slate-100"><Plus class="w-5 h-5 text-slate-800" /></button>
      <button @click="zoomOut" class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all border border-slate-100"><Minus class="w-5 h-5 text-slate-800" /></button>
      <button @click="recenter" class="p-4 bg-indigo-600 rounded-2xl shadow-xl hover:bg-indigo-700 transition-all border border-indigo-500 shadow-indigo-200"><Target class="w-5 h-5 text-white" /></button>
    </div>
  </div>
</template>

<style>
.map-tooltip {
  background: white !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 4px 8px !important;
  font-size: 8px !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
  color: #0f172a !important;
}
.leaflet-container {
  background: #f8fafc !important;
}
</style>
