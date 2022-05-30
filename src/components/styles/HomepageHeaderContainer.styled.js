import styled from 'styled-components';

export const HomepageHeaderContainer = styled.div`
  .header-wrapper {
    height: 396px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
  }

  img {
    width: 1200px;
    height: 396px;
    object-fit: cover;
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
`
