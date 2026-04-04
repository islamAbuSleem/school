export type UserRole = 'student' | 'teacher' | 'admin' | 'parent';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  initials: string;
}

export interface Parent extends User {
  role: 'parent';
  childIds: string[];
  phoneNumber: string;
  address: string;
}

export interface Student extends User {
  role: 'student';
  parentId: string;
  grade: string;
  section: string;
  enrollmentId: string;
  attendanceRate: number;
  performanceScore: number;
  lastPerformanceTrend: 'up' | 'down' | 'stable';
  behaviorPoints: number;
}

export interface Teacher extends User {
  role: 'teacher';
  subjects: string[];
  classes: string[]; 
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  section: string;
  teacherId: string;
  subject: string;
  room: string;
  studentIds: string[];
  termId: string;
  gradingSchemeId: string;
}

export interface LessonPlan {
  id: string;
  classId: string;
  date: string;
  title: string;
  objective: string;
  curriculumItemId: string;
  isCompleted: boolean;
  notes?: string;
}

export interface BehaviorRecord {
  id: string;
  studentId: string;
  teacherId: string;
  type: 'positive' | 'negative' | 'neutral';
  category: 'participation' | 'conduct' | 'assignment' | 'wellbeing';
  points: number;
  comment: string;
  date: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: string;
  status: 'present' | 'late' | 'absent' | 'excused';
  markedBy: string;
  lessonId?: string;
}

export interface CurriculumItem {
  id: string;
  subject: string;
  grade: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  url: string;
}
