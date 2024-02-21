import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { СommunitiesPage } from './pages/СommunitiesPage';
import { UsersPage } from './pages/UsersPage';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Content } from './components/Content';

function App() {
  return (
    <>
    <Navigation />
    <Main>
      <Sidebar></Sidebar>
      <Content>
        <Routes>
            <Route path='/' element={ <HomePage />}/>
            <Route path='/profile' element={ <ProfilePage />}/>
            <Route path='/communities' element={ <СommunitiesPage />}/>
            <Route path='/users' element={ <UsersPage />}/>
        </Routes>
      </Content>
    </Main>
    </>
  );
}

export default App;
