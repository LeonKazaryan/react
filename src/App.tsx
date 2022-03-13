import './App.css';
import 'antd/dist/antd.css';
import {Divider} from 'antd';
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import {Api} from './Api';
// @ts-ignore
import { Library,  CreatingBook } from './library/Library'; 

let attendance = [
  {
  'day':'26 september',
  'missed':['Leon', 'Hakknazar'],
  'id': '1'
  },
  {
  'day':'27 september',
  'missed':['Hakknazar'],
  'id': '2'
  },
  {
  'day':'28 september',
  'missed':['Vlad', 'Hakknazar'],
  'id': '3'
  },
  {
  'day':'29 september',
  'missed':['Leon', 'Hakknazar', 'Vlad', 'Artyom'],
  'id': '4'
  },
]
  
function Home() {
  return <div>
    Welcome to the main page of our site
  </div>
}

function Student() {
  let {id, name} = useParams();
  return <div>
    <div> Name of the student : <b>{name}</b> </div>
    <div> Id :  <b>{id}</b> </div>
  </div>
}
 
function DateAttendance() {
  let {id} = useParams();
  let date = attendance.find((element, index) => element.id == id)
  return <div>
    <div> Date: {date?.day} </div>
    <div> People missed: {date?.missed.join(' , ')}</div>
  </div>
}

function Attendance(){
  return <ul>
  <li>
    <Link to="/dateattendace/1">26 September</Link>
  </li>
  <li>
    <Link to="/dateattendace/2">27 September</Link>
  </li>
  <li>
    <Link to="/dateattendace/3">28 September</Link>
  </li>
  <li>
    <Link to="/dateattendace/4">29 September</Link>
  </li>
</ul>
}

function Class(){
  return <ul>
    <li>
      <Link to="/student/1/Leon">Leon</Link>
    </li>
    <li>
      <Link to="/student/2/Hakknazar">Hakknazar</Link>
    </li>
    <li>
      <Link to="/student/3/Artyom">Artyom</Link>
    </li>
    <li>
      <Link to="/student/4/Vlad">Vlad</Link>
    </li>
  </ul>
}

function App() {
  let myClass = 'App';

  return (
    <Router>
      <div className={myClass}>
        <Link to="/">Main</Link>
        <Divider type="vertical" />
        <Link to="/class">Our class</Link>
        <Divider type="vertical" />
        <Link to="/attendance">Attendance</Link>
        <Divider type="vertical" />
        <Link to ='/Api'>API</Link>
        <Divider type="vertical" />
        <Link to ='/library/Library'>Library</Link>
      

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/student/:id/:name" element={<Student />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/dateattendace/:id" element={<DateAttendance />} />

          <Route path='/Api' element={<Api/>}/>
          <Route path='/library/Library' element={<Library/>}/>

          <Route path="/creatingbook" element={<CreatingBook />}/>


        </Routes>

      </div>
    </Router>
    // тут больше вопрос синтаксиса, я хочу импортировать АПИ, вставить его, но как-то забыл как 
    
  );
}

export default App;
