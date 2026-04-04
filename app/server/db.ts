// Mock database store - simulates a backend database
// All data persists in memory during dev session
// Replace with real API calls when backend is ready

export interface MockUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'teacher' | 'student' | 'parent'
  initials: string
  avatar?: string
  password?: string
  subjects?: string[]
  classes?: string[]
  parentId?: string
  grade?: string
  section?: string
  enrollmentId?: string
  attendanceRate?: number
  performanceScore?: number
  lastPerformanceTrend?: 'up' | 'down' | 'stable'
  behaviorPoints?: number
  childIds?: string[]
  phoneNumber?: string
  address?: string
}

export interface MockGrade {
  id: string
  studentId: string
  subject: string
  type: 'Exam' | 'Quiz' | 'Assignment' | 'Project' | 'Lab'
  score: number
  grade: string
  term: string
  teacherId: string
  date: string
  comment?: string
}

export interface MockMessage {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: string
  read: boolean
}

export interface MockAttendance {
  id: string
  studentId: string
  classId: string
  date: string
  status: 'present' | 'late' | 'absent' | 'excused'
  markedBy: string
}

export interface MockFee {
  id: string
  studentId: string
  type: string
  amount: number
  dueDate: string
  status: 'paid' | 'pending' | 'overdue'
  paidDate?: string
}

// Mock database
const db = {
  users: [
    { id: 'A001', name: 'Sarah Connor', email: 'admin@school.com', role: 'admin' as const, initials: 'SC' },
    { id: 'T001', name: 'Prof. James Wilson', email: 'j.wilson@school.com', role: 'teacher' as const, initials: 'JW', subjects: ['Mathematics', 'Physics'], classes: ['C001', 'C002'] },
    { id: 'T002', name: 'Ms. Layla Hassan', email: 'l.hassan@school.com', role: 'teacher' as const, initials: 'LH', subjects: ['History', 'Geography'], classes: ['C003'] },
    { id: 'T003', name: 'Dr. Sarah Ahmed', email: 's.ahmed@school.com', role: 'teacher' as const, initials: 'SA', subjects: ['Calculus', 'Economics'], classes: ['C004'] },
    { id: 'T004', name: 'Marcus Stone', email: 'm.stone@school.com', role: 'teacher' as const, initials: 'MS', subjects: ['Visual Arts', 'Design'], classes: ['C005'] },
    { id: 'S001', name: 'Alexander Abernathy', email: 'alex@school.com', role: 'student' as const, initials: 'AA', parentId: 'P001', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0012', attendanceRate: 98.5, performanceScore: 88, lastPerformanceTrend: 'up' as const, behaviorPoints: 145 },
    { id: 'S002', name: 'Beatrice Bennett', email: 'beatrice@school.com', role: 'student' as const, initials: 'BB', parentId: 'P001', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0045', attendanceRate: 92.1, performanceScore: 76, lastPerformanceTrend: 'stable' as const, behaviorPoints: 98 },
    { id: 'S003', name: 'Caleb Hughes', email: 'caleb@school.com', role: 'student' as const, initials: 'CH', parentId: 'P002', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0089', attendanceRate: 85.0, performanceScore: 64, lastPerformanceTrend: 'down' as const, behaviorPoints: 55 },
    { id: 'S004', name: 'Diana Lawrence', email: 'diana@school.com', role: 'student' as const, initials: 'DL', parentId: 'P002', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0102', attendanceRate: 99.2, performanceScore: 92, lastPerformanceTrend: 'up' as const, behaviorPoints: 172 },
    { id: 'S005', name: 'Ethan Miller', email: 'ethan@school.com', role: 'student' as const, initials: 'EM', parentId: 'P003', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0134', attendanceRate: 94.4, performanceScore: 81, lastPerformanceTrend: 'stable' as const, behaviorPoints: 110 },
    { id: 'P001', name: 'Robert Edwards', email: 'robert@parent.com', role: 'parent' as const, initials: 'RE', childIds: ['S001', 'S002'], phoneNumber: '+1 (555) 012-0001', address: '123 Oak St, Beverly Hills' },
    { id: 'P002', name: 'Maria Santos', email: 'maria@parent.com', role: 'parent' as const, initials: 'MS', childIds: ['S003', 'S004'], phoneNumber: '+1 (555) 012-0002', address: '456 Elm St, Beverly Hills' },
    { id: 'P003', name: 'David Kim', email: 'david@parent.com', role: 'parent' as const, initials: 'DK', childIds: ['S005'], phoneNumber: '+1 (555) 012-0003', address: '789 Pine St, Beverly Hills' },
  ] as MockUser[],

  classes: [
    { id: 'C001', name: 'Advanced Mathematics', grade: 'Grade 10', section: 'A', teacherId: 'T001', subject: 'Mathematics', room: 'Lab 204', studentIds: ['S001', 'S002', 'S003', 'S004', 'S005'], termId: 'T1-2024', gradingSchemeId: 'GS-STD' },
    { id: 'C002', name: 'Theoretical Physics', grade: 'Grade 12', section: 'B', teacherId: 'T001', subject: 'Physics', room: 'Auditorium 1', studentIds: ['S001'], termId: 'T1-2024', gradingSchemeId: 'GS-STD' },
    { id: 'C003', name: 'World History', grade: 'Grade 10', section: 'A', teacherId: 'T002', subject: 'History', room: 'Room 105', studentIds: ['S001', 'S002', 'S003', 'S004', 'S005'], termId: 'T1-2024', gradingSchemeId: 'GS-STD' },
    { id: 'C004', name: 'Calculus II', grade: 'Grade 12', section: 'A', teacherId: 'T003', subject: 'Calculus', room: 'Room 305', studentIds: ['S001', 'S002', 'S003'], termId: 'T1-2024', gradingSchemeId: 'GS-STD' },
    { id: 'C005', name: 'Visual Arts', grade: 'Grade 9', section: 'A', teacherId: 'T004', subject: 'Art', room: 'Studio 1', studentIds: ['S001', 'S004', 'S005'], termId: 'T1-2024', gradingSchemeId: 'GS-STD' },
  ],

  grades: [
    { id: 'G001', studentId: 'S001', subject: 'Mathematics', type: 'Exam' as const, score: 94, grade: 'A', term: 'Term 4', teacherId: 'T001', date: '2024-01-15' },
    { id: 'G002', studentId: 'S001', subject: 'Mathematics', type: 'Quiz' as const, score: 91, grade: 'A-', term: 'Term 4', teacherId: 'T001', date: '2024-01-10' },
    { id: 'G003', studentId: 'S001', subject: 'Physics', type: 'Lab' as const, score: 95, grade: 'A', term: 'Term 4', teacherId: 'T001', date: '2024-01-12' },
    { id: 'G004', studentId: 'S001', subject: 'Physics', type: 'Exam' as const, score: 88, grade: 'B+', term: 'Term 4', teacherId: 'T001', date: '2024-01-08' },
    { id: 'G005', studentId: 'S001', subject: 'English', type: 'Essay' as const, score: 92, grade: 'A-', term: 'Term 4', teacherId: 'T002', date: '2024-01-11' },
    { id: 'G006', studentId: 'S001', subject: 'History', type: 'Project' as const, score: 96, grade: 'A', term: 'Term 4', teacherId: 'T002', date: '2024-01-14' },
    { id: 'G007', studentId: 'S001', subject: 'History', type: 'Exam' as const, score: 94, grade: 'A', term: 'Term 4', teacherId: 'T002', date: '2024-01-03' },
    { id: 'G008', studentId: 'S001', subject: 'Art', type: 'Portfolio' as const, score: 92, grade: 'A-', term: 'Term 4', teacherId: 'T004', date: '2024-01-13' },
  ] as MockGrade[],

  attendance: [] as MockAttendance[],

  messages: [
    { id: 'M001', senderId: 'P001', receiverId: 'T001', content: 'Hello Prof. Wilson, I wanted to check on Alexander\'s recent performance in Mathematics.', timestamp: '2024-01-15T10:30:00Z', read: true },
    { id: 'M002', senderId: 'T001', receiverId: 'P001', content: 'Hello Mr. Edwards! Alexander is doing exceptionally well. He scored 94% on the latest exam.', timestamp: '2024-01-15T11:00:00Z', read: true },
    { id: 'M003', senderId: 'P001', receiverId: 'T001', content: 'Thank you for the update on Alexander\'s progress.', timestamp: '2024-01-15T14:00:00Z', read: true },
  ] as MockMessage[],

  fees: [
    { id: 'INV-2024-001', studentId: 'S001', type: 'Tuition', amount: 2500, dueDate: '2024-01-15', status: 'paid' as const, paidDate: '2024-01-10' },
    { id: 'INV-2024-002', studentId: 'S001', type: 'Books & Materials', amount: 350, dueDate: '2024-01-20', status: 'paid' as const, paidDate: '2024-01-18' },
    { id: 'INV-2024-003', studentId: 'S001', type: 'Transportation', amount: 400, dueDate: '2024-02-01', status: 'pending' as const },
    { id: 'INV-2024-004', studentId: 'S002', type: 'Tuition', amount: 2500, dueDate: '2024-02-01', status: 'pending' as const },
    { id: 'INV-2024-005', studentId: 'S002', type: 'Activity Fee', amount: 150, dueDate: '2024-02-15', status: 'pending' as const },
  ] as MockFee[],

  settings: {
    schoolName: 'St. Edwards Academy',
    academicYear: '2023/24',
    currentTerm: 'Term 2',
    timezone: 'America/Los_Angeles',
    language: 'en',
    notifications: {
      email: true,
      sms: false,
      push: true,
      attendanceAlerts: true,
      gradeAlerts: true,
      behaviorAlerts: true,
      feeReminders: true,
    }
  }
}

// Helper to generate IDs
const generateId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`

// Helper to simulate API delay
const delay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms))

// Auth endpoints
export const mockAuth = {
  login: async (email: string, password: string) => {
    await delay(300)
    const user = db.users.find(u => u.email === email)
    if (!user) return { error: 'Invalid credentials' }
    // In mock mode, any password works for demo
    const { password: _, ...safeUser } = user as any
    return { user: safeUser, token: `mock-token-${user.id}-${Date.now()}` }
  },

  loginByRole: async (role: string) => {
    await delay(300)
    const user = db.users.find(u => u.role === role)
    if (!user) return { error: 'No user found for this role' }
    const { password: _, ...safeUser } = user as any
    return { user: safeUser, token: `mock-token-${user.id}-${Date.now()}` }
  },

  validateToken: async (token: string) => {
    await delay(100)
    if (!token || !token.startsWith('mock-token-')) return { error: 'Invalid token' }
    const userId = token.split('-')[2]
    const user = db.users.find(u => u.id === userId)
    if (!user) return { error: 'User not found' }
    const { password: _, ...safeUser } = user as any
    return { user: safeUser }
  },
}

// Users/Students/Teachers endpoints
export const mockUsers = {
  getAll: async (role?: string) => {
    await delay(200)
    const users = role ? db.users.filter(u => u.role === role) : db.users
    return users.map(({ password, ...u }) => u)
  },

  getById: async (id: string) => {
    await delay(100)
    const user = db.users.find(u => u.id === id)
    if (!user) return { error: 'User not found' }
    const { password, ...safeUser } = user as any
    return safeUser
  },

  create: async (data: Partial<MockUser>) => {
    await delay(300)
    const newUser: MockUser = {
      id: generateId(data.role === 'teacher' ? 'T' : data.role === 'student' ? 'S' : data.role === 'parent' ? 'P' : 'U'),
      name: data.name || '',
      email: data.email || '',
      role: data.role || 'student',
      initials: data.initials || '',
      avatar: data.avatar,
      subjects: data.subjects,
      classes: data.classes,
      parentId: data.parentId,
      grade: data.grade,
      section: data.section,
      enrollmentId: data.enrollmentId,
      attendanceRate: data.attendanceRate,
      performanceScore: data.performanceScore,
      lastPerformanceTrend: data.lastPerformanceTrend,
      behaviorPoints: data.behaviorPoints,
      childIds: data.childIds,
      phoneNumber: data.phoneNumber,
      address: data.address,
    }
    db.users.push(newUser as MockUser)
    return newUser
  },

  update: async (id: string, data: Partial<MockUser>) => {
    await delay(300)
    const idx = db.users.findIndex(u => u.id === id)
    if (idx === -1) return { error: 'User not found' }
    const existing = db.users[idx]!
    const updated: MockUser = {
      id: existing.id,
      name: existing.name,
      email: existing.email,
      role: existing.role,
      initials: existing.initials,
    }
    if (data.avatar) updated.avatar = data.avatar
    if (data.subjects) updated.subjects = data.subjects
    if (data.classes) updated.classes = data.classes
    if (data.parentId) updated.parentId = data.parentId
    if (data.grade) updated.grade = data.grade
    if (data.section) updated.section = data.section
    if (data.enrollmentId) updated.enrollmentId = data.enrollmentId
    if (data.attendanceRate !== undefined) updated.attendanceRate = data.attendanceRate
    if (data.performanceScore !== undefined) updated.performanceScore = data.performanceScore
    if (data.lastPerformanceTrend) updated.lastPerformanceTrend = data.lastPerformanceTrend
    if (data.behaviorPoints !== undefined) updated.behaviorPoints = data.behaviorPoints
    if (data.childIds) updated.childIds = data.childIds
    if (data.phoneNumber) updated.phoneNumber = data.phoneNumber
    if (data.address) updated.address = data.address
    db.users[idx] = updated
    return updated
  },

  delete: async (id: string) => {
    await delay(300)
    const idx = db.users.findIndex(u => u.id === id)
    if (idx === -1) return { error: 'User not found' }
    db.users.splice(idx, 1)
    return { success: true }
  },
}

// Classes endpoints
export const mockClasses = {
  getAll: async () => {
    await delay(200)
    return db.classes
  },

  getByTeacher: async (teacherId: string) => {
    await delay(100)
    return db.classes.filter(c => c.teacherId === teacherId)
  },

  getByStudent: async (studentId: string) => {
    await delay(100)
    return db.classes.filter(c => c.studentIds.includes(studentId))
  },
}

// Grades endpoints
export const mockGrades = {
  getAll: async () => {
    await delay(200)
    return db.grades
  },

  getByStudent: async (studentId: string) => {
    await delay(100)
    return db.grades.filter(g => g.studentId === studentId)
  },

  getByTeacher: async (teacherId: string) => {
    await delay(100)
    return db.grades.filter(g => g.teacherId === teacherId)
  },

  create: async (data: Omit<MockGrade, 'id'>) => {
    await delay(300)
    const newGrade = { id: generateId('G'), ...data }
    db.grades.push(newGrade)
    return newGrade
  },

  bulkCreate: async (grades: Omit<MockGrade, 'id'>[]) => {
    await delay(500)
    const newGrades = grades.map(g => ({ id: generateId('G'), ...g }))
    db.grades.push(...newGrades)
    return newGrades
  },
}

// Attendance endpoints
export const mockAttendance = {
  getAll: async () => {
    await delay(200)
    return db.attendance
  },

  getByStudent: async (studentId: string) => {
    await delay(100)
    return db.attendance.filter(a => a.studentId === studentId)
  },

  getByClass: async (classId: string) => {
    await delay(100)
    return db.attendance.filter(a => a.classId === classId)
  },

  submit: async (records: Omit<MockAttendance, 'id'>[]) => {
    await delay(300)
    const newRecords = records.map(r => ({ id: generateId('A'), ...r }))
    db.attendance.push(...newRecords)
    return newRecords
  },
}

// Messages endpoints
export const mockMessages = {
  getByUser: async (userId: string) => {
    await delay(200)
    return db.messages.filter(m => m.senderId === userId || m.receiverId === userId)
  },

  send: async (data: Omit<MockMessage, 'id' | 'timestamp' | 'read'>) => {
    await delay(300)
    const newMsg = {
      id: generateId('M'),
      ...data,
      timestamp: new Date().toISOString(),
      read: false
    }
    db.messages.push(newMsg)
    return newMsg
  },

  markRead: async (messageId: string) => {
    await delay(100)
    const msg = db.messages.find(m => m.id === messageId)
    if (msg) msg.read = true
    return { success: true }
  },
}

// Fees endpoints
export const mockFees = {
  getAll: async () => {
    await delay(200)
    return db.fees
  },

  getByStudent: async (studentId: string) => {
    await delay(100)
    return db.fees.filter(f => f.studentId === studentId)
  },

  pay: async (feeId: string) => {
    await delay(500)
    const fee = db.fees.find(f => f.id === feeId)
    if (!fee) return { error: 'Fee not found' }
    fee.status = 'paid'
    fee.paidDate = new Date().toISOString().split('T')[0]
    return fee
  },
}

// Settings endpoints
export const mockSettings = {
  get: async () => {
    await delay(100)
    return db.settings
  },

  update: async (data: Partial<typeof db.settings>) => {
    await delay(300)
    db.settings = { ...db.settings, ...data }
    return db.settings
  },
}

// Export everything for server routes
export { db }
