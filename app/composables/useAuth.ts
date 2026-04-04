import { useState, useRouter } from '#app'
import { computed, onMounted } from 'vue'
import { useToast } from './useToast'
import { useData } from './useData'
import type { User, Teacher, Student } from '../types'

export const useAuth = () => {
  const router = useRouter()
  const { success } = useToast()

  const currentUser = useState<User | null>('currentUser', () => {
    // Restore from localStorage on init
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem('school_user')
        if (saved) return JSON.parse(saved) as User
      } catch {}
    }
    return null
  })

  const isTeacher = computed(() => currentUser.value?.role === 'teacher')
  const isStudent = computed(() => currentUser.value?.role === 'student')
  const isAdmin = computed(() => currentUser.value?.role === 'admin')
  const isParent = computed(() => currentUser.value?.role === 'parent')

  const saveUser = (user: User | null) => {
    currentUser.value = user
    if (typeof localStorage !== 'undefined') {
      if (user) {
        localStorage.setItem('school_user', JSON.stringify(user))
      } else {
        localStorage.removeItem('school_user')
      }
    }
  }

  const teacherProfile = computed(() => {
    if (currentUser.value?.role !== 'teacher') return null
    const { teachers } = useData()
    return teachers.value.find(t => t.id === currentUser.value?.id) ?? null
  })

  const studentProfile = computed(() => {
    if (currentUser.value?.role !== 'student') return null
    const { students } = useData()
    return students.value.find(s => s.id === currentUser.value?.id) ?? null
  })

  const login = (role: User['role']) => {
    const { teachers, students } = useData()
    
    if (role === 'teacher') {
      const teacher = teachers.value[0]
      if (teacher) {
        saveUser({ ...teacher })
      }
    } else if (role === 'student') {
      const student = students.value[0]
      if (student) {
        saveUser({ ...student })
      }
    } else if (role === 'parent') {
      saveUser({
        id: 'P001',
        name: 'Robert Edwards',
        role: 'parent',
        email: 'robert@parent.com',
        initials: 'RE'
      })
    } else if (role === 'admin') {
      saveUser({
        id: 'A001',
        name: 'Sarah Connor',
        role: 'admin',
        email: 'admin@school.com',
        initials: 'SC'
      })
    }

    success('Login Successful', `Welcome back, ${currentUser.value?.name}`)
    router.push('/')
  }

  const logout = () => {
    saveUser(null)
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
