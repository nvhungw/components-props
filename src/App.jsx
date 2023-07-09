
import './Test.css';
import Counter from './components/Counter';
import Profile from './components/Profile/Profile';

function App() {
  return (
    // <>
    //   {/* Đây là 1 component */}
    //   <Counter />
    //   <Counter />
    // </>
    <Profile/>
  );
}

export default App;

// Cách làm props
// Đầu tiên tạo thằng Avatar.jsx tạo khung trong đó. 
// Sau đó tạo Profile.jsx để đưa data vào. 
// Cuối cùng return trong App.jsx
