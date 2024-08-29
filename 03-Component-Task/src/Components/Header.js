import keyConceptsImage from '../assets/images/key-concepts.png';


function Header(){
  return(
  <Header>
    <img src={keyConceptsImage} alt="Medal badge with a star" />
    <h1>Key React Concepts</h1>
    <p>Selected key React concepts you should know about</p>
  </Header>
  )
}

export default Header;