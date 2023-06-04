const schedule = [
  {
    dayName: 'Понедельник',
    lectures: [
      {
        name: 'Физическая культура',
        time: '09:00-10:30',
        lector: 'Аринова К.И.',
        classroom: 'Спорт.Зал',
        week: 'odd',
      },
      {
        name: 'Математика',
        time: '10:40-12:10',
        lector: 'Погонышева В.Н.',
        classroom: 'Ауд. 116',
        week: 'both',
      },
      {
        name: 'Литература народов России',
        time: '12:30-14:00',
        lector: 'Гунченко А.В.',
        classroom: 'Ауд. 302',
        week: 'both',
      },
    ]
  },
  {
    dayName: 'Вторник',
    lectures: [
      {
        name: 'День самостоятельной работы',
        time: '-',
        lector: '-',
        classroom: '-',
        week: 'both',
      },
    ]
  },
  {
    dayName: 'Среда',
    lectures: [
      {
        name: 'Математика',
        time: '09:00-10:30',
        lector: 'Погонышева В.Н.',
        classroom: 'Ауд. 116',
        week: 'both',
      },
      {
        name: 'Обществознание',
        time: '10:40-12:10',
        lector: 'Кузнецов Н.В.',
        classroom: 'Ауд. 114',
        week: 'odd',
      },
      {
        name: 'Математика',
        time: '10:40-12:10',
        lector: 'Погонышева В.Н.',
        classroom: 'Ауд. 116',
        week: 'even',
      },  
      {
        name: 'Иностранный язык',
        time: '12:30-14:00',
        lector: 'Наволоцкая Н.Ю./Писарева Е.А.',
        classroom: 'ауд 216/ауд 206',
        week: 'both',
      },
    ]
  },
  {
    dayName: 'Четверг',
    lectures: [
      {
        name: 'Физическая культура',
        time: '09:00-10:30',
        lector: 'Аринова К.И.',
        classroom: 'Спорт.Зал',
        week: 'both',
      },
      {
        name: 'Информатика',
        time: '10:40-12:10',
        lector: 'Бурылов В.С.',
        classroom: 'Ауд. 207',
        week: 'both',
      },
      {
        name: 'История',
        time: '12:30-14:00',
        lector: 'Панова О.В.',
        classroom: 'Ауд. 211',
        week: 'both',
      },
    ]
  },
  {
    dayName: 'Пятница',
    lectures: [
      {
        name: 'Информатика',
        time: '12:30-14:00',
        lector: 'Бурылов В.С.',
        classroom: 'Ауд. 220',
        week: 'even',
      },
      {
        name: 'Физика',
        time: '14:10-15:40',
        lector: 'Лавринович К.В.',
        classroom: 'Ауд. 120',
        week: 'both',
      },
      {
        name: 'Литература',
        time: '16:00-17:30',
        lector: 'Рашидова Л.А.',
        classroom: 'Ауд. 303',
        week: 'both',
      },
    ]
  },
  {
    dayName: 'Суббота',
    lectures: [
      {
        name: 'Русский язык',
        time: '10:40-12:10',
        lector: 'Рашидова Л.А.',
        classroom: 'Ауд. 305',
        week: 'both',
      },
      {
        name: 'ОБЖ',
        time: '12:30-14:00',
        lector: 'Бартенев Д.А.',
        classroom: 'Ауд. 120',
        week: 'both',
      },
    ]
  },
]

export  default schedule
