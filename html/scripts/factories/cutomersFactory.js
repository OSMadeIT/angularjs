demoAppp.factory('SimpleFactory', function () {

    var cust = [{ name: 'mbadi', age: 23 },
    { name: 'mba', age: 20 },
    {
      name: 'oyaro', age: 50
    }];

    var factory = {};

    factory.getCustomers = function () {
      return cust;
    }
    return factory;
  });