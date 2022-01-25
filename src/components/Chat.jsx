import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import db from '../firebaseInit'
const messageRef = db.collection("MESSAGES");
const userRef = db.collection("USERS");
// import {collection, getDocs, addDoc, updateDoc,doc, deleteDoc, onSnapshot } from 'firebase/firestore'

// const userRef = collection(db, 'users')

export default function Chat() {
    const [user, setUser] = useState([])
    const [message, setMessage] = useState('')
    const [dialog, setDialog] = useState([])

    useEffect(() => {
        localStorage.setItem('myChatId', '12345')
        // messageRef
        // .where("partnerId", "array-contains-any", ["1"])
        // // .orderBy("partnerId", 'desc')
        // .orderBy("createdAt", "desc")
        // .onSnapshot(res=>{
        //     let data = res.docs.map(doc=>{
        //         return { ...doc.data(), id: doc.id };
        //         // console.log(doc)
        //     })
        //     console.table(data)
        // })

        // .where("partnerId", "array-contains-any", ["1"])
        // // .orderBy("partnerId", 'desc')
        // .orderBy("createdAt", "desc")
        userRef
        .orderBy("updated", "desc")
        .onSnapshot(res=>{
            let data = res.docs.map(doc=>{
                return { ...doc.data(), id: doc.id };
                // console.log(doc)
            })
            setUser(data)
            console.table(data)
        })
        // .onSnapshot({
        //     next: (querySnapshot) => {
        //        const updatedMessages = querySnapshot.docs.map((docSnapshot) => {
        //            console.log(querySnapshot)
        //           return { ...docSnapshot.data(), id: docSnapshot.id };
        //        });
        //        console.table(updatedMessages)
        //     },
        //     error: (err) => console.log(err),
        //  });
        
    }, []);
    
    const getMessages = (id)=>{
        messageRef
        .where("partnerId", "array-contains-any", [id])
        .orderBy("createdAt", "asc")
        .onSnapshot({
            next: (querySnapshot) => {
                const updatedMessages = querySnapshot.docs.map((docSnapshot) => {
                    console.log(querySnapshot)
                    return { ...docSnapshot.data(), id: docSnapshot.id };
                });
                console.log(updatedMessages)
                setDialog(updatedMessages)
            },
            error: (err) => console.log(err),
        });
    }

    const userCreatedUpdate = ()=>{
        userRef
        .doc(activeUser.id).set({
            name: activeUser.name,
            updated: new Date(),
            type: activeUser.type
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        const data ={
            partnerId : [activeUser.id],
            userId :  localStorage.getItem('myChatId'),
            content : message,
            sendToAll : false,
            subject : 'static sub',
            image : 'image disini',
            createdAt : new Date(),
            product : {
                name : 'tas mahal',
                price : 20000,
                id : '2020lalala'
            }
        }
        console.log(data)
        messageRef
        .doc(uuidv4())
        .set(data)
        .then((res) => {
            console.log(res, 'success add data')
            userCreatedUpdate()
        })
        .catch((err) => console.log(err));
    }

    const [activeUser, setActiveUser] = useState({})

    const handleActiveUser = (user)=>{
        Promise.all([
            setActiveUser(user),
        ]).then(()=>{
            getMessages(user.id)
        })
    }

    return (
        <div className="container">
                <h1>CHAT WITH FIREBASE</h1>
            <div className='chat'>
                <div className="row">

                    <div className="col-md-4 ">
                        <h2 className='p-2'>Contact</h2>
                        <ul>
                        {
                            user.map((res,i)=>(
                                <li key={i} 
                                onClick={()=>handleActiveUser(res)}
                                style={{backgroundColor : res.id === activeUser.id ? 'aliceblue' : 'whitesmoke'}}
                                >{res.name}</li>
                            ))
                        }
                        </ul>
                    </div>

                   

                    <div className="col-md-8 ">
                        <div className="chatbox">

                            <div className="w-100">
                                <div className=" bg-light left">
                                    asdfasdfasdfas
                                </div>
                            </div>
                       
                            {
                                dialog.map((res, i)=>(
                                    <div className="w-100 w-100 text-right d-flex justify-content-end mb-3">
                                        <div className=" bg-light right">
                                            {res.content}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="wrapinp my-3">
                                <input type="text" placeholder='chat here...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                <button type="submit">send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}
