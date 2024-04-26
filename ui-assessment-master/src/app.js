import AccountOverview from './components/account-overview/account-overview';
import GlobalStyle from './globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
      phone: '+55 (11) 94839-5648',
      baseUrlImg: '' // also try with baseUrl image 
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AccountOverview data={accountOverviewStub} />
    </ThemeProvider>
  );
}

export default App;
