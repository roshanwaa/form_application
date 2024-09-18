import './App.css';
import { FormPage } from './Components/FormPage';

function App() {
  return (
    <div className="p-4 px-4 md:p-8 mb-6">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div className="text-gray-600">
          <p className="font-medium text-lg">Personal Details</p>
          <p>Please fill out all the details.</p>
        </div>
        <FormPage />
      </div>
    </div>
  );
}

export default App;
