import keyConceptsImage from './assets/images/headerimg.webp';
import HeaderComponent from './assets/components/header/header.js';
import CardComponent from './assets/components/card/card';

const headerImg = {
  image : keyConceptsImage
}


function App() {
  return (
    <div>
      <HeaderComponent data={headerImg}/>
      <CardComponent></CardComponent>
    </div>
  );
}

export default App;
