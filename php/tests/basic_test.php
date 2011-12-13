<?php

$path = realpath(basename(__FILE__).'../');
set_include_path($path);

require('lib/simpletest/autorun.php');
require('lib/basic.php');

class TestOfBasicHello extends UnitTestCase {
    
    function testHelloReturnsHelloWorld(){
        $this->assertTrue( Hello\hello() == "Hello World");
    }

}
