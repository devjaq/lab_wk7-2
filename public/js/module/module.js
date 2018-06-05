"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider 
      .when("/cart", {
        template: `<cart-items></cart-items>`
      })
      .otherwise({
        redirectTo: "/cart"
      });
  });