import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_ERROR,
    ADD_DATA,
    ADD_SUCCESS,
    ADD_ERROR,
  DEL_DATA, DEL_ERROR, DEL_SUCCESS, PUT_DATA, PUT_ERROR,PUT_SUCCESS,SIGN_UP_ERROR,SIGN_UP_SUCCESS,SIGN_UP_DATA} from '../actions/classAction';

const initialState = {
classes: [],
isFetching: false,
errors:''
    };

    const classReducer = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_DATA:
            return {
              ...state,
              isFetching: true,
            };
          case FETCH_SUCCESS:
            return {
              ...state,
              isFetching: false,
              classes: action.payload,
              error: "",
            };
          case FETCH_ERROR:
            return {
              ...state,
              isFetching: false,
              error: action.payload,
            };
            case ADD_DATA:
              return {
                ...state,
                isFetching: true,
                classes: [...state.classes],
              };
            case ADD_SUCCESS:
              return {
                ...state,
                isFetching: false,
                classes: action.payload,
                error: "",
              };
            case ADD_ERROR:
              return {
                ...state,
                isFetching: false,
                error: action.payload,
              };
              case PUT_DATA:
                return {
                ...state,
                isFetching: true,
                classes:[...state.classes],
                }
                case PUT_SUCCESS:
                  return {
                  ...state,
                  isFetching: false,
                  classes: action.payload,
                  }
                  case PUT_ERROR:
                    return {
                      ...state,
                      isfetching: false,
                      error: action.payload,
                    }
                    case DEL_DATA:
                      return {
                      ...state,
                      isFetching: true,
                      classes:[...state.classes],
                      }
                      case DEL_SUCCESS:
                        return {
                        ...state,
                        isFetching: false,
                        classes: action.payload,
                        }
                        case DEL_ERROR:
                          return {
                            ...state,
                            isfetching: false,
                            error: action.payload,
                          }
                          case SIGN_UP_DATA:
                            return {
                            ...state,
                            isFetching: true,
                            classes:[...state.classes],
                            }
                            case SIGN_UP_SUCCESS:
                              return {
                              ...state,
                              isFetching: false,
                              classes: action.payload,
                              }
                              case SIGN_UP_ERROR:
                                return {
                                  ...state,
                                  isfetching: false,
                                  error: action.payload,
                                }

            default:
                return state;
        }
    };
    export default classReducer;