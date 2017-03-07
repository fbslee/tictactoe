angular.module('tictactoe', [])

.controller('tttCtrl', function($scope){
	$scope.player = 'Player1';
    $scope.R1C1 = null
    $scope.R1C2 = null
    $scope.R1C3 = null
    $scope.R2C1 = null
    $scope.R2C2 = null
    $scope.R2C3 = null
    $scope.R3C1 = null
    $scope.R3C2 = null
    $scope.R3C3 = null
    $scope.toggleR1C1 = function(){
        if($scope.player === 'Player1' && $scope.R1C1 === null){
            $scope.R1C1 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R1C1 === null){
            $scope.R1C1 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR1C2 = function(){
        if($scope.player === 'Player1' && $scope.R1C2 === null){
            $scope.R1C2 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R1C2 === null){
            $scope.R1C2 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR1C3 = function(){
        if($scope.player === 'Player1' && $scope.R1C3 === null){
            $scope.R1C3 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R1C3 === null){
            $scope.R1C3 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR2C1 = function(){
        if($scope.player === 'Player1' && $scope.R2C1 === null){
            $scope.R2C1 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R2C1 === null){
            $scope.R2C1 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR2C2 = function(){
        if($scope.player === 'Player1' && $scope.R2C2 === null){
            $scope.R2C2 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R2C2 === null){
            $scope.R2C2 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR2C3 = function(){
        if($scope.player === 'Player1' && $scope.R2C3 === null){
            $scope.R2C3 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R2C3 === null){
            $scope.R2C3 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR3C1 = function(){
        if($scope.player === 'Player1' && $scope.R3C1 === null){
            $scope.R3C1 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R3C1 === null){
            $scope.R3C1 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR3C2 = function(){
        if($scope.player === 'Player1' && $scope.R3C2 === null){
            $scope.R3C2 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R3C2 === null){
            $scope.R3C2 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.toggleR3C3 = function(){
        if($scope.player === 'Player1' && $scope.R3C3 === null){
            $scope.R3C3 = 'X'
            $scope.checkWinner()
            $scope.player = 'Player2'
        } else if($scope.player === 'Player2' && $scope.R3C3 === null){
            $scope.R3C3 = 'O'
            $scope.checkWinner()
            $scope.player = 'Player1'
        }
    }
    $scope.checkWinner = function(){
        if($scope.R1C1 === $scope.R1C2 === $scope.R1C3 || $scope.R1C1 === $scope.R2C1 === $scope.R3C1 || $scope.R1C1 === $scope.R2C2 === $scope.R3C3){
            if($scope.R1C1 === 'X'){
                $scope.winner = 'Player1'
            } else if ($scope.R1C1 === 'O'){
                $scope.winner = 'Player2'
            }
        }
        if($scope.R2C1 === $scope.R2C2 === $scope.R2C3){
            if(R2C1 === 'X'){
                $scope.winner = 'Player1'
            } else if ($scope.R2C1 === 'O'){
                $scope.winner = 'Player2'
            }
        }
        if($scope.R3C1 === $scope.R3C2 === $scope.R3C3 || $scope.R3C1 === $scope.R2C2 === $scope.R1C3){
            if($scope.R3C1 === 'X'){
                $scope.winner = 'Player1'
            } else if ($scope.R3C1 === 'O'){
                $scope.winner = 'Player2'
            }
        }
        if($scope.R1C2 === $scope.R2C2 === $scope.R3C2){
            if($scope.R1C2 === 'X'){
                $scope.winner = 'Player1'
            } else if ($scope.R1C2 === 'O'){
                $scope.winner = 'Player2'
            }
        }
        else if($scope.R1C3 === $scope.R2C3 === $scope.R3C3){
            if($scope.R1C3 === 'X'){
                $scope.winner = 'Player1'
            } else if ($scope.R1C3 === 'O'){
                $scope.winner = 'Player2'
            }
        }
    }
    $scope.clearBoard = function(){
        $scope.R1C1 = null
        $scope.R1C2 = null
        $scope.R1C3 = null
        $scope.R2C1 = null
        $scope.R2C2 = null
        $scope.R2C3 = null
        $scope.R3C1 = null
        $scope.R3C2 = null
        $scope.R3C3 = null
        $scope.player = 'Player1'
    }
})