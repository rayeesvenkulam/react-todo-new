import TodoApp from './Components/TodoApp/TodoApp';
import Header from './Components/Layouts/Header';
import Sidebar from './Components/Layouts/Sidebar';
import Footer from './Components/Layouts/Footer';


function App() {
  return (
    <div id="wrapper">
      
      <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
             <Header/>
                <div >
                <TodoApp/>
                </div>
          </div>   
          <Footer/>
         
        </div>
    </div>
  );
}

export default App;
