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

`
