import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from "./data";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
  };
  handleAddToCart = (shoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      let newShoe = { ...shoe, SL: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].SL++;
    }
    this.setState({
      cart: cloneCart,
    })
  };
  handleRemove = (idShoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id === idShoe;
    });
    console.log("🚀 ~ file: Ex_Shoe.js:32 ~ Ex_Shoe ~ index ~ idShoe:", idShoe)
    cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  handleChangeQuantity = (idShoe,option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id === idShoe;
    });
    option == TANG_SO_LUONG && cloneCart[index].SL++;
    option == GIAM_SO_LUONG && cloneCart[index].SL-- && cloneCart[index].SL == 0 && this.handleRemove(idShoe);
    this.setState({
      cart: cloneCart,
    })
  }
  handleChangeQuantity_v2 = (idShoe,option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id === idShoe;
    });
    if (option == TANG_SO_LUONG){
      cloneCart[index].SL++;
    }
    else{
      cloneCart[index].SL--;
      cloneCart[index].SL == 0 && this.handleRemove(idShoe)
    }
    this.setState({
      cart: cloneCart,
    })
  }
  handleDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <CartShoe handleChangeQuantity={this.handleChangeQuantity} cart={this.state.cart} handleRemove={this.handleRemove}/>
          <ListShoe
            list={this.state.shoeArr}
            handleAddToCart={this.handleAddToCart}
            handleDetail={this.handleDetail}
          />
        </div>r
        <DetailShoe detail={this.state.detail} />
      </div>
    );
  }
}
