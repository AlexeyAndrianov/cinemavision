import styled from 'styled-components';

export const HomepageBodyContainer = styled.div`
  width: 1200px;
  display: flex;
  position: relative; 
  background-color: #232323;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;

  .movie-card {
    display: inline-block;
    overflow: hidden;
  }

  .movie-card-info {
    height: 65px;
    color: #FFFFFF;
  }

  .movie-cards-wrapper {
    margin: 50px 50px 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .movies-found-counter {
    width: 166px;
    height: 24px;
    margin-left: 55px;
    margin: 15px 0 0 50px;
    color: #FFFFFF;
    font-size: 20px;
    weight: 400;
  }

  .film-name {
    text-align: left;
    size: 18px;
  }

  .film-genre {
    text-align: left;
    size: 17px;
  }

  .film-release-year {
    text-align: right;
    size: 14px;
  }

  .movie-card-image {
    height: 450px;
    width: 324px;
  }

  .sorting-group {
    margin: 20px 50px 0;
    height: 20px;
    border-bottom: 1px solid #424242;
  }

  .buttons-group {
    margin-right: 30px;
    float:left;
  }

  .buttons-group button {
    border: none;
    background-color: #232323;
    color: #FFFFFF;
    margin-right: 22px;
    font-size: 16px;
    float:left;
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #F65261;
  }

  .hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #F65261;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .sort-select {
    margin-right: 120px;
    float: right;
  }

  .sort-select select{
    background-color: #232323;
    font-size: 16px;
    color: #FFFFFF;
    border: none;
    margin-left: 20px;
  }

  .sort-select label{
    font-weight: 100;
    color: #FFFFFF;
  }

  .wrap-name-year {
    display: flex;
    justify-content: space-between;
  }
`
