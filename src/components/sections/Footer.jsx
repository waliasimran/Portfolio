import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* Add any necessary footer content here */}
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
