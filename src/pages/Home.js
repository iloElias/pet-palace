import backgroundImg from "../images/petPalaceWallpaper.jpg";

function Home({ userInfo }) {
  return (
    <>
      <div className="App">
        <div className="home-info">
          {userInfo.user == null ? (
            <>
              <h1>Seja bem-vindo ao Pet Palace</h1>
              <p>Aqui fazemos a diferença para o seu melhor amigo</p>
            </>
          ) : (
            <>
              <h1>{`Ola ${userInfo.user}, estavamos te esperando`}</h1>
              <p>Quais são os planos para hoje?</p>
            </>
          )}
        </div>
        <img className="app-background" src={backgroundImg} alt="Imagem não encontrada" />
      </div>
    </>
  );
}

export default Home;
