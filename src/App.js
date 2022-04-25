import React from "react";
import Carousel from "nuka-carousel";
import IconSearch from "./assets/icon-search-filled.svg";
import DefaultUserProfile from "./assets/default-user-profile.svg";
import RightTriangle from "./assets/right-triangle.svg";
import LikeButton from "./assets/like-button.svg";
import FavoriteHeart from "./assets/favorite-heart.svg";
import Movie1 from "./assets/A-fuga-das-galinhas.jpeg";
import Movie2 from "./assets/AmarElo.jpg";
import Movie3 from "./assets/Capitao-Fantastico.png";
import Movie4 from "./assets/Hoje-eu-quero-voltar-sozinho.png";
import Movie5 from "./assets/Que-horas-ela-volta.png";
import Movie6 from "./assets/Rocketman.jpg";
import Movie7 from "./assets/Shrek.png";
import Movie8 from "./assets/Spider-man-into-spider-verse.png";
import Movie9 from "./assets/Um-sonho-de-liberdade.png";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  color:white;
  font-family:Arial;
}
body{
  background-color:black;
}
`;
const BoxPage = styled.div`
  width: 100%;
  padding: 1.1% 0 3.1% 3.9%;
  background-color: black;
`;
const Header = styled.header`
  width: 100%;
  height: 4.8vh;
  margin-bottom: 15vh;
  display: flex;
  background-color: #000;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
const TODOFLIX = styled.h1`
  color: #e71b27;
  font-size: 1.5em;
`;
const Categories = styled.div`
  width: 132px;
  &:hover ul {
    display: flex;
    flex-direction: column;
  }
`;
const Home = styled.p`
  margin-left: 2vw;
  margin-right: 2vw;
  display: flex;
  align-items: center;
`;
const AddMovies = styled.button`
  width: 112px;
  height: 32px;
  background-color: #e71b27;
  margin-right: 2vw;
  border: none;
  border-radius: 4px;
`;
const BoxCategoriasTitle = styled.div`
  display: flex;
  height: 5vh;
`;
const CategoriasTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 0.98em;
  font-weight: normal;
`;
const CategoriesList = styled.ul`
  width: 100%;
  display: none;
  position: relative;
  opacity: 1;
  list-style: none;
  background-color: #000;
  li {
    font-size: 0.95em;
    padding: 6px;
  }
`;
const Input = styled.input`
  width: 400px;
  height: 5vh;
  padding-left: 2.5vw;
  background-image: url(${IconSearch});
  background-repeat: no-repeat;
  background-position: 1vw center;
  border: none;
  background-color: #2c2c2c;
  border-radius: 4px;
  margin-right: 2vw;
`;
const BoxUser = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;
const VistoRecente = styled.div`
  width: 100%;
  height: 17.7vw;
  margin-bottom: 10vh;
  display: flex;
`;
const MovieImg = styled.img`
  width: 32.1vw;
  border-radius: 4px;
`;
const Likes = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 0.8em;
`;
const BoxDetails = styled.div`
  margin-left: 3.5vw;
`;
const Title = styled.div`
  font-size: 2.55em;
  font-weight: bold;
`;
const Description = styled.div`
  width: 29.648609077vw;
  font-size: 0.9em;
`;
const BoxMoviesCaroucel = styled.div`
  width: 100%;
`;
const Destaques = styled.h2`
  font-size: 1.1em;
  margin-bottom: 1%;
`;
const MovieBox = styled.div`
  width: 18.9vw;
  min-height: 20.7vw;
  padding: 2.18%;
  margin: 1.5% 0;
  border-radius: 4px;
  &:hover {
    transition: 0.2s;
    background-color: #2c2c2c;
  }
`;
const ImgInMovieBox = styled.img`
  width: 100%;
  border-radius: 4px;
`;
const NameAndLike = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3%;
  justify-content: space-between;
`;
const TitleInMovieBox = styled.h3`
  display: inline-block;
  position: relative;
  font-size: 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const NoteNumber = styled.p`
  margin-right: 0.4vw;
`;
const CaroucelDescription = styled.p`
  font-size: 0.8em;
`;

const BoxImg = styled.div`
  position: relative;
`;
const FavoriteHeartButton = styled.img`
  width: 8%;
  position: absolute;
  right: 1.5%;
  top: 1.5%;
`;
// const i = styled.div``
export default class App extends React.Component {
  state = {
    moviesList: [
      {
        Name: "A Fuga das Galinhas",
        img: Movie1,
        Note: "2/5",
        description:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
      },
      {
        Name: "AmarElo",
        img: Movie2,
        Note: "5/5",
        description:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
      },
      {
        Name: "Capitão Fantástico",
        img: Movie3,
        Note: "4/5",
        description:
          "Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai."
      },
      {
        Name: "Hoje Eu Quero Voltar Sozinho",
        img: Movie4,
        Note: "-",
        description:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        Name: "Que Horas Ela Volta",
        img: Movie5,
        Note: "-",
        description:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        Name: "Rocketman",
        img: Movie6,
        Note: "-",
        description:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
      },
      {
        Name: "Shrek",
        img: Movie7,
        Note: "4/5",
        description:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
      },
      {
        Name: "Homem Aranha",
        img: Movie8,
        Note: "3/5",
        description:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        Name: "Um Sonho de Liberdade",
        img: Movie9,
        Note: "4,5/5",
        description:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      }
    ],
    resultMovies: []
  };

  SearchMovies = (event) => {
    const { moviesList } = this.state;
    const MoviesFilter = moviesList.filter((item) => {
      if (
        item.Name.toLowerCase().includes(event.target.value.toLowerCase()) &&
        event.target.value !== ""
      ) {
        return true;
      }
    });

    this.setState({
      resultMovies: MoviesFilter
    });
  };

  render() {
    return (
      <BoxPage>
        <GlobalStyle />

        <Header>
          <Div>
            <TODOFLIX>TODOFLIX</TODOFLIX>

            <Home>Inicio</Home>

            <Categories>
              <BoxCategoriasTitle>
                <CategoriasTitle>Categorias</CategoriasTitle>
                <img src={RightTriangle} />
              </BoxCategoriasTitle>

              <CategoriesList>
                <li>Todos</li>
                <li>Favoritos</li>
                <li>Já vistos</li>
                <li>Adicionados</li>
              </CategoriesList>
            </Categories>
          </Div>

          <Div>
            <AddMovies>Adicionar filme</AddMovies>
            <Input
              onChange={this.SearchMovies}
              type="text"
              placeholder="Pesquisar"
            />
            <BoxUser>
              <img src={DefaultUserProfile} alt="" />
              <img src={RightTriangle} />
            </BoxUser>
          </Div>
        </Header>
        <div>
          <h3>Resultados</h3>
          {this.state.resultMovies.map((item) => (
            <MovieBox>
              <BoxImg>
                <ImgInMovieBox src={item.img} alt="" />
                <FavoriteHeartButton
                  src={FavoriteHeart}
                  alt="Botão de coração para favoritar."
                />
              </BoxImg>
              <NameAndLike>
                <TitleInMovieBox>{item.Name}</TitleInMovieBox>
                <Likes>
                  <NoteNumber>{item.Note}</NoteNumber>
                  <img
                    src={LikeButton}
                    alt="botão com desenho de uma mão com polegar pra cima no estilo minimalista em verde claro."
                  />
                </Likes>
              </NameAndLike>
              <CaroucelDescription>{item.description}</CaroucelDescription>
            </MovieBox>
          ))}
        </div>
        <Main>
          <VistoRecente>
            <MovieImg src={Movie3} alt="Poster do filme Capitão Fantástico" />

            <BoxDetails>
              <img src={FavoriteHeart} alt="Botão de coração" />
              <p>Visto recentemente</p>
              <Title>Capitão Fantástico</Title>
              <Description>
                Nas florestas do estado de Washington, um pai cria seus seis
                filhos longe da civilização, em uma rígida rotina de aventuras.
                Ele é forçado a deixar o isolamento e leva sua família para
                encarar o mundo, desafiando sua ideia do que significa ser pai.
              </Description>
              <Likes>
                <NoteNumber>4/5</NoteNumber>
                <img src={LikeButton} alt="" />
              </Likes>
            </BoxDetails>
          </VistoRecente>

          <BoxMoviesCaroucel>
            <Destaques>Destaques</Destaques>

            <Carousel slidesToShow={5} adaptiveHeight="false" autoplay={true}>
              {this.state.moviesList.map((item) => (
                <MovieBox>
                  <BoxImg>
                    <ImgInMovieBox src={item.img} alt="" />

                    <FavoriteHeartButton
                      src={FavoriteHeart}
                      alt="Botão de coração para favoritar."
                    />
                  </BoxImg>
                  <NameAndLike>
                    <TitleInMovieBox>{item.Name}</TitleInMovieBox>

                    <Likes>
                      <NoteNumber>{item.Note}</NoteNumber>
                      <img
                        src={LikeButton}
                        alt="botão de coração simbolisando favorito"
                      />
                    </Likes>
                  </NameAndLike>

                  <CaroucelDescription>{item.description}</CaroucelDescription>
                </MovieBox>
              ))}
            </Carousel>
          </BoxMoviesCaroucel>
        </Main>
      </BoxPage>
    );
  }
}
