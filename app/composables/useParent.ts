import type { Student, Parent, AttendanceRecord, BehaviorRecord } from '../types'

export const useParent = () => {
  const { currentUser } = useAuth()
  const { students, attendanceRecords } = useData()
  
  // State for which child the parent is currently viewing
  const activeChildId = useState<string | null>('parentActiveChildId', () => null)

  const myChildren = computed(() => {
    if (!currentUser.value || currentUser.value.role !== 'parent') return []
    return students.value.filter(s => s.parentId === currentUser.value?.id)
  })

  // Initialize active child if not set
  onMounted(() => {
    if (!activeChildId.value && myChildren.value.length > 0) {
      activeChildId.value = myChildren.value[0].id
    }
  })

  const activeChild = computed(() => {
    return myChildren.value.find(s => s.id === activeChildId.value) || myChildren.value[0]
  })

  const setActiveChild = (id: string) => {
    activeChildId.value = id
  }

  // Get behavior for active child
  const behaviorRecords = useState<BehaviorRecord[]>('mockBehavior', () => [
    { id: 'B1', studentId: 'S001', teacherId: 'T001', type: 'positive', category: 'participation', points: 5, comment: 'Excellent participation in Algebra', date: new Date().toISOString() },
    { id: 'B2', studentId: 'S001', teacherId: 'T002', type: 'positive', category: 'conduct', points: 10, comment: 'Helped peers with history project', date: new Date().toISOString() },
    { id: 'B3', studentId: 'S005', studentId_fixed: 'S005', teacherId: 'T001', type: 'negative', category: 'assignment', points: -5, comment: 'Incomplete homework', date: new Date().toISOString() },
  ])

  const childBehavior = computed(() => {
    return behaviorRecords.value.filter(r => r.studentId === activeChildId.value)
  })

  const childAttendance = computed(() => {
    return attendanceRecords.value.filter(r => r.studentId === activeChildId.value)
  })

  return {
    myChildren,
    activeChild,
    setActiveChild,
    childBehavior,
    childAttendance
  }
}
