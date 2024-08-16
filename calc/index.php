<?php
class Calc
{
    function plus($a,$b){
        return $a + $b;
    }
    function minus($a,$b){
        return $a - $b;
    }
    function multiply($a,$b){
        return $a * $b;
    }

    function divide($a,$b){
        if ($b == 0)
            return 0;
        else return $a / $b;
    }



}
$obj = new Calc();

