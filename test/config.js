export default function($ionicNativeTransitionsProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    'ngInject';
    $ionicNativeTransitionsProvider.setDefaultOptions({
        duration: 500
    });

    $ionicNativeTransitionsProvider.setDefaultTransition({
        type: 'slide',
        direction: 'left'
    });

    $ionicNativeTransitionsProvider.setDefaultBackTransition({
        type: 'slide',
        direction: 'right'
    });

    // $ionicNativeTransitionsProvider.enable(false);

    $ionicConfigProvider.tabs.position('top');

    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
            url: "/home",
            views: {
                'home-tab': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('one', {
            url: "/one",
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            nativeTransitionsAndroid: {
                "type": "flip",
                "direction": "right"
            },
            nativeTransitionsIOS: {
                "type": "flip",
                "direction": "left"
            },
            nativeTransitionsWindowsPhone: {
                "type": "flip",
                "direction": "down"
            },
            templateUrl: "templates/one.html"
        })
        .state('two', {
            url: "/two",
            nativeTransitions: {
                type: "fade"
            },
            nativeTransitionsIOS: {
                "type": "flip",
                "direction": "down" // 'left|right|up|down', default 'right' (Android currently only supports left and right)
            },
            templateUrl: "templates/two.html"
        })
        .state('three', {
            url: "/three",
            nativeTransitions: {
                type: "slide",
                direction: "up"
            },
            templateUrl: "templates/three.html"
        })
        .state('four', {
            url: "/four",
            nativeTransitions: {
                type: "slide"
            },
            templateUrl: "templates/four.html"
        })
        .state('tabs.about', {
            url: "/about",
            nativeTransitions: null,
            views: {
                'about-tab': {
                    templateUrl: "templates/about.html"
                }
            }
        })
        .state('tabs.contact', {
            url: "/contact",
            views: {
                'contact-tab': {
                    templateUrl: "templates/contact.html"
                }
            }
        });


    $urlRouterProvider.otherwise("/tab/home");
}
