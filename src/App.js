
import './App.css';
import './css/bootstramp.css';
import Fliplogo from './components/Fliplogo.js';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Maincontent from './components/Maincontent';
import { createContext,useState } from 'react';
import Users from './components/Users';
export const store = createContext()
function App() {
  let arr=[
    {name:"abhi",
    roll:"5N2",
    branch:"CSE"
  },
  {name:"abhinaya",
  roll:"5M9",
  branch:"CSE"
},
{name:"abhi",
roll:"589",
branch:"CSE"
},
    {
      name:"pravali",
    roll:"5O9",
    branch:"CSE"
    }
  ];
  const[data,setData]=useState(arr)
  return (
     <>
     <BrowserRouter>
     <store.Provider value={[data,setData]}>
        <div className='container-fluid '>
          <div className='row'>
          <Sidebar/>
          <div className='col-md-10'>
          <Searchbar/>
            <Routes>
               <Route path='/Home' element={<Home/>} />
               <Route path='/Shorts' element={<Shorts/>} />
               <Route path='/Maincontent' element={<Maincontent data={arr}/>} />
               <Route path='/Users' element={<Users/>} />
            </Routes>
          </div>
        </div>
        </div>
        </store.Provider>
      </BrowserRouter>
     </>
  );
}
export default App;
