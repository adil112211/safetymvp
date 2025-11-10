// Application Data
const appData = {
  currentUser: {
    name: 'Адиль Ргайбек',
    username: '@ivanpetrov',
    telegramId: '123456789',
    testsCompleted: 12,
    averageScore: 89,
    certificatesEarned: 8,
    violationsReported: 3,
    enrolledCourses: 3,
    completedCourses: 1
  },
  courses: [
    {
      id: 1,
      title: 'Основы пожарной безопасности',
      description: 'Полный курс по правилам поведения при пожаре, использованию огнетушителей и эвакуации персонала',
      category: 'Пожарная безопасность',
      duration: '45 минут',
      lessonsCount: 8,
      difficulty: 'Начальный',
      rating: 4.8,
      reviewsCount: 124,
      icon: '🔥',
      progress: 62,
      status: 'in_progress',
      lessons: [
        { id: 1, title: 'Введение в пожарную безопасность', duration: '5 минут', status: 'completed' },
        { id: 2, title: 'Типы пожаров и их классификация', duration: '8 минут', status: 'completed' },
        { id: 3, title: 'Огнетушители: виды и применение', duration: '10 минут', status: 'in_progress' },
        { id: 4, title: 'Процедура эвакуации', duration: '7 минут', status: 'locked' },
        { id: 5, title: 'План эвакуации вашего здания', duration: '6 минут', status: 'locked' },
        { id: 6, title: 'Первая помощь при ожогах', duration: '9 минут', status: 'locked' },
        { id: 7, title: 'Практические упражнения', duration: '12 минут', status: 'locked' },
        { id: 8, title: 'Финальный тест', duration: '20 минут', status: 'locked' }
      ]
    },
    {
      id: 2,
      title: 'Работа на высоте',
      description: 'Обучение безопасной работе на высоте более 2 метров, использование страховки и снаряжения',
      category: 'Работа на высоте',
      duration: '60 минут',
      lessonsCount: 10,
      difficulty: 'Средний',
      rating: 4.6,
      reviewsCount: 87,
      icon: '⬆️',
      progress: 0,
      status: 'not_started',
      lessons: [
        { id: 1, title: 'Нормативная база', duration: '6 минут', status: 'available' },
        { id: 2, title: 'Оценка рисков', duration: '8 минут', status: 'locked' },
        { id: 3, title: 'СИЗ для работы на высоте', duration: '10 минут', status: 'locked' },
        { id: 4, title: 'Использование страховочного оборудования', duration: '12 минут', status: 'locked' },
        { id: 5, title: 'Установка лесов', duration: '8 минут', status: 'locked' },
        { id: 6, title: 'Работа на крышах', duration: '9 минут', status: 'locked' },
        { id: 7, title: 'Аварийные ситуации', duration: '7 минут', status: 'locked' },
        { id: 8, title: 'Спасательные работы', duration: '10 минут', status: 'locked' },
        { id: 9, title: 'Практика', duration: '15 минут', status: 'locked' },
        { id: 10, title: 'Экзамен', duration: '25 минут', status: 'locked' }
      ]
    },
    {
      id: 3,
      title: 'Электробезопасность',
      description: 'Правила работы с электрооборудованием, защита от поражения электрическим током',
      category: 'Электробезопасность',
      duration: '55 минут',
      lessonsCount: 9,
      difficulty: 'Продвинутый',
      rating: 4.5,
      reviewsCount: 65,
      icon: '⚡',
      progress: 100,
      status: 'completed',
      lessons: [
        { id: 1, title: 'Основы электричества', duration: '8 минут', status: 'completed' },
        { id: 2, title: 'Опасность электротока', duration: '7 минут', status: 'completed' },
        { id: 3, title: 'Классификация помещений', duration: '6 минут', status: 'completed' },
        { id: 4, title: 'Защитные меры', duration: '9 минут', status: 'completed' },
        { id: 5, title: 'Заземление', duration: '8 минут', status: 'completed' },
        { id: 6, title: 'Первая помощь при ударе током', duration: '10 минут', status: 'completed' },
        { id: 7, title: 'Работа с электроинструментом', duration: '7 минут', status: 'completed' },
        { id: 8, title: 'Практические примеры', duration: '12 минут', status: 'completed' },
        { id: 9, title: 'Итоговый тест', duration: '20 минут', status: 'completed' }
      ]
    },
    {
      id: 4,
      title: 'Работа с химическими веществами',
      description: 'Безопасное обращение с химикатами, маркировка, хранение и утилизация опасных веществ',
      category: 'Химическая безопасность',
      duration: '50 минут',
      lessonsCount: 7,
      difficulty: 'Средний',
      rating: 4.7,
      reviewsCount: 56,
      icon: '🧪',
      progress: 0,
      status: 'not_started',
      lessons: [
        { id: 1, title: 'Классификация химических веществ', duration: '8 минут', status: 'available' },
        { id: 2, title: 'Маркировка и знаки опасности', duration: '7 минут', status: 'locked' },
        { id: 3, title: 'СИЗ при работе с химикатами', duration: '9 минут', status: 'locked' },
        { id: 4, title: 'Правила хранения', duration: '6 минут', status: 'locked' },
        { id: 5, title: 'Действия при разливе', duration: '10 минут', status: 'locked' },
        { id: 6, title: 'Утилизация отходов', duration: '8 минут', status: 'locked' },
        { id: 7, title: 'Проверка знаний', duration: '15 минут', status: 'locked' }
      ]
    },
    {
      id: 5,
      title: 'Эргономика рабочего места',
      description: 'Правила организации рабочего места, профилактика травм спины и повторяющихся напряжений',
      category: 'Эргономика',
      duration: '35 минут',
      lessonsCount: 6,
      difficulty: 'Начальный',
      rating: 4.4,
      reviewsCount: 92,
      icon: '🪑',
      progress: 30,
      status: 'in_progress',
      lessons: [
        { id: 1, title: 'Основы эргономики', duration: '5 минут', status: 'completed' },
        { id: 2, title: 'Правильная посадка', duration: '6 минут', status: 'in_progress' },
        { id: 3, title: 'Освещение рабочего места', duration: '5 минут', status: 'locked' },
        { id: 4, title: 'Профилактика усталости', duration: '7 минут', status: 'locked' },
        { id: 5, title: 'Упражнения для офиса', duration: '8 минут', status: 'locked' },
        { id: 6, title: 'Итоговый тест', duration: '10 минут', status: 'locked' }
      ]
    },
    {
      id: 6,
      title: 'Первая медицинская помощь',
      description: 'Основные приёмы оказания первой помощи при травмах, ожогах и других чрезвычайных ситуациях',
      category: 'Медицина',
      duration: '75 минут',
      lessonsCount: 12,
      difficulty: 'Средний',
      rating: 4.9,
      reviewsCount: 234,
      icon: '🚑',
      progress: 0,
      status: 'not_started',
      lessons: [
        { id: 1, title: 'Введение в первую помощь', duration: '5 минут', status: 'available' },
        { id: 2, title: 'Оценка состояния пострадавшего', duration: '8 минут', status: 'locked' },
        { id: 3, title: 'Сердечно-легочная реанимация', duration: '12 минут', status: 'locked' },
        { id: 4, title: 'Помощь при кровотечениях', duration: '10 минут', status: 'locked' },
        { id: 5, title: 'Переломы и вывихи', duration: '9 минут', status: 'locked' },
        { id: 6, title: 'Ожоги и обморожения', duration: '8 минут', status: 'locked' },
        { id: 7, title: 'Отравления', duration: '7 минут', status: 'locked' },
        { id: 8, title: 'Поражение электрическим током', duration: '6 минут', status: 'locked' },
        { id: 9, title: 'Транспортировка пострадавших', duration: '10 минут', status: 'locked' },
        { id: 10, title: 'Аптечка первой помощи', duration: '5 минут', status: 'locked' },
        { id: 11, title: 'Практические упражнения', duration: '15 минут', status: 'locked' },
        { id: 12, title: 'Финальный экзамен', duration: '20 минут', status: 'locked' }
      ]
    }
  ],
  tests: [
    {
      id: 1,
      title: 'Основы пожарной безопасности',
      description: 'Правила поведения при пожаре и использование огнетушителей',
      duration: '15 минут',
      questionsCount: 10,
      difficulty: 'Начальный'
    },
    {
      id: 2,
      title: 'Работа на высоте',
      description: 'Техника безопасности при работе на высоте более 2 метров',
      duration: '20 минут',
      questionsCount: 15,
      difficulty: 'Средний'
    },
    {
      id: 3,
      title: 'Электробезопасность',
      description: 'Правила работы с электрооборудованием и защита от поражения током',
      duration: '25 минут',
      questionsCount: 20,
      difficulty: 'Продвинутый'
    }
  ],
  questionBank: [
    {
      question: 'Какой класс огнетушителя используется для тушения электрооборудования?',
      options: ['Класс A', 'Класс B', 'Класс C', 'Класс D'],
      correct: 2
    },
    {
      question: 'На какой высоте обязательно использование страховочного пояса?',
      options: ['Выше 1 метра', 'Выше 1.5 метров', 'Выше 2 метров', 'Выше 3 метров'],
      correct: 2
    },
    {
      question: 'Какое напряжение считается безопасным для человека?',
      options: ['До 12 В', 'До 24 В', 'До 42 В', 'До 50 В'],
      correct: 2
    },
    {
      question: 'Как часто нужно проверять огнетушители?',
      options: ['Каждый месяц', 'Каждые 3 месяца', 'Каждые 6 месяцев', 'Каждый год'],
      correct: 2
    },
    {
      question: 'Какой цвет каски носят инженеры на стройке?',
      options: ['Белый', 'Жёлтый', 'Красный', 'Синий'],
      correct: 0
    },
    {
      question: 'Что делать при обнаружении пожара в первую очередь?',
      options: ['Тушить самостоятельно', 'Вызвать пожарных', 'Эвакуироваться', 'Сообщить руководству'],
      correct: 1
    },
    {
      question: 'Минимальная высота ограждения на строительной площадке?',
      options: ['0.5 метра', '1 метр', '1.2 метра', '1.5 метра'],
      correct: 2
    },
    {
      question: 'Какие СИЗ обязательны при сварочных работах?',
      options: ['Только маска', 'Маска и перчатки', 'Маска, перчатки и спецодежда', 'Только спецодежда'],
      correct: 2
    },
    {
      question: 'Срок действия инструктажа по технике безопасности?',
      options: ['3 месяца', '6 месяцев', '1 год', '2 года'],
      correct: 1
    },
    {
      question: 'Что означает красный знак безопасности?',
      options: ['Разрешение', 'Запрет', 'Предупреждение', 'Информация'],
      correct: 1
    }
  ],
  certificates: [
    {
      id: 'CERT-2025-001',
      testName: 'Основы пожарной безопасности',
      score: 92,
      date: '2025-10-15'
    },
    {
      id: 'CERT-2025-002',
      testName: 'Работа на высоте',
      score: 88,
      date: '2025-10-22'
    }
  ],
  leaderboard: [
    { rank: 1, name: 'Айдос К.', score: 950, testsCompleted: 15, isCurrentUser: false },
    { rank: 2, name: 'Алмат М.', score: 920, testsCompleted: 14, isCurrentUser: false },
    { rank: 3, name: 'Индира П.', score: 890, testsCompleted: 12, isCurrentUser: true },
    { rank: 4, name: 'Ольга С.', score: 870, testsCompleted: 13, isCurrentUser: false },
    { rank: 5, name: 'Дмитрий В.', score: 850, testsCompleted: 11, isCurrentUser: false }
  ],
  violations: [
    {
      id: 1,
      category: 'Нет защитной каски',
      description: 'Рабочий на стройплощадке без каски',
      date: '2025-11-01',
      status: 'Рассмотрено'
    },
    {
      id: 2,
      category: 'Неисправное оборудование',
      description: 'Оборванный кабель на станке',
      date: '2025-11-03',
      status: 'В обработке'
    }
  ]
};

// State Management
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let testQuestions = [];
let currentCourse = null;
let currentLesson = null;
let filteredCourses = [];

// Initialize App
function initApp() {
  loadDashboard();
  renderCourses();
  renderTests();
  renderCertificates();
  renderLeaderboard();
  renderViolations();
  setupEventListeners();
  
  // Set current date for violation form
  const now = new Date();
  const dateString = now.toISOString().slice(0, 16);
  document.getElementById('violation-date').value = dateString;
}

// View Navigation
function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Show selected view
  const selectedView = document.getElementById(`view-${viewName}`);
  if (selectedView) {
    selectedView.classList.add('active');
  }
  
  // Update navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  const activeNavItem = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
  
  // Update header title
  const titles = {
    dashboard: 'Техника Безопасности',
    courses: 'Курсы',
    'course-details': 'Детали курса',
    lesson: 'Урок',
    tests: 'Тесты',
    'test-taking': 'Тест',
    results: 'Результаты',
    certificates: 'Сертификаты',
    report: 'Нарушения',
    leaderboard: 'Лидеры',
    ai: 'AI Помощник',
    profile: 'Профиль'
  };
  
  document.getElementById('header-title').textContent = titles[viewName] || 'Техника Безопасности';
}

// Dashboard
function loadDashboard() {
  document.getElementById('user-name').textContent = appData.currentUser.name;
  document.getElementById('stat-tests').textContent = appData.currentUser.testsCompleted;
  document.getElementById('stat-score').textContent = `${appData.currentUser.averageScore}%`;
  document.getElementById('stat-certs').textContent = appData.currentUser.certificatesEarned;
  document.getElementById('stat-violations').textContent = appData.currentUser.violationsReported;
}

// Courses
function renderCourses() {
  filteredCourses = [...appData.courses];
  displayCourses();
}

function displayCourses() {
  const coursesList = document.getElementById('courses-list');
  coursesList.innerHTML = '';
  
  if (filteredCourses.length === 0) {
    coursesList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-text">Курсы не найдены</div>
      </div>
    `;
    return;
  }
  
  filteredCourses.forEach(course => {
    const difficultyClass = course.difficulty === 'Начальный' ? 'easy' : 
                           course.difficulty === 'Средний' ? 'medium' : 'hard';
    
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.onclick = () => showCourseDetails(course.id);
    
    let progressHTML = '';
    if (course.progress > 0) {
      progressHTML = `
        <div class="course-progress">
          <div class="progress-label">
            <span>Прогресс</span>
            <span>${course.progress}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${course.progress}%"></div>
          </div>
        </div>
      `;
    }
    
    courseCard.innerHTML = `
      <div class="course-card-header">
        <div class="course-icon">${course.icon}</div>
        <div class="course-info">
          <div class="course-category">${course.category}</div>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-description">${course.description}</p>
          <div class="course-meta">
            <span>⏱ ${course.duration}</span>
            <span>📚 ${course.lessonsCount} уроков</span>
          </div>
          ${progressHTML}
        </div>
      </div>
      <div class="course-stats">
        <div>
          <span class="course-difficulty ${difficultyClass}">${course.difficulty}</span>
        </div>
        <div class="course-rating">
          <span>⭐ ${course.rating}</span>
          <span style="color: var(--tg-theme-hint-color); font-size: var(--font-size-xs);">(${course.reviewsCount})</span>
        </div>
      </div>
    `;
    
    coursesList.appendChild(courseCard);
  });
}

function filterCourses() {
  const searchTerm = document.getElementById('course-search').value.toLowerCase();
  const category = document.getElementById('course-category').value;
  
  filteredCourses = appData.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                         course.description.toLowerCase().includes(searchTerm);
    const matchesCategory = !category || course.category === category;
    return matchesSearch && matchesCategory;
  });
  
  displayCourses();
}

function showCourseDetails(courseId) {
  showLoading();
  
  setTimeout(() => {
    currentCourse = appData.courses.find(c => c.id === courseId);
    if (!currentCourse) return;
    
    const difficultyClass = currentCourse.difficulty === 'Начальный' ? 'easy' : 
                           currentCourse.difficulty === 'Средний' ? 'medium' : 'hard';
    
    const detailsContainer = document.getElementById('course-details-content');
    
    let actionButton = '';
    if (currentCourse.status === 'completed') {
      actionButton = '<button class="btn btn-primary btn-large" onclick="showToast(\'Вы уже завершили этот курс!\');">✓ Курс завершён</button>';
    } else if (currentCourse.status === 'in_progress') {
      actionButton = '<button class="btn btn-primary btn-large" onclick="showToast(\'Продолжаем обучение...\');">▶ Продолжить курс</button>';
    } else {
      actionButton = '<button class="btn btn-primary btn-large" onclick="enrollInCourse()">📝 Записаться на курс</button>';
    }
    
    detailsContainer.innerHTML = `
      <div class="course-hero">
        <div class="course-hero-icon">${currentCourse.icon}</div>
        <h2 class="course-hero-title">${currentCourse.title}</h2>
        <p class="course-hero-category">${currentCourse.category}</p>
        <div class="course-hero-stats">
          <span>⏱ ${currentCourse.duration}</span>
          <span>📚 ${currentCourse.lessonsCount} уроков</span>
          <span>⭐ ${currentCourse.rating}</span>
        </div>
      </div>
      
      <div class="course-details-content">
        <div class="course-section">
          <h3 class="course-section-title">О курсе</h3>
          <p>${currentCourse.description}</p>
          <span class="course-difficulty ${difficultyClass}" style="display: inline-block; margin-top: 12px;">${currentCourse.difficulty}</span>
        </div>
        
        <div class="course-section">
          <h3 class="course-section-title">Программа курса</h3>
          <div class="lessons-list">
            ${currentCourse.lessons.map((lesson, index) => {
              const lessonStatus = lesson.status === 'completed' ? '✓' : 
                                 lesson.status === 'in_progress' ? '▶' : '🔒';
              const statusClass = lesson.status === 'locked' ? 'locked' : '';
              return `
                <div class="lesson-item ${statusClass}" onclick="${lesson.status !== 'locked' ? `showLesson(${currentCourse.id}, ${lesson.id})` : 'showToast(\'Урок заблокирован\');'}">
                  <div class="lesson-status ${lesson.status}">${lessonStatus}</div>
                  <div class="lesson-info">
                    <div class="lesson-title">Урок ${index + 1}: ${lesson.title}</div>
                    <div class="lesson-duration">⏱ ${lesson.duration}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        
        <div class="course-section">
          <h3 class="course-section-title">Отзывы (${currentCourse.reviewsCount})</h3>
          <div class="reviews-section">
            <div class="review-card">
              <div class="review-header">
                <span class="review-author">Мария К.</span>
                <span class="review-rating">⭐⭐⭐⭐⭐</span>
              </div>
              <p class="review-text">Отличный курс! Всё понятно и доступно объяснено. Рекомендую всем новичкам.</p>
            </div>
            <div class="review-card">
              <div class="review-header">
                <span class="review-author">Алексей М.</span>
                <span class="review-rating">⭐⭐⭐⭐</span>
              </div>
              <p class="review-text">Хорошая программа обучения, много практических примеров.</p>
            </div>
          </div>
        </div>
        
        <div class="course-action">
          ${actionButton}
        </div>
      </div>
    `;
    
    hideLoading();
    showView('course-details');
  }, 500);
}

function enrollInCourse() {
  showLoading();
  
  setTimeout(() => {
    if (currentCourse) {
      currentCourse.status = 'in_progress';
      appData.currentUser.enrolledCourses++;
      showToast('Вы успешно записаны на курс!');
      showCourseDetails(currentCourse.id);
    }
    hideLoading();
  }, 800);
}

function showLesson(courseId, lessonId) {
  showLoading();
  
  setTimeout(() => {
    const course = appData.courses.find(c => c.id === courseId);
    if (!course) return;
    
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    currentCourse = course;
    currentLesson = lesson;
    
    const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
    const isFirstLesson = lessonIndex === 0;
    const isLastLesson = lessonIndex === course.lessons.length - 1;
    
    const lessonContainer = document.getElementById('lesson-content');
    lessonContainer.innerHTML = `
      <div class="lesson-header">
        <div class="lesson-header-info">
          <span class="lesson-number">Урок ${lessonIndex + 1}/${course.lessons.length}</span>
          <span class="lesson-duration">⏱ ${lesson.duration}</span>
        </div>
        <h2 class="lesson-header-title">${lesson.title}</h2>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${((lessonIndex + 1) / course.lessons.length) * 100}%"></div>
        </div>
      </div>
      
      <div class="lesson-content-section">
        <div class="video-player">
          <div class="play-button" onclick="showToast('Видео проигрыватель (демо)');">▶</div>
        </div>
        
        <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-12);">${lesson.title}</h3>
        
        <p class="lesson-description">
          В этом уроке вы узнаете основные принципы и правила, которые необходимо соблюдать для обеспечения безопасности. 
          Материал представлен в доступной форме с практическими примерами.
        </p>
        
        <div class="key-takeaways">
          <h4>Ключевые моменты:</h4>
          <ul>
            <li>Основные определения и термины</li>
            <li>Правила и требования безопасности</li>
            <li>Практические рекомендации</li>
            <li>Типичные ошибки и как их избежать</li>
            <li>Действия в чрезвычайных ситуациях</li>
          </ul>
        </div>
      </div>
      
      <div class="lesson-navigation">
        <button class="btn btn-secondary" onclick="${isFirstLesson ? 'showCourseDetails(' + courseId + ')' : 'showLesson(' + courseId + ', ' + course.lessons[lessonIndex - 1].id + ')'}" ${isFirstLesson ? '' : ''}>
          ${isFirstLesson ? '← К курсу' : '← Предыдущий'}
        </button>
        <button class="btn btn-primary" onclick="${isLastLesson ? 'completeLesson()' : 'showLesson(' + courseId + ', ' + course.lessons[lessonIndex + 1].id + ')'}">
          ${isLastLesson ? 'Завершить ✓' : 'Следующий →'}
        </button>
      </div>
    `;
    
    hideLoading();
    showView('lesson');
  }, 500);
}

function completeLesson() {
  showToast('Урок завершён! Отличная работа!');
  if (currentLesson) {
    currentLesson.status = 'completed';
  }
  setTimeout(() => {
    if (currentCourse) {
      showCourseDetails(currentCourse.id);
    }
  }, 1000);
}

// Tests
function renderTests() {
  const testsList = document.getElementById('tests-list');
  testsList.innerHTML = '';
  
  appData.tests.forEach(test => {
    const testCard = document.createElement('div');
    testCard.className = 'test-card';
    testCard.innerHTML = `
      <div class="test-card-header">
        <h3 class="test-title">${test.title}</h3>
        <p class="test-description">${test.description}</p>
        <div class="test-meta">
          <span>⏱ ${test.duration}</span>
          <span>📝 ${test.questionsCount} вопросов</span>
        </div>
        <span class="test-difficulty">${test.difficulty}</span>
      </div>
      <button class="btn btn-primary btn-large" onclick="startTest(${test.id})">
        Начать тест
      </button>
    `;
    testsList.appendChild(testCard);
  });
}

// Start Test
function startTest(testId) {
  showLoading();
  
  setTimeout(() => {
    currentTest = appData.tests.find(t => t.id === testId);
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Generate random questions for this test
    testQuestions = [];
    const questionCount = currentTest.questionsCount;
    const availableQuestions = [...appData.questionBank];
    
    for (let i = 0; i < Math.min(questionCount, availableQuestions.length); i++) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      testQuestions.push(availableQuestions[randomIndex]);
      availableQuestions.splice(randomIndex, 1);
    }
    
    // Initialize answers array
    userAnswers = new Array(testQuestions.length).fill(null);
    
    showView('test-taking');
    displayQuestion();
    hideLoading();
  }, 800);
}

// Display Question
function displayQuestion() {
  const question = testQuestions[currentQuestionIndex];
  const totalQuestions = testQuestions.length;
  
  document.getElementById('current-question').textContent = currentQuestionIndex + 1;
  document.getElementById('total-questions').textContent = totalQuestions;
  document.getElementById('question-text').textContent = question.question;
  
  // Update progress bar
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  
  // Render options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.textContent = option;
    button.onclick = () => selectOption(index);
    
    if (userAnswers[currentQuestionIndex] === index) {
      button.classList.add('selected');
    }
    
    optionsContainer.appendChild(button);
  });
  
  // Update navigation buttons
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  
  prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === totalQuestions - 1) {
    nextBtn.textContent = 'Завершить тест';
  } else {
    nextBtn.textContent = 'Далее →';
  }
}

// Select Option
function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  displayQuestion();
}

// Previous Question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

// Next Question
function nextQuestion() {
  if (userAnswers[currentQuestionIndex] === null) {
    showToast('Пожалуйста, выберите ответ');
    return;
  }
  
  if (currentQuestionIndex < testQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    submitTest();
  }
}

// Submit Test
function submitTest() {
  showLoading();
  
  setTimeout(() => {
    // Calculate results
    let correctAnswers = 0;
    testQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    
    const score = Math.round((correctAnswers / testQuestions.length) * 100);
    const passed = score >= 85;
    
    // Display results
    document.getElementById('results-icon').textContent = passed ? '🎉' : '😔';
    document.getElementById('results-score').textContent = `${score}%`;
    document.getElementById('results-status').textContent = passed ? 'Тест пройден!' : 'Тест не пройден';
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('incorrect-answers').textContent = testQuestions.length - correctAnswers;
    
    // Action buttons
    const actionsContainer = document.getElementById('results-actions');
    actionsContainer.innerHTML = '';
    
    if (passed) {
      const certBtn = document.createElement('button');
      certBtn.className = 'btn btn-primary btn-large';
      certBtn.textContent = '🏆 Получить сертификат';
      certBtn.onclick = () => generateCertificate(score);
      actionsContainer.appendChild(certBtn);
    }
    
    const retakeBtn = document.createElement('button');
    retakeBtn.className = 'btn btn-secondary btn-large';
    retakeBtn.textContent = '🔄 Пройти заново';
    retakeBtn.onclick = () => startTest(currentTest.id);
    actionsContainer.appendChild(retakeBtn);
    
    const dashboardBtn = document.createElement('button');
    dashboardBtn.className = 'btn btn-secondary btn-large';
    dashboardBtn.textContent = '🏠 На главную';
    dashboardBtn.onclick = () => showView('dashboard');
    actionsContainer.appendChild(dashboardBtn);
    
    showView('results');
    hideLoading();
    
    // Update stats
    appData.currentUser.testsCompleted++;
    if (passed) {
      appData.currentUser.certificatesEarned++;
    }
    loadDashboard();
  }, 1000);
}

// Generate Certificate
function generateCertificate(score) {
  showLoading();
  
  setTimeout(() => {
    const certId = `CERT-2025-${String(appData.certificates.length + 1).padStart(3, '0')}`;
    const newCert = {
      id: certId,
      testName: currentTest.title,
      score: score,
      date: new Date().toISOString().split('T')[0]
    };
    
    appData.certificates.unshift(newCert);
    renderCertificates();
    
    hideLoading();
    showToast('Сертификат успешно создан!');
    showView('certificates');
  }, 1500);
}

// Certificates
function renderCertificates() {
  const certsList = document.getElementById('certificates-list');
  certsList.innerHTML = '';
  
  if (appData.certificates.length === 0) {
    certsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📜</div>
        <div class="empty-state-text">У вас пока нет сертификатов</div>
      </div>
    `;
    return;
  }
  
  appData.certificates.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'certificate-card';
    certCard.innerHTML = `
      <div class="certificate-id">${cert.id}</div>
      <div class="certificate-title">${cert.testName}</div>
      <div class="certificate-details">
        <span>Балл: ${cert.score}%</span>
        <span>Дата: ${formatDate(cert.date)}</span>
      </div>
      <div class="certificate-actions">
        <button class="btn btn-primary" onclick="showToast('Скачивание начато...')">
          📥 Скачать
        </button>
        <button class="btn btn-secondary" onclick="showToast('Поделиться...')">
          📤 Поделиться
        </button>
      </div>
    `;
    certsList.appendChild(certCard);
  });
}

// Violations
function renderViolations() {
  const violationsList = document.getElementById('violations-list');
  violationsList.innerHTML = '';
  
  if (appData.violations.length === 0) {
    violationsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">✓</div>
        <div class="empty-state-text">Нарушений не зафиксировано</div>
      </div>
    `;
    return;
  }
  
  appData.violations.forEach(violation => {
    const violationCard = document.createElement('div');
    violationCard.className = 'violation-card';
    const statusClass = violation.status === 'Рассмотрено' ? 'resolved' : 'pending';
    
    violationCard.innerHTML = `
      <div class="violation-header">
        <div class="violation-category">${violation.category}</div>
        <span class="violation-status ${statusClass}">${violation.status}</span>
      </div>
      <div class="violation-description">${violation.description}</div>
      <div class="violation-date">📅 ${formatDate(violation.date)}</div>
    `;
    violationsList.appendChild(violationCard);
  });
}

// Handle Photo Upload
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('photo-preview').innerHTML = `
        <img src="${e.target.result}" alt="Preview">
      `;
    };
    reader.readAsDataURL(file);
  }
}

// Leaderboard
function renderLeaderboard() {
  const leaderboardList = document.getElementById('leaderboard-list');
  leaderboardList.innerHTML = '';
  
  appData.leaderboard.forEach(user => {
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    if (user.isCurrentUser) {
      item.classList.add('current-user');
    }
    
    let rankBadgeClass = 'regular';
    if (user.rank === 1) rankBadgeClass = 'gold';
    else if (user.rank === 2) rankBadgeClass = 'silver';
    else if (user.rank === 3) rankBadgeClass = 'bronze';
    
    item.innerHTML = `
      <div class="rank-badge ${rankBadgeClass}">${user.rank}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${user.name}</div>
        <div class="leaderboard-tests">${user.testsCompleted} тестов</div>
      </div>
      <div class="leaderboard-score">${user.score}</div>
    `;
    
    leaderboardList.appendChild(item);
  });
}

function filterLeaderboard(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  showToast(`Фильтр: ${filter === 'month' ? 'Этот месяц' : 'Всё время'}`);
}

// AI Assistant
function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatMessage(message, true);
  input.value = '';
  
  // Simulate AI response
  setTimeout(() => {
    const responses = [
      'Для тушения электрооборудования используйте огнетушитель класса C. Важно помнить, что перед началом тушения необходимо обесточить оборудование.',
      'При работе на высоте обязательно используйте страховочный пояс, проверьте исправность всех креплений и убедитесь в наличии защитной каски.',
      'В случае обнаружения пожара немедленно вызовите пожарных по номеру 101, сообщите о пожаре руководству и начните эвакуацию людей.',
      'Средства индивидуальной защиты (СИЗ) должны быть сертифицированы и соответствовать виду выполняемых работ. Регулярно проверяйте их состояние.'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    addChatMessage(randomResponse, false);
  }, 1000);
}

function askQuestion(question) {
  document.getElementById('chat-input').value = question;
  sendMessage();
}

function addChatMessage(text, isUser) {
  const messagesContainer = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${isUser ? 'user-message' : 'ai-message'}`;
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${isUser ? '👤' : '🤖'}</div>
    <div class="message-bubble">${text}</div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Event Listeners
function setupEventListeners() {
  // Violation Form
  document.getElementById('violation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const category = document.getElementById('violation-category').value;
    const description = document.getElementById('violation-description').value;
    const date = document.getElementById('violation-date').value;
    
    if (!category || !description) {
      showToast('Заполните все поля');
      return;
    }
    
    showLoading();
    
    setTimeout(() => {
      const newViolation = {
        id: appData.violations.length + 1,
        category: category,
        description: description,
        date: date.split('T')[0],
        status: 'В обработке'
      };
      
      appData.violations.unshift(newViolation);
      appData.currentUser.violationsReported++;
      
      renderViolations();
      loadDashboard();
      
      // Reset form
      document.getElementById('violation-form').reset();
      document.getElementById('photo-preview').innerHTML = '<div class="photo-placeholder">📷 Загрузить фото</div>';
      const now = new Date();
      document.getElementById('violation-date').value = now.toISOString().slice(0, 16);
      
      hideLoading();
      showToast('Нарушение успешно зафиксировано!');
    }, 1000);
  });
  
  // Chat input enter key
  document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Profile data
  document.getElementById('profile-name').textContent = appData.currentUser.name;
  document.getElementById('profile-username').textContent = appData.currentUser.username;
}

// Utility Functions
function showLoading() {
  document.getElementById('loading-overlay').classList.add('show');
}

function hideLoading() {
  document.getElementById('loading-overlay').classList.remove('show');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// Back button handler
window.addEventListener('popstate', function() {
  showView('courses');
});

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}