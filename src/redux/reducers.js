import { initialState } from 'store'
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      //filter if the reminder already exists
      const filtered = [
        ...state.reminders.filter(
          (reminder) => reminder.key !== state.selectedReminder
        ),
      ]
      const added = [...filtered, action.message]
      const sortedReminders = added.sort((a, b) => a.time.localeCompare(b.time))

      return {
        reminders: sortedReminders,
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions],
      }
    case SUBSTRACT:
      return {
        reminders: [
          ...state.reminders.filter((reminder) => reminder.key !== action.key),
        ],
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions],
      }
    case SELECT:
      return {
        reminders: [...state.reminders],
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions, action.selected],
      }
    case SELECTREMINDER:
      return {
        reminders: [...state.reminders],
        selectedReminder: action.selectedReminder,
        interactions: [...state.interactions],
      }

    default:
      return state
  }
}
export default messageReducer
