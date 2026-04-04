export const useLocale = () => {
  const currentLocale = useState('currentLocale', () => 'en')
  const direction = computed(() => currentLocale.value === 'ar' ? 'rtl' : 'ltr')

  const toggleLocale = () => {
    currentLocale.value = currentLocale.value === 'en' ? 'ar' : 'en'
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', direction.value)
      document.documentElement.setAttribute('lang', currentLocale.value)
    }
  }

  // Basic translation function
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        'dashboard': 'Dashboard',
        'students': 'Students',
        'classes': 'Classes',
        'attendance': 'Attendance',
        'progress': 'Progress',
        'curriculum': 'Curriculum',
        'reports': 'Reports',
        'prediction': 'AI Predictions',
        'bus-tracking': 'Bus Tracking',
        'fees': 'Fees',
        'settings': 'Settings',
        'logout': 'Logout',
        'search': 'Search...',
        'welcome': 'Welcome back, Administrator',
        'overview_desc': "Here's the curated overview of Prestige Academy's performance and operations for today.",
        'academic_overview': 'Academic Overview',
        'primary_student': 'Primary Student',
        'super_admin': 'Super Admin',
        'admin_account': 'Admin Account',
        'my_profile': 'My Profile',
        'account_settings': 'Account Settings',
        'sign_out': 'Sign Out',
        'grade': 'Grade',
        'section': 'Section'
      },
      ar: {
        'dashboard': 'لوحة التحكم',
        'students': 'الطلاب',
        'classes': 'الفصول الدراسية',
        'attendance': 'الحضور والغياب',
        'progress': 'التقدم الأكاديمي',
        'curriculum': 'المنهج الدراسي',
        'reports': 'التقارير',
        'prediction': 'توقعات الذكاء الاصطناعي',
        'bus-tracking': 'تتبع الحافلات',
        'fees': 'الرسوم الدراسية',
        'settings': 'الإعدادات',
        'logout': 'تسجيل الخروج',
        'search': 'بحث...',
        'welcome': 'مرحباً بك مجدداً، أيها المسؤول',
        'overview_desc': 'إليك نظرة عامة منسقة على أداء وعمليات أكاديمية برستيج لهذا اليوم.',
        'academic_overview': 'نظرة أكاديمية عامة',
        'primary_student': 'الطالب الأساسي',
        'super_admin': 'مسؤول عام',
        'admin_account': 'حساب المسؤول',
        'my_profile': 'ملفي الشخصي',
        'account_settings': 'إعدادات الحساب',
        'sign_out': 'تسجيل الخروج',
        'grade': 'الصف',
        'section': 'الفصل'
      }
    }
    return translations[currentLocale.value]?.[key] || key
  }

  return {
    currentLocale,
    direction,
    toggleLocale,
    t
  }
}
