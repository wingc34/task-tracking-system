#!/bin/bash
mongoimport --host mongo --db=users --collection=users --type=csv --headerline --file=/users.csv