export const useDashboard = () => {
  const activeTab = useState('dashboardActiveTab', () => 'Overview')

  const setActiveTab = (tab: string) => {
    activeTab.value = tab
  }

  return {
    activeTab,
    setActiveTab
  }
}
