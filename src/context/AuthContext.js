import { createContext, useContext, useEffect, useState } from "react";
// import Authentication từ firebase
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const AuthContext = createContext();
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    // Đăng ký nhận vào email password return gọi lại hàm
    // createUserWithEmailAndPassword nhận vào auth ,email,password
    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        // Luư dữ liệu vào firebase cloud
        // 2 tham so la tai lieu tham chieu doc() va du lieu tham chieu objects
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }

    // Đăng nhập , tương tự đăng ký phải nhập vào
    // input email và password sau đó authentication true thì 
    // đăng nhập thành công
    function logIn(email, password) {
        signInWithEmailAndPassword(auth, email, password);
    }


    // Đăng xuất, nhận vào mã authentication là đủ

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        //clean up function
        return () => {
            unsubcribe();
        }
    })
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )

}
export function UserAuth() {
    return useContext(AuthContext)
}