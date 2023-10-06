import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/NavigationBar';
import LoginSignUp from './components/LoginSignUp';

const App = () => {

    return (
            <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
                <NavigationBar/>
                <LoginSignUp/>
            </div>
    );
}

export default App;
