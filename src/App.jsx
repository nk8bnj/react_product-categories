/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';

import FilterByProductName
from './components/FilterByProductName/FilterByProductName';

import FilterByCategory from './components/FilterByCategory/FilterByCategory';
import FilterByOwner from './components/FilterByOwner/FilterByOwner';
import ProductsTable from './components/ProductsTable/ProductsTable';

import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import usersFromServer from './api/users';

import './App.scss';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    item => item.id === product.categoryId,
  );
  const user = usersFromServer.find(item => item.id === category.ownerId);

  return {
    ...product,
    category,
    user,
  };
});

export const App = () => {
  const [selectedUserName, setSelectedUserName] = React.useState('All');
  const [selectedCategorysId, setSelectedCategorysId] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const allFilters = () => {
    let preparedProducts = [...products];

    if (selectedUserName !== 'All') {
      preparedProducts = preparedProducts.filter(
        product => product.user.name === selectedUserName,
      );
    }

    if (selectedCategorysId.length) {
      preparedProducts = preparedProducts
        .filter(product => selectedCategorysId.includes(product.category.id));
    }

    if (searchQuery) {
      preparedProducts = preparedProducts
        .filter(product => product.name.toLowerCase()
          .includes(searchQuery.toLowerCase()));
    }

    return preparedProducts;
  };

  const filteredProducts = allFilters();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <FilterByOwner
              users={usersFromServer}
              selectedUserName={selectedUserName}
              setSelectedUserName={setSelectedUserName}
            />

            <FilterByProductName
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <FilterByCategory
              categories={categoriesFromServer}
              selectedCategorysId={selectedCategorysId}
              setSelectedCategorysId={setSelectedCategorysId}
            />
            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={() => {
                  setSelectedUserName('All');
                  setSearchQuery('');
                  setSelectedCategorysId([]);
                }}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {!products.length ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <ProductsTable products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};
