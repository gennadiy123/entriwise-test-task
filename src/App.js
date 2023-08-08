import { Wrapper, Header, Logo, ItemsWrapper, Item, ContentBlock } from "./App.styles";

function App() {
  return (
    <Wrapper className="App">
      <Header>
        <Logo>Logo</Logo>
        <ItemsWrapper>
          <Item href="#">Item1</Item>
          <Item href="#">Item2</Item>
          <Item href="#">Item3</Item>
          <Item href="#">Item4</Item>
        </ItemsWrapper>
      </Header>
      <ContentBlock>
      </ContentBlock>
      <ContentBlock>
      </ContentBlock>
      <ContentBlock>
      </ContentBlock>
      <ContentBlock>
      </ContentBlock>
    </Wrapper>
  );
}

export default App;
