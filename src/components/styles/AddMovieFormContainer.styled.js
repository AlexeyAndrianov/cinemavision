import styled from 'styled-components';

export const AddMovieFormContainer = styled.div`
  display: flex;
  position: relative;
  width: 917px;
  margin-left: 120px;
  background-color: #232323;
  display: inline-block;
  color: #F65261;
  left: 0;
  right: 0;

  .movie-form-input {
    background-color: #323232;
    color: #FFFFFF;
  }

  .movie-form-reset-button {
    width: 180px;
    height: 57px;
    border-color: #F65261;
    border-radius: 4px;
    font-size: 20px;
    color: #F65261;
    background-color: #323232;
    margin-left: 485px;
    margin-top: 25px;
  }

  .movie-form-submit-button {
    width: 180px;
    height: 57px;
    border-color: #F65261;
    border-radius: 4px;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #F65261;
    margin-left: 20px;
  }

  .movie-form-left-input-group {
    margin-top: 10px;
    display: inline-block;
    position: relative;
    width: 525px;
  }

  .movie-form-right-input-group {
    margin-top: 10px;
    display: inline-block;
    position: relative;
    width: 301px;
    margin-left: 30px;
  }

  .movie-form-left-input-group-input {
    display: inline-block;
    width: 525px;
    height: 57px;
  }

  .movie-form-right-input-group-input {
    display: inline-block;
    width: 301px;
    height: 57px;
  }

  .overview-textarea-group {
    margin-top: 10px;
    width: 100%;
    height: 220px;
  }

  .overview-textarea {
    width: 856px;
    height: 200px;
    background-color: #323232;
  }
`
