import {User} from "../models/User";
import {createContext, useEffect, useReducer} from "react";
import {authReducer, AuthState} from "../store/reducer/Auth";

type contextProps = {
  user: any;
  status: 'checking' | 'auth' | 'no-auth';
  signUp: (data: User) => any;
  signIn: (data: User) => any;
  logOut: () => void;
}

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as contextProps)

export const AuthProvider = ({children}: {children: JSX.Element | JSX.Element[]} ) => {
  
  const [ state, dispatch ] = useReducer( authReducer, authInicialState );
  
  const {login, register} = UserService
  
  useEffect(()=>{
    checkToken().then()
  },[])
  
  const checkToken = async () =>{
    const data = JSON.parse(localStorage.getItem('localSesion') as string);
    !data ? dispatch({type: 'no-auth'}) :
      dispatch({
        type: 'signUp',
        payload: {
          token : data,
          user: data
        }
      })
  }
  
  const signUp = async (data : User) => {
    try {
      const { user } = await login(data)
      dispatch({
        type: 'signUp',
        payload: {
          token: user.token,
          user: user
        }
      });
      localStorage.setItem('localSesion',JSON.stringify(user));
    }catch (error){
      dispatch({type: 'addError', payload : error as string })
    }
  };
  const signIn = async (data : User) => {
    try {
      const { user } = await register(data)
      dispatch({
        type: 'signUp',
        payload: {
          token: user.token,
          user: user
        }
      });
      localStorage.setItem('localSesion',JSON.stringify(user));
    }catch (error ){
      dispatch({type: 'addError', payload : error as string })
    }
  };
  const logOut = async () => {
     /* //await AsyncStorage.removeItem('token')
      dispatch({type: 'loaded'})
      setTimeout(()=>{
          dispatch({type: 'logout'})
      },1000)*/
  };
  
  return (
    <AuthContext.Provider value={{...state, signUp, signIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}
