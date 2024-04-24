// import logo from './logo.svg';
import './App.css';
import Form1 from './component/form';


const SavedForm = () => {
  const savedValues = JSON.parse(localStorage.getItem("formValues"));
  console.log(savedValues , 'savedValues');
  return (
    <div style={{direction:"rtl"}}>
      <h2>اطلاعات</h2>
      <p>نام: {savedValues?.name}</p>
      <p>نام خانوادگی: {savedValues?.family}</p>
      <p>جنسیت: {savedValues?.gender==="women"?"زن":savedValues?.gender==="men" ? "مرد" : ""}</p>
      <p>ایمیل: {savedValues?.email}</p>
      <p>شماره موبایل: {savedValues?.contact}</p>
      <p>لینک: {savedValues?.url}</p>
      
    </div>
  );
};



function App() {
  return (
    <div className="App">
      <Form1/>
      <SavedForm/>
    </div>
  );
}

export default App;
