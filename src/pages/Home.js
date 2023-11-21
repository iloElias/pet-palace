function Home({ userInfo }) {
  return (
    <>
      <div className="App">
        {userInfo.user == null ? (
          <>
            <h1>Seja bem-vindo ao Pet Palace</h1>
            <p>Aqui fazemos a diferença para seus pets</p>
          </>
        ) : (
          <>
            <h1>{`Ola ${userInfo.user}, estavamos esperando`}</h1>
            <p>Quais são os planos para hoje?</p>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
