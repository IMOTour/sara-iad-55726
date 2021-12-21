var APP_DATA = {
  "scenes": [
    {
      "id": "0-viaturas",
      "name": "viaturas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.40519927597999406,
        "pitch": 0.07781437315820838,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 0.48657901386301816,
          "pitch": 0.16874822529218925,
          "rotation": 0,
          "target": "10-ventrada"
        },
        {
          "yaw": 1.275245093379933,
          "pitch": 0.000583552988931757,
          "rotation": 3.9269908169872414,
          "target": "1-pessoas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pessoas",
      "name": "pessoas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.03731662624606,
        "pitch": -0.032921465566934316,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -3.1007565792170517,
          "pitch": 0.1151995927344398,
          "rotation": 0,
          "target": "2-pdentro"
        },
        {
          "yaw": 2.1399321549952894,
          "pitch": 0.013763616304224513,
          "rotation": 1.5707963267948966,
          "target": "0-viaturas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pdentro",
      "name": "p/dentro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6151699835104516,
        "pitch": 0.13767158327990536,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -1.6536663479308853,
          "pitch": 0.4059726102872183,
          "rotation": 3.141592653589793,
          "target": "11-porta"
        },
        {
          "yaw": -3.098672632693127,
          "pitch": -0.030517366941444024,
          "rotation": 3.141592653589793,
          "target": "10-ventrada"
        },
        {
          "yaw": 1.6240291210777293,
          "pitch": 0.06622348998555871,
          "rotation": 3.141592653589793,
          "target": "1-pessoas"
        },
        {
          "yaw": 0.16475260571474948,
          "pitch": 0.0263623909566153,
          "rotation": 3.141592653589793,
          "target": "3-dirsup"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dirsup",
      "name": "dir/sup",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9012245878070893,
        "pitch": 0.23879579377197224,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -2.0608371993083754,
          "pitch": 0.1383736622312881,
          "rotation": 3.141592653589793,
          "target": "4-dircentro"
        },
        {
          "yaw": -2.5803531331743947,
          "pitch": 0.22703323619538907,
          "rotation": 3.141592653589793,
          "target": "6-gardir"
        },
        {
          "yaw": 2.6245215727597477,
          "pitch": 0.03652134139027119,
          "rotation": 3.141592653589793,
          "target": "2-pdentro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dircentro",
      "name": "dir/centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5285609320474336,
        "pitch": 0.2626612383513809,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -2.1948893382300554,
          "pitch": 0.4132294279129489,
          "rotation": 3.141592653589793,
          "target": "5-dirinf"
        },
        {
          "yaw": -3.028436772072512,
          "pitch": 0.24205070230354764,
          "rotation": 3.141592653589793,
          "target": "6-gardir"
        },
        {
          "yaw": 1.0450743606820438,
          "pitch": -0.01697907061286763,
          "rotation": 3.141592653589793,
          "target": "3-dirsup"
        },
        {
          "yaw": 2.09015612802256,
          "pitch": -0.040426414098172714,
          "rotation": 8.63937979737193,
          "target": "2-pdentro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dirinf",
      "name": "dir/inf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.442087509676089,
        "pitch": 0.07866947615994135,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 2.9332066737796616,
          "pitch": 0.09209154632949001,
          "rotation": 3.141592653589793,
          "target": "6-gardir"
        },
        {
          "yaw": 0.5008794907425269,
          "pitch": -0.18592562854085415,
          "rotation": 3.141592653589793,
          "target": "4-dircentro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gardir",
      "name": "gar/dir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3937735583086877,
        "pitch": -0.047971968963146594,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -1.5660442209895074,
          "pitch": 0.0029137311277818156,
          "rotation": 3.141592653589793,
          "target": "7-garfrte"
        },
        {
          "yaw": -2.444925153200387,
          "pitch": 0.06998824765361178,
          "rotation": 0,
          "target": "30-salagar"
        },
        {
          "yaw": 1.3229661231122805,
          "pitch": 0.11061866278326526,
          "rotation": 3.141592653589793,
          "target": "5-dirinf"
        },
        {
          "yaw": 1.6852058353027388,
          "pitch": -0.10821202411093367,
          "rotation": 3.141592653589793,
          "target": "9-esqcentro"
        },
        {
          "yaw": 2.1710382526976186,
          "pitch": -0.18458234355184544,
          "rotation": 3.141592653589793,
          "target": "3-dirsup"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-garfrte",
      "name": "gar/frte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9762011070476682,
        "pitch": 0.020950023542594565,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 0.9691146545790179,
          "pitch": 0.12575126411821458,
          "rotation": 3.9269908169872414,
          "target": "8-esqinf"
        },
        {
          "yaw": -1.0333299994997382,
          "pitch": 0.05888383784972362,
          "rotation": 0,
          "target": "29-garagem"
        },
        {
          "yaw": -2.118285906037581,
          "pitch": 0.03062985636892357,
          "rotation": 3.141592653589793,
          "target": "6-gardir"
        },
        {
          "yaw": -1.3458794800665252,
          "pitch": -0.7830483879879573,
          "rotation": 2.356194490192345,
          "target": "24-varanda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-esqinf",
      "name": "esq/inf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.140387076352958,
        "pitch": 0.05549776751483115,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -2.2165956895740138,
          "pitch": 0.0079837643389844,
          "rotation": 3.9269908169872414,
          "target": "9-esqcentro"
        },
        {
          "yaw": 2.378624065382601,
          "pitch": -0.15418931400670566,
          "rotation": 0.7853981633974483,
          "target": "24-varanda"
        },
        {
          "yaw": 2.24938411002916,
          "pitch": 0.05358713663766501,
          "rotation": 7.853981633974483,
          "target": "7-garfrte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-esqcentro",
      "name": "esq/centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0273489989380202,
        "pitch": 0.12172061931581091,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 2.353572566144564,
          "pitch": 0.20316479522767494,
          "rotation": 2.356194490192345,
          "target": "8-esqinf"
        },
        {
          "yaw": 3.032935733395904,
          "pitch": 0.02948914490755783,
          "rotation": 1.5707963267948966,
          "target": "7-garfrte"
        },
        {
          "yaw": -2.800879220021077,
          "pitch": -0.21767109877508517,
          "rotation": 10.995574287564278,
          "target": "24-varanda"
        },
        {
          "yaw": -0.7190075991867886,
          "pitch": -0.16001021281577898,
          "rotation": 3.9269908169872414,
          "target": "10-ventrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ventrada",
      "name": "v/entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9609994397540111,
        "pitch": 0.22727034468081975,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -2.7361776647631366,
          "pitch": 0.08542389700735953,
          "rotation": 0,
          "target": "0-viaturas"
        },
        {
          "yaw": 1.9390131403685942,
          "pitch": -0.026176539079548533,
          "rotation": 3.141592653589793,
          "target": "2-pdentro"
        },
        {
          "yaw": 0.7703342403499622,
          "pitch": 0.2920022726823479,
          "rotation": 2.356194490192345,
          "target": "9-esqcentro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-porta",
      "name": "porta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4860575587479534,
        "pitch": 0.16863613045033077,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 2.4860575587479534,
          "pitch": 0.16863613045033077,
          "rotation": 0,
          "target": "12-hall"
        },
        {
          "yaw": -0.7125146008138312,
          "pitch": 0.03282197872541914,
          "rotation": 0,
          "target": "2-pdentro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.200488952230998,
        "pitch": 0.1861738658159382,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 0.4999205378828062,
          "pitch": 0.3346563091204011,
          "rotation": 0,
          "target": "13-corrquatos"
        },
        {
          "yaw": 0.21009813590621995,
          "pitch": -0.04340365249074907,
          "rotation": 4.71238898038469,
          "target": "22-wcsocial"
        },
        {
          "yaw": -1.5012798186281824,
          "pitch": 0.4483691657730233,
          "rotation": 0,
          "target": "23-sala"
        },
        {
          "yaw": 3.019807275735621,
          "pitch": 0.0753577566998711,
          "rotation": 0,
          "target": "26-cozinha"
        },
        {
          "yaw": 2.098615728211338,
          "pitch": 0.0976470744418787,
          "rotation": 0,
          "target": "11-porta"
        },
        {
          "yaw": 1.1603201992108119,
          "pitch": -0.06722573115990116,
          "rotation": 2.356194490192345,
          "target": "27-escgar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-corrquatos",
      "name": "corr/quatos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.350467717466641,
        "pitch": 0.1688501339853694,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -3.0932076442278955,
          "pitch": 0.030065432594351904,
          "rotation": 3.141592653589793,
          "target": "12-hall"
        },
        {
          "yaw": 1.5747725741410248,
          "pitch": -0.021120603451599607,
          "rotation": 3.141592653589793,
          "target": "14-hallquartos"
        },
        {
          "yaw": -2.2030536755142904,
          "pitch": -0.15755078356634655,
          "rotation": 1.5707963267948966,
          "target": "19-corrmaster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-hallquartos",
      "name": "hall/quartos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0088107779183346,
        "pitch": 0.2755625850175001,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 2.7478437392495625,
          "pitch": 0.03498357652965112,
          "rotation": 0,
          "target": "15-wc1"
        },
        {
          "yaw": 1.5612838290139015,
          "pitch": 0.0029163847147355426,
          "rotation": 0,
          "target": "16-qto1"
        },
        {
          "yaw": 0.242782347025301,
          "pitch": -0.056471238770328114,
          "rotation": 0,
          "target": "17-qto2"
        },
        {
          "yaw": -1.239481898802012,
          "pitch": -0.09244705858371027,
          "rotation": 0,
          "target": "18-qto3"
        },
        {
          "yaw": -2.2388981349759884,
          "pitch": -0.009304099277342104,
          "rotation": 4.71238898038469,
          "target": "13-corrquatos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-wc1",
      "name": "wc1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.756248529848266,
        "pitch": 0.5449434106538735,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.00004093074315392187,
          "pitch": -0.06424341752107487,
          "rotation": 4.71238898038469,
          "target": "14-hallquartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-qto1",
      "name": "qto/1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.376726777764464,
        "pitch": 0.14567691626271007,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.5430242722175986,
          "pitch": -0.04602830601538699,
          "rotation": 4.71238898038469,
          "target": "14-hallquartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-qto2",
      "name": "qto/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.6211011703894034,
          "pitch": -0.10111872946123768,
          "rotation": 1.5707963267948966,
          "target": "14-hallquartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-qto3",
      "name": "qto/3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.6402480013893026,
          "pitch": -0.10845731126156366,
          "rotation": 1.5707963267948966,
          "target": "14-hallquartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-corrmaster",
      "name": "corr/master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.266842800282319,
        "pitch": 0.2035016048498406,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.4285506559688308,
          "pitch": -0.16540797144835118,
          "rotation": 9.42477796076938,
          "target": "13-corrquatos"
        },
        {
          "yaw": -1.5351172979719756,
          "pitch": -0.047777161557512215,
          "rotation": 10.995574287564278,
          "target": "20-master"
        },
        {
          "yaw": 1.9449872085883904,
          "pitch": 0.0134534426353774,
          "rotation": 4.71238898038469,
          "target": "21-wcmaster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-master",
      "name": "master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4083414661333329,
        "pitch": 0.1454248887894618,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.8062885064249965,
          "pitch": -0.06957126279226955,
          "rotation": 3.141592653589793,
          "target": "19-corrmaster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-wcmaster",
      "name": "wc/master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9808560008301761,
        "pitch": 0.16460732783467158,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 0.5216233821483041,
          "pitch": -0.05480784733102517,
          "rotation": 1.5707963267948966,
          "target": "19-corrmaster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-wcsocial",
      "name": "wc/social",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6607644044862475,
          "pitch": -0.08382355746429049,
          "rotation": 2.356194490192345,
          "target": "12-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-sala",
      "name": "sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8343729497216987,
        "pitch": 0.1524357231050324,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -1.9821737908229018,
          "pitch": 0.3287080365609558,
          "rotation": 0,
          "target": "24-varanda"
        },
        {
          "yaw": 2.2754900324867275,
          "pitch": 0.3148516323915729,
          "rotation": 0,
          "target": "25-sjantar"
        },
        {
          "yaw": 1.0437104369454246,
          "pitch": 0.41382967956784356,
          "rotation": 0,
          "target": "12-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-varanda",
      "name": "varanda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.582681782533335,
        "pitch": 0.16633625825665632,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 1.735251028744912,
          "pitch": 0.3510984666503969,
          "rotation": 3.9269908169872414,
          "target": "8-esqinf"
        },
        {
          "yaw": -0.9436056100521029,
          "pitch": 0.08740618946666068,
          "rotation": 0,
          "target": "23-sala"
        },
        {
          "yaw": 0.20424778161489066,
          "pitch": 0.036639405117821155,
          "rotation": 5.497787143782138,
          "target": "25-sjantar"
        },
        {
          "yaw": -2.2370571942413306,
          "pitch": 0.059855449937117555,
          "rotation": 3.141592653589793,
          "target": "5-dirinf"
        },
        {
          "yaw": 2.940655629763538,
          "pitch": 0.3256533767263008,
          "rotation": 3.141592653589793,
          "target": "7-garfrte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-sjantar",
      "name": "s/jantar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7084534576010526,
          "pitch": 0.10445752150213039,
          "rotation": 0,
          "target": "24-varanda"
        },
        {
          "yaw": -0.09091987404540447,
          "pitch": 0.39173356762937317,
          "rotation": 0,
          "target": "23-sala"
        },
        {
          "yaw": 1.1686281787460295,
          "pitch": 0.09099207639667029,
          "rotation": 0,
          "target": "26-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-cozinha",
      "name": "cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1048794147374164,
        "pitch": -0.1586216068225017,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 0.5816589696233869,
          "pitch": 0.019303805685389364,
          "rotation": 0,
          "target": "25-sjantar"
        },
        {
          "yaw": 2.076813149973855,
          "pitch": 0.40651748587631786,
          "rotation": 0,
          "target": "12-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3903874911906708,
          "pitch": 0.025307956098782114,
          "title": "Arrumos",
          "text": "Text"
        }
      ]
    },
    {
      "id": "27-escgar",
      "name": "esc/gar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3686835565821838,
        "pitch": 0.0810793118921147,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 1.5219642000263622,
          "pitch": -0.3570104322904921,
          "rotation": 4.71238898038469,
          "target": "12-hall"
        },
        {
          "yaw": 2.535970427947218,
          "pitch": 0.49820896975973383,
          "rotation": 10.210176124166829,
          "target": "28-escgarbxo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-escgarbxo",
      "name": "esc/gar/bxo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.550509678193631,
        "pitch": 0.17606563566981492,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 1.1770522000995332,
          "pitch": -0.2298201133889055,
          "rotation": 0.7853981633974483,
          "target": "27-escgar"
        },
        {
          "yaw": 3.1249495732308317,
          "pitch": 0.08639309059985223,
          "rotation": 0,
          "target": "29-garagem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-garagem",
      "name": "garagem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4975812437663194,
        "pitch": 0.005985721012169876,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -2.0606540465550953,
          "pitch": 0.01747380505490881,
          "rotation": 0,
          "target": "28-escgarbxo"
        },
        {
          "yaw": -2.3408377550848485,
          "pitch": 0.008861749005005137,
          "rotation": 0,
          "target": "30-salagar"
        },
        {
          "yaw": 2.8078412099324126,
          "pitch": 0.054598907691790544,
          "rotation": 0,
          "target": "7-garfrte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-salagar",
      "name": "sala/gar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.18636566589092496,
        "pitch": 0.16760018834075652,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": 0.26224572086962894,
          "pitch": 0.018550264747958067,
          "rotation": 0.7853981633974483,
          "target": "6-gardir"
        },
        {
          "yaw": -1.7835174045022413,
          "pitch": 0.04427732166728937,
          "rotation": 0,
          "target": "29-garagem"
        },
        {
          "yaw": 2.778313675708562,
          "pitch": 0.03521324505240919,
          "rotation": 0,
          "target": "32-reaarrumos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-salagararrumos",
      "name": "sala/gar/arrumos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.047489923382619,
        "pitch": 0.40531100612686544,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -0.8109037219573274,
          "pitch": 0.09130926374053061,
          "rotation": 0,
          "target": "32-reaarrumos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-reaarrumos",
      "name": "área/arrumos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8217929917455251,
          "pitch": 0.011479273443743665,
          "rotation": 0,
          "target": "31-salagararrumos"
        },
        {
          "yaw": -0.20970773530665454,
          "pitch": 0.04662586832016302,
          "rotation": 0,
          "target": "33-wcserv"
        },
        {
          "yaw": -0.6693633481299059,
          "pitch": 0.024346215770197688,
          "rotation": 0,
          "target": "34-lavandaria"
        },
        {
          "yaw": -1.4719019478316007,
          "pitch": 0.034906563168608074,
          "rotation": 0,
          "target": "30-salagar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-wcserv",
      "name": "wc/serv",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7390565612370636,
        "pitch": 0.5057934255283527,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -1.796863054572249,
          "pitch": 0.05694926234967923,
          "rotation": 0,
          "target": "32-reaarrumos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-lavandaria",
      "name": "lavandaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0028733488818968,
        "pitch": 0.35213545583319394,
        "fov": 1.4605159269694203
      },
      "linkHotspots": [
        {
          "yaw": -1.6791440356768241,
          "pitch": 0.015244032402428331,
          "rotation": 0,
          "target": "32-reaarrumos"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sara-IAD-55726",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
