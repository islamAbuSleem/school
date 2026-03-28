export const useSchedule = () => {
  const selectedGrade = useState('scheduleGrade', () => 'All Grades')
  const selectedTeacher = useState('scheduleTeacher', () => 'All Teachers')
  const viewMode = useState('scheduleViewMode', () => 'Week View')
  
  const grades = ['All Grades', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
  const teachers = ['All Teachers', 'Prof. James Wilson', 'Ms. Layla Hassan', 'Dr. Sarah Ahmed', 'Marcus Stone', 'Prof. Lee', 'Dr. Elena Rostova', 'Eng. Samer Ali', 'Coach Ryan', 'Prof. Omar Khalid']

  const setGrade = (grade: string) => {
    selectedGrade.value = grade
  }

  const setTeacher = (teacher: string) => {
    selectedTeacher.value = teacher
  }

  const setViewMode = (mode: string) => {
    viewMode.value = mode
  }

  return {
    selectedGrade,
    selectedTeacher,
    viewMode,
    grades,
    teachers,
    setGrade,
    setTeacher,
    setViewMode
  }
}
