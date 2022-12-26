import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
  name: "testUser",
  image: "https://source.unsplash.com/AUtUMeQnz1Y",
  email: "1111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@aaa.com",
  phone: "0000-9999-88888",
  company: {
      name: "test株式会社"
  },
  website: "htttttt.com"
};

function App() {
  return (
    <BrowserRouter>
    <DefaultLayout>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br/>
      <SearchInput/>
      <UserCard user={user} />
    </DefaultLayout>
    </BrowserRouter>
    
  );
}

export default App;
