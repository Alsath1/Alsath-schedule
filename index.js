import schedule from "./schedule.js";

window.addEventListener('DOMContentLoaded', () => {
  //Добавляем плагин isoWeek
  dayjs.extend(window.dayjs_plugin_isoWeek)

  //Получаем элементы со страницы, текущий день недели и номер текущей недели
  const scheduleList = document.querySelector('.schedule-list')
  const dayOfWeekElement = document.querySelector('.day-of-week')
  const currentDay = dayjs().isoWeekday()
  const currentWeek = dayjs().isoWeek()

  const dayOfWeek = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ]

  schedule.forEach(({dayName, lectures}) => {
    if (dayName === dayOfWeek[currentDay - 4]) {
      //Вставляем в HTML день недели
      dayOfWeekElement.textContent = dayName

      lectures.forEach(lecture => {
          if (currentWeek % 2 === 0 && lecture.week === 'even' || lecture.week === 'both') {
            //Если неделя четная
            //Создаем элемент списка li
            const liElement = document.createElement('li')
            liElement.innerHTML = `
                      <div>ВРЕМЯ: ${lecture.time}</div>
                      <div>ПАРА: ${lecture.name}</div>
                      <div>ЛЕКТОР: ${lecture.lector}</div>
                      <div>АУДИТОРИЯ: ${lecture.classroom}</div>
                    `
            //Добавляем li в общий список scheduleList
            scheduleList.append(liElement)
          } else if (currentWeek % 2 === 1 && lecture.week === 'odd' || lecture.week === 'both') {
            //Если неделя не четная
            //Создаем элемент списка li
            const liElement = document.createElement('li')
            liElement.innerHTML = `
                      <div>ВРЕМЯ: ${lecture.time}</div>
                      <div>ПАРА: ${lecture.name}</div>
                      <div>ЛЕКТОР: ${lecture.lector}</div>
                      <div>АУДИТОРИЯ: ${lecture.classroom}</div>
                    `
            //Добавляем li в общий список scheduleList
            scheduleList.append(liElement)
          }
        }
      )
    }

  })
})
