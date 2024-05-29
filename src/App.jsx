import { useEffect, useState } from 'react'

import './App.css'
import { TbHttpDelete } from "react-icons/tb";
import {collection,getDocs,deleteDoc,addDoc,doc} from "firebase/firestore"
import { db } from './firebaseConfig';
function App() {
  
  
  const [urls, setUrls] = useState([
    {
      url: 'https://liveshare-sigma.vercel.app/',
      title: 'Live Share Sigma'
    },
    {
      url: 'https://amz-price-tracker.vercel.app/',
      title: 'Amazon Price Tracker'
    },
    {
      url: 'https://img-gallery-ayush-gargs-projects.vercel.app/',
      title: 'Image Gallery'
    },
    {
      url: 'https://anime-flix-lemon.vercel.app/',
      title: 'Anime Flix'
    },
  ]);
  const dataCollectionRef=collection(db,"data");

  const fetchUrls = async () => {
    const querySnapshot = await getDocs(dataCollectionRef);
    const urlsArray = querySnapshot.docs.map(doc => doc.data());
    console.log(urlsArray);
    setUrls(urlsArray)
    
  };
  useEffect(() => {
    fetchUrls();
  }, []);

  
  const handleSave =async () => {
   
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const newUrl = { url: tab.url, title: tab.title };
  await addDoc(dataCollectionRef, newUrl);
    setUrls([...urls, newUrl]);
      
  }

  const reverseList = () => {
    setUrls([...urls].reverse());
  };

  const deleteUrl = async (index) => {
    const urlToDelete = urls[index];
    const querySnapshot = await getDocs(dataCollectionRef);
    const docToDelete = querySnapshot.docs.find(doc => doc.data().url === urlToDelete.url);
    if (docToDelete) {
      await deleteDoc(doc(db, 'data', docToDelete.id));
      setUrls(urls.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="app">
        <div className=' w-full h-full'>
        <div className=" p-2 w-full save-container">
          <button
            onClick={handleSave}
            className='text-2xl  m-2 rounded-xl save'
            >Save Tab</button>
            
            </div>
          <div className="url-list  ">
            <ul >
              {urls.map((u, id) => (
                <li key={id} className=''>
                  <a href={u.url} target="_blank" rel="noopener noreferrer"
                  className='truncate col-span-3 capitalize '
                  >
                    {id + 1}. {u.title}
                  </a>
                  <button onClick={() => deleteUrl(id)}
                  className='col-span-1  del-cot '
                  >
                    <TbHttpDelete className='text-4xl del' />
                  </button>
                </li>
              ))}
              </ul>
          </div>
          <div className=" fotter flex flex-row justify-around items-center gap-4">
            <button onClick={reverseList} className='w-full btn'>New First</button>
            <button onClick={reverseList} className='w-full btn'>Old First</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App


