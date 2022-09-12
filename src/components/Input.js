import React, { useContext, useState } from "react";
import "../Pages/Home.css";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../Firebase";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const handlesend = async() => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          //setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateDoc(doc(db, "chat", data.chatId),{
              messages: arrayUnion({
                id:uuid(),
                text,
                SenderId: currentUser.uid,
                date:Timestamp.now(),
                img:downloadURL,
              })
            })
          })
        }
      )
    }
    else{
         await updateDoc(doc(db, "chats", data.chatId),{
          message: arrayUnion({
            id:uuid(),
            text,
            SenderId:currentUser.uid,
            date:Timestamp.now(),
          })
         })
    }
    await updateDoc (doc(db,"userChat", currentUser.uid),{
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp(),
    })
    await updateDoc (doc(db,"userChat", data.user.uid),{
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    setText("") 
    setImg(null)
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type somehing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <input type="file"  id="file"    onChange={(e) => setImg(e.target.files[0])} />
        <button onClick={handlesend}>Send</button>
      </div>
    </div>
  );
}

export default Input;
