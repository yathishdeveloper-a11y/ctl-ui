import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { add } from 'npm-test-yathish'
import axios from "axios";
import  Avatar  from "./useCachedImage";

function App() {
  const [count, setCount] = useState(0)



const apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
});

// Cancelable requests using AbortController
 const createCancelableRequest = (config) => {
  const controller = new AbortController();
  console.log("Creating cancelable request started");
  const request = apiClient({
    ...config,
    signal: controller.signal, // Attach signal
  });

  return { request, cancel: () =>{ controller.abort().then(() => {
      console.log("Request canceled");
    });

  } };
};

createCancelableRequest();

  return (
    <>
      <div>
        NPM Calling demo : 
        
        Addition : {add(1,2)}

<Avatar src='/vite.svg' />
<img src="/react.svg" />


     </div>
    </>
  )
}

export default App
