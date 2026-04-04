import type { User, Teacher, Student } from '../types'

export const useAuth = () => {
  const router = useRouter()
  const { success } = useToast()

  // Mock current user - initially null to force login
  const currentUser = useState<User | null>('currentUser', () => null)

  const isTeacher = computed(() => currentUser.value?.role === 'teacher')
  const isStudent = computed(() => currentUser.value?.role === 'student')
  const isAdmin = computed(() => currentUser.value?.role === 'admin')
  const isParent = computed(() => currentUser.value?.role === 'parent')

  // Helper to get teacher specific data if logged in as teacher
  const teacherProfile = computed(() => {
    if (currentUser.value?.role !== 'teacher') return null
    const { teachers } = useData()
    return teachers.value.find(t => t.id === currentUser.value?.id) as Teacher
  })

  // Helper to get student specific data if logged in as student
  const studentProfile = computed(() => {
    if (currentUser.value?.role !== 'student') return null
    const { students } = useData()
    return students.value.find(s => s.id === currentUser.value?.id) as Student
  })

  const login = (role: User['role']) => {
    const { teachers, students } = useData()
    
    if (role === 'teacher') {
      const teacher = teachers.value[0]
      currentUser.value = { ...teacher }
    } else if (role === 'student') {
      const student = students.value[0]
      currentUser.value = { ...student }
    } else if (role === 'parent') {
      currentUser.value = {
        id: 'P001',
        name: 'Robert Edwards',
        role: 'parent',
        email: 'robert@parent.com',
        initials: 'RE'
      }
    } else if (role === 'admin') {
      currentUser.value = {
        id: 'A001',
        name: 'Sarah Connor',
        role: 'admin',
        email: 'admin@school.com',
        initials: 'SC'
      }
    }

    success('Login Successful', `Welcome back, ${currentUser.value?.name}`)
    router.push('/')
  }

  const logout = () => {
    currentUser.value = null
    router.push('/login')
  }

  return {
    currentUser,
    isTeacher,
    isStudent,
    isAdmin,
    isParent,
    teacherProfile,
    studentProfile,
    login,
    logout
  }
}
