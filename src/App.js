import React, {Suspense} from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core';
import Resume from './pages/Resume';
import Loading from './components/Loading';

const App = () => {
    const theme = createTheme({
        palette: {
            type: 'light',
        },
    });
    return (
        <Suspense fallback={<Loading/>}>
            <ThemeProvider theme={theme}>
                <Resume/>
            </ThemeProvider>
        </Suspense>
    );
}

export default App;
