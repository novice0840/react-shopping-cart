import React from "react";
import styled from "styled-components";

interface CartDescriptionProps {
  count: number;
}
const CartDescription = ({ count }: CartDescriptionProps) => {
  return (
    <Wrapper>
      <Titile>장바구니</Titile>
      {count && <div>현재 {count}종류의 상품이 담겨있습니다.</div>}
    </Wrapper>
  );
};

export default CartDescription;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 36px;
  font-weight: var(--font-weight-medium);
`;

const Titile = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: 35px;
`;
