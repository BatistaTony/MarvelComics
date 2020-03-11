import React from "react";
import Quadrinhos from "./quadrinho";
import "./styles/content.scss";
import { connect } from "react-redux";
import { seeQ } from "./store/actions.js/quadrinhos";

class Content extends React.Component {
  state = {
    quadrinhos: [
      {
        id: 1,
        name: "Dog Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        id: 2,

        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        id: 3,

        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        id: 4,

        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        id: 4,

        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      },
      {
        name: "Cao Man",
        thumbnail: {
          path: "image",
          extension: "png"
        },
        description: "Hello world, yes I did it face"
      }
    ],
    ate: 10,

    quadrinho: {
      name: '',
      img: '',
      description: ''
    }

  };

  // async componentDidMount() {
  //   this.props.dispatch(await getMarvel());
  // }

  pesquisar = () => {
    let matches = this.state.quadrinhos.filter(q => {
      const regExp = new RegExp(`${this.props.state.pesquisar}`, "gi");

      return q.name.match(regExp);
    });
    console.log(matches.length ? true : false);
    return matches.length ? matches : this.state.quadrinhos;
  };

  verMais = () => {
    const tmh = this.state.quadrinhos.length;
    this.setState({
      ate: this.state.ate + 10 > tmh ? tmh : this.state.ate + 10
    });
  };

  closeQ = () => {
    this.props.dispatch(seeQ(0))
  }

  render() {
    return (
      <div>
        <ul className="content">
          {this.pesquisar()
            .slice(0, this.state.ate)
            .map(q => (
              <Quadrinhos
                img={q.thumbnail.path + "." + q.thumbnail.extension}
                description={q.description}
                name={q.name}
                q={q}
              />
            ))}
        </ul>
        
        {this.props.state.quadrinho ?
          <div className="overlay">
            <div className="div_ov">
              <div className="item">
                <img
                  src={
                    this.props.state.quadrinho.thumbnail.path +
                    "." +
                    this.props.state.quadrinho.thumbnail.extension
                  }
                  alt=""
                />
                <h1>{this.props.state.quadrinho.name}</h1>
                <p>{this.props.state.quadrinho.description}</p>
                <button className="btn_close" onClick={this.closeQ} >Fechar</button>
              </div>
            </div>
          </div>
          : null}

        <div className="div_btn">
          <button onClick={this.verMais} className="btn_seeMore">
            Ver mais
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Content);
