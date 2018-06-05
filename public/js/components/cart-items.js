"use strict";

const cartItems = {
  template: `
  <div>
    <section ng-repeat="item in $ctrl.cart">
      <input type="text" ng-blur="$ctrl.updateItem(item)" ng-model="item.product">
      <input type="text" ng-blur="$ctrl.updateItem(item)" ng-model="item.price">
      <input type="text" ng-blur="$ctrl.updateItem(item)" ng-model="item.quantity">
      <a href="" ng-click="$ctrl.deleteItem(item.id);">Delete</a>
    </section>
  </div>

  <form ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input type="text" ng-model="$ctrl.newItem.product" placeholder="Product Name">
    <input type="text" ng-model="$ctrl.newItem.price" placeholder="Price">
    <input type="text" ng-model="$ctrl.newItem.quantity" placeholder="Quantity">
    <button>Submit</button>
  </form>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      console.log(response);
      vm.cart = response.data;
    });
    vm.addItem = (newItem) => {
      CartService.addItem(newItem).then((response) => {
        vm.cart = response.data;
      });
      vm.newItem = {};
    }
    vm.deleteItem = (id) => {
      CartService.deleteItem(id).then((response) => {
        vm.cart = response.data;
      });
    }
    vm.updateItem = (item) => {
      CartService.updateItem(item).then((response) => {
        vm.cart = response.data;
      })
    }
  }] // end controller
} // end component "cart"

angular
  .module("app")
  .component("cartItems", cartItems);