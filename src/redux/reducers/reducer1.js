import { combineReducers } from 'redux'
import { stateTree } from  '../state'


function reducer(state = stateTree, action) {
  switch (action.type) {
    
    case 'UPDATE_TEXT':
      console.log(state.text)
      return {
        ...state, 
        nameuser: action.text,
      }
      case 'UPDATE_CAT':
      console.log(state.text)
      return {
        ...state, 
        categoryuser: action.text,
      }
      case 'UPDATE_CITY':
      console.log(state.text)
      return {
        ...state, 
        user_city: action.text,
      }
      case 'UPDATE_PHONE':
        console.log(state.text)
        return {
          ...state, 
          phonenumberuser: action.text,
        }
        case 'UPLOAD_TEXT_ONGOING':
      return {
        ...state,
        textUpload: true,
      }
      case "setPersonData": 
      return { ...state, personData: action.value }
        case 'UPLOAD_TEXT_DONE':
      return {
        ...state,
        textUpload: false,
      }
    default:
      return state
    }
}



export default reducer