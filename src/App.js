import React, {Suspense } from 'react';
import './App';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Spinner } from './Components/Utility/Spinner';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function SnackbarCloseButton({ key }) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton size="small" aria-label="close" color="inherit" onClick={() => closeSnackbar(key)}>
      <CloseIcon />
    </IconButton>
  );
}

function App() {
  return (
    <div className="Container">
      <Spinner />
      <Suspense fallback={"Loading..."}>
        <SnackbarProvider
          maxSnack={3}
          action={key => <SnackbarCloseButton key={key} />}
          //transitionDuration={1000}
          autoHideDuration={10000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <ThemeProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </ThemeProvider>
        </SnackbarProvider>
      </Suspense>
    </div>
  );
}

export default App;
