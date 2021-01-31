import React from 'react';
import styled from 'styled-components';

export default class Item extends React.Component {
  render() {
    const { topText, bottomText, onClickDetails } = this.props;
    const hasDetails = () => (typeof(onClickDetails) === 'function');
    return(
      <ItemContainer>
        <div>
          <label>{topText}</label>
          <span>{bottomText}</span>
        </div>
        { hasDetails() &&
          <a onClick={onClickDetails}>details</a>
        }
      </ItemContainer>
    )
  }
}

const ItemContainer = styled.div`
  border: 1px solid yellow;

  background-color: #FFF;
  padding: 1em;

  display: inline-block;
  a {
    cursor: pointer;
  }
  label {
    font-weight: 400;
    display: block;
  }
`
