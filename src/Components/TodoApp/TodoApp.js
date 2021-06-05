import React from 'react'
import { useState } from 'react';
import "./TodoApp.css";
import "../Css/App.css";

function TodoApp() {


    let [todo, setTodo] = useState([]);

    let [tod, setTod] = useState('');






    return (
        <div  className="container-fluid"> 
      
          <div className="col-xl-4 col-md-6 mb-4 ">
             <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
            <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                <h2 className="h3 mb-4 text-gray-800 d-flex justify-content-center">Add Todo</h2>

                <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" value={tod} onChange={(e) => setTod(e.target.value)} placeholder="enter text...." />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i onClick={() => setTodo([...todo, {id:Date.now(), text:tod , status:false}])} className="fas fa-plus fa-sm"></i>
                                </button>
                            </div>
                        </div>
               
            </div>
            </div></div></div></div>

        
            <div className="row">  
          <div className="col-lg-6 mb-4">

<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Active ToDos</h6>
    </div>
      <div className="card-body">

            <ul>
                {todo.map((obj) => {
                    if(obj.text){
                     
                 
                    return (
                        

                     <div className="col-xl-8 col-md-6 mb-2" id="1">   
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                           
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                
                                            <li> {obj.text}<i className="far fa-trash-alt" ></i></li>

                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <input onChange={(e)=>{
                                               console.log(e.target.checked);
                                               console.log(obj);
                                               setTodo(todo.filter(obj2=>{
                                                   if(obj2.id===obj.id){
                                                       obj2.status=e.target.checked
                                                   }
                                                   return obj2;
                                               }))

                                            }} type="checkbox" value={obj.status} className=" text-gray-300"/>

                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        </div>

                 
                                  
                    )   }
                })}
      </ul>

      </div>
              </div>

           </div>
       
            


            <div className="col-lg-6 mb-4">


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                    </div>
                    <div className="card-body">



                    {todo.map((obj)=>{
                        if(obj.status){
                            
                                delete obj.text;
                           
                        }
                        return null
                                                                
                        })}
                    
    
                     </div>
                  </div>

                  </div>
 </div>
  

  </div>
    )
}

export default TodoApp
