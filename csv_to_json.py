#!/usr/bin/python

import json
import datetime
import string

f = open("sandbox/input_new.txt", "r")
content = f.readlines()
fout = open("sandbox/input.json", "w")
count = 0

for item in content:
	item = string.split(item, ';')
	#date
	item6ahead = string.split(content[count+6], ';')
	#hour
	date_object = datetime.datetime.strptime(item[0] + ' ' + str(int(item[1]) - 1), '%d/%m/%Y %H')
	thetime = date_object.strftime('%Y-%m-%dT%H:%M:%S')
	fout.write( '{"DateTime": "' + thetime +
		'","crnt": ' + item[2].translate(None, '\n ') +
		',"crnt6ahead": ' + item6ahead[2].translate(None, '\n ') + 
		',"n4": ' + item[3] +
		',"n5": ' + item[4] +
		',"n6": ' + item[5] +
		',"n7": ' + item[6] +
		',"n8": ' + item[7] +
		',"n9": ' + item[8] +
		',"n10": ' + item[9] +
		',"n11": ' + item[10] +
		',"n12": ' + item[11] +
		',"n13": ' + item[12] +
		',"n14": ' + item[13] +
		',"n15": ' + item[14] +
		',"n16": ' + item[15] +
		',"n17": ' + item[16] +
		',"n18": ' + item[17] +
		',"n19": ' + item[18] +
		',"n20": ' + item[19] +
		',"n21": ' + item[20] +
		',"n22": ' + item[21] +
		',"n23": ' + item[22] +
		',"n24": ' + item[23] +
		',"n25": ' + item[24] +
		',"n26": ' + item[25] +
		',"n27": ' + item[26] +
		',"n28": ' + item[27] +
		',"n29": ' + item[28].translate(None, '\n ') +
		'}\n')
	count += 1
