import styled from 'styled-components';

export const HomepageHeaderContainer = styled.div`
  .header-wrapper {
    height: 396px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-bottom: 10px;
  }

  img {
    width: 1200px;
    height: 396px;
    object-fit: cover;
  }

  .header-wrapper .header-label {
    position: absolute;
    top: -80px;
    left: 50px;
    color: #F65261;
    font-weight: 400;
    font-size: 24px;
    z-index: 1;
  }

  .header-background {
    background-image: url(https://static.alphacoders.com/thumbs_categories/20.jpg);
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    -webkit-filter: blur(3px);
  }

  .search-group {
    margin: 0 auto;
    padding: 10px;
    z-index: 1;
  }

  .search-group h1 {
    margin: 0 auto;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 300;
    margin-bottom: 33px;
  }

  .search-group input {
    width: 713px;
    height: 57px;
    background-color: #323232;
    opacity: 0.8;
    font-size: 24px;
    border-radius: 4px;
    text-indent: 19px;
    border: none;
    color: #FFFFFF;
  }

  .search-group button {
    width: 233px;
    height: 57px;
    margin-left: 14px;
    border-radius: 4px;
    background-color: #F65261;
    font-size: 24px;
    color: white;
    border: none;
  }

  .add-movie-button {
    position: absolute;
    left: 970px;
    top: 30px;
    width: 177px;
    height: 46px;
    margin-left: 14px;
    border-radius: 4px;
    font-weight: 600;
    background: rgba(60, 60, 60, 0.6);
    font-size: 24px;
    color: #F65261;
    border: none;
  }
`
