describe('Testing MEAN Main Module', function() {
	var mainModule;

	beforeEach(function() {
		mainModule = angular.module('mean');
	});

	it('Should be registered', function() {
		expect(mainModule).toBeDefined();
	});
});

describe('Testing Articles Controller', function() {
	var _scope, ArticlesController;

	beforeEach(function() {
		module('mean');
		inject(function($rootScope, $controller) {
			_scope = $rootScope.$new();
			ArticlesController = $controller('ArticlesController', {
				$scope: _scope
			});
		});
	});

	it('Should be registered', function() {
		expect(ArticlesController).toBeDefined();
	});

	it('Should include CRUD methods', function() {
		expect(_scope.find).toBeDefined();
		expect(_scope.findOne).toBeDefined();
		expect(_scope.create).toBeDefined();
		expect(_scope.delete).toBeDefined();
		expect(_scope.update).toBeDefined();
	});
});

describe('Testing Articles Service', function() {
	var _Articles;

	beforeEach(function() {
		module('mean');
		inject(function(Articles) {
			_Articles = Articles;
		});
	});

	it('Should be registered', function() {
		expect(_Articles).toBeDefined();
	});

	it('Should include $resource methods', function() {
		expect(_Articles.get).toBeDefined();
		expect(_Articles.query).toBeDefined();
		expect(_Articles.remove).toBeDefined();
		expect(_Articles.update).toBeDefined();
	});
});

describe('Testing Articles Routing', function() {
	beforeEach(module('mean'));

	it('Should map a "list" route', function() {
		inject(function($route) {
			expect($route.routes['/articles'].templateUrl).toEqual('articles/views/list-articles.view.html');
		});
	});
});

describe('Testing The ngBind Directive', function() {
	beforeEach(module('mean'));

	it('Should bind a value to an HTML element', function() {
		inject(function($rootScope, $compile) {
			var _scope = $rootScope.$new();
			element = $compile('<div data-ng-bind="testValue"></div>')(_scope);
			_scope.testValue = 'Hello World';
			_scope.$digest();
			expect(element.html()).toEqual(_scope.testValue);
		});
	});
});

describe('Testing The Lowercase Filter', function() {
	beforeEach(module('mean'));
		it('Should convert a string characters to lowercase', function() {
		inject(function($filter) {
			var input = 'Hello World';
			var toLowercaseFilter = $filter('lowercase');
			expect(toLowercaseFilter(input)).toEqual(input.toLowerCase());
		});
	});
});
