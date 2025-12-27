import React from 'react';
import styled from 'styled-components';

// 1. DATA ARRAY: 10 different people with unique images
const peopleData = [
  { id: 1, name: "Sarah Jenkins", role: "Software Architect", img: "https://i.pravatar.cc/400?u=1", month: "JAN", date: "12", bio: "Building scalable distributed systems." },
  { id: 2, name: "Marcus Chen", role: "UI Designer", img: "https://i.pravatar.cc/400?u=2", month: "FEB", date: "05", bio: "Creating intuitive human interfaces." },
  { id: 3, name: "Elena Rodriguez", role: "Product Lead", img: "https://i.pravatar.cc/400?u=3", month: "MAR", date: "22", bio: "Bridging business and tech goals." },
  { id: 4, name: "David Kim", role: "Data Scientist", img: "https://i.pravatar.cc/400?u=4", month: "APR", date: "18", bio: "Unlocking patterns in big data." },
  { id: 5, name: "Aisha Yusuf", role: "DevOps Expert", img: "https://i.pravatar.cc/400?u=5", month: "MAY", date: "30", bio: "Automating the digital future." },
  { id: 6, name: "Julian Vane", role: "Security lead", img: "https://i.pravatar.cc/400?u=6", month: "JUN", date: "29", bio: "Hardening systems against threats." },
  { id: 7, name: "Sasha Grey", role: "Frontend Dev", img: "https://i.pravatar.cc/400?u=7", month: "JUL", date: "14", bio: "Crafting pixel-perfect React apps." },
  { id: 8, name: "Leo Das", role: "Backend Dev", img: "https://i.pravatar.cc/400?u=8", month: "AUG", date: "03", bio: "Specializing in microservices." },
  { id: 9, name: "Maya Patel", role: "AI Researcher", img: "https://i.pravatar.cc/400?u=9", month: "SEP", date: "11", bio: "Training models for creativity." },
  { id: 10, name: "Tom Wright", role: "Fullstack Dev", img: "https://i.pravatar.cc/400?u=10", month: "OCT", date: "25", bio: "Handling everything from DB to CSS." }
];

// 2. INDIVIDUAL CARD COMPONENT
const Card = ({ name, bio, img, month, date }) => {
  return (
    <StyledWrapper $bgImage={img}>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">{name}</span>
            <p className="card-content">{bio}</p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
            <span className="month">{month}</span>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// 3. EXPORT THIS: This component renders all 10 cards
const CardSection = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '50px 0' }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px', fontFamily: 'sans-serif' }}>
        Our Team
      </h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px', 
        maxWidth: '1400px', 
        margin: '0 auto' 
      }}>
        {peopleData.map((person) => (
          <Card 
            key={person.id}
            name={person.name}
            bio={person.bio}
            img={person.img}
            month={person.month}
            date={person.date}
          />
        ))}
      </div>
    </div>
  );
};

// 4. THE STYLES (Your original logic with image replacement)
const StyledWrapper = styled.div`
  .parent {
    width: 320px;
    padding: 20px;
    perspective: 1000px;
  }

  .card {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 3px solid rgb(255, 255, 255);
    transform-style: preserve-3d;
    
    /* REPLACED white/grey with Image */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 100%), 
                url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background: rgba(143, 4, 250, 0.8);
    transition: all 0.5s ease-in-out;
    padding: 40px 25px 25px 25px;
    transform-style: preserve-3d;
  }

  .content-box .card-title {
    display: inline-block;
    color: white;
    font-size: 22px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: rgba(143, 4, 250);
    background: white;
    padding: 0.5rem 0.7rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
  }

  .content-box .see-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background: white;
    border: 1px solid rgba(143, 4, 250);
    padding: 10px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 17px 10px -10px;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

  .date-box .month {
    color: rgba(143, 4, 250);
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: rgba(143, 4, 250);
  }
`;

export default CardSection;