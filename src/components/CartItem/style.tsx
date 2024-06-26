import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px 0 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemImg = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;

export const ItemPrice = styled.span`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: 35px;
`;
