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
`
