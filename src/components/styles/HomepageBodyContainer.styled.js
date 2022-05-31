import styled from 'styled-components';

export const HomepageBodyContainer = styled.div`
  width: 1200px;
  height: 1717px;
  display: flex;
  position: relative; 
  background-color: #232323;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;

  .movie-card {
    height: 486px;
    width: 324px;
    margin-left: 59px;
    margin-top: 50px;
    display: inline-block;
    overflow: hidden;
  }

  .movie-card-info {
    height: 65px;
    width: 324px;
    color: #FFFFFF;
  }

  .film-name {
    text-align: left;
  }

  .film-genre {
    text-align: left;
  }

  .film-release-year {
    text-align: right;
  }

  .movie-card-image {
    height: 450px;
    width: 324px;
  }

  .sorting-group {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-left: 57px;
  }

  .buttons-group {
    margin-right: 30px;
    float:left;
    border-bottom: 1px solid #424242;
  }

  .buttons-group button {
    border: none;
    background-color: #232323;
    color: #FFFFFF;
    margin-right: 22px;
    font-size: 16px;
    float:left;
    // border-bottom: 2px solid #F65261; (to do: move)
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
`
