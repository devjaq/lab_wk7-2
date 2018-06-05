"use strict";
function CartService($http) {

  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/cart-items"
    });
  } // end method "getCartItems"

  const addItem = (newItem) => {
    return $http({
      method: "POST",
      url: "/portal/cart-items",
      data: newItem
    });
  } // end method "addItem"

  const deleteItem = (id) => {
    return $http({
      method: "DELETE",
      url: "/portal/cart-items/" + id
    });
  } // end method "getCartItems"

  const updateItem = (item) => {
    return $http({
      method: "PUT",
      url: "/portal/cart-items/" + item.id,
      data: item
    });
  } // end method "getCartItems"

  return {
    getAllItems,
    addItem,
    deleteItem,
    updateItem
  }
} // end factory "CartService"

angular
  .module("app")
  .factory("CartService", CartService);