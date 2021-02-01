/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";
import axios from "axios";
import List from "./List";
class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
      loading: false,
      searchTerm: "",
      products: [],
      productsFiltered: [],
      displayList: false,
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */

  componentDidMount() {
    axios
      .get(`http://localhost:3035`)
      .then((res) => {
        const products = res.data;
        this.setState({ products: products });
        this.setState({ loading: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */

  onSearch(e) {
    const inputValue = e.target.value.replace(/ /g, "");
    if (Array.from(inputValue).length >= 2 && inputValue != "") {
      this.setState({ searchTerm: e.target.value });
      let filteredUsers = this.state.products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.state.searchTerm.toLocaleLowerCase());
      });
      this.setState({ productsFiltered: filteredUsers });
      this.setState({ displayList: true });
    } else {
      this.setState({ displayList: false });
    }
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? "showing " : "") + "search-container"
          }
        >
          <input
            placeholder="WHAT ARE YOU LOOKING FOR?"
            type="text"
            onChange={(e) => this.onSearch(e)}
          />
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
          {this.state.loading ? (
            <div className="predictive-search">
              <div className="predictive-search__list">
                {this.state.displayList ? (
                  <List
                    products={this.state.productsFiltered}
                    handleClick={this.handleClick}
                  />
                ) : (
                  null
                )}
              </div>
            </div>
          ) : (
            <div>Fetching data error</div>
          )}
        </div>
      </header>
    );
  }
}

// Export out the React Component
module.exports = Menu;
