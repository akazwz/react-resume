import React, {Suspense} from 'react';
import Resume from './pages/Resume';
import Loading from './components/Loading';


const App = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Resume/>
        </Suspense>
    );
}

export default App;
