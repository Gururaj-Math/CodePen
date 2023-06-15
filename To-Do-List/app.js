var myapp = angular.module("myapp",[]);
myapp.controller("mycontroller",function($scope){
    $scope.items = ["Eat","Sleep","Code"];
    $scope.newitem = "";
    $scope.pushitem = function(){
        if($scope.newitem != ""){
            $scope.items.push($scope.newitem);
            $scope.newitem = "";
        }
    }
    
    $scope.deleteitem = function(index){
        $scope.items.splice(index, 1);
        
    }
})