const codigos = {
  "01A": "GROUP 1: ESPARDENYA",
  "01B": "GROUP 1: ESPARDENYA",
  "01C": "GROUP 7: GAUDÍ",
  "01D": "GROUP 7: GAUDÍ",
  "02A": "GROUP 1: ESPARDENYA",
  "02B": "GROUP 1: ESPARDENYA",
  "02C": "GROUP 7: GAUDÍ",
  "02D": "GROUP 7: GAUDÍ",
  "03A": "GROUP 1: ESPARDENYA",
  "03B": "GROUP 1: ESPARDENYA",
  "03C": "GROUP 7: GAUDÍ",
  "03D": "GROUP 7: GAUDÍ",
  "04A": "GROUP 1: ESPARDENYA",
  "04B": "GROUP 1: ESPARDENYA",
  "04C": "GROUP 7: GAUDÍ",
  "04D": "GROUP 7: GAUDÍ",
  "05A": "GROUP 1: ESPARDENYA",
  "05B": "GROUP 1: ESPARDENYA",
  "05C": "GROUP 7: GAUDÍ",
  "05D": "GROUP 7: GAUDÍ",
  "06A": "GROUP 1: ESPARDENYA",
  "06B": "GROUP 1: ESPARDENYA",
  "06C": "GROUP 7: GAUDÍ",
  "06D": "GROUP 7: GAUDÍ",
  "07A": "GROUP 1: ESPARDENYA",
  "07B": "GROUP 1: ESPARDENYA",
  "07C": "GROUP 7: GAUDÍ",
  "07D": "GROUP 7: GAUDÍ",
  "08A": "GROUP 1: ESPARDENYA",
  "08B": "GROUP 1: ESPARDENYA",
  "08C": "GROUP 7: GAUDÍ",
  "08D": "GROUP 7: GAUDÍ",
  "09A": "GROUP 1: ESPARDENYA",
  "09B": "GROUP 1: ESPARDENYA",
  "10A": "GROUP 2: ENXANETA",
  "10C": "GROUP 2: ENXANETA",
  "10D": "GROUP 2: ENXANETA",
  "11A": "GROUP 2: ENXANETA",
  "11B": "GROUP 2: ENXANETA",
  "11C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "11D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "12A": "GROUP 2: ENXANETA",
  "12B": "GROUP 2: ENXANETA",
  "12C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "12D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "13A": "GROUP 2: ENXANETA",
  "13B": "GROUP 2: ENXANETA",
  "13C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "13D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "14A": "GROUP 2: ENXANETA",
  "14B": "GROUP 2: ENXANETA",
  "14C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "14D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "15A": "GROUP 2: ENXANETA",
  "15B": "GROUP 2: ENXANETA",
  "15C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "15D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "16A": "GROUP 2: ENXANETA",
  "16B": "GROUP 2: ENXANETA",
  "16C": "GROUP 2: ENXANETA",
  "16D": "GROUP 2: ENXANETA",
  "17A": "GROUP 3: BUTIFARRA",
  "17B": "GROUP 3: BUTIFARRA",
  "17C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "17D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "18A": "GROUP 3: BUTIFARRA",
  "18B": "GROUP 3: BUTIFARRA",
  "18C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "18D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "19A": "GROUP 3: BUTIFARRA",
  "19B": "GROUP 3: BUTIFARRA",
  "19C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "19D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "20A": "GROUP 3: BUTIFARRA",
  "20B": "GROUP 3: BUTIFARRA",
  "20C": "GROUP 9: CAGANER",
  "20D": "GROUP 9: CAGANER",
  "21A": "GROUP 3: BUTIFARRA",
  "21B": "GROUP 3: BUTIFARRA",
  "21C": "GROUP 9: CAGANER",
  "21D": "GROUP 9: CAGANER",
  "22A": "GROUP 3: BUTIFARRA",
  "22B": "GROUP 3: BUTIFARRA",
  "22C": "GROUP 9: CAGANER",
  "22D": "GROUP 9: CAGANER",
  "23A": "GROUP 3: BUTIFARRA",
  "23B": "GROUP 3: BUTIFARRA",
  "23C": "GROUP 9: CAGANER",
  "23D": "GROUP 9: CAGANER",
  "24A": "GROUP 3: BUTIFARRA",
  "24B": "GROUP 3: BUTIFARRA",
  "24C": "GROUP 9: CAGANER",
  "24D": "GROUP 9: CAGANER",
  "25A": "GROUP 3: BUTIFARRA",
  "25B": "GROUP 3: BUTIFARRA",
  "25C": "GROUP 9: CAGANER",
  "25D": "GROUP 9: CAGANER",
  "26A": "GROUP 4: PA AMB TOMÀQUET",
  "26B": "GROUP 4: PA AMB TOMÀQUET",
  "26C": "GROUP 9: CAGANER",
  "26D": "GROUP 9: CAGANER",
  "27A": "GROUP 4: PA AMB TOMÀQUET",
  "27B": "GROUP 4: PA AMB TOMÀQUET",
  "27C": "GROUP 9: CAGANER",
  "27D": "GROUP 9: CAGANER",
  "28A": "GROUP 4: PA AMB TOMÀQUET",
  "28B": "GROUP 4: PA AMB TOMÀQUET",
  "28C": "GROUP 9: CAGANER",
  "28D": "GROUP 9: CAGANER",
  "29A": "GROUP 4: PA AMB TOMÀQUET",
  "29B": "GROUP 4: PA AMB TOMÀQUET",
  "29C": "GROUP 10: PANELLET",
  "29D": "GROUP 10: PANELLET",
  "30A": "GROUP 4: PA AMB TOMÀQUET",
  "30B": "GROUP 4: PA AMB TOMÀQUET",
  "30D": "GROUP 4: PA AMB TOMÀQUET",
  "31A": "GROUP 4: PA AMB TOMÀQUET",
  "31B": "GROUP 4: PA AMB TOMÀQUET",
  "31C": "GROUP 10: PANELLET",
  "31D": "GROUP 10: PANELLET",
  "32A": "GROUP 4: PA AMB TOMÀQUET",
  "32B": "GROUP 4: PA AMB TOMÀQUET",
  "32C": "GROUP 10: PANELLET",
  "32D": "GROUP 10: PANELLET",
  "33A": "GROUP 4: PA AMB TOMÀQUET",
  "33B": "GROUP 4: PA AMB TOMÀQUET",
  "33C": "GROUP 4: PA AMB TOMÀQUET",
  "34A": "GROUP 5: MONTSERRAT",
  "34B": "GROUP 5: MONTSERRAT",
  "34C": "GROUP 10: PANELLET",
  "34D": "GROUP 10: PANELLET",
  "35A": "GROUP 5: MONTSERRAT",
  "35B": "GROUP 5: MONTSERRAT",
  "35C": "GROUP 10: PANELLET",
  "35D": "GROUP 10: PANELLET",
  "36A": "GROUP 5: MONTSERRAT",
  "36B": "GROUP 5: MONTSERRAT",
  "36C": "GROUP 10: PANELLET",
  "36D": "GROUP 10: PANELLET",
  "37A": "GROUP 5: MONTSERRAT",
  "37B": "GROUP 5: MONTSERRAT",
  "37C": "GROUP 10: PANELLET",
  "37D": "GROUP 10: PANELLET",
  "38A": "GROUP 5: MONTSERRAT",
  "38B": "GROUP 5: MONTSERRAT",
  "38C": "GROUP 10: PANELLET",
  "38D": "GROUP 10: PANELLET",
  "39A": "GROUP 5: MONTSERRAT",
  "39B": "GROUP 5: MONTSERRAT",
  "39C": "GROUP 10: PANELLET",
  "39D": "GROUP 10: PANELLET",
  "40A": "GROUP 5: MONTSERRAT",
  "40B": "GROUP 5: MONTSERRAT",
  "40C": "GROUP 10: PANELLET",
  "40D": "GROUP 10: PANELLET",
  "41A": "GROUP 5: MONTSERRAT",
  "41B": "GROUP 5: MONTSERRAT",
  "41C": "GROUP 10: PANELLET",
  "41D": "GROUP 10: PANELLET",
  "42A": "GROUP 5: MONTSERRAT",
  "42B": "GROUP 5: MONTSERRAT",
  "42C": "GROUP 9: CAGANER",
  "42D": "GROUP 9: CAGANER",
  "43A": "GROUP 6: JORDI",
  "43B": "GROUP 6: JORDI",
  "43D": "GROUP 6: JORDI",
  "44A": "GROUP 6: JORDI",
  "44B": "GROUP 6: JORDI",
  "44C": "GROUP 6: JORDI",
  "45A": "GROUP 6: JORDI",
  "45B": "GROUP 6: JORDI",
  "45C": "GROUP 9: CAGANER",
  "45D": "GROUP 9: CAGANER",
  "46A": "GROUP 6: JORDI",
  "46B": "GROUP 6: JORDI",
  "46C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "46D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "47A": "GROUP 6: JORDI",
  "47B": "GROUP 6: JORDI",
  "47C": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "47D": "GROUP 8: CALÇOT AMB SALSA ROMESCO",
  "48A": "GROUP 6: JORDI",
  "48B": "GROUP 6: JORDI",
  "48C": "GROUP 6: JORDI",
  "O01": "GROUP 2: ENXANETA",
  "O02": "GROUP 6: JORDI",
  "43B": "GROUP 6: JORDI",
  "O04": "GROUP 7: GAUDÍ",
  "O05": "GROUP 7: GAUDÍ",
  "O06": "GROUP 5: MONTSERRAT",
  "O07": "GROUP 5: MONTSERRAT",
  "O08": "GROUP 4: PA AMB TOMÀQUET",
  "O09": "GROUP 4: PA AMB TOMÀQUET",
  "O11": "GROUP 2: ENXANETA",
  "O12": "GROUP 3: BUTIFARRA",
  "O13": "GROUP 3: BUTIFARRA",
  "O14": "GROUP 3: BUTIFARRA",
  "O16": "GROUP 2: ENXANETA",
  "O17": "GROUP 1: ESPARDENYA",
  "O18": "GROUP 1: ESPARDENYA",
  "O19": "GROUP 7: GAUDÍ",
  "O20": "GROUP 7: GAUDÍ",
  "O21": "GROUP 7: GAUDÍ",
  "O22": "GROUP 6: JORDI",
  "O23": "GROUP 6: JORDI",
  "O24": "GROUP 6: JORDI",
  "O25": "GROUP 6: JORDI",
  "O26": "GROUP 6: JORDI",
  "O27": "GROUP 5: MONTSERRAT",
  "O28": "GROUP 4: PA AMB TOMÀQUET",
  "O29": "GROUP 1: ESPARDENYA",
  "O30": "GROUP 2: ENXANETA",
};
