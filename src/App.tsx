import React, { useState } from 'react';
import Clubs from './components/Clubs';
import Courses from './components/Courses';
import Details from './components/Details';
import './App.css';
import { Layout, Button } from 'antd';
import { MenuOutlined, HomeOutlined, DesktopOutlined, CodeOutlined, QuestionOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons';
import { Typography, Drawer, Divider } from 'antd';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'clubs' | 'courses' | 'details'>('courses');
  const [detailType, setDetailType] = useState<'club' | 'course'>('course');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [navV, setNavV] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  function onSelectClub(id: string) {
    setDetailType('club');
    setSelectedId(id);
    setCurrentPage('details');
  }

  function onSelectCourse(id: string) {
    setDetailType('course');
    setSelectedId(id);
    setCurrentPage('details');
  }

  return (
    <Layout className="App">

      <Layout.Content>
        <div style={{width: '100%', height: "70px", background: "#fefefe", display: 'flex', justifyContent: 'space-between', alignItems: "center", padding: "10px 20px"}}>
        <div style={{display: 'flex', alignItems: 'center', width: mobile ? "70%": "30%"}}>
                <img src={"https://org-site.vercel.app/static/media/logo.6c966a37.png"} style={{cursor: 'pointer', height: "40px"}}></img>
                <Typography.Title level={3} style={{margin: "0px 10px"}}> HSE Computer Science </Typography.Title>
            </div>
            <div style={{display: 'flex', justifyContent: "space-around",flexBasis:"50%"}}>

          <a onClick={() => setCurrentPage('courses')}>Courses</a>
          <a onClick={() => setCurrentPage('clubs')}>Clubs</a>
            </div>
        </div>
        
        <div className="content-area">
          {currentPage === 'clubs' && <Clubs onSelectClub={onSelectClub} />}
          {currentPage === 'courses' && <Courses onSelectCourse={onSelectCourse} />}
          {currentPage === 'details' && selectedId && (
            <Details
              itemType={detailType}
              itemId={selectedId}
              onBack={() => setCurrentPage(detailType === 'club' ? 'clubs' : 'courses')}
            />
          )}
        </div>
      </Layout.Content>
    </Layout>
  );
}