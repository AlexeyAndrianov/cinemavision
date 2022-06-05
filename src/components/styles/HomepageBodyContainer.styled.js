import styled from 'styled-components';

export const HomepageBodyContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #232323;
  display: inline-block;
  left: 0;
  right: 0;

  .body-content {
    margin-left: 32px;
  }

  .movie-card {
    display: inline-block;
    overflow: hidden;
  }

  .movie-card-info {
    height: 65px;
    color: #FFFFFF;
  }

  .movie-card-img-with-actions {
    position: relative;
  }

  .movie-card-img-with-actions:hover .menu-circle-with-dots {
    display: block;
    left: 260px;
    top: -10px;
  }

  .movie-cards-wrapper {
    margin: 0 50px 0;
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
    weight: 500;
    opacity: 0.5;
  }

  .film-release-year {
    position: relative;
    right: 12px;
    text-align: center;
    vertical-align: middle;
    width: 50px;
    height: 20px;
    size: 14px;
    weight: 500;
    opacity: 0.5;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    font-size: 14px;
  }

  .movie-card-image {
    height: 450px;
    width: 324px;
    object-fit: cover;
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
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .menu-circle-with-dots {
    background-color: red;
    position: absolute;
    margin-top: 30px;
    margin-right: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: none;
  }

  .open-options-menu {
    width: 190px;
    height: 110px;
    position: absolute;
    background-color: yellow;
    margin-top: -430px;
    margin-left: 110px;
  }
`
