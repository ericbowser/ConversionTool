import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Header = styled.h3`
  // TRBL
  margin: 33px 20px 33px 0px;
`;

const Grid = styled.div`
  font-size: 1.2rem;
  font-size: large;
  font-family: "Bold Italic Art";

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 25px;
`;

const LeftColumn = styled.p`
  grid-column-start: 1;
  grid-column-span: 1;
`;

const RightColumn = styled.span`
  grid-column-start: 2;
  grid-column-span: 1;
`;

function App() {
  return (
    <React.Fragment>
      <Container>
      <Header>My first affiliate idea for a sight or possibly just a template to start with before I can come up with an
        idea</Header>
      <Grid>
        <div>
          <LeftColumn>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            Aenean
            ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
            tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
            pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
            facilisis
            luctus, metus
          </LeftColumn>
        </div>
        <div>
          <RightColumn>
            <iframe title={"Amazon Prime"}
              src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=11&l=ur1&category=primediscounted&banner=0RPZF7MM71DJHECJ0ZG2&f=ifr&linkID=3bc23c6a4157edd50dda95102a29c76c&t=eb0a07-20&tracking_id=eb0a07-20"
              width="120" height="600" style={{'border': 'none;'}} 
              sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation">
            </iframe>
          </RightColumn>
        </div>
      </Grid>
    </Container>

    </React.Fragment>)
}

export default App;
