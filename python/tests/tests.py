#!/usr/bin/env python

import unittest
import lib.basic

class TestBasicHello(unittest.TestCase):
    def test_basic_hello(self):
        self.assertEqual(lib.basic.hello(), "Hello World")
        

if __name__ == '__main__':
    unittest.main()