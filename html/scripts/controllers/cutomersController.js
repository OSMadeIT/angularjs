
    demoAppp.controller('SimpleController', SimpleController);

    function SimpleController($scope, SimpleFactory) {
      
      $scope.names = SimpleFactory.getCustomers();

      $scope.addCustomer = function () {
        $scope.names.push({ name: $scope.custName, age: $scope.custCity });
      };
    }