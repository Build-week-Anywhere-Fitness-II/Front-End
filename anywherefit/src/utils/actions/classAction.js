import {Auth} from '../axiosAuth';
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchClasses = () => (dispatch) => {
dispatch({type: FETCH_DATA});
Auth()
.get('api/classes')
.then((res) => {
    console.log("fetch success", res.data)
    dispatch({type: FETCH_SUCCESS, payload: res.data});
})
.catch((err) => {
    console.log("errors!", err);
    dispatch({ type: FETCH_ERROR, payload: err });
});
}


export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";

export const addClass = (classes) => (dispatch) => {
  dispatch({ type: ADD_DATA });
  Auth()
    .post("api/classes", classes)
    .then((res) => {
      console.log("add succes", res.data);
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("errors!", err);
      dispatch({ type: ADD_ERROR, payload: err });
    });
};

export const PUT_DATA = "PUT_DATA";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_ERROR = "PUT_ERROR";

export const editClass  = (updatedClass) => (dispatch) => {
dispatch({type: PUT_DATA});
Auth()
.put('api/classes/edit/:class_id', updatedClass)
.then((res) => {
console.log("put success", res.data);
dispatch({ type: PUT_SUCCESS, payload: res.data});
})
.catch((err) => {
console.log("who PUT these errors here!", err)
dispatch({type: PUT_ERROR, payload: err})
})
}

export const DEL_DATA = "DEL_DATA";
export const DEL_SUCCESS = "DEL_SUCCESS";
export const DEL_ERROR = "DEL_ERROR";

export const deleteClass = (dispatch) => {
dispatch({type: DEL_DATA})
Auth()
.delete('api/classes/delete/:class_id')
.then((res) => {
console.log('Delete success', res.data)
dispatch({type:DEL_SUCCESS, payload: res.data})
})
.catch((err) => {
console.log('delete error', err)
dispatch({type: DEL_ERROR, payload: err})
});
}

export const SIGN_UP_DATA = "SIGN_UP_DATA";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export const signUp = (signUpInfo) => (dispatch) => { 
  dispatch({type: SIGN_UP_DATA})
  Auth()
  .post('api/classes/signup', signUpInfo)
  .then((res) => {
console.log("sign up success", res.data);
dispatch({type: SIGN_UP_SUCCESS, payload: res.data});
  })
  .catch((err) => {
console.log('sign up error', err);
dispatch({type: SIGN_UP_ERROR, payload: err})
  })
}