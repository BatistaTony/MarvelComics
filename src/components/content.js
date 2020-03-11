import React from "react";
import Quadrinhos from "./quadrinho";
import "./styles/content.scss";
import { connect } from "react-redux";

class Content extends React.Component {
  state = {
    quadrinhos: [
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
    ate: 10
  };

  // async componentDidMount() {
  //   this.props.dispatch(await getMarvel());
  // }

  verMais = () => {
    const tmh = this.state.quadrinhos.length
    this.setState({ ate: (this.state.ate + 10) >  tmh ?  tmh : (this.state.ate + 10) });
  };

  render() {
    return (
      <div>
        <ul className="content">
          {this.state.quadrinhos.slice(0,this.state.ate).map(q => (
            <Quadrinhos
              img={q.thumbnail.path + "." + q.thumbnail.extension}
              description={q.description}
              name={q.name}
            />
          ))}
        </ul>
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
