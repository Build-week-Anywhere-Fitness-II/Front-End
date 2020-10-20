import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_ERROR,
    ADD_DATA,
    ADD_SUCCESS,
    ADD_ERROR,} from '../actions/classAction';

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
                isAdding: true,
                classes: [...state.classes],
              };
            case ADD_SUCCESS:
              return {
                ...state,
                isAdding: false,
                classes: action.payload,
                error: "",
              };
            case ADD_ERROR:
              return {
                ...state,
                isAdding: false,
                error: action.payload,
              };
            default:
                return state;
        }
    };
    export default classReducer;