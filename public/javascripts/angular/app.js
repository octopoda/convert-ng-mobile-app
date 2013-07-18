// Eatr Application build AngularJS
// Zack Davis
// Octopoda Interactive;

var convert = angular.module('convert', []);


convert.config(function ($routeProvider) {
  $routeProvider
  .when('/calculator', {
    templateUrl:'/views/layouts/calculator.html',
    controller: 'calculatorController'
  })
  .when('/recipe', {
    templateUrl:'/views/layouts/recipe.html',
    controller: 'recipeController'
  })
  .otherwise({
    redirectTo:'/calculator'
  });


});

convert.factory('FlashService', function ($rootScope) {
    return {
        show: function (message) {
            $rootScope.flash = message;
            $('.flash').append('<i class="pull-right close icon-cancel-circled" ng-click="clearFlash()"></i>');
        },
        clear: function () {
            $rootScope.flash = ''
            $('.flash').children('.close').remove();
            
        }
    }
});

convert.factory('ItemService', function ($rootScope) {
    return {
        itemArray: [],
        setItems: function (item) {
            this.itemArray.push(item);
            this.broadcast();
        },
        clearItems: function () {
            this.itemArray = [];
            this.broadcast();
        },
        broadcast: function () {
            $rootScope.$broadcast('itemBroadCast');
        }
    }
});

convert.factory('CostService',  function ($rootScope) { 
    return {
        finalCost: 0,
        setCost: function (cost) {
            this.finalCost += cost;
            this.broadcast();
        },
        clearCost: function () {
            this.finalCost = 0;
            this.broadcast();
        },
        broadcast: function () {
            $rootScope.$broadcast('costBroadcast');
        }
    }
});

convert.factory('DataService', function ($rootScope) {
    return {
        get: function () {
            var conversions = [
                {name: 'tsp', toMetric:5,  type:'Dry Volume', unit: 'ml'},
                {name: 'tbsp', toMetic: 15,  type:'Dry Volume', unit: 'ml'},
                {name: 'cup', toMetric: 225,  type:'Dry Volume', unit: 'ml'},
                {name: 'pint', toMetric: 450,  type:'Dry Volume', unit: 'ml'},
                {name: 'quart', toMetric: 1000,  type:'Dry Volume', unit: 'ml'},
                {name: 'gallon',  toMetric: 4000,  type:'Dry Volume', unit: 'ml'},

                {name: 'oz',  toMetric: 28.3,  type:'Dry Weight',  unit: 'g'},
                {name: 'tbsp',  toMetric: 14.3,  type:'Dry Weight',  unit: 'g'},
                {name: 'cup',  toMetric: 226.4,  type:'Dry Weight',  unit: 'g'},
                {name: 'pound', toMetric: 452.8, type:'Dry Weight',  unit: 'g'},

                {name: 'fl oz', toMetric: 30,  type:'Liquid Volume', unit: 'ml'},
                {name: 'cup', toMetric: 250,  type:'Liquid Volume', unit: 'ml'},
                {name: 'pint', toMetric:500, type:'Liquid Volume', unit: 'ml'},
                {name: 'quart', toMetric:1000, type:'Liquid Volume', unit: 'ml'},
                {name: 'gallon', toMetric:4000, type:'Liquid Volume', unit: 'ml'}
            ];
            return conversions;
        },
    }
});

convert.factory('NavigationSerivce',  function ($rootScope) {
    return {
        view: 'calculate',
        icon: 'right',
        setNavigation: function (view) {
            if (view == 'calculate') {
                this.view = 'calculate'
                this.icon = 'right';
            } else {
                this.view = "recipe";
                this.icon = 'left';
            }
            this.setIcon();
            this.broadcast()
        },
        setIcon: function  () {
            if (this.icon == 'right') {
                $('.right').addClass('active');
                $('.left').removeClass('active');
            } else {
                $('.left').addClass('active');
                $('.right').removeClass('active');
            }
        },
        broadcast: function () {
            $rootScope.$broadcast('navigationBroadcast');
        }
    }
})


//Main Controller
convert.controller('application', function ($scope, $rootScope, FlashService, $location, DataService, NavigationSerivce) {
    $scope.toggleView  = function (_view, _event) {
       NavigationSerivce.setNavigation(_view); 
    };

    
    $scope.clearFlash = function () {
        FlashService.clear();
    };

    $scope.$on('navigationBroadcast', function () {
        $scope.view = NavigationSerivce.view;
        $('.'+NavigationSerivce.icon).addClass('active');
    })

});

convert.controller('calculatorController',  function ($scope, $rootScope, FlashService, DataService, ItemService, CostService) { 
    //Data Items
    _data = DataService.get();

    
    //Scope Items
    $scope.convertData = _data;
    $scope.grocery = null; 
    $scope.food = null;

    $scope.recipeCost = CostService.finalCost;

    $scope.convert =function () {
        if (this.grocery.unit.type != this.food.unit.type) {
            FlashService.show('Shit! Your units don\'t match');
            return false;
        }



        $one = this.convertDown(this.grocery.unit.toMetric, this.grocery.amount )
        $two = this.convertDown(this.food.unit.toMetric, this.food.amount )

        $cost = this.compare($one, $two, this.grocery.cost);
        
        if ($cost < 0.009) {
            FlashService.show('Yo that\'s less than a penny!');
        }

        ItemService.setItems($cost);
        CostService.setCost($cost);

        this.grocery = null;
        this.food = null;
    };

    $scope.convertDown = function (_metric, _amount) {
        return _metric * _amount;
    };

    $scope.compare = function (_amount1, _amount2, _cost) {
        return (_cost*_amount2)/_amount1;
    };

    $scope.$on('costBroadcast', function (event) {
        $scope.recipeCost = CostService.finalCost;
    });
});

convert.controller('recipeController', function ($scope, $rootScope, FlashService, ItemService, CostService) {
    $scope.recipeCost = CostService.finalCost;
    $scope.itemsCost = ItemService.itemArray;


    $scope.clear = function () {
        CostService.clearCost();
        ItemService.clearItems();
    };


    $scope.$on('costBroadcast', function (e) {
        $scope.recipeCost = CostService.finalCost;
    });

    $scope.$on('itemBroadCast', function (e) {
        $scope.itemsCost = ItemService.itemArray;
    })

});




