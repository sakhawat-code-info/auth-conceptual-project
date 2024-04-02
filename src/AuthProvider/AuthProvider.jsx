import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                setUser(result.user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error.message);
                // ...
            });
    }



    const creatUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }


    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                // ...
            })
            .catch((error) => {
                console.log(error.message);
            });

    }





    const authInfo = {
        creatUser,
        loginUser,
        user,
        handleGoogleLogin
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;