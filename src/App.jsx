import { useState, useEffect } from 'react';
import ToDoList from './todoList';
import InputField from './InputField';
import ListItem from './ListItem';
import apiRequest from './apiRequest';



function App() {
  const API_URL = "http://localhost:3500/toDoList";
  const [list , setList] = useState(
    []
  /*   ()=> {
  const savedList = localStorage.getItem("toDoList");
  return savedList?  JSON.parse(localStorage.getItem("toDoList")):[]; } */
  );
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const addItem = async (item) => {
    const id = list.length ? Number(list[list.length-1].id)+1: 1;
    const toStringNewID = id.toString();
    const newItem = {id: toStringNewID, item, checked : false, editState : false}; 
    const newList = [...list, newItem];
    setList(newList);

    const addOption = {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }
    const result = await apiRequest(API_URL, addOption);
    if(result) return;

    console.log(list);
    console.log(list.length);
  }

  const  handleAddItem =  (e) => {
    e.preventDefault();
    inputValue ? addItem(inputValue): alert("type something");
    setInputValue("");
    
  }

  const handleEditItem = async (id)=> {
    const newchecked = list.map((item)=> item.id === id? { ...item, editState : !item.editState }: item ) 
    setList(newchecked);

    const setChecked = list.filter((item)=> item.id === id);
    const editOption = {
      method: "PUT" ,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id : setChecked[0].id, item: setChecked[0].item, editState: !setChecked[0].editState , checked : setChecked[0].checked})
    }
    const reqUrl  =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, editOption);
    if(result) return;
    console.log(list[id].editState);
  }

  const handleChange = async (id, newText)=> {
    const newchecked = list.map((item)=> item.id === id? { ...item, item : newText} : item ) 
    setList(newchecked);
    const setText = list.filter((item)=> item.id === id);
    const updateOption = {
      method: "PUT" ,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id : setText[0].id, item: setText[0].item, editState: setText[0].editState , checked : setText[0].checked})
    }
    const reqUrl  =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOption);
    if(result) return;
    console.log(list[id].item);
  }

  const handleSaved = async (id) => {
    const newchecked = list.map((item)=> item.id === id? { ...item, editState : !item.editState } : item ) 
    setList(newchecked);

    const setChecked = list.filter((item)=> item.id === id);
    const editOption = {
      method: "PUT" ,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id : setChecked[0].id, item: setChecked[0].item, editState: !setChecked[0].editState , checked : setChecked[0].checked})
    }
    const reqUrl  =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, editOption);
    if(result) return;
    console.log(list[id].editState);
  }
  
  const handleDeleteItem = async (id) => {
    const newlist = list.filter((item => item.id !== id ))
    setList(newlist);

    const deleteOption = { method: "DELETE" };
    const reqUrl  =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption);
    if(result) return;
  }
 
  const handleCheck = async (id) => {
    const newchecked = list.map((item)=> item.id === id? { ...item, checked : !item.checked}: item ) 
    setList(newchecked);

    const setChecked = list.filter((item)=> item.id === id);
    const checkOption = {
      method: "PUT" ,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id : setChecked[0].id, item: setChecked[0].item, editState: setChecked[0].editState , checked : !setChecked[0].checked})
    }
    const reqUrl  =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, checkOption);
    if(result) return;
    console.log(list[id]);
    console.log(list[id].checked);
  }
  

  const handleClearList = () => {
    setList(()=> {
      localStorage.removeItem("toDoList");
      setList([]);
    })
  }
   
useEffect(() => {
  /* localStorage.setItem("toDoList", JSON.stringify(list)); */
  const fetchData = async () => {
    try{
      const response = await fetch(API_URL);
      if(!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      console.log(result);
      setList(result);
      console.log(list);
    } catch (err) {
      setError(err.message);
    }
  };
  fetchData();
}, []);

  return (
    <main className='big-container'>
      <ToDoList />

      <InputField 
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddItem={handleAddItem}
        handleClearList={handleClearList}
        />
        
      <ListItem 
        list={list} 
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
        handleCheck={handleCheck}
        handleChange={handleChange}
        handleSaved={handleSaved}
      />
    </main>
  )
}

export default App
