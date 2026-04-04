import type { Student, Teacher, Class, ScheduleItem, AttendanceRecord, CurriculumItem } from '../types'

export const useData = () => {
  // Mock Students
  const students = useState<Student[]>('mockStudents', () => [
    { id: 'S001', name: 'Alexander Abernathy', initials: 'AA', role: 'student', email: 'alex@school.com', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0012', attendanceRate: 98.5, performanceScore: 88, lastPerformanceTrend: 'up' },
    { id: 'S002', name: 'Beatrice Bennett', initials: 'BB', role: 'student', email: 'beatrice@school.com', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0045', attendanceRate: 92.1, performanceScore: 76, lastPerformanceTrend: 'stable' },
    { id: 'S003', name: 'Caleb Hughes', initials: 'CH', role: 'student', email: 'caleb@school.com', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0089', attendanceRate: 85.0, performanceScore: 64, lastPerformanceTrend: 'down' },
    { id: 'S004', name: 'Diana Lawrence', initials: 'DL', role: 'student', email: 'diana@school.com', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0102', attendanceRate: 99.2, performanceScore: 92, lastPerformanceTrend: 'up' },
    { id: 'S005', name: 'Ethan Miller', initials: 'EM', role: 'student', email: 'ethan@school.com', grade: 'Grade 10', section: 'A', enrollmentId: '#2024-0134', attendanceRate: 94.4, performanceScore: 81, lastPerformanceTrend: 'stable' },
  ])

  // Mock Teachers
  const teachers = useState<Teacher[]>('mockTeachers', () => [
    { id: 'T001', name: 'Prof. James Wilson', initials: 'JW', role: 'teacher', email: 'j.wilson@school.com', subjects: ['Mathematics', 'Physics'], classes: ['C001', 'C002'] },
    { id: 'T002', name: 'Ms. Layla Hassan', initials: 'LH', role: 'teacher', email: 'l.hassan@school.com', subjects: ['History', 'Geography'], classes: ['C003'] },
  ])

  // Mock Classes
  const classes = useState<Class[]>('mockClasses', () => [
    { id: 'C001', name: 'Advanced Mathematics', grade: 'Grade 10', section: 'A', teacherId: 'T001', subject: 'Mathematics', room: 'Lab 204', studentIds: ['S001', 'S002', 'S003', 'S004', 'S005'] },
    { id: 'C002', name: 'Theoretical Physics', grade: 'Grade 12', section: 'B', teacherId: 'T001', subject: 'Physics', room: 'Auditorium 1', studentIds: ['S001'] },
  ])

  // Mock Attendance Records
  const attendanceRecords = useState<AttendanceRecord[]>('mockAttendance', () => [])

  // Helper: Get students for a specific class
  const getStudentsForClass = (classId: string) => {
    const classObj = classes.value.find(c => c.id === classId)
    if (!classObj) return []
    return students.value.filter(s => classObj.studentIds.includes(s.id))
  }

  // Helper: Save attendance roll
  const saveAttendance = (records: Omit<AttendanceRecord, 'id'>[]) => {
    const newRecords = records.map(r => ({ ...r, id: `A${Math.random().toString(36).substr(2, 9)}` }))
    attendanceRecords.value.push(...newRecords)
    return newRecords
  }

  return {
    students,
    teachers,
    classes,
    attendanceRecords,
    getStudentsForClass,
    saveAttendance
  }
}
