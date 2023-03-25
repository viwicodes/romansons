// import React from 'react'

// import { auth } from '../firebase-config'

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export default function AuthProvider({ children }) {

//     const [user, setUser] = useState()
//     const [loading, setLoading] = useState(true)

//     function signUp(email, passsword) {
//         return auth.createUserWithEmailAndPassword(email, passsword)
//         // .then(console.log("Logged in successfully!!"))
//         // .catch((err) => {
//         //     console.log(err)
//         // })
//     }


//     function signIn(email, passsword) {
//         return auth.signInWithEmailAndPassword(email, passsword)
//     }

//     function signOut() {
//         return auth.signOut()
//     }

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(currUser => {
//             setUser(currUser)
//             setLoading(false)
//         })
//         return unsubscribe
//     }, [])



//     const value = {
//         user,
//         signUp,
//         signIn,
//         signOut
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }
