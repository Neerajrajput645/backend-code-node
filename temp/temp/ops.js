module.exports = {
  "status": "success",
  "data": [
    {
      "categoryId": "postpaid",
      "name": "Postpaid",
      "providerRoot": [
        {
          "name": "Airtel",
          "billers": [
            {
              "op": 29,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": true,
                  "isnumeric": true,
                  "regex": "^[6-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=29"
            }
          ],
          "providers": []
        },
        {
          "name": "BSNL",
          "billers": [
            {
              "op": 34,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": true,
                  "isnumeric": true,
                  "regex": "^[6-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=34"
            }
          ],
          "providers": []
        },
        {
          "name": "Jio",
          "billers": [
            {
              "op": 142,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": true,
                  "isnumeric": true,
                  "regex": "^[6789][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=142"
            }
          ],
          "providers": []
        },
        {
          "name": "Vi",
          "billers": [
            {
              "op": 436,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": true,
                  "isnumeric": true,
                  "regex": "^[6-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=436"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Docomo CDMA Postpaid",
          "billers": [
            {
              "op": 107,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": true,
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=107"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "electricity",
      "name": "Electricity",
      "providerRoot": [
        {
          "name": "Adani Electricity Mumbai Limited",
          "billers": [
            {
              "op": 31,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9}$",
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=31"
            }
          ],
          "providers": []
        },
        {
          "name": "M.P. Madhya Kshetra Vidyut Vitaran - URBAN",
          "billers": [
            {
              "op": 215,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "name": "IVRS",
                  "regex": "^[0-9]{7,15}$|^[N][0-9]{7,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=215"
            }
          ],
          "providers": []
        },
        {
          "name": "Uttar Haryana Bijli Vitran Nigam Limited Prepaid",
          "billers": [
            {
              "op": 783,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Mobile No",
                  "regex": "^[0-9]{1,30}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "accountNumber",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 30,
                  "name": "Account Number",
                  "regex": "^[0-9]{1,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=783"
            }
          ],
          "providers": []
        },
        {
          "name": "Power and Electricity Department - Mizoram",
          "billers": [
            {
              "op": 791,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Business Partner",
                  "regex": "^[0-9]{8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=791"
            }
          ],
          "providers": []
        },
        {
          "name": "TP Southen Odisha Distribution Ltd-Smart Prepaid Meter Recharge",
          "billers": [
            {
              "op": 829,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Consumer Number",
                  "maxLen": 12,
                  "minLen": 12,
                  "regex": "^(21|29|31|34|35|71)[0-9]{2}[a-zA-Z0-9]{4}[0-9]{4}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=829"
            }
          ],
          "providers": []
        },
        {
          "name": "Dadra and Nagar Haveli and Daman and Diu Power Distribution Corporation Limited",
          "billers": [
            {
              "op": 875,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "CANumber",
                  "maxLen": 10,
                  "minLen": 9,
                  "regex": "^(7)[0-9]{8,9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=875"
            }
          ],
          "providers": []
        },
        {
          "name": "India Power Corporation Limited (IPCL)",
          "billers": [
            {
              "op": 859,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Consumer Number",
                  "maxLen": 12,
                  "minLen": 5,
                  "regex": "^[A-Za-z0-9]{5,12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=859"
            }
          ],
          "providers": []
        },
        {
          "name": "Purvanchal Vidyut Vitran Nigam Limited(PUVVNL)(Postpaid and Smart Prepaid Meter Recharge)",
          "billers": [
            {
              "op": 946,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Consumer Number",
                  "maxLen": 10,
                  "minLen": 10,
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=946"
            }
          ],
          "providers": []
        },
        {
          "name": "Hukkeri Rural Electric CoOperative Society Ltd",
          "billers": [
            {
              "op": 953,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Connection Number",
                  "maxLen": 9,
                  "minLen": 3,
                  "regex": "^[0-9]{3,9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=953"
            }
          ],
          "providers": []
        },
        {
          "name": "Western Electricity Supply Company Of Odisha Limited",
          "billers": [
            {
              "op": 785,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Consumer Id",
                  "regex": "^[0-9]{1,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=785"
            }
          ],
          "providers": []
        },
        {
          "name": "TP Renewables Microgrid Ltd.",
          "billers": [
            {
              "op": 676,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 9,
                  "name": "Registered Mobile Number or Customer Account Number",
                  "regex": "^[0-9]+$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=676"
            }
          ],
          "providers": []
        },
        {
          "name": "Central Power Distribution Corporation Ltd. of Andhra Pradesh (APCPDCL)",
          "billers": [
            {
              "op": 643,
              "fields": [
                {
                  "icon": "a",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 13,
                  "name": "Service Number",
                  "regex": "^[1|4|6|9]{1}[0-9]{12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=643"
            }
          ],
          "providers": []
        },
        {
          "name": "India Power Corporation - West Bengal",
          "billers": [
            {
              "op": 725,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "Service No/Consumer Id",
                  "regex": "^[0-9a-zA-Z]$",
                  "type": "INPUT",
                  "minLen": 1,
                  "maxLen": 30
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=725"
            }
          ],
          "providers": []
        },
        {
          "name": "India Power Corporation - Bihar",
          "billers": [
            {
              "op": 726,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "Service No/Consumer Id",
                  "regex": "^[0-9a-zA-Z]$",
                  "type": "INPUT",
                  "minLen": 1,
                  "maxLen": 30
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=726"
            }
          ],
          "providers": []
        },
        {
          "name": "BSES Rajdhani Prepaid Meter Recharge",
          "billers": [
            {
              "op": 686,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 9,
                  "minLen": 9,
                  "name": "CA Number",
                  "regex": "^[0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=686"
            }
          ],
          "providers": []
        },
        {
          "name": "BSES Yamuna Prepaid Meter Recharge",
          "billers": [
            {
              "op": 687,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 9,
                  "minLen": 9,
                  "name": "CA Number",
                  "regex": "^[0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=687"
            }
          ],
          "providers": []
        },
        {
          "name": "Jharkhand Bijli Vitran Nigam Limited - Prepaid Meter Recharge",
          "billers": [
            {
              "op": 982,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 11,
                  "minLen": 9,
                  "name": "Meter Number/Account Number",
                  "regex": "^[A-Z0-9]{9,11}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=982"
            }
          ],
          "providers": []
        },
        {
          "name": "Dakshinanchal Vidyut Vitran Nigam Limited (DVVNL)(Postpaid and Smart Prepaid Meter Recharge)",
          "billers": [
            {
              "op": 1004,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1004"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhyanchal Vidyut Vitran Nigam Limited (MVVNL)(Postpaid and Smart Prepaid Meter Recharge)",
          "billers": [
            {
              "op": 1005,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1005"
            }
          ],
          "providers": []
        },
        {
          "name": "MePDCL Smart Prepaid Meter Recharge",
          "billers": [
            {
              "op": 1007,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "ACCOUNT_NO",
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1007"
            }
          ],
          "providers": []
        },
        {
          "name": "Vaghani Energy Limited",
          "billers": [
            {
              "op": 1026,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 100,
                  "minLen": 2,
                  "name": "Consumer No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,100}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1026"
            }
          ],
          "providers": []
        },
        {
          "name": "M.P. Madhya Kshetra Vidyut Vitaran - RURAL",
          "billers": [
            {
              "op": 216,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "name": "IVRS",
                  "regex": "^[0-9]{7,15}$|^[N][0-9]{7,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=216"
            }
          ],
          "providers": []
        },
        {
          "name": "Ajmer Vidyut Vitran Nigam Limited (AVVNL)",
          "billers": [
            {
              "op": 132,
              "fields": [
                {
                  "id": "cn",
                  "name": "K Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=132"
            }
          ],
          "providers": []
        },
        {
          "name": "Assam Power Distribution Company Ltd (NON-RAPDR)",
          "billers": [
            {
              "op": 198,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=198"
            }
          ],
          "providers": []
        },
        {
          "name": "Assam Power Distribution Company Ltd- Smart Prepaid Recharge",
          "billers": [
            {
              "op": 1173,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1173"
            }
          ],
          "providers": []
        },
        {
          "name": "Bangalore Electricity Supply Co. Ltd (BESCOM)",
          "billers": [
            {
              "op": 67,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID / Account ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,7}$|^[0-9]{10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=67"
            }
          ],
          "providers": []
        },
        {
          "name": "B.E.S.T Mumbai",
          "billers": [
            {
              "op": 59,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[\\d,\\s]+$",
                  "hint": "Add comma at last for 9digit",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=59"
            }
          ],
          "providers": []
        },
        {
          "name": "Bharatpur Electricity Services Ltd. (BESL)",
          "billers": [
            {
              "op": 164,
              "fields": [
                {
                  "id": "cn",
                  "name": "K Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=164"
            }
          ],
          "providers": []
        },
        {
          "name": "Bikaner Electricity Supply Limited (BkESL)",
          "billers": [
            {
              "op": 165,
              "fields": [
                {
                  "id": "cn",
                  "name": "K Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=165"
            }
          ],
          "providers": []
        },
        {
          "name": "BSES Rajdhani Power Limited",
          "billers": [
            {
              "op": 32,
              "fields": [
                {
                  "id": "cn",
                  "name": "CA Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=32"
            }
          ],
          "providers": []
        },
        {
          "name": "BSES Yamuna Power Limited",
          "billers": [
            {
              "op": 33,
              "fields": [
                {
                  "id": "cn",
                  "name": "CA Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=33"
            }
          ],
          "providers": []
        },
        {
          "name": "Calcutta Electric Supply Corporation (CESC)",
          "billers": [
            {
              "op": 122,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID (Not Consumer No)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11}$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=122"
            }
          ],
          "providers": []
        },
        {
          "name": "TP Central Odisha Distribution Limited - TPCODL",
          "billers": [
            {
              "op": 249,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([0-9]{3}[SIsi]{1}[0-9]{8})$|^[0-9]{11}$",
                  "minLen": 11,
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=249"
            }
          ],
          "providers": []
        },
        {
          "name": "Chamundeshwari Electricity Supply Corp Ltd (CESCOM)",
          "billers": [
            {
              "op": 199,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account ID(RAPDRP) OR Consumer No./Connection ID(Non-RAPDRP)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=199"
            }
          ],
          "providers": []
        },
        {
          "name": "Chhattisgarh State Power Distribution Co. Ltd",
          "billers": [
            {
              "op": 60,
              "fields": [
                {
                  "id": "cn",
                  "name": "Business Partner Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=60"
            }
          ],
          "providers": []
        },
        {
          "name": "Dakshin Gujarat Vij Company Limited (DGVCL)",
          "billers": [
            {
              "op": 50,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([0-9]{11}|[0-9]{5})$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=50"
            }
          ],
          "providers": []
        },
        {
          "name": "Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
          "billers": [
            {
              "op": 193,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{9,12}$",
                  "maxLen": 12,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=193"
            }
          ],
          "providers": []
        },
        {
          "name": "DNHPDCL - DADRA & NAGAR HAVELI",
          "billers": [
            {
              "op": 778,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "Service Number",
                  "regex": "^[0-9a-zA-Z]$",
                  "minLen": 1,
                  "maxLen": 30,
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=778"
            }
          ],
          "providers": []
        },
        {
          "name": "Paschimanchal Vidyut Vitran Nigam Limited (PVVNL)(Postpaid and Smart Prepaid Meter Recharge)",
          "billers": [
            {
              "op": 779,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT",
                  "minLen": 10,
                  "maxLen": 10
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=779"
            }
          ],
          "providers": []
        },
        {
          "name": "Department of Power, Government of Arunachal Pradesh",
          "billers": [
            {
              "op": 381,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=381"
            }
          ],
          "providers": []
        },
        {
          "name": "Department of Power, Government of Arunachal Pradesh - Prepaid",
          "billers": [
            {
              "op": 551,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=551"
            }
          ],
          "providers": []
        },
        {
          "name": "Department of Power, Nagaland",
          "billers": [
            {
              "op": 245,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[a-zA-Z0-9]{11,11}$",
                  "minLen": 11,
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=245"
            }
          ],
          "providers": []
        },
        {
          "name": "DNH Power Distribution Company Limited",
          "billers": [
            {
              "op": 114,
              "fields": [
                {
                  "id": "cn",
                  "name": "Service Connection Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/]{1,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=114"
            }
          ],
          "providers": []
        },
        {
          "name": "Electricity Department Chandigarh",
          "billers": [
            {
              "op": 329,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No without(/)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{7,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=329"
            }
          ],
          "providers": []
        },
        {
          "name": "Gift Power Company Limited",
          "billers": [
            {
              "op": 524,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=524"
            }
          ],
          "providers": []
        },
        {
          "name": "Goa Electricity Department",
          "billers": [
            {
              "op": 243,
              "fields": [
                {
                  "id": "cn",
                  "name": "Contract Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11}$",
                  "minLen": 11,
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=243"
            }
          ],
          "providers": []
        },
        {
          "name": "Government of Puducherry Electricity Department",
          "billers": [
            {
              "op": 280,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{9,12}$",
                  "maxLen": 12,
                  "minLen": 9,
                  "icon": "V"
                },
                {
                  "id": "consumerType",
                  "name": "Consumer Type (LT/HT)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{2}$",
                  "maxLen": 2,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=280"
            }
          ],
          "providers": []
        },
        {
          "name": "Gulbarga Electricity Supply Company Limited",
          "billers": [
            {
              "op": 183,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=183"
            }
          ],
          "providers": []
        },
        {
          "name": "Himachal Pradesh State Electricity Board",
          "billers": [
            {
              "op": 206,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=206"
            }
          ],
          "providers": []
        },
        {
          "name": "Hubli Electricity Supply Company Ltd (HESCOM)",
          "billers": [
            {
              "op": 200,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account ID(RAPDRP) OR Consumer No./Connection ID(Non-RAPDRP)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^([0-9]{10}|[0-9]{7}|[0-9]{5}|[0-9]{6})$",
                  "maxLen": 10,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=200"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Steel UISL",
          "billers": [
            {
              "op": 69,
              "fields": [
                {
                  "id": "cn",
                  "name": "Business Partner Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{6,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=69"
            }
          ],
          "providers": []
        },
        {
          "name": "Jharkhand Bijli Vitran Nigam Limited (JBVNL)",
          "billers": [
            {
              "op": 197,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z-]{3,15}$",
                  "maxLen": 15,
                  "minLen": 3,
                  "icon": "V"
                },
                {
                  "id": "link",
                  "type": "LINK"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=197"
            }
          ],
          "providers": []
        },
        {
          "name": "Jaipur Vidyut Vitran Nigam Ltd",
          "billers": [
            {
              "op": 62,
              "fields": [
                {
                  "id": "cn",
                  "name": "K NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=62"
            }
          ],
          "providers": []
        },
        {
          "name": "Kashmir Power Distribution Corporation Ltd (KPDCL)",
          "billers": [
            {
              "op": 438,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Code",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{13}$",
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=438"
            }
          ],
          "providers": []
        },
        {
          "name": "Jodhpur Vidyut Vitran Nigam Limited (JDVVNL)",
          "billers": [
            {
              "op": 63,
              "fields": [
                {
                  "id": "cn",
                  "name": "K Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=63"
            }
          ],
          "providers": []
        },
        {
          "name": "Kannan Devan Hills Plantations Company Private Limited",
          "billers": [
            {
              "op": 552,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=552"
            }
          ],
          "providers": []
        },
        {
          "name": "Kanpur Electricity Supply Company Ltd",
          "billers": [
            {
              "op": 147,
              "fields": [
                {
                  "id": "cn",
                  "name": "ACCOUNT NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=147"
            }
          ],
          "providers": []
        },
        {
          "name": "Kerala State Electricity Board Ltd. (KSEBL)",
          "billers": [
            {
              "op": 250,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{13}$",
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=250"
            }
          ],
          "providers": []
        },
        {
          "name": "Kota Electricity Distribution Limited (KEDL)",
          "billers": [
            {
              "op": 169,
              "fields": [
                {
                  "id": "cn",
                  "name": "K Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=169"
            }
          ],
          "providers": []
        },
        {
          "name": "Lakshadweep Electricity Department",
          "billers": [
            {
              "op": 513,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(?:0[1-9]|1[01])([a-zA-Z]{2})([0-9]{6})$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=513"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhya Gujarat Vij Company Limited (MGVCL)",
          "billers": [
            {
              "op": 49,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^([0-9]{11}|[0-9]{5})$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=49"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhya Pradesh Paschim Kshetra Vidyut Vitaran",
          "billers": [
            {
              "op": 68,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^N[0-9]{10}$",
                  "minLen": 11,
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=68"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhya Pradesh Poorv Kshetra Vidyut Vitaran-RURAL",
          "billers": [
            {
              "op": 234,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number/IVRS",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{7,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=234"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra State Electricity Distbn Co Ltd",
          "billers": [
            {
              "op": 39,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                },
                {
                  "id": "billingUnit",
                  "name": "Billing Unit",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{4}$",
                  "maxLen": 4,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=39"
            }
          ],
          "providers": []
        },
        {
          "name": "Meghalaya Power Dist Corp Ltd",
          "billers": [
            {
              "op": 123,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=123"
            }
          ],
          "providers": []
        },
        {
          "name": "Mangalore Electricity Supply Co. Ltd (MESCOM) – RAPDR",
          "billers": [
            {
              "op": 247,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=247"
            }
          ],
          "providers": []
        },
        {
          "name": "Mangalore Electricity Supply Company LTD (Non RAPDR)",
          "billers": [
            {
              "op": 490,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No/Connection ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{7,8}$",
                  "maxLen": 8,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=490"
            }
          ],
          "providers": []
        },
        {
          "name": "NESCO, Odisha",
          "billers": [
            {
              "op": 172,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(613|122|121|124|421|128|123|127|614|125|126|129|32|42|52|61|62)[0-9]{2}[A-Za-z0-9]{4}[0-9]{3,4}$",
                  "maxLen": 13,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=172"
            }
          ],
          "providers": []
        },
        {
          "name": "New Delhi Municipal Council (NDMC) - Electricity",
          "billers": [
            {
              "op": 219,
              "fields": [
                {
                  "id": "cn",
                  "name": "Business Partner Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,8}$",
                  "maxLen": 8,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=219"
            }
          ],
          "providers": []
        },
        {
          "name": "Noida Power",
          "billers": [
            {
              "op": 61,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=61"
            }
          ],
          "providers": []
        },
        {
          "name": "North Bihar Power Distribution Company Ltd.",
          "billers": [
            {
              "op": 171,
              "fields": [
                {
                  "id": "cn",
                  "name": "CA Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 9,
                  "maxLen": 12,
                  "regex": "^(1)[0-9]{9,11}$|^(4)[0-9]{8}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=171"
            }
          ],
          "providers": []
        },
        {
          "name": "Paschim Gujarat Vij Company Limited (PGVCL)",
          "billers": [
            {
              "op": 51,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^([0-9]{11}|[0-9]{5})$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=51"
            }
          ],
          "providers": []
        },
        {
          "name": "Punjab State Power Corporation Ltd (PSPCL)",
          "billers": [
            {
              "op": 194,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{10,12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=194"
            }
          ],
          "providers": []
        },
        {
          "name": "Sikkim Power-RURAL",
          "billers": [
            {
              "op": 235,
              "fields": [
                {
                  "id": "cn",
                  "name": "Contract Acc Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,9}$",
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=235"
            }
          ],
          "providers": []
        },
        {
          "name": "South Bihar Power Distribution Company Ltd.",
          "billers": [
            {
              "op": 163,
              "fields": [
                {
                  "id": "cn",
                  "name": "CA Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^(2)[0-9]{9,11}$|^(1)[0-9]{8}$",
                  "minLen": 9,
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=163"
            }
          ],
          "providers": []
        },
        {
          "name": "TP Southern Odisha Distribution Limited",
          "billers": [
            {
              "op": 175,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=175"
            }
          ],
          "providers": []
        },
        {
          "name": "Power Distribution Corporation Limited (TNPDCL)",
          "billers": [
            {
              "op": 189,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(01|02|03|04|05|06|07|08|09)[0-9]{7,20}$",
                  "minLen": 9,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=189"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Power - Delhi",
          "billers": [
            {
              "op": 41,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11,12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=41"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Power - Mumbai",
          "billers": [
            {
              "op": 146,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=146"
            }
          ],
          "providers": []
        },
        {
          "name": "Thrissur Corporation Electricity Department",
          "billers": [
            {
              "op": 620,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_ \\-]*$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "id": "billNumber",
                  "name": "Bill No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 10,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "billType",
                  "name": "Bill Type",
                  "type": "LIST",
                  "fieldValues": [
                    "Monthly",
                    "Bimonthly"
                  ],
                  "maxLen": 9,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=620"
            }
          ],
          "providers": []
        },
        {
          "name": "Torrent power",
          "billers": [
            {
              "op": 71,
              "fields": [
                {
                  "id": "cn",
                  "name": "Service Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,15}$",
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "city",
                  "name": "City",
                  "type": "LIST",
                  "icon": "V",
                  "maxLen": 50,
                  "minLen": 4,
                  "fieldValues": [
                    "Agra",
                    "Ahmedabad",
                    "Bhiwandi",
                    "Surat",
                    "Shilmumbrakalwa"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=71"
            }
          ],
          "providers": []
        },
        {
          "name": "TP Ajmer Distribution Ltd (TPADL)",
          "billers": [
            {
              "op": 177,
              "fields": [
                {
                  "id": "cn",
                  "name": "K Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=177"
            }
          ],
          "providers": []
        },
        {
          "name": "Tripura Electricity Corp Ltd",
          "billers": [
            {
              "op": 117,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1][0-9]{11}$",
                  "minLen": 12,
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=117"
            }
          ],
          "providers": []
        },
        {
          "name": "Uttar Gujarat Vij Company Limited (UGVCL)",
          "billers": [
            {
              "op": 52,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^([0-9]{11}|[0-9]{5})$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=52"
            }
          ],
          "providers": []
        },
        {
          "name": "Uttar Haryana Bijli Vitran Nigam (UHBVN)",
          "billers": [
            {
              "op": 192,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{10,12}$",
                  "maxLen": 12,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=192"
            }
          ],
          "providers": []
        },
        {
          "name": "Uttarakhand Power Corporation Limited",
          "billers": [
            {
              "op": 179,
              "fields": [
                {
                  "id": "cn",
                  "name": "Electricity Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,13}$",
                  "minLen": 10,
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=179"
            }
          ],
          "providers": []
        },
        {
          "name": "WESCO Utility",
          "billers": [
            {
              "op": 182,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 12,
                  "maxLen": 12,
                  "regex": "^(41|51|81|90|91)[0-9]{2}[A-Za-z0-9]{4}[0-9]{4}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=182"
            }
          ],
          "providers": []
        },
        {
          "name": "West Bengal State Electricity Distribution Co. Ltd",
          "billers": [
            {
              "op": 204,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Registered Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=204"
            }
          ],
          "providers": []
        },
        {
          "name": "Zen Spire",
          "billers": [
            {
              "op": 1507,
              "fields": [
                {
                  "id": "cn",
                  "name": "Flat Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/-]{2,50}$",
                  "maxLen": 50,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "Prepaid Meter Number",
                  "name": "Prepaid Meter Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{2,8}$",
                  "maxLen": 8,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1507"
            }
          ],
          "providers": []
        },
        {
          "name": "Sikkim Power - URBAN",
          "billers": [
            {
              "op": 246,
              "fields": [
                {
                  "id": "cn",
                  "name": "Contract Acc Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=246"
            }
          ],
          "providers": []
        },
        {
          "name": "Andhra Pradesh Central Power Distribution Corporation Limited",
          "billers": [
            {
              "op": 1562,
              "fields": [
                {
                  "id": "cn",
                  "name": "13 Digit Service Connection Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{13,13}$",
                  "maxLen": 13,
                  "minLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1562"
            }
          ],
          "providers": []
        },
        {
          "name": "Southern Power Distribution Company of Telangana Limited",
          "billers": [
            {
              "op": 1567,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Service Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1][0-9]{8}$",
                  "maxLen": 9,
                  "minLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1567"
            }
          ],
          "providers": []
        },
        {
          "name": "Northern Power Distribution Company of Telangana Limited",
          "billers": [
            {
              "op": 1568,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Service Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,15}$",
                  "maxLen": 15,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1568"
            }
          ],
          "providers": []
        },
        {
          "name": "West Bengal Electricity Prepaid",
          "billers": [
            {
              "op": 1319,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 9,
                  "maxLen": 9,
                  "name": "Consumer ID",
                  "regex": "^[0-9]{9}$",
                  "type": "INPUT"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1319"
            }
          ],
          "providers": []
        },
        {
          "name": "TTD Electricity",
          "billers": [
            {
              "op": 1372,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z]{1,30}$",
                  "icon": "V"
                },
                {
                  "id": "tenantno",
                  "name": "Tenant No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,30}$",
                  "maxLen": 30,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1372"
            }
          ],
          "providers": []
        },
        {
          "name": "Avyanna Aviation Private Limited",
          "billers": [
            {
              "op": 1663,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 50,
                  "minLen": 2,
                  "name": "Flat Number",
                  "regex": "^[0-9A-Za-z/-]{2,50}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "Prepaid Meter Number",
                  "isnumeric": true,
                  "maxLen": 8,
                  "minLen": 2,
                  "name": "Prepaid Meter Number",
                  "regex": "^[0-9]{2,8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1663"
            }
          ],
          "providers": []
        },
        {
          "name": "Kiara Residency RWA",
          "billers": [
            {
              "op": 1666,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 50,
                  "minLen": 2,
                  "name": "Flat Number",
                  "regex": "^[0-9A-Za-z/-]{2,50}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "Prepaid Meter Number",
                  "isnumeric": true,
                  "maxLen": 8,
                  "minLen": 2,
                  "name": "Prepaid Meter Number",
                  "regex": "^[0-9]{2,8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1666"
            }
          ],
          "providers": []
        },
        {
          "name": "Ladakh Power Development Department (LPDD)",
          "billers": [
            {
              "op": 1700,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1700"
            }
          ],
          "providers": []
        },
        {
          "name": "Jammu Power Distribution Corporation (JPDCL)",
          "billers": [
            {
              "op": 1708,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 10,
                  "maxLen": 13,
                  "name": "Account ID or Consumer Code",
                  "regex": "^[0-9]{10}$|^[0-9]{13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1708"
            }
          ],
          "providers": []
        },
        {
          "name": "Manipur State Power Distribution Company Limited",
          "billers": [
            {
              "op": 1720,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{4,12}$",
                  "minLen": 4,
                  "maxLen": 12,
                  "icon": "V"
                },
                {
                  "id": "meterNo",
                  "name": "Meter No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{6,15}$",
                  "minLen": 6,
                  "maxLen": 15,
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1720"
            }
          ],
          "providers": []
        },
        {
          "name": "Kinesco Power and Utilities Pvt Ltd",
          "billers": [
            {
              "op": 1728,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No.",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{8,16}$",
                  "minLen": 8,
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1728"
            }
          ],
          "providers": []
        },
        {
          "name": "Power and Electricity Department - Mizoram - 10 Digit Consumer Number",
          "billers": [
            {
              "op": 1737,
              "fields": [
                {
                  "id": "cn",
                  "name": "Business Partner",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1737"
            }
          ],
          "providers": []
        },
        {
          "name": "UPPCL-Postpaid and Smart Prepaid Meter Recharge",
          "billers": [
            {
              "op": 1743,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "districtDiscom",
                  "name": "District-Discom",
                  "type": "LIST",
                  "minLen": 5,
                  "maxLen": 250,
                  "regex": "^[0-9A-Za-z\\s\\-\\,\\.]{5,250}$",
                  "isnumeric": false,
                  "fieldValues": [
                    "Agra-DVVNL",
                    "Aligarh-DVVNL",
                    "Ambedkar Nagar-MVVNL",
                    "Amethi-MVVNL",
                    "Amroha-PVVNL",
                    "Auraiya-DVVNL",
                    "Ayodhya-MVVNL",
                    "Azamgarh-PUVNL",
                    "Bagpat-PVVNL",
                    "Bahraich-MVVNL",
                    "Ballia-PUVNL",
                    "Balrampur-MVVNL",
                    "Banda-DVVNL",
                    "Barabanki-MVVNL",
                    "Bareilly-MVVNL",
                    "Basti-PUVNL",
                    "Bijnor-PVVNL",
                    "Budaun-MVVNL",
                    "Bulandshahr-PVVNL",
                    "Chandauli-PUVNL",
                    "Chitrakoot-DVVNL",
                    "Deoria-PUVNL",
                    "Etah-DVVNL",
                    "Etawah-DVVNL",
                    "Farrukhabad-DVVNL",
                    "Fatehpur-PUVNL",
                    "Firozabad-DVVNL",
                    "Gautam Buddha Nagar-PVVNL",
                    "Ghaziabad-PVVNL",
                    "Ghazipur-PUVNL",
                    "Gonda-MVVNL",
                    "Gorakhpur-PUVNL",
                    "Hamirpur-DVVNL",
                    "Hapur District-PVVNL",
                    "Hardoi-MVVNL",
                    "Hathras-DVVNL",
                    "Jalaun-DVVNL",
                    "Jaunpur-PUVNL",
                    "Jhansi-DVVNL",
                    "Kannauj-DVVNL",
                    "Kanpur Dehat-DVVNL",
                    "Kanpur Nagar-DVVNL",
                    "Kanpur Nagar-KESCO",
                    "Kasganj-DVVNL",
                    "Kaushambi-PUVNL",
                    "Kushinagar-PUVNL",
                    "Lakhimpur Kheri-MVVNL",
                    "Lalitpur-DVVNL",
                    "Lucknow-MVVNL",
                    "Maharajganj-PUVNL",
                    "Mahoba-DVVNL",
                    "Mainpuri-DVVNL",
                    "Mathura-DVVNL",
                    "Mau-PUVNL",
                    "Meerut-PVVNL",
                    "Mirzapur-PUVNL",
                    "Moradabad-PVVNL",
                    "Muzaffarnagar-PVVNL",
                    "Pilibhit-MVVNL",
                    "Pratapgarh-PUVNL",
                    "PrayagRaj-PUVNL",
                    "Raebareli-MVVNL",
                    "Rampur-PVVNL",
                    "Saharanpur-PVVNL",
                    "Sambhal-PVVNL",
                    "Sant Kabir Nagar-PUVNL",
                    "Sant Ravidas Nagar-Bhadohi-PUVNL",
                    "Shahjahanpur-MVVNL",
                    "Shamli-PVVNL",
                    "Shravasti-MVVNL",
                    "Siddharthnagar-PUVNL",
                    "Sitapur-MVVNL",
                    "Sonbhadra-PUVNL",
                    "Sultanpur-MVVNL",
                    "Unnao-MVVNL",
                    "Varanasi-PUVNL"
                  ],
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1743"
            }
          ],
          "providers": []
        },
        {
          "name": "Cherry County",
          "billers": [
            {
              "op": 1772,
              "fields": [
                {
                  "id": "cn",
                  "name": "Apartment Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,50}$",
                  "minLen": 10,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1772"
            }
          ],
          "providers": []
        },
        {
          "name": "Cleo County",
          "billers": [
            {
              "op": 1773,
              "fields": [
                {
                  "id": "cn",
                  "name": "Apartment Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,50}$",
                  "minLen": 10,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1773"
            }
          ],
          "providers": []
        },
        {
          "name": "The Co operative Electric Supply Society Ltd Sircilla",
          "billers": [
            {
              "op": 1775,
              "fields": [
                {
                  "id": "cn",
                  "name": "USC No.",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,15}$",
                  "minLen": 8,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1775"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "creditcardpay",
      "name": "Credit Card Bill",
      "providerRoot": [
        {
          "name": "Credit Card",
          "billers": [
            {
              "op": 208,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=208"
            }
          ],
          "providers": []
        },
        {
          "name": "American Express Credit Card",
          "billers": [
            {
              "op": 20801,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20801"
            }
          ],
          "providers": []
        },
        {
          "name": "Axis Credit Card",
          "billers": [
            {
              "op": 20802,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20802"
            }
          ],
          "providers": []
        },
        {
          "name": "Andhra bank Credit Card",
          "billers": [
            {
              "op": 20803,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20803"
            }
          ],
          "providers": []
        },
        {
          "name": "Bank of Baroda Credit Card",
          "billers": [
            {
              "op": 20804,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20804"
            }
          ],
          "providers": []
        },
        {
          "name": "Canara Bank Credit Card",
          "billers": [
            {
              "op": 20805,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20805"
            }
          ],
          "providers": []
        },
        {
          "name": "CITI Bank Credit Card",
          "billers": [
            {
              "op": 20806,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20806"
            }
          ],
          "providers": []
        },
        {
          "name": "City Union Bank Credit Card",
          "billers": [
            {
              "op": 20807,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20807"
            }
          ],
          "providers": []
        },
        {
          "name": "HDFC Bank Credit Card",
          "billers": [
            {
              "op": 20808,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20808"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI Bank Credit Card",
          "billers": [
            {
              "op": 20809,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20809"
            }
          ],
          "providers": []
        },
        {
          "name": "IDBI Bank Credit Card",
          "billers": [
            {
              "op": 20810,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20810"
            }
          ],
          "providers": []
        },
        {
          "name": "IndusInd Bank Credit Card",
          "billers": [
            {
              "op": 20811,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20811"
            }
          ],
          "providers": []
        },
        {
          "name": "Ratnakar Bank Credit Card",
          "billers": [
            {
              "op": 20812,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20812"
            }
          ],
          "providers": []
        },
        {
          "name": "SBI Bank Credit Card",
          "billers": [
            {
              "op": 20813,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20813"
            }
          ],
          "providers": []
        },
        {
          "name": "Standard Chartered Bank Credit Card",
          "billers": [
            {
              "op": 20814,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20814"
            }
          ],
          "providers": []
        },
        {
          "name": "Syndicate Bank Credit Card",
          "billers": [
            {
              "op": 20815,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20815"
            }
          ],
          "providers": []
        },
        {
          "name": "Union Bank of India Credit Card",
          "billers": [
            {
              "op": 20816,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20816"
            }
          ],
          "providers": []
        },
        {
          "name": "Yes Bank Credit Card",
          "billers": [
            {
              "op": 20817,
              "fields": [
                {
                  "id": "cn",
                  "name": "Credit Card Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9X]{14,16}$",
                  "encrypt": true,
                  "maxLen": 16,
                  "icon": "z",
                  "cardTypeLogo": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=20817"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "emipayments",
      "name": "EMI Payments",
      "providerRoot": [
        {
          "name": "Aadhar Housing Finance Limited",
          "billers": [
            {
              "op": 568,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 8,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=568"
            }
          ],
          "providers": []
        },
        {
          "name": "ARTH",
          "billers": [
            {
              "op": 793,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z:]{5,25}$",
                  "maxLen": 25,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=793"
            }
          ],
          "providers": []
        },
        {
          "name": "LoanFront",
          "billers": [
            {
              "op": 835,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=835"
            }
          ],
          "providers": []
        },
        {
          "name": "Activline",
          "billers": [
            {
              "op": 944,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 35,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z_]{2,35}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=944"
            }
          ],
          "providers": []
        },
        {
          "name": "Veritas Finance",
          "billers": [
            {
              "op": 972,
              "fields": [
                {
                  "id": "cn",
                  "name": "LOAN ACCOUNT NUMBER",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z0-9-]{14}$",
                  "maxLen": 14,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=972"
            }
          ],
          "providers": []
        },
        {
          "name": "Aris Capital Pvt Limited",
          "billers": [
            {
              "op": 976,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9\\/]{2,20}$",
                  "maxLen": 20,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=976"
            }
          ],
          "providers": []
        },
        {
          "name": "Skyway Telecom",
          "billers": [
            {
              "op": 973,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=973"
            }
          ],
          "providers": []
        },
        {
          "name": "Royal Fibernet",
          "billers": [
            {
              "op": 974,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=974"
            }
          ],
          "providers": []
        },
        {
          "name": "Express Wire",
          "billers": [
            {
              "op": 975,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=975"
            }
          ],
          "providers": []
        },
        {
          "name": "Credin",
          "billers": [
            {
              "op": 917,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 6,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=917"
            }
          ],
          "providers": []
        },
        {
          "name": "EDC Limited",
          "billers": [
            {
              "op": 919,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=919"
            }
          ],
          "providers": []
        },
        {
          "name": "Laxmi India Finance Private Limited",
          "billers": [
            {
              "op": 921,
              "fields": [
                {
                  "id": "cn",
                  "name": "Case Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,35}$",
                  "maxLen": 35,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=921"
            }
          ],
          "providers": []
        },
        {
          "name": "Satya MicroCapital Ltd",
          "billers": [
            {
              "op": 930,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{10,12}$",
                  "maxLen": 12,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=930"
            }
          ],
          "providers": []
        },
        {
          "name": "Karpagam Hire Purchase And Finance Pvt Ltd",
          "billers": [
            {
              "op": 936,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,20}$",
                  "maxLen": 20,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=936"
            }
          ],
          "providers": []
        },
        {
          "name": "Loanzen Finance Pvt Ltd",
          "billers": [
            {
              "op": 938,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=938"
            }
          ],
          "providers": []
        },
        {
          "name": "Piramal Finance",
          "billers": [
            {
              "op": 941,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application / Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{5,20}$",
                  "maxLen": 20,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=941"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Finance",
          "billers": [
            {
              "op": 388,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{14,18}$",
                  "maxLen": 18,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=388"
            }
          ],
          "providers": []
        },
        {
          "name": "Ambit Finvest Pvt Ltd",
          "billers": [
            {
              "op": 847,
              "fields": [
                {
                  "id": "cn",
                  "name": "LAN",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{5,15}$",
                  "maxLen": 15,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=847"
            }
          ],
          "providers": []
        },
        {
          "name": "Kogta Financial India Limited",
          "billers": [
            {
              "op": 848,
              "fields": [
                {
                  "id": "cn",
                  "name": "LAN",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/@]{1,50}$",
                  "maxLen": 50,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=848"
            }
          ],
          "providers": []
        },
        {
          "name": "Fedbank Financial Services Limited",
          "billers": [
            {
              "op": 870,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{16,20}$",
                  "maxLen": 20,
                  "minLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=870"
            }
          ],
          "providers": []
        },
        {
          "name": "Hinduja Leyland Finance",
          "billers": [
            {
              "op": 871,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Contract Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{7,20}$",
                  "maxLen": 20,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=871"
            }
          ],
          "providers": []
        },
        {
          "name": "Paisabuddy Finance Pvt Ltd",
          "billers": [
            {
              "op": 872,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "(^[a-zA-Z]{2} [0-9]{1,17}$)|(^[a-zA-Z]{3} [0-9]{1,16}$)|(^[a-zA-Z]{4} [0-9]{1,15}$)",
                  "maxLen": 20,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=872"
            }
          ],
          "providers": []
        },
        {
          "name": "Ring",
          "billers": [
            {
              "op": 873,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                },
                {
                  "icon": "V",
                  "id": "dateofBirth",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Date of birth (YYYY-MM-DD)",
                  "regex": "^(([0-9][0-9])|([1-2][0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-(([0-2][0-9])|(3[0-1]))$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=873"
            }
          ],
          "providers": []
        },
        {
          "name": "Credit Saison",
          "billers": [
            {
              "op": 839,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{2,20}$",
                  "maxLen": 20,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=839"
            }
          ],
          "providers": []
        },
        {
          "name": "Hinduja Housing Finance Limited",
          "billers": [
            {
              "op": 806,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application Number",
                  "type": "INPUT",
                  "regex": "^([A-Za-z]{2})\\/([A-Za-z]{3})\\/([A-Za-z]{4})\\/([Aa]{1})([0-9]{9})$",
                  "minLen": 10,
                  "maxLen": 22,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=806"
            }
          ],
          "providers": []
        },
        {
          "name": "IIFL Samasta Finance Ltd - Retail Loans",
          "billers": [
            {
              "op": 807,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,25}$",
                  "maxLen": 25,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=807"
            }
          ],
          "providers": []
        },
        {
          "name": "Maben Nidhi",
          "billers": [
            {
              "op": 914,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/]{2,12}$",
                  "maxLen": 12,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=914"
            }
          ],
          "providers": []
        },
        {
          "name": "Wonder Home Finance Limited",
          "billers": [
            {
              "op": 910,
              "fields": [
                {
                  "id": "cn",
                  "name": "LAN",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-]{5,20}$",
                  "maxLen": 20,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=910"
            }
          ],
          "providers": []
        },
        {
          "name": "CASHe",
          "billers": [
            {
              "op": 898,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{2,15}$",
                  "maxLen": 15,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=898"
            }
          ],
          "providers": []
        },
        {
          "name": "SBFC Finance Private Limited",
          "billers": [
            {
              "op": 808,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan number (PR no.)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=808"
            }
          ],
          "providers": []
        },
        {
          "name": "Poonawalla Fincorp Ltd",
          "billers": [
            {
              "op": 809,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z\\_a-z\\-\\/0-9]{5,30}$",
                  "maxLen": 30,
                  "minLen": 5,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=809"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Vehicle And Asset Finance Limited",
          "billers": [
            {
              "op": 860,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{15,20}$",
                  "maxLen": 20,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=860"
            }
          ],
          "providers": []
        },
        {
          "name": "Setia Auto Finance Pvt Ltd",
          "billers": [
            {
              "op": 861,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z@#$%^&amp;*()_+=.,-]{3,20}$",
                  "maxLen": 20,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=861"
            }
          ],
          "providers": []
        },
        {
          "name": "Manappuram Home Finance Ltd",
          "billers": [
            {
              "op": 862,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_#-.!:]{4,25}$",
                  "maxLen": 25,
                  "minLen": 4,
                  "icon": "V"
                },
                {
                  "id": "EMI/CLOSURE",
                  "name": "EMI/CLOSURE",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(EMI)$|^(CLOSURE)$",
                  "maxLen": 7,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=862"
            }
          ],
          "providers": []
        },
        {
          "name": "Sonata Finance",
          "billers": [
            {
              "op": 810,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{5,12}$",
                  "maxLen": 12,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=810"
            }
          ],
          "providers": []
        },
        {
          "name": "Agriwise Finserv Limited",
          "billers": [
            {
              "op": 811,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{6,20}$",
                  "maxLen": 20,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=811"
            }
          ],
          "providers": []
        },
        {
          "name": "Union Bank of India-Loans",
          "billers": [
            {
              "op": 819,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{15}$",
                  "maxLen": 15,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=819"
            }
          ],
          "providers": []
        },
        {
          "name": "Five Star Business Finance",
          "billers": [
            {
              "op": 820,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7}$",
                  "maxLen": 7,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=820"
            }
          ],
          "providers": []
        },
        {
          "name": "Saraswat Bank - Loan Repayment",
          "billers": [
            {
              "op": 827,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{15}$",
                  "maxLen": 15,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=827"
            }
          ],
          "providers": []
        },
        {
          "name": "Emgee Muthoot Nidhi Ltd",
          "billers": [
            {
              "op": 830,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\/]{1,15}$",
                  "maxLen": 15,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=830"
            }
          ],
          "providers": []
        },
        {
          "name": "Geo Bros Muthoot Nidhi Ltd",
          "billers": [
            {
              "op": 831,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\/]{1,15}$",
                  "maxLen": 15,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=831"
            }
          ],
          "providers": []
        },
        {
          "name": "Ramaiah Capital Pvt Ltd",
          "billers": [
            {
              "op": 794,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([A-Z0-9]{8,14})$",
                  "maxLen": 14,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=794"
            }
          ],
          "providers": []
        },
        {
          "name": "Yes Bank Ltd - Loan Payment",
          "billers": [
            {
              "op": 890,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{15,20}$",
                  "maxLen": 20,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=890"
            }
          ],
          "providers": []
        },
        {
          "name": "KREDITBEE",
          "billers": [
            {
              "op": 641,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Mobile Number",
                  "regex": "^[0-9]{10,10}$",
                  "type": "INPUT"
                },
                {
                  "id": "dateofBirth",
                  "name": "DOB(YYYY-MM-DD)",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "minLen": "10",
                  "maxLen": "10",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=641"
            }
          ],
          "providers": []
        },
        {
          "name": "Samrat Motor Finance Ltd",
          "billers": [
            {
              "op": 927,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 50,
                  "minLen": 2,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9@_*.$-]{2,50}$",
                  "type": "INPUT"
                },
                {
                  "id": "BillType",
                  "name": "Bill Type",
                  "type": "INPUT",
                  "regex": "^(Amount Payable and Charges)$|^(Amount Payable)$|^(Charges)$",
                  "minLen": "3",
                  "maxLen": "30",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=927"
            }
          ],
          "providers": []
        },
        {
          "name": "Hero Housing Finance Ltd",
          "billers": [
            {
              "op": 903,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 7,
                  "name": "Agreement Id/Loan Account Number",
                  "regex": "^[A-Z0-9]{7,20}$",
                  "type": "INPUT"
                },
                {
                  "id": "PayType",
                  "name": "Pay Type",
                  "regex": "^(EMI Overdue)$|^(Total Overdue)$",
                  "minLen": "3",
                  "maxLen": "15",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=903"
            }
          ],
          "providers": []
        },
        {
          "name": "Mahindra Finance Consumer Loans",
          "billers": [
            {
              "op": 893,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{7,15}$",
                  "maxLen": 15,
                  "minLen": 7,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=893"
            }
          ],
          "providers": []
        },
        {
          "name": "Punjab National Bank",
          "billers": [
            {
              "op": 740,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 16,
                  "minLen": 11,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{4}[a-zA-Z0-9]{7,12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=740"
            }
          ],
          "providers": []
        },
        {
          "name": "Shalibhadra Finance Limited",
          "billers": [
            {
              "op": 984,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 3,
                  "name": "SL Number",
                  "regex": "^[A-Za-z0-9-]{3,20}$",
                  "type": "INPUT"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=984"
            }
          ],
          "providers": []
        },
        {
          "name": "The Kurla Nagarik Sahakari Bank Ltd",
          "billers": [
            {
              "op": 986,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 1,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=986"
            }
          ],
          "providers": []
        },
        {
          "name": "Utkarsh Bank Loan Repayment",
          "billers": [
            {
              "op": 987,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 2,
                  "name": "AccountID",
                  "regex": "^[A-Za-z0-9]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=987"
            }
          ],
          "providers": []
        },
        {
          "name": "VFS Capital Limited",
          "billers": [
            {
              "op": 992,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 10,
                  "name": "Account Number",
                  "regex": "^[a-zA-Z0-9]{10,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=992"
            }
          ],
          "providers": []
        },
        {
          "name": "Namdev Finvest Pvt Ltd",
          "billers": [
            {
              "op": 998,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 10,
                  "name": "LOANID",
                  "regex": "^[a-zA-Z0-9]{10,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=998"
            }
          ],
          "providers": []
        },
        {
          "name": "Share India Fincap Pvt Ltd",
          "billers": [
            {
              "op": 1008,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 2,
                  "name": "Loan Number",
                  "regex": "^[0-9]{2,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1008"
            }
          ],
          "providers": []
        },
        {
          "name": "Capital Trust Limited",
          "billers": [
            {
              "op": 1013,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 20,
                  "minLen": 2,
                  "name": "Loan Number",
                  "regex": "^[A-Za-z0-9\\/]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1013"
            }
          ],
          "providers": []
        },
        {
          "name": "Maitreya Capital and Business Services Private Limited",
          "billers": [
            {
              "op": 1017,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 30,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1017"
            }
          ],
          "providers": []
        },
        {
          "name": "Cashtree Finance",
          "billers": [
            {
              "op": 1022,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 8,
                  "minLen": 8,
                  "name": "Loan ID",
                  "regex": "^[0-9]{8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1022"
            }
          ],
          "providers": []
        },
        {
          "name": "Hedge Finance Ltd",
          "billers": [
            {
              "op": 1025,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 26,
                  "minLen": 4,
                  "name": "Loan ID",
                  "regex": "^[a-zA-Z0-9\\s]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1025"
            }
          ],
          "providers": []
        },
        {
          "name": "Alfastar India Nidhi Limited",
          "billers": [
            {
              "op": 1038,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 5,
                  "name": "Loan Number",
                  "regex": "^[A-Z 0-9]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1038"
            }
          ],
          "providers": []
        },
        {
          "name": "Pahal Finance Individual Loan / Vehicle Loan",
          "billers": [
            {
              "op": 1055,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 10,
                  "name": "Loan Number",
                  "regex": "^[A-Z0-9]{10,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1055"
            }
          ],
          "providers": []
        },
        {
          "name": "Sewa Grih Rin Limited",
          "billers": [
            {
              "op": 1065,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 16,
                  "minLen": 12,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{12,16}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1065"
            }
          ],
          "providers": []
        },
        {
          "name": "Namra Finance",
          "billers": [
            {
              "op": 1075,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 5,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{5,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1075"
            }
          ],
          "providers": []
        },
        {
          "name": "Axis Bank Ltd - MCA",
          "billers": [
            {
              "op": 1078,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{3,20}$",
                  "type": "INPUT"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth(DD-MM-YYYY)",
                  "type": "DATE",
                  "regex": "^[0-9-]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1078"
            }
          ],
          "providers": []
        },
        {
          "name": "Arman Financial Services Limited",
          "billers": [
            {
              "op": 1085,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 13,
                  "minLen": 5,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{5,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1085"
            }
          ],
          "providers": []
        },
        {
          "name": "Esco Elettil Nidhi Limited",
          "billers": [
            {
              "op": 1095,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 15,
                  "minLen": 6,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{6,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1095"
            }
          ],
          "providers": []
        },
        {
          "name": "Keertana Finserv Private Limited",
          "billers": [
            {
              "op": 1096,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 3,
                  "name": "Loan No",
                  "regex": "^[A-Za-z0-9]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1096"
            }
          ],
          "providers": []
        },
        {
          "name": "Fasttrack Housing Finance Ltd",
          "billers": [
            {
              "op": 1097,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 9,
                  "minLen": 9,
                  "name": "Loan ID",
                  "regex": "^[0-9]{9,9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1097"
            }
          ],
          "providers": []
        },
        {
          "name": "121 Finance Private Limited",
          "billers": [
            {
              "op": 1104,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 35,
                  "minLen": 8,
                  "name": "Loan Account Number",
                  "regex": "^[A-Za-z0-9\\@\\s\\-]{8,35}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1104"
            }
          ],
          "providers": []
        },
        {
          "name": "Goldline Finance Private Limited (Capital Now)",
          "billers": [
            {
              "op": 1108,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 10,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{10,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1108"
            }
          ],
          "providers": []
        },
        {
          "name": "Andhra Pragathi Grameena Bank Loan Repayment",
          "billers": [
            {
              "op": 1115,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 17,
                  "minLen": 11,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{11,17}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1115"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Vehicle And Asset Finance Limited Gold Loan",
          "billers": [
            {
              "op": 1116,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 10,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9,()/._''-]{10,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1116"
            }
          ],
          "providers": []
        },
        {
          "name": "Avanti Finance Private Limited",
          "billers": [
            {
              "op": 1089,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 10,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{10,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1089"
            }
          ],
          "providers": []
        },
        {
          "name": "Speel Finance Company Private Limited (Pocketly)",
          "billers": [
            {
              "op": 1090,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Phone Number",
                  "regex": "^[0-9]{10,10}$",
                  "type": "INPUT"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1090"
            }
          ],
          "providers": []
        },
        {
          "name": "Mangal Credit and Fincorp Limited",
          "billers": [
            {
              "op": 1039,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1039"
            }
          ],
          "providers": []
        },
        {
          "name": "Unnayan Bharat Finance Corporation Private Limited",
          "billers": [
            {
              "op": 782,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 1,
                  "name": "Account Number",
                  "regex": "^[0-9A-Za-z]{1,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=782"
            }
          ],
          "providers": []
        },
        {
          "name": "Amrit Malwa Capital Limited",
          "billers": [
            {
              "op": 776,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "name": "Loan Number",
                  "regex": "^[A-Za-z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=776"
            }
          ],
          "providers": []
        },
        {
          "name": "ESAF Small Finance Bank (Retails Loans)",
          "billers": [
            {
              "op": 777,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 14,
                  "minLen": 14,
                  "name": "Loan Number",
                  "regex": "^[0-9]{14,14}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=777"
            }
          ],
          "providers": []
        },
        {
          "name": "Capital India Home Loans Limited",
          "billers": [
            {
              "op": 780,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 16,
                  "minLen": 16,
                  "name": "Loan Application Number",
                  "regex": "^[a-zA-Z0-9]+$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=780"
            }
          ],
          "providers": []
        },
        {
          "name": "Monedo Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 764,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 9,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{3,9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=764"
            }
          ],
          "providers": []
        },
        {
          "name": "Dhansansar Nidhi Limited",
          "billers": [
            {
              "op": 770,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 1,
                  "name": "UNIQUE LOAN NUMBER",
                  "regex": "^[0-9]{1,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=770"
            }
          ],
          "providers": []
        },
        {
          "name": "ITI Finance Limited",
          "billers": [
            {
              "op": 771,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "name": "Loan Number",
                  "regex": "^[a-zA-Z0-9-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=771"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Money - Gold Loan",
          "billers": [
            {
              "op": 772,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 10,
                  "name": "Loan Number",
                  "regex": "^[a-zA-Z0-9\\/]{10,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=772"
            }
          ],
          "providers": []
        },
        {
          "name": "Swara Fincare Limited",
          "billers": [
            {
              "op": 773,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 18,
                  "minLen": 1,
                  "name": "Loan Number",
                  "regex": "^[0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=773"
            }
          ],
          "providers": []
        },
        {
          "name": "Credit One Payments Solutions Pvt Ltd",
          "billers": [
            {
              "op": 760,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 2,
                  "name": "Loan Account Number",
                  "regex": "^[ A-Za-z0-9_@./#&amp;+-]{9,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=760"
            }
          ],
          "providers": []
        },
        {
          "name": "Kusalava Finance Limited",
          "billers": [
            {
              "op": 761,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 4,
                  "name": "Loan Number",
                  "regex": "^[a-zA-Z0-9 ,()&amp;/._''-]{04,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=761"
            }
          ],
          "providers": []
        },
        {
          "name": "LoanBaba",
          "billers": [
            {
              "op": 741,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 8,
                  "minLen": 5,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{5,8}$",
                  "type": "INPUT"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]([0-9]{9})$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=741"
            }
          ],
          "providers": []
        },
        {
          "name": "Ashv Finance",
          "billers": [
            {
              "op": 742,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 18,
                  "minLen": 14,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{14,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=742"
            }
          ],
          "providers": []
        },
        {
          "name": "Unity Small Finance Bank",
          "billers": [
            {
              "op": 743,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 3,
                  "name": "Loan Number",
                  "regex": "^[A-Za-z0-9]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=743"
            }
          ],
          "providers": []
        },
        {
          "name": "Lord Krishna Financial Services",
          "billers": [
            {
              "op": 744,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "name": "Loan Number",
                  "regex": "^[A-Za-z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=744"
            }
          ],
          "providers": []
        },
        {
          "name": "Vastu Finserve India Private Limited",
          "billers": [
            {
              "op": 745,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 15,
                  "name": "Loan Account Number",
                  "regex": "^[A-Za-z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=745"
            }
          ],
          "providers": []
        },
        {
          "name": "R.Sen and Company Investment and Finance Pvt. Ltd.",
          "billers": [
            {
              "op": 707,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 11,
                  "minLen": 9,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{9,11}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=707"
            }
          ],
          "providers": []
        },
        {
          "name": "EZFINANZE",
          "billers": [
            {
              "op": 720,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 16,
                  "minLen": 1,
                  "name": "Loan No",
                  "regex": "^[0-9A-Za-z]{1,16}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=720"
            }
          ],
          "providers": []
        },
        {
          "name": "Poonawalla Fincorp Ltd",
          "billers": [
            {
              "op": 722,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 13,
                  "name": "Loan Account Number",
                  "regex": "^[A-Za-z0-9]{3}-[\\d]{4}-[\\d]{4}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=722"
            }
          ],
          "providers": []
        },
        {
          "name": "We Pay Finance Pvt Ltd",
          "billers": [
            {
              "op": 711,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{3,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=711"
            }
          ],
          "providers": []
        },
        {
          "name": "UGRO Capital Limited",
          "billers": [
            {
              "op": 708,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "name": "Loan Number",
                  "regex": "^[A-Za-z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=708"
            }
          ],
          "providers": []
        },
        {
          "name": "Manappuram Finance Limited",
          "billers": [
            {
              "op": 699,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 16,
                  "minLen": 16,
                  "name": "Loan Account Number",
                  "regex": "^\\d{16}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "pledgeValue",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 4,
                  "name": "Pledge Value",
                  "regex": "^\\d{4,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=699"
            }
          ],
          "providers": []
        },
        {
          "name": "Deccan Finance Limited",
          "billers": [
            {
              "op": 721,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 7,
                  "name": "Agreement Number",
                  "regex": "^[0-9A-Za-z-]{7,30}",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=721"
            }
          ],
          "providers": []
        },
        {
          "name": "Protium",
          "billers": [
            {
              "op": 698,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 1,
                  "name": "Loan/Facility Account Number",
                  "regex": "^[A-Za-z0-9]{30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=698"
            }
          ],
          "providers": []
        },
        {
          "name": "Cholamandalam Investment and Finance Company Limited",
          "billers": [
            {
              "op": 697,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 18,
                  "minLen": 16,
                  "name": "Agreement Number",
                  "regex": "",
                  "type": "INPUT"
                },
                {
                  "id": "productGroup",
                  "name": "Product Group",
                  "type": "LIST",
                  "icon": "V",
                  "maxLen": 25,
                  "minLen": 11,
                  "fieldValues": [
                    "Vehicle Finance",
                    "Home Finance",
                    "Loan Against Property",
                    "Secured Business Loan",
                    "Unsecured Loan"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=697"
            }
          ],
          "providers": []
        },
        {
          "name": "ITI Credit Limited Erstwhile Fortune Credit Capital Limited",
          "billers": [
            {
              "op": 679,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 8,
                  "minLen": 2,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{2,8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=679"
            }
          ],
          "providers": []
        },
        {
          "name": "CNH Industrial Capital Pvt. Ltd.",
          "billers": [
            {
              "op": 680,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=680"
            }
          ],
          "providers": []
        },
        {
          "name": "Dev Finance",
          "billers": [
            {
              "op": 681,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 2,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{2,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=681"
            }
          ],
          "providers": []
        },
        {
          "name": "Shine Blue Hire Purchase Ltd.",
          "billers": [
            {
              "op": 683,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 2,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{2,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=683"
            }
          ],
          "providers": []
        },
        {
          "name": "STREE NIDHI - TELANGANA",
          "billers": [
            {
              "op": 691,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 50,
                  "name": "SHG ID",
                  "regex": "^[0-9A-Za-z]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=691"
            }
          ],
          "providers": []
        },
        {
          "name": "Kanakadurga Finance Limited - Gold Loans",
          "billers": [
            {
              "op": 692,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 5,
                  "name": "Loan Number",
                  "regex": "^[0-9A-Za-z]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=692"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Finance-Personal Loan",
          "billers": [
            {
              "op": 682,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 10,
                  "name": "Loan Number",
                  "regex": "^[a-zA-Z0-9]{10,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=682"
            }
          ],
          "providers": []
        },
        {
          "name": "Bussan Auto Finance India Pvt Ltd",
          "billers": [
            {
              "op": 671,
              "fields": [
                {
                  "id": "cn",
                  "name": "Agreement Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{16}$",
                  "maxLen": 16,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]([0-9]{9})$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=671"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI BANK - Interest Repayment Loans",
          "billers": [
            {
              "op": 667,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^\\d{12,12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=667"
            }
          ],
          "providers": []
        },
        {
          "name": "Suryoday Small Finance Bank",
          "billers": [
            {
              "op": 655,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{12}$",
                  "maxLen": 12,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=655"
            }
          ],
          "providers": []
        },
        {
          "name": "Ekagrata Finance",
          "billers": [
            {
              "op": 663,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^\\d{2,25}$",
                  "maxLen": 25,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=663"
            }
          ],
          "providers": []
        },
        {
          "name": "APAC Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 661,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{12,25}$",
                  "maxLen": 25,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=661"
            }
          ],
          "providers": []
        },
        {
          "name": "NABFINS",
          "billers": [
            {
              "op": 662,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^\\d{15,15}$",
                  "maxLen": 12,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=662"
            }
          ],
          "providers": []
        },
        {
          "name": "Moneywise Financial Services Private Limited",
          "billers": [
            {
              "op": 658,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{5,25}$",
                  "maxLen": 25,
                  "minLen": 5,
                  "icon": "V"
                },
                {
                  "id": "productGroup",
                  "name": "Product Group",
                  "type": "LIST",
                  "icon": "V",
                  "maxLen": 26,
                  "minLen": 5,
                  "fieldValues": [
                    "Loan Against Property",
                    "Asset Finance",
                    "Working Capital Term Loan",
                    "Asset Lease",
                    "Bill Discounting",
                    "Consumer Durable Loans",
                    "Onward Lending",
                    "Personal Loan",
                    "Gold Loan"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=658"
            }
          ],
          "providers": []
        },
        {
          "name": "DCBS Loan",
          "billers": [
            {
              "op": 645,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{3}(-[0-9]{7})$",
                  "maxLen": 11,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=645"
            }
          ],
          "providers": []
        },
        {
          "name": "Reliance ARC",
          "billers": [
            {
              "op": 646,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9,A-Z]{2,50}$",
                  "maxLen": 50,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=646"
            }
          ],
          "providers": []
        },
        {
          "name": "Finova Capital Private Ltd",
          "billers": [
            {
              "op": 649,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 24,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=649"
            }
          ],
          "providers": []
        },
        {
          "name": "Care India Finvest Limited",
          "billers": [
            {
              "op": 651,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\\\/]+$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=651"
            }
          ],
          "providers": []
        },
        {
          "name": "Electronica Finance Limited",
          "billers": [
            {
              "op": 652,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z,-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=652"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Homefin Limited",
          "billers": [
            {
              "op": 653,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 12,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=653"
            }
          ],
          "providers": []
        },
        {
          "name": "Spandana Rural And Urban Development Organisation",
          "billers": [
            {
              "op": 654,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\\\/]+$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=654"
            }
          ],
          "providers": []
        },
        {
          "name": "Aye Finance Pvt. Ltd.",
          "billers": [
            {
              "op": 625,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\\\/]+$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=625"
            }
          ],
          "providers": []
        },
        {
          "name": "Shubham Housing Development Finance Company Ltd",
          "billers": [
            {
              "op": 635,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9._]{15,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=635"
            }
          ],
          "providers": []
        },
        {
          "name": "Indostar Capital Finance Limited - SME",
          "billers": [
            {
              "op": 631,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{8,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=631"
            }
          ],
          "providers": []
        },
        {
          "name": "Criss Financial Limited",
          "billers": [
            {
              "op": 626,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\/]{2,20}$",
                  "maxLen": 20,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=626"
            }
          ],
          "providers": []
        },
        {
          "name": "Equitas Small Finance Bank - Retail Loan",
          "billers": [
            {
              "op": 627,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]([0-9]{9})$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "loanNumber",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{14,16}$",
                  "maxLen": 16,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=627"
            }
          ],
          "providers": []
        },
        {
          "name": "Unimoni Financial Services Ltd",
          "billers": [
            {
              "op": 964,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "loanNumber",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z-a-z-0-9]{1,16}$",
                  "maxLen": 16,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=964"
            }
          ],
          "providers": []
        },
        {
          "name": "Spandana Sphoorty Financial Ltd",
          "billers": [
            {
              "op": 628,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=628"
            }
          ],
          "providers": []
        },
        {
          "name": "AAVAS FINANCIERS LIMITED",
          "billers": [
            {
              "op": 317,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9-]+$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=317"
            }
          ],
          "providers": []
        },
        {
          "name": "Adani Capital Pvt Ltd",
          "billers": [
            {
              "op": 431,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(\\d{3}[A-Z]{2}|\\d{5}|[A-Z]{5})[A-Z]\\d{9}$|^[a-zA-Z0-9]{5,20}$",
                  "maxLen": 20,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=431"
            }
          ],
          "providers": []
        },
        {
          "name": "Adani Housing Finance",
          "billers": [
            {
              "op": 487,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(\\d{3}[A-Z]{2}|\\d{4}[A-Z]|[A-Z]{5})[A-Z]\\d{9}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=487"
            }
          ],
          "providers": []
        },
        {
          "name": "Aditya Birla Housing Finance Limited",
          "billers": [
            {
              "op": 307,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[Ll][Nn][a-zA-Z]{3}[a-zA-Z0-9_]{3}[-][0-9]{11}$",
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Registered Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=307"
            }
          ],
          "providers": []
        },
        {
          "name": "Aditya Birla Finance ltd. (ABFL)",
          "billers": [
            {
              "op": 209,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-_]{1,50}$",
                  "icon": "V",
                  "hint": "e.g. ABCD-E01234-123456789"
                },
                {
                  "id": "mobileNumber",
                  "name": "Contact Number Registered with the operator",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": ".+",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=209"
            }
          ],
          "providers": []
        },
        {
          "name": "Agora Microfinance India Ltd - AMIL",
          "billers": [
            {
              "op": 491,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_ \\\\\\\\-]*$",
                  "maxLen": 12,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=491"
            }
          ],
          "providers": []
        },
        {
          "name": "Altum Credo Home Finance",
          "billers": [
            {
              "op": 442,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^\\d{13}$",
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=442"
            }
          ],
          "providers": []
        },
        {
          "name": "Annapurna Finance Private Limited-MFI",
          "billers": [
            {
              "op": 553,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=553"
            }
          ],
          "providers": []
        },
        {
          "name": "Annapurna Finance Private Limited-MSME",
          "billers": [
            {
              "op": 424,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=424"
            }
          ],
          "providers": []
        },
        {
          "name": "Aptus Value Housing Finance India Limited",
          "billers": [
            {
              "op": 529,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "maxLen": 25,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=529"
            }
          ],
          "providers": []
        },
        {
          "name": "Aptus Finance India Private Limited",
          "billers": [
            {
              "op": 530,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "maxLen": 25,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=530"
            }
          ],
          "providers": []
        },
        {
          "name": "Arohan Financial Services Ltd",
          "billers": [
            {
              "op": 387,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([0-9]{14})$",
                  "maxLen": 14,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=387"
            }
          ],
          "providers": []
        },
        {
          "name": "Ascend Capital",
          "billers": [
            {
              "op": 457,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^1700\\d{4}$",
                  "maxLen": 10,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=457"
            }
          ],
          "providers": []
        },
        {
          "name": "Asirvad Micro Finance Ltd",
          "billers": [
            {
              "op": 593,
              "fields": [
                {
                  "id": "cn",
                  "name": "Member ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=593"
            }
          ],
          "providers": []
        },
        {
          "name": "ZestMoney",
          "billers": [
            {
              "op": 389,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,13}$",
                  "maxLen": 13,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd-MM-yyyy",
                  "icon": "J"
                },
                {
                  "id": "pincode",
                  "name": "Pin Code",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{5,6}$",
                  "maxLen": 6,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=389"
            }
          ],
          "providers": []
        },
        {
          "name": "AU Bank Loan Repayment",
          "billers": [
            {
              "op": 385,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=385"
            }
          ],
          "providers": []
        },
        {
          "name": "Avail",
          "billers": [
            {
              "op": 320,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "INPUT",
                  "regex": "^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=320"
            }
          ],
          "providers": []
        },
        {
          "name": "Avanse Financial Services Ltd",
          "billers": [
            {
              "op": 420,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 10,
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=420"
            }
          ],
          "providers": []
        },
        {
          "name": "Axis Finance Limited",
          "billers": [
            {
              "op": 377,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([0-9]){4}([a-zA-Z]){3}([0-9]){8}?$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=377"
            }
          ],
          "providers": []
        },
        {
          "name": "Axis Bank Limited-Microfinance",
          "billers": [
            {
              "op": 501,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{15,15}$",
                  "minLen": 15,
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=501"
            }
          ],
          "providers": []
        },
        {
          "name": "Axis Bank Limited - Retail Loan",
          "billers": [
            {
              "op": 554,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z0-9]{5,20}$",
                  "minLen": 5,
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^(\\+91|0)?[1-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=554"
            }
          ],
          "providers": []
        },
        {
          "name": "Ayaan Finserve India Private Ltd",
          "billers": [
            {
              "op": 561,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 7,
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=561"
            }
          ],
          "providers": []
        },
        {
          "name": "Baid Finserv Limited",
          "billers": [
            {
              "op": 421,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([6-9]\\d{9})|(\\d{4,5})|(((HR)|(RJ))\\d{1,2}[A-Z]{0,3}\\d{4})$",
                  "minLen": 3,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=421"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Auto Finance",
          "billers": [
            {
              "op": 210,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": ".+",
                  "icon": "V",
                  "hint": "e.g. L2WPUN00000001"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=210"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Housing Finance Limited",
          "billers": [
            {
              "op": 570,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "icon": "V",
                  "minLen": 14,
                  "maxLen": 16
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=570"
            }
          ],
          "providers": []
        },
        {
          "name": "Belstar Microfinance Limited",
          "billers": [
            {
              "op": 586,
              "fields": [
                {
                  "id": "cn",
                  "name": "LAN No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "icon": "V",
                  "maxLen": 14
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=586"
            }
          ],
          "providers": []
        },
        {
          "name": "BERAR Finance Limited",
          "billers": [
            {
              "op": 419,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,20}$",
                  "icon": "V",
                  "minLen": 3,
                  "maxLen": 20
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=419"
            }
          ],
          "providers": []
        },
        {
          "name": "Bharat Financial Inclusion Ltd",
          "billers": [
            {
              "op": 494,
              "fields": [
                {
                  "id": "cn",
                  "name": "ClientID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "icon": "V",
                  "maxLen": 16
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=494"
            }
          ],
          "providers": []
        },
        {
          "name": "Capri global Capital Limited (Gold Loan)",
          "billers": [
            {
              "op": 327,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,20}$",
                  "maxLen": 20,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=327"
            }
          ],
          "providers": []
        },
        {
          "name": "Capri Global Housing Finance",
          "billers": [
            {
              "op": 344,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,20}$",
                  "maxLen": 20,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=344"
            }
          ],
          "providers": []
        },
        {
          "name": "Paisabuddy",
          "billers": [
            {
              "op": 642,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/\\-\\s]{2,15}$",
                  "maxLen": 15,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=642"
            }
          ],
          "providers": []
        },
        {
          "name": "Cars24 Financial Services Private Limited",
          "billers": [
            {
              "op": 379,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{2}\\d{1,2}[A-Z]{0,3}\\d{4}$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=379"
            }
          ],
          "providers": []
        },
        {
          "name": "Centrum Microcredit Limited",
          "billers": [
            {
              "op": 572,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 8,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=572"
            }
          ],
          "providers": []
        },
        {
          "name": "Chaitanya India Fin Credit Pvt Ltd",
          "billers": [
            {
              "op": 447,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^.{7,30}$",
                  "minLen": 7,
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=447"
            }
          ],
          "providers": []
        },
        {
          "name": "Clix",
          "billers": [
            {
              "op": 321,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{2}[A-Z0-9]{11,18}$",
                  "minLen": 13,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=321"
            }
          ],
          "providers": []
        },
        {
          "name": "CreditAccess Grameen - Microfinance",
          "billers": [
            {
              "op": 480,
              "fields": [
                {
                  "id": "cn",
                  "name": "Member ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=480"
            }
          ],
          "providers": []
        },
        {
          "name": "CreditAccess Grameen - Retail Finance",
          "billers": [
            {
              "op": 481,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 14,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=481"
            }
          ],
          "providers": []
        },
        {
          "name": "Credit Wise Capital",
          "billers": [
            {
              "op": 445,
              "fields": [
                {
                  "id": "cn",
                  "name": "Date of Birth",
                  "type": "INPUT",
                  "regex": "^(0[1-9]|[1-2]\\d|(3)[0-1])-(((0)[1-9])|((1)[0-2]))-(19|20)\\d{2}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=445"
            }
          ],
          "providers": []
        },
        {
          "name": "DCB Bank Loan Repayment",
          "billers": [
            {
              "op": 462,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,22}$",
                  "maxLen": "22",
                  "minLen": "10",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=462"
            }
          ],
          "providers": []
        },
        {
          "name": "Digamber Capfin Limited",
          "billers": [
            {
              "op": 448,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(JLG-[0-9]{9})|([0-9]{9})$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=448"
            }
          ],
          "providers": []
        },
        {
          "name": "DMI Finance",
          "billers": [
            {
              "op": 233,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[dD][mM][iI][0-9]{10}$",
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=233"
            }
          ],
          "providers": []
        },
        {
          "name": "Dvara Kshetriya Gramin Financials Private Limited",
          "billers": [
            {
              "op": 510,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=510"
            }
          ],
          "providers": []
        },
        {
          "name": "Easy Home Finance Limited",
          "billers": [
            {
              "op": 376,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 22,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=376"
            }
          ],
          "providers": []
        },
        {
          "name": "Eduvanz Financing Pvt. Ltd.",
          "billers": [
            {
              "op": 463,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": "20",
                  "minLen": "6",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=463"
            }
          ],
          "providers": []
        },
        {
          "name": "Equitas SFB – Microfinance Loan",
          "billers": [
            {
              "op": 575,
              "fields": [
                {
                  "id": "cn",
                  "name": "Center Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": "10",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=575"
            }
          ],
          "providers": []
        },
        {
          "name": "SK Finance Ltd.",
          "billers": [
            {
              "op": 324,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{5,22}$",
                  "maxLen": 22,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=324"
            }
          ],
          "providers": []
        },
        {
          "name": "ESAF Small Finance Bank (Micro Loans)",
          "billers": [
            {
              "op": 541,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([A-Z]|[a-z]|[0-9]){7,20}$",
                  "maxLen": 20,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=541"
            }
          ],
          "providers": []
        },
        {
          "name": "Faircent",
          "billers": [
            {
              "op": 325,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^(\\+91|0)?[1-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=325"
            }
          ],
          "providers": []
        },
        {
          "name": "Fincare Small Finance Bank",
          "billers": [
            {
              "op": 430,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{14}$",
                  "minLen": 14,
                  "maxLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=430"
            }
          ],
          "providers": []
        },
        {
          "name": "FlexiLoans",
          "billers": [
            {
              "op": 444,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{4}\\d{9}$",
                  "maxLen": 15,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=444"
            }
          ],
          "providers": []
        },
        {
          "name": "Flexsalary",
          "billers": [
            {
              "op": 297,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 6,
                  "maxLen": 10,
                  "regex": "^[5-9][0-9]{5,9}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=297"
            }
          ],
          "providers": []
        },
        {
          "name": "SMFG India Home Finance Company Limited",
          "billers": [
            {
              "op": 555,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^6[0-9]{14}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=555"
            }
          ],
          "providers": []
        },
        {
          "name": "SMFG India Credit Company Limited",
          "billers": [
            {
              "op": 556,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{14,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=556"
            }
          ],
          "providers": []
        },
        {
          "name": "G U Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 557,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 25,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=557"
            }
          ],
          "providers": []
        },
        {
          "name": "Hiranandani Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 471,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{16,16}$",
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=471"
            }
          ],
          "providers": []
        },
        {
          "name": "Home Credit India Finance Pvt. Ltd",
          "billers": [
            {
              "op": 425,
              "fields": [
                {
                  "id": "cn",
                  "name": "Contract/Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^\\d{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=425"
            }
          ],
          "providers": []
        },
        {
          "name": "HDB Financial Services Limited",
          "billers": [
            {
              "op": 527,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=527"
            }
          ],
          "providers": []
        },
        {
          "name": "Home First Finance Company India Limited",
          "billers": [
            {
              "op": 472,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{8,8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=472"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI Bank Ltd - Loans",
          "billers": [
            {
              "op": 406,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([A-Z0-9]{1}[^Zz1][A-Z0-9]{14}|^[0-9]{12})$",
                  "maxLen": 16,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=406"
            }
          ],
          "providers": []
        },
        {
          "name": "IDF Financial Services Private Limited",
          "billers": [
            {
              "op": 569,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_ \\\\\\\\-]*$",
                  "maxLen": 18,
                  "minLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=569"
            }
          ],
          "providers": []
        },
        {
          "name": "IDFC FIRST Bank",
          "billers": [
            {
              "op": 261,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,12}",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=261"
            }
          ],
          "providers": []
        },
        {
          "name": "IIFL Finance Limited",
          "billers": [
            {
              "op": 475,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(GL|SL|MF)\\d{1,8}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9]\\d{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=475"
            }
          ],
          "providers": []
        },
        {
          "name": "IIFL Home Finance",
          "billers": [
            {
              "op": 476,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(IL|\\d{0,2})\\d{1,8}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9]\\d{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=476"
            }
          ],
          "providers": []
        },
        {
          "name": "InCred",
          "billers": [
            {
              "op": 558,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{5}\\d{5}-\\d{9}$",
                  "maxLen": 30,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=558"
            }
          ],
          "providers": []
        },
        {
          "name": "India Shelter Finance Corporation Ltd",
          "billers": [
            {
              "op": 426,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^AP-\\d{3,}$",
                  "maxLen": 25,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=426"
            }
          ],
          "providers": []
        },
        {
          "name": "Indiabulls Commercial Credit Ltd",
          "billers": [
            {
              "op": 526,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Application No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]*$",
                  "maxLen": 25,
                  "minLen": 10,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "DATE",
                  "regex": "dd-MM-yyyy",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=526"
            }
          ],
          "providers": []
        },
        {
          "name": "INDUSIND BANK - CFD",
          "billers": [
            {
              "op": 443,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=443"
            }
          ],
          "providers": []
        },
        {
          "name": "i2iFunding",
          "billers": [
            {
              "op": 326,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=326"
            }
          ],
          "providers": []
        },
        {
          "name": "Indiabulls Housing Finance Limited",
          "billers": [
            {
              "op": 318,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{14}",
                  "maxLen": 14,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "DATE",
                  "regex": "dd-MM-yyyy",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=318"
            }
          ],
          "providers": []
        },
        {
          "name": "India Home Loan Limited",
          "billers": [
            {
              "op": 461,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No.",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 12,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=461"
            }
          ],
          "providers": []
        },
        {
          "name": "Indostar Capital Finance Limited - CV ",
          "billers": [
            {
              "op": 576,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=576"
            }
          ],
          "providers": []
        },
        {
          "name": "Diwakar Tracom Private Limited",
          "billers": [
            {
              "op": 614,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(PL|A|ML)[0-9]{5}( [0-9]){0,1}$",
                  "maxLen": 10,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=614"
            }
          ],
          "providers": []
        },
        {
          "name": "Hindon Mercantile Limited - Mufin",
          "billers": [
            {
              "op": 615,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,15}$",
                  "maxLen": 15,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=615"
            }
          ],
          "providers": []
        },
        {
          "name": "Indostar Home Finance Private Limited",
          "billers": [
            {
              "op": 616,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=616"
            }
          ],
          "providers": []
        },
        {
          "name": "Loan2Wheels",
          "billers": [
            {
              "op": 617,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([A-Za-z]{5})?[0-9]{8}$|^[0-9]{6,13}$",
                  "maxLen": 13,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=617"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Money",
          "billers": [
            {
              "op": 618,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number(Last 6 Digits)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^(0)[0-9]{5}$",
                  "maxLen": 6,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=618"
            }
          ],
          "providers": []
        },
        {
          "name": "Rupee Circle",
          "billers": [
            {
              "op": 619,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=619"
            }
          ],
          "providers": []
        },
        {
          "name": "Jain Autofin",
          "billers": [
            {
              "op": 378,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([6-9]\\d{9})|(\\d{5})|(((HR)|(RJ))\\d{1,2}[A-Z]{0,3}\\d{4})$",
                  "minLen": 2,
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=378"
            }
          ],
          "providers": []
        },
        {
          "name": "Jain Motor Finmart",
          "billers": [
            {
              "op": 493,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([6-9]\\d{9})|(\\d{5})|(((HR)|(RJ))\\d{1,2}[A-Z]{0,3}\\d{4})$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=493"
            }
          ],
          "providers": []
        },
        {
          "name": "Janakalyan Financial Services Private Limited",
          "billers": [
            {
              "op": 488,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{4}[-]{0,1}[0-9]{6,8}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=488"
            }
          ],
          "providers": []
        },
        {
          "name": "Jana Small Finance Bank",
          "billers": [
            {
              "op": 390,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{14,16}$",
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=390"
            }
          ],
          "providers": []
        },
        {
          "name": "John Deere Financial India Private Limited",
          "billers": [
            {
              "op": 512,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^\\d{4,10}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=512"
            }
          ],
          "providers": []
        },
        {
          "name": "Kanakadurga Finance Limited",
          "billers": [
            {
              "op": 427,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=427"
            }
          ],
          "providers": []
        },
        {
          "name": "Khush Housing Finance Pvt Ltd",
          "billers": [
            {
              "op": 482,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=482"
            }
          ],
          "providers": []
        },
        {
          "name": "Kinara Capital",
          "billers": [
            {
              "op": 407,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([A-Z]{5}[0-9]{7})|([0-9]{2,}[A-Z]{2,}[0-9]{1,}[A-Z0-9]{2,})$",
                  "maxLen": 30,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=407"
            }
          ],
          "providers": []
        },
        {
          "name": "Kissht",
          "billers": [
            {
              "op": 393,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=393"
            }
          ],
          "providers": []
        },
        {
          "name": "Kotak Mahindra Prime Limited",
          "billers": [
            {
              "op": 507,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{2,50}$",
                  "minLen": 2,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=507"
            }
          ],
          "providers": []
        },
        {
          "name": "Kotak Mahindra Bank Ltd.-Loans",
          "billers": [
            {
              "op": 520,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9a-zA-Z]{2,50}$",
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=520"
            }
          ],
          "providers": []
        },
        {
          "name": "Light Microfinance Private Limited",
          "billers": [
            {
              "op": 474,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 3,
                  "minLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=474"
            }
          ],
          "providers": []
        },
        {
          "name": "Loantap Credit Products Pvt Ltd",
          "billers": [
            {
              "op": 391,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{15,35}$",
                  "maxLen": 35,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=391"
            }
          ],
          "providers": []
        },
        {
          "name": "Loksuvidha",
          "billers": [
            {
              "op": 300,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{5,6}$",
                  "maxLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=300"
            }
          ],
          "providers": []
        },
        {
          "name": "L and T Finance Limited",
          "billers": [
            {
              "op": 299,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{7}$|^(T|t|C|c|M|m)[0-9]{1,19}$|^(C0|CL|Cl|cL|cl|)[0-9]{14}(R|RR|r|rr|Rr|rR{1,2})?$|^(C0|CL|Cl|cL|cl|)[0-9A-Z-a-z]{2,18}$|^(STG|STg|StG|sTG|sTg|stG|stg|L|l|AIL|ail|AIl|AiL|AIl|aIL|aIl|aiL|IRG|irg|IRg|IrG|iRG|iRg|irG|LMM|lmm|LMm|LmM|Lmm|lMM|lMm|MFL|mfl|MFl|MfL|Mfl|mFL|mFl|MIL|mil|MIl|MiL|Mil|mIl|miL|RUL|rul|Rul|RUl|Rul|rUl|ruL)[0-9]{11}$|^(IL|il|Il|iL|SG|sg|Sg|sG)[0-9]{12}$|^(0KG|0kg|0Kg)[0-9]{6}[A-Za-z]{1}[0-9]{10}$|^(F|f)[0-9]{4}[A-Za-z]{1}[0-9]{12,14}$|^(UTL|utl|UTl|UtL|Utl|uTL|uTl|utL)[0-9A-Z]{16}$|^(BL|bl|Bl|bL)[0-9a-zA-Z]{15}$|^(HYDHL|hydhl|DELHL|delhl)[0-9]{8}$|^(H|h)[0-9]{17}(L|l)?$|^(TI)[0-9]{17}$",
                  "maxLen": 20,
                  "minLen": 7,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=299"
            }
          ],
          "providers": []
        },
        {
          "name": "L&T Housing Finance",
          "billers": [
            {
              "op": 310,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([h,H]){1}([0-9]){17}?$|^([h,H]){1}([0-9]){17}([a-zA-Z]){1}?$|^([h,H]){1}([0-9]){17}([a-zA-Z]){2}?$|^([a-zA-Z]){3}([HL,hl,Hl,hL]){2}([0-9]){8}?$|^([a-zA-Z]){3}([FC,fc,Fc,fC]){2}([0-9]){8}?$|^([a-zA-Z]){3}([HF,hf,Hf,hF]){2}([0-9]){8}?$|^([a-zA-Z]){3}([-]){1}([0-9]){3}?$|^([a-zA-Z]){3}([-]){1}([0-9]){4}?$",
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=310"
            }
          ],
          "providers": []
        },
        {
          "name": "Mahindra Home Finance",
          "billers": [
            {
              "op": 428,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=428"
            }
          ],
          "providers": []
        },
        {
          "name": "Mahindra and Mahindra Financial Services Limited",
          "billers": [
            {
              "op": 508,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile or Vehicle Registration Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=508"
            }
          ],
          "providers": []
        },
        {
          "name": "Mahaveer Finance India Limited",
          "billers": [
            {
              "op": 497,
              "fields": [
                {
                  "id": "cn",
                  "name": "Vehicle Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 12,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=497"
            }
          ],
          "providers": []
        },
        {
          "name": "Maxvalue Credits And Investments Ltd",
          "billers": [
            {
              "op": 440,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]{5,20}$",
                  "maxLen": 20,
                  "minLen": 5,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=440"
            }
          ],
          "providers": []
        },
        {
          "name": "Manappuram Finance Limited-Vehicle Loan",
          "billers": [
            {
              "op": 331,
              "fields": [
                {
                  "id": "cn",
                  "name": "Agreement Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([a-zA-Z]){10}([0-9]){12}?$",
                  "maxLen": 22,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=331"
            }
          ],
          "providers": []
        },
        {
          "name": "MDFC Financiers Pvt Ltd",
          "billers": [
            {
              "op": 594,
              "fields": [
                {
                  "id": "cn",
                  "name": "Agreement No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 3,
                  "maxLen": 35,
                  "icon": "V"
                },
                {
                  "icon": "J",
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "regex": "dd-MM-yyyy",
                  "type": "DATE"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=594"
            }
          ],
          "providers": []
        },
        {
          "name": "Midland Microfin Ltd",
          "billers": [
            {
              "op": 449,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 4,
                  "maxLen": 22,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=449"
            }
          ],
          "providers": []
        },
        {
          "name": "Mitron Capital",
          "billers": [
            {
              "op": 531,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=531"
            }
          ],
          "providers": []
        },
        {
          "name": "Mintifi Finserve Private Limited",
          "billers": [
            {
              "op": 464,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-z]{4,14}$",
                  "minLen": 4,
                  "maxLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=464"
            }
          ],
          "providers": []
        },
        {
          "name": "MoneyTap",
          "billers": [
            {
              "op": 559,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "^(0[1-9]|[1-2]\\d|(3)[0-1])-(((0)[1-9])|((1)[0-2]))-(19|20)\\d{2}$",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=559"
            }
          ],
          "providers": []
        },
        {
          "name": "Motilal Oswal Home Finance",
          "billers": [
            {
              "op": 301,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z-]{20,25}$",
                  "minLen": 20,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=301"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Capital Services Ltd",
          "billers": [
            {
              "op": 560,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 8,
                  "icon": "V"
                },
                {
                  "id": "LoanPaymentMode",
                  "name": "Loan Payment Mode",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "icon": "V",
                  "type": "LIST",
                  "fieldValues": [
                    "EMI"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=560"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Fincorp Ltd",
          "billers": [
            {
              "op": 489,
              "fields": [
                {
                  "id": "cn",
                  "name": "Reference Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=489"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Finance",
          "billers": [
            {
              "op": 511,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\/]{10,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=511"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Housing Finance Company Limited",
          "billers": [
            {
              "op": 534,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 22,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=534"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot Microfin Limited",
          "billers": [
            {
              "op": 374,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=374"
            }
          ],
          "providers": []
        },
        {
          "name": "Indian Bank Loan EMI",
          "billers": [
            {
              "op": 1298,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 15,
                  "maxLen": 15,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{15}$",
                  "type": "INPUT"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1298"
            }
          ],
          "providers": []
        },
        {
          "name": "Nidhilakshmi Finance",
          "billers": [
            {
              "op": 458,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/-]{5,15}$",
                  "minLen": 5,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=458"
            }
          ],
          "providers": []
        },
        {
          "name": "Netafim Agricultural Financing Agency",
          "billers": [
            {
              "op": 518,
              "fields": [
                {
                  "id": "cn",
                  "name": "Client ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9A-Za-z]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=518"
            }
          ],
          "providers": []
        },
        {
          "name": "NM Finance",
          "billers": [
            {
              "op": 459,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([6-9]\\d{9})|(\\d{3,8})|(((HR)|(RJ))\\d{1,2}[A-Z]{0,3}\\d{4})$",
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=459"
            }
          ],
          "providers": []
        },
        {
          "name": "Novelty Finance Ltd",
          "billers": [
            {
              "op": 528,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=528"
            }
          ],
          "providers": []
        },
        {
          "name": "Oroboro",
          "billers": [
            {
              "op": 460,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(TFL\\/[A-Za-z]\\/[0-9]{3}\\/[0-9]{2}-[0-9]{2}|TFL[0-9]{6}|ORO[0-9]{6,11})$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=460"
            }
          ],
          "providers": []
        },
        {
          "name": "OHMYLOAN",
          "billers": [
            {
              "op": 422,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z0-9]{2,9}$",
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=422"
            }
          ],
          "providers": []
        },
        {
          "name": "OMLP2P.COM",
          "billers": [
            {
              "op": 423,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z0-9]{2,9}$",
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=423"
            }
          ],
          "providers": []
        },
        {
          "name": "Orange Retail Finance India Pvt Ltd",
          "billers": [
            {
              "op": 499,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number/Mobile Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-z]{10,20}$",
                  "minLen": 10,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=499"
            }
          ],
          "providers": []
        },
        {
          "name": "Oxyzo Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 383,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[Oo]{1}[Xx]{1}[Yy]{1}[A-Za-z0-9]{7,11}$",
                  "minLen": 10,
                  "maxLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=383"
            }
          ],
          "providers": []
        },
        {
          "name": "Pahal Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 592,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{10,20}$",
                  "maxLen": 20,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=592"
            }
          ],
          "providers": []
        },
        {
          "name": "Paisa Dukan-Borrower EMI",
          "billers": [
            {
              "op": 302,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[l,L][n,N]\\d{6}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=302"
            }
          ],
          "providers": []
        },
        {
          "name": "Pooja Finelease",
          "billers": [
            {
              "op": 496,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([A-Z]{2}\\d{5}|[A-Z]{3}\\d{4}|P\\d{6}|NRB\\dPFJ\\d{6})$",
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=496"
            }
          ],
          "providers": []
        },
        {
          "name": "Rander Peoples Co Operative Bank Ltd",
          "billers": [
            {
              "op": 545,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "mob",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=545"
            }
          ],
          "providers": []
        },
        {
          "name": "RMK Fincorp Pvt Ltd",
          "billers": [
            {
              "op": 579,
              "fields": [
                {
                  "id": "cn",
                  "name": "Agreement Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 35,
                  "minLen": 3,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth",
                  "type": "DATE",
                  "regex": "dd-MM-yyyy",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=579"
            }
          ],
          "providers": []
        },
        {
          "name": "RupeeRedee",
          "billers": [
            {
              "op": 398,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1|2]{1}[0-9]{8}$",
                  "maxLen": 9,
                  "icon": "V"
                },
                {
                  "id": "mob",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=398"
            }
          ],
          "providers": []
        },
        {
          "name": "Sarvjan India Fintech Private Limited",
          "billers": [
            {
              "op": 562,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=562"
            }
          ],
          "providers": []
        },
        {
          "name": "Shriram Housing Finance Limited",
          "billers": [
            {
              "op": 392,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 7,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=392"
            }
          ],
          "providers": []
        },
        {
          "name": "Shriram Finance Ltd.",
          "billers": [
            {
              "op": 375,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{10,20}$",
                  "maxLen": 20,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=375"
            }
          ],
          "providers": []
        },
        {
          "name": "Snapmint",
          "billers": [
            {
              "op": 303,
              "fields": [
                {
                  "id": "cn",
                  "name": "Registered Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=303"
            }
          ],
          "providers": []
        },
        {
          "name": "Samasta Microfinance Limited",
          "billers": [
            {
              "op": 521,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{10,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=521"
            }
          ],
          "providers": []
        },
        {
          "name": "SMEcorner",
          "billers": [
            {
              "op": 516,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number/App ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-z]{4,20}$",
                  "minLen": 4,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=516"
            }
          ],
          "providers": []
        },
        {
          "name": "Smile Microfinance Limited",
          "billers": [
            {
              "op": 584,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{8,20}$",
                  "minLen": 8,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=584"
            }
          ],
          "providers": []
        },
        {
          "name": "StashFin",
          "billers": [
            {
              "op": 495,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{8,10}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=495"
            }
          ],
          "providers": []
        },
        {
          "name": "Svatantra Microfin Private Limited",
          "billers": [
            {
              "op": 441,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{2,8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=441"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Capital Financial Services Limited",
          "billers": [
            {
              "op": 304,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{7,21}$",
                  "maxLen": 21,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=304"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Capital Housing Finance Limited",
          "billers": [
            {
              "op": 515,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{7,21}$",
                  "maxLen": 21,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=515"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata Motors Finance Limited",
          "billers": [
            {
              "op": 587,
              "fields": [
                {
                  "id": "cn",
                  "name": "RC Number/Contract Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{1,30}$",
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=587"
            }
          ],
          "providers": []
        },
        {
          "name": "Thazhayil Nidhi Ltd",
          "billers": [
            {
              "op": 532,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 22,
                  "minLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=532"
            }
          ],
          "providers": []
        },
        {
          "name": "Toyota Financial Services",
          "billers": [
            {
              "op": 384,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z]{4}[0-9]{7}$",
                  "maxLen": 11,
                  "minLen": 11,
                  "icon": "V"
                },
                {
                  "icon": "J",
                  "id": "LoanPaymentMode",
                  "maxLen": 11,
                  "minLen": 5,
                  "isnumeric": false,
                  "name": "Loan Payment Mode",
                  "regex": "^(EMI Payment)$|^(Other)$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=384"
            }
          ],
          "providers": []
        },
        {
          "name": "TVS Credit",
          "billers": [
            {
              "op": 479,
              "fields": [
                {
                  "id": "cn",
                  "name": "Agreement Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "minLen": 1,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=479"
            }
          ],
          "providers": []
        },
        {
          "name": "Ujjivan Small Finance Bank",
          "billers": [
            {
              "op": 473,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^\\d{15}(\\d|(T0){1,2}|T1)?$",
                  "maxLen": 20,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=473"
            }
          ],
          "providers": []
        },
        {
          "name": "Varthana",
          "billers": [
            {
              "op": 322,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "((^[A-Z]{3})+(-)+([A-Z]{3})+(-)+([0-9])+(EL)$)|((^[A-Z]{3})+([0-9])+(EL)$)|((^[A-Z]{3})+([0-9])+([A-Z]{1})$)|((^[A-Z]{1})+([0-9]{2})+([A-Z]{3})+(-)+([A-Z]{3})+(-)+([0-9])+$)",
                  "maxLen": 20,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=322"
            }
          ],
          "providers": []
        },
        {
          "name": "Vastu Housing Finance Corporation Limited",
          "billers": [
            {
              "op": 362,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{5,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=362"
            }
          ],
          "providers": []
        },
        {
          "name": "Vistaar Financial services Private Limited",
          "billers": [
            {
              "op": 500,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=500"
            }
          ],
          "providers": []
        },
        {
          "name": "X10 Financial Services Limited",
          "billers": [
            {
              "op": 533,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 10,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=533"
            }
          ],
          "providers": []
        },
        {
          "name": "Yogakshemam Loans Ltd",
          "billers": [
            {
              "op": 542,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=542"
            }
          ],
          "providers": []
        },
        {
          "name": "Ziploan",
          "billers": [
            {
              "op": 574,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{2,20}$",
                  "maxLen": 20,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=574"
            }
          ],
          "providers": []
        },
        {
          "name": "Capri Global Capital Limited (MSME Loan)",
          "billers": [
            {
              "op": 1492,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{14,25}$",
                  "maxLen": 25,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1492"
            }
          ],
          "providers": []
        },
        {
          "name": "UCO Bank Loan",
          "billers": [
            {
              "op": 1494,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{14}$",
                  "maxLen": 14,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1494"
            }
          ],
          "providers": []
        },
        {
          "name": "KIFS Housing Finance Ltd",
          "billers": [
            {
              "op": 945,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{4,10}$",
                  "maxLen": 10,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=945"
            }
          ],
          "providers": []
        },
        {
          "name": "Arthan Finance Pvt Ltd",
          "billers": [
            {
              "op": 1503,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,12}$",
                  "maxLen": 12,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1503"
            }
          ],
          "providers": []
        },
        {
          "name": "Samunnati Financial Intermediation and Services Private limited",
          "billers": [
            {
              "op": 1504,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{12,12}$",
                  "maxLen": 12,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1504"
            }
          ],
          "providers": []
        },
        {
          "name": "SM Square Credit Services Private Limited",
          "billers": [
            {
              "op": 1505,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{5,50}-[a-zA-Z0-9]{5,50}$",
                  "maxLen": 50,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1505"
            }
          ],
          "providers": []
        },
        {
          "name": "Subhlakshmi Finance Pvt. Ltd",
          "billers": [
            {
              "op": 1506,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,18}$",
                  "maxLen": 18,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1506"
            }
          ],
          "providers": []
        },
        {
          "name": "Indel Money Limited",
          "billers": [
            {
              "op": 1509,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{15,20}$",
                  "maxLen": 20,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1509"
            }
          ],
          "providers": []
        },
        {
          "name": "Capital India Finance Limited",
          "billers": [
            {
              "op": 1510,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{6,16}$",
                  "maxLen": 16,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1510"
            }
          ],
          "providers": []
        },
        {
          "name": "Vinayaka Capsec Pvt Ltd",
          "billers": [
            {
              "op": 1511,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1511"
            }
          ],
          "providers": []
        },
        {
          "name": "Moneyplus Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 1561,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[36-9][0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1561"
            }
          ],
          "providers": []
        },
        {
          "name": "HMT Finance Pvt Ltd",
          "billers": [
            {
              "op": 1563,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1563"
            }
          ],
          "providers": []
        },
        {
          "name": "SG Royal Capital Pvt Ltd",
          "billers": [
            {
              "op": 1564,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1564"
            }
          ],
          "providers": []
        },
        {
          "name": "SRG Fincap Pvt Ltd",
          "billers": [
            {
              "op": 1565,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1565"
            }
          ],
          "providers": []
        },
        {
          "name": "Three65 Financial Services Pvt Ltd",
          "billers": [
            {
              "op": 1566,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1566"
            }
          ],
          "providers": []
        },
        {
          "name": "Pink City Fincap Pvt Ltd",
          "billers": [
            {
              "op": 1569,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1569"
            }
          ],
          "providers": []
        },
        {
          "name": "Prayas Financial Services Private Limited",
          "billers": [
            {
              "op": 1570,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,8}$",
                  "maxLen": 8,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1570"
            }
          ],
          "providers": []
        },
        {
          "name": "Suneet Finman Private Limited",
          "billers": [
            {
              "op": 1320,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 20,
                  "name": "Loan Number",
                  "regex": "^[A-Za-z0-9]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1320"
            }
          ],
          "providers": []
        },
        {
          "name": "FeeMonk",
          "billers": [
            {
              "op": 1321,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 15,
                  "name": "Loan ID",
                  "regex": "^[0-9A-Za-z]{10,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1321"
            }
          ],
          "providers": []
        },
        {
          "name": "Gobrapota Asharalo Nidhi Limited",
          "billers": [
            {
              "op": 1322,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1322"
            }
          ],
          "providers": []
        },
        {
          "name": "Aryabharat Digital Nighi Ltd",
          "billers": [
            {
              "op": 1323,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1323"
            }
          ],
          "providers": []
        },
        {
          "name": "Del Capital Private Limited",
          "billers": [
            {
              "op": 1324,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 8,
                  "maxLen": 25,
                  "name": "Loan ID",
                  "regex": "^[A-Z0-9-]{8,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1324"
            }
          ],
          "providers": []
        },
        {
          "name": "Girnar Capital (Formerly Khemlani Finance)",
          "billers": [
            {
              "op": 1327,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,25}$",
                  "maxLen": 25,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1327"
            }
          ],
          "providers": []
        },
        {
          "name": "Anscor Capital And Investment Pvt Ltd",
          "billers": [
            {
              "op": 1308,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Subscriber Number",
                  "regex": "^[0-9A-Za-z]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1308"
            }
          ],
          "providers": []
        },
        {
          "name": "Aristo Securities Private Limited",
          "billers": [
            {
              "op": 1309,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Registered Mobile Number",
                  "regex": "^[5-9][0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1309"
            }
          ],
          "providers": []
        },
        {
          "name": "Dhanmax Finance Private Limited",
          "billers": [
            {
              "op": 1310,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Registered Mobile Number",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1310"
            }
          ],
          "providers": []
        },
        {
          "name": "MS Fincap Pvt Ltd",
          "billers": [
            {
              "op": 1311,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 50,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1311"
            }
          ],
          "providers": []
        },
        {
          "name": "Singularity Creditworld Private Limited",
          "billers": [
            {
              "op": 1303,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 13,
                  "maxLen": 13,
                  "name": "Application ID",
                  "regex": "^[A-Z]{4}[0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1303"
            }
          ],
          "providers": []
        },
        {
          "name": "Supra Pacific Financial Services Ltd",
          "billers": [
            {
              "op": 1238,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 14,
                  "maxLen": 14,
                  "name": "Loan Account Number",
                  "regex": "^1\\d{13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1238"
            }
          ],
          "providers": []
        },
        {
          "name": "Riyanjali Nidhi Limited",
          "billers": [
            {
              "op": 1239,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Loan Account No",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1239"
            }
          ],
          "providers": []
        },
        {
          "name": "Aham Housing Finance Private Limited",
          "billers": [
            {
              "op": 1243,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 15,
                  "maxLen": 24,
                  "name": "Loan Account No",
                  "regex": "^([A-Z]{0,4})\\/([A-Z]{0,4})\\/([A-Z]{0,4})\\/(\\d{9})$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1243"
            }
          ],
          "providers": []
        },
        {
          "name": "Bazaari Finance",
          "billers": [
            {
              "op": 1250,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "Loan Account Number",
                  "minLen": 1,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1250"
            }
          ],
          "providers": []
        },
        {
          "name": "Megha Holdings Pvt Ltd",
          "billers": [
            {
              "op": 1251,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "Loan Account Number",
                  "minLen": 3,
                  "maxLen": 8,
                  "regex": "^[0-9]{3,8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1251"
            }
          ],
          "providers": []
        },
        {
          "name": "Secureind Nidhi",
          "billers": [
            {
              "op": 1252,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "Loan Account Number",
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1252"
            }
          ],
          "providers": []
        },
        {
          "name": "Boundparivar Loan",
          "billers": [
            {
              "op": 1256,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1256"
            }
          ],
          "providers": []
        },
        {
          "name": "HMKA Nidhi Ltd",
          "billers": [
            {
              "op": 1257,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Loan Number",
                  "regex": "^[0-9]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1257"
            }
          ],
          "providers": []
        },
        {
          "name": "Infinity Fincorp Solutions Pvt Ltd",
          "billers": [
            {
              "op": 1265,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 14,
                  "maxLen": 15,
                  "name": "Loan Account Number",
                  "regex": "^[A-Z]{7}\\d{7,8}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1265"
            }
          ],
          "providers": []
        },
        {
          "name": "Unigold Finance",
          "billers": [
            {
              "op": 1271,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 15,
                  "name": "Loan Account Number",
                  "regex": "^[A-Za-z0-9]{4,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1271"
            }
          ],
          "providers": []
        },
        {
          "name": "CSL Finance",
          "billers": [
            {
              "op": 1272,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 40,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{5,40}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1272"
            }
          ],
          "providers": []
        },
        {
          "name": "Emerald Finance",
          "billers": [
            {
              "op": 1282,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Phone Number",
                  "regex": "^[6-9][0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1282"
            }
          ],
          "providers": []
        },
        {
          "name": "Jeevan Dhara",
          "billers": [
            {
              "op": 1283,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Account Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1283"
            }
          ],
          "providers": []
        },
        {
          "name": "Mere Apne Micro Finance",
          "billers": [
            {
              "op": 1284,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Phone Number",
                  "regex": "^[6-9][0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1284"
            }
          ],
          "providers": []
        },
        {
          "name": "Finnable",
          "billers": [
            {
              "op": 1286,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 20,
                  "name": "Consumer Id",
                  "regex": "^[0-9A-Za-z-]{10,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1286"
            }
          ],
          "providers": []
        },
        {
          "name": "IFFCO Kisan Finance Limited",
          "billers": [
            {
              "op": 1287,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 12,
                  "maxLen": 22,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{12,22}$",
                  "type": "INPUT"
                },
                {
                  "id": "paymentType",
                  "name": "Payment Type",
                  "type": "LIST",
                  "fieldValues": [
                    "EMI Amount Due",
                    "Overall Overdue",
                    "Foreclosure",
                    "IMD Fees",
                    "Pay Asset Purchase Amount"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1287"
            }
          ],
          "providers": []
        },
        {
          "name": "Mere Apne Nidhi",
          "billers": [
            {
              "op": 1288,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Phone Number",
                  "regex": "^[6-9][0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1288"
            }
          ],
          "providers": []
        },
        {
          "name": "Chaitanya Godavari Grameena Bank",
          "billers": [
            {
              "op": 1297,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 15,
                  "maxLen": 15,
                  "name": "Loan Number",
                  "regex": "^[0-9]{15,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1297"
            }
          ],
          "providers": []
        },
        {
          "name": "Bhgala Livelihood Finserv Limited",
          "billers": [
            {
              "op": 1333,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 12,
                  "regex": "^[a-zA-Z0-9]{4,12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1333"
            }
          ],
          "providers": []
        },
        {
          "name": "Vedika Credit Capital Limited",
          "billers": [
            {
              "op": 1334,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "regex": "^[a-zA-Z0-9 -]{1,50}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1334"
            }
          ],
          "providers": []
        },
        {
          "name": "Achiievers Finance Personal Loan",
          "billers": [
            {
              "op": 1346,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 10,
                  "maxLen": 10,
                  "regex": "^[6-9][0-9]{9}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1346"
            }
          ],
          "providers": []
        },
        {
          "name": "HGNL Nidhi Limited",
          "billers": [
            {
              "op": 1347,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID/Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "regex": "^[0-9A-Za-z-_]{3,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1347"
            }
          ],
          "providers": []
        },
        {
          "name": "Javana Nidhi Limited",
          "billers": [
            {
              "op": 1348,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1348"
            }
          ],
          "providers": []
        },
        {
          "name": "Lendingkart Finance Limited",
          "billers": [
            {
              "op": 1349,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 6,
                  "maxLen": 24,
                  "regex": "^[0-9A-Za-z.-]{6,24}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1349"
            }
          ],
          "providers": []
        },
        {
          "name": "Sakthi Finance Ltd",
          "billers": [
            {
              "op": 1350,
              "fields": [
                {
                  "id": "cn",
                  "name": "Registered Mobile Number/Vehicle Number/Customer Contract Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 12,
                  "regex": "^[a-zA-Z0-9/]{10,12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1350"
            }
          ],
          "providers": []
        },
        {
          "name": "Sampournasamuh M F",
          "billers": [
            {
              "op": 1351,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 10,
                  "regex": "^[0-9A-Za-z]{5,10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1351"
            }
          ],
          "providers": []
        },
        {
          "name": "Kosamattam Finance Ltd",
          "billers": [
            {
              "op": 1370,
              "fields": [
                {
                  "id": "cn",
                  "name": "AWB Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 12,
                  "maxLen": 20,
                  "regex": "^[0-9]{12,20}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1370"
            }
          ],
          "providers": []
        },
        {
          "name": "Shri Ram Finance Corporation Pvt Ltd",
          "billers": [
            {
              "op": 1371,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1371"
            }
          ],
          "providers": []
        },
        {
          "name": "VFS Capital Ltd - MSME Loans",
          "billers": [
            {
              "op": 1376,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 19,
                  "regex": "^[0-9]*$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1376"
            }
          ],
          "providers": []
        },
        {
          "name": "Ziniya Nidhi Limited",
          "billers": [
            {
              "op": 1377,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "regex": "^[0-9]{1,13}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1377"
            }
          ],
          "providers": []
        },
        {
          "name": "Adarsh Laxmi Nidhi",
          "billers": [
            {
              "op": 1386,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID/Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "regex": "^[0-9A-Za-z-_]{3,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1386"
            }
          ],
          "providers": []
        },
        {
          "name": "Sanritik Nidhi Limited",
          "billers": [
            {
              "op": 1387,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Member Numbe",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 18,
                  "regex": "^[0-9]{1,18}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1387"
            }
          ],
          "providers": []
        },
        {
          "name": "Rupitol Finance Pvt Ltd",
          "billers": [
            {
              "op": 1375,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 50,
                  "regex": "^[a-zA-Z0-9]{5,50}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1375"
            }
          ],
          "providers": []
        },
        {
          "name": "DMI Housing Finance Pvt. Ltd.",
          "billers": [
            {
              "op": 1575,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Z]{5,22}$",
                  "minLen": 5,
                  "maxLen": 22,
                  "icon": "V"
                },
                {
                  "id": "Fee Type",
                  "name": "Fee Type",
                  "type": "LIST",
                  "fieldValues": [
                    "Processing Fee",
                    "Login Fee",
                    "EMI"
                  ],
                  "minLen": 3,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1575"
            }
          ],
          "providers": []
        },
        {
          "name": "Kamal Finserve Private Limited",
          "billers": [
            {
              "op": 1577,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{5,10}$",
                  "minLen": 5,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1577"
            }
          ],
          "providers": []
        },
        {
          "name": "Mas Rural Housing and Mortgage Finance Ltd",
          "billers": [
            {
              "op": 1580,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[5-9][0-9]{9}$",
                  "minLen": 1,
                  "maxLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1580"
            }
          ],
          "providers": []
        },
        {
          "name": "StuCred",
          "billers": [
            {
              "op": 1585,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{7,9}$",
                  "minLen": 7,
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1585"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot M George Nidhi Ltd",
          "billers": [
            {
              "op": 1588,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9/]{10,15}$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1588"
            }
          ],
          "providers": []
        },
        {
          "name": "Paisalo Digital Limited",
          "billers": [
            {
              "op": 1589,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{10,10}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1589"
            }
          ],
          "providers": []
        },
        {
          "name": "Transwarranty Finance Limited",
          "billers": [
            {
              "op": 1590,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[5-9][0-9]{9}$",
                  "minLen": 4,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1590"
            }
          ],
          "providers": []
        },
        {
          "name": "Amritversha Nidhi Limited",
          "billers": [
            {
              "op": 1593,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 20,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9_-]{4,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1593"
            }
          ],
          "providers": []
        },
        {
          "name": "Richline Finance Ltd",
          "billers": [
            {
              "op": 1594,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 4,
                  "maxLen": 15,
                  "name": "Loan Account Number",
                  "regex": "^[0-9 -]{4,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1594"
            }
          ],
          "providers": []
        },
        {
          "name": "Shivalik Small Finance Bank Ltd",
          "billers": [
            {
              "op": 1595,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 12,
                  "maxLen": 12,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1595"
            }
          ],
          "providers": []
        },
        {
          "name": "Mangal Vehicle Finance Pvt Ltd",
          "billers": [
            {
              "op": 1599,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 50,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1599"
            }
          ],
          "providers": []
        },
        {
          "name": "S V Creditline Limited",
          "billers": [
            {
              "op": 1600,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 6,
                  "maxLen": 18,
                  "name": "Loan Id",
                  "regex": "^[0-9]{6,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1600"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "insurance",
      "name": "Insurance Premium",
      "providerRoot": [
        {
          "name": "Aditya Birla Health Insurance Co Limited",
          "billers": [
            {
              "op": 537,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 10,
                  "maxLen": 20,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd-MM-yyyy",
                  "icon": "J"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=537"
            }
          ],
          "providers": []
        },
        {
          "name": "Zuno General Insurance",
          "billers": [
            {
              "op": 1151,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{9,17}$",
                  "minLen": 9,
                  "maxLen": 17,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth (YYYY-MM-DD)",
                  "type": "INPUT",
                  "regex": "^[0-9-]{10,10}$",
                  "icon": "J"
                },
                {
                  "id": "policytype",
                  "name": "Policy Type",
                  "type": "LIST",
                  "icon": "Ã†â€™",
                  "fieldValues": [
                    "Health",
                    "Motor"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1151"
            }
          ],
          "providers": []
        },
        {
          "name": "Future Generali India Insurance Co ltd-General Insurance",
          "billers": [
            {
              "op": 1124,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{5,100}$",
                  "minLen": 5,
                  "maxLen": 100,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1124"
            }
          ],
          "providers": []
        },
        {
          "name": "Shriram General Insurance - Quote Payment",
          "billers": [
            {
              "op": 696,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 70,
                  "minLen": 3,
                  "name": "Product Code",
                  "fieldValues": [
                    "101 PRIVATE CAR",
                    "102 MOTORISED-TWO WHEELERS",
                    "103 GCCV",
                    "104 PCCV",
                    "105 MISCELLANEOUS CLASS D VEHICLES",
                    "106 LONG TERM PRIVATE CAR",
                    "107 COMPULSORY PERSONAL ACCIDENT(OWNER-DRIVER) UNDER MOTOR INSURANCE",
                    "108 STANDARD FIRE",
                    "109 STANDARD FIRE RAKSHA PRODUCT",
                    "110 Personal Accident (Individual / Family",
                    "111 OVERSEAS TRAVEL INSURANCE",
                    "112 SHRI HOME CARE INSURANCE",
                    "113 SHRI INDIVIDUAL PERSONAL ACCIDENT",
                    "114 SHRI GROUP PERSONAL ACCIDENT - Master &amp; Certificate"
                  ],
                  "type": "LIST"
                },
                {
                  "icon": "V",
                  "id": "quoteID",
                  "isnumeric": true,
                  "maxLen": 18,
                  "minLen": 4,
                  "name": "Quote ID",
                  "regex": "^[0-9]{4,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=696"
            }
          ],
          "providers": []
        },
        {
          "name": "The Oriental Insurance Company Limited",
          "billers": [
            {
              "op": 637,
              "fields": [
                {
                  "hint": "e.g. 1236547891",
                  "icon": "Z",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "name": "Policy Number",
                  "regex": "^[0-9A-Za-z\\/]{12,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=637"
            }
          ],
          "providers": []
        },
        {
          "name": "Manipal Cigna Health Insurance",
          "billers": [
            {
              "op": 678,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 5,
                  "name": "Policy Number",
                  "regex": "^[0-9A-Za-z]{5,25}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "dateofBirth",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Date of Birth",
                  "regex": "dd/MM/yyyy",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=678"
            }
          ],
          "providers": []
        },
        {
          "name": "Edelweiss Tokio Life Insurance Company Limited",
          "billers": [
            {
              "op": 792,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 2,
                  "name": "Policy Number",
                  "regex": "^[0-9A-Za-z]{1,20}$",
                  "type": "INPUT"
                },
                {
                  "id": "dateofBirth",
                  "name": "DOB(DD-Mon-YYYY)",
                  "type": "INPUT",
                  "regex": "^(([1-9])|([0][1-9])|([1-2][0-9])|([3][0-1]))-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-[0-9]{4}$",
                  "maxLen": 11,
                  "minLen": 11,
                  "isAllCaps": true,
                  "icon": "J",
                  "hint": "e.g. 01-Feb-1980"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=792"
            }
          ],
          "providers": []
        },
        {
          "name": "Star Health And Allied Insurance Company",
          "billers": [
            {
              "op": 693,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 10,
                  "name": "Policy Number",
                  "regex": "^(?=(?:[a-zA-Z0-9]+\\/)?[a-zA-Z0-9\\/]+$).{10,25}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "dateofBirth",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Date of Birth (DD/MM/YYYY)",
                  "regex": "^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=693"
            }
          ],
          "providers": []
        },
        {
          "name": "Aditya Birla Sun Life Insurance",
          "billers": [
            {
              "op": 47,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7,9}$",
                  "minLen": 7,
                  "maxLen": 9,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=47"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI Lombard General Insurance Company Ltd.",
          "billers": [
            {
              "op": 730,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(4140i\\/|4128i\\/)([a-zA-Z0-9\\/-]{16,28})",
                  "minLen": 25,
                  "maxLen": 25,
                  "icon": "V™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=730"
            }
          ],
          "providers": []
        },
        {
          "name": "Life Insurance Corporation of India",
          "billers": [
            {
              "op": 1160,
              "fields": [
                {
                  "hint": "e.g. 00667935",
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 16,
                  "minLen": 8,
                  "name": "Policy Number",
                  "regex": "^[0-9]{7,10}$",
                  "type": "INPUT"
                },
                {
                  "icon": "z",
                  "id": "emailId",
                  "isnumeric": false,
                  "maxLen": 50,
                  "name": "Email id",
                  "regex": "^[0-9a-zA-Z-\\\\._@]{1,200}",
                  "skipIfConnection": true,
                  "type": "INPUT"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth (DD/MM/YYYY)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\\d{4}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1160"
            }
          ],
          "providers": []
        },
        {
          "name": "Shriram Life Insurance - Quote Payment",
          "billers": [
            {
              "op": 1185,
              "fields": [
                {
                  "hint": "e.g. 00667935",
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 25,
                  "minLen": 5,
                  "name": "Quote Id",
                  "regex": "^[0-9A-Za-z,.-_/]{5,25}",
                  "type": "INPUT"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth(DD-MM-YYYY)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1185"
            }
          ],
          "providers": []
        },
        {
          "name": "Universal Sompo General Insurance Co Limited Motor",
          "billers": [
            {
              "op": 1242,
              "fields": [
                {
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 20,
                  "name": "Policy Name",
                  "regex": "^[0-9A-Za-z\\/]{20,20}$",
                  "type": "INPUT"
                },
                {
                  "id": "productname",
                  "name": "Product Name",
                  "type": "LIST",
                  "icon": "V",
                  "fieldValues": [
                    "Private Car",
                    "Two Wheeler"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1242"
            }
          ],
          "providers": []
        },
        {
          "name": "Aegon Life Insurance",
          "billers": [
            {
              "op": 272,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9 A-Z,a-z]{12,15}$",
                  "maxLen": 15,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=272"
            }
          ],
          "providers": []
        },
        {
          "name": "Aviva Life Insurance",
          "billers": [
            {
              "op": 255,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9 A-Z,a-z]{8,10}$",
                  "maxLen": 10,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyyMMdd",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=255"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Allianz Life Insurance",
          "billers": [
            {
              "op": 159,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "minLen": 5,
                  "maxLen": 25,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢"
                },
                {
                  "id": "Date of Birth (YYYY-MM-DD)",
                  "name": "Date Of Birth (YYYY-MM-DD)",
                  "type": "INPUT",
                  "minLen": 4,
                  "maxLen": 50,
                  "regex": "^((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)$|^(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))$|^(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))$|^(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))$",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=159"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Allianz General Insurance",
          "billers": [
            {
              "op": 323,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number (without hyphen)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\-]{15,25}$",
                  "maxLen": 25,
                  "minLen": 15,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=323"
            }
          ],
          "providers": []
        },
        {
          "name": "Bharti Axa Life Insurance",
          "billers": [
            {
              "op": 111,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{3}-[0-9]{7}$",
                  "minLen": 11,
                  "maxLen": 11
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyyMMdd",
                  "icon": "J",
                  "hint": "e.g. 19800202"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=111"
            }
          ],
          "providers": []
        },
        {
          "name": "Canara HSBC OBC Life Insurance",
          "billers": [
            {
              "op": 186,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth (DDMMYYYY)",
                  "type": "DATE",
                  "regex": "ddMMyyyy",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=186"
            }
          ],
          "providers": []
        },
        {
          "name": "Cholamandalam MS General Insurance",
          "billers": [
            {
              "op": 265,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^([3][3][6][1]|[3][3][6][2]|[3][3][7][9]|[3][3][6][8]|[3][3][7][3]|[3][3][8][0])[0-9]{13}$",
                  "maxLen": 17,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=265"
            }
          ],
          "providers": []
        },
        {
          "name": "United India Insurance Company Limited",
          "billers": [
            {
              "op": 1009,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number/Proposal Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{15,20}",
                  "minLen": 15,
                  "maxLen": 20,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1009"
            }
          ],
          "providers": []
        },
        {
          "name": "HDFC ERGO General Insurance (Motor)",
          "billers": [
            {
              "op": 1074,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{16,20}$",
                  "minLen": 16,
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "VehicleNumber",
                  "name": "Vehicle Number",
                  "type": "INPUT",
                  "regex": "^[0-9A-Z-]{8,13}$",
                  "minLen": 8,
                  "maxLen": 13,
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1074"
            }
          ],
          "providers": []
        },
        {
          "name": "United India Insurance - Agent Collection",
          "billers": [
            {
              "op": 1099,
              "fields": [
                {
                  "id": "cn",
                  "name": "CD CODE",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{2,15}",
                  "minLen": 2,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1099"
            }
          ],
          "providers": []
        },
        {
          "name": "Acko General Insurance Health",
          "billers": [
            {
              "op": 1103,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\/]{10,25}$",
                  "minLen": 10,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1103"
            }
          ],
          "providers": []
        },
        {
          "name": "Pnb Metlife India Insurance Company Ltd",
          "billers": [
            {
              "op": 1119,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 18,
                  "minLen": 2,
                  "name": "Policy Number",
                  "regex": "^[0-9]{2,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1119"
            }
          ],
          "providers": []
        },
        {
          "name": "Acko General Insurance Motor",
          "billers": [
            {
              "op": 1107,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\/]{10,25}$",
                  "minLen": 10,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1107"
            }
          ],
          "providers": []
        },
        {
          "name": "SBI General Motor Insurance",
          "billers": [
            {
              "op": 1113,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\-]{16,19}$",
                  "minLen": 16,
                  "maxLen": 19,
                  "icon": "V"
                },
                {
                  "id": "registrationNumber",
                  "name": "Registration Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9\\-]{5,15}$",
                  "maxLen": 15,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1113"
            }
          ],
          "providers": []
        },
        {
          "name": "Sbi General Health Insurance",
          "billers": [
            {
              "op": 1114,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\-]{16,19}$",
                  "minLen": 16,
                  "maxLen": 19,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date of Birth(DD/MM/YYYY)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\\d{4}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1114"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Finance Ltd - Corporate agent",
          "billers": [
            {
              "op": 1121,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "DOB(DD/MM/YYYY)",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1121"
            }
          ],
          "providers": []
        },
        {
          "name": "Axis Bank Ltd-Digital Loan",
          "billers": [
            {
              "op": 1125,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z0-9]{15,20}$",
                  "minLen": 15,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1125"
            }
          ],
          "providers": []
        },
        {
          "name": "Exide Life Insurance",
          "billers": [
            {
              "op": 248,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "minLen": 8,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "DOB(YYYYMMDD)",
                  "type": "INPUT",
                  "regex": "^[0-9]{8}$",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=248"
            }
          ],
          "providers": []
        },
        {
          "name": "Future Generali India Life Insurance Company Limited",
          "billers": [
            {
              "op": 319,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "Ã†â€"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=319"
            }
          ],
          "providers": []
        },
        {
          "name": "HDFC Life Insurance Co. Ltd.",
          "billers": [
            {
              "op": 285,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "hint": "e.g. 00667935"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "INPUT",
                  "regex": "",
                  "icon": "J",
                  "hint": "e.g. 01021980"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=285"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI Lombard General Insurance (Motor) ",
          "billers": [
            {
              "op": 577,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(3001|3005)\\/(A)?\\/?([0-9]{8}|[0-9]{9})\\/[0-9]{2}\\/[a-zA-Z0-9]{3}$",
                  "maxLen": 30,
                  "icon": "J"
                },
                {
                  "id": "VehicleRegNo",
                  "name": "Vehicle Registration Number",
                  "type": "INPUT",
                  "regex": "^[0-9A-Za-z\\-]{8,13}$",
                  "maxLen": 13,
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=577"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI Prudential Life Insurance Renewal",
          "billers": [
            {
              "op": 37,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{8,16}$",
                  "minLen": 8,
                  "maxLen": 16,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "hint": "e.g. 00667935"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd-MMM-yyyy",
                  "isAllCaps": true,
                  "icon": "J",
                  "hint": "e.g. 01-FEB-1980"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=37"
            }
          ],
          "providers": []
        },
        {
          "name": "Iffco Tokio General Insurance Company Limited",
          "billers": [
            {
              "op": 590,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy No/Challan No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{8,10}$",
                  "minLen": 8,
                  "maxLen": 10
                },
                {
                  "id": "dateofBirth",
                  "name": "Registration Number/Challan Date",
                  "type": "INPUT",
                  "regex": "^[a-zA-Z0-9]{8,10}$",
                  "minLen": 8,
                  "maxLen": 10,
                  "isAllCaps": true,
                  "icon": "J",
                  "hint": "e.g. 01021980"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=590"
            }
          ],
          "providers": []
        },
        {
          "name": "Ageas Federal Life Insurance",
          "billers": [
            {
              "op": 201,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=201"
            }
          ],
          "providers": []
        },
        {
          "name": "IndiaFirst Life Insurance",
          "billers": [
            {
              "op": 238,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{8,16}$",
                  "maxLen": 16,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=238"
            }
          ],
          "providers": []
        },
        {
          "name": "Kotak Life Insurance Company Limited",
          "billers": [
            {
              "op": 492,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{8,12}$",
                  "maxLen": 12,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=492"
            }
          ],
          "providers": []
        },
        {
          "name": "Magma HDI - Health Insurance",
          "billers": [
            {
              "op": 465,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[P][0-9]{10}/[0-9]{4}/[0-9]{6}$",
                  "maxLen": 23,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "emailId",
                  "name": "Email id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(.+)@(.+)$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=465"
            }
          ],
          "providers": []
        },
        {
          "name": "Magma HDI - Non Motor Insurance",
          "billers": [
            {
              "op": 466,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[P][0-9]{10}/[0-9]{4}/[0-9]{6}$",
                  "maxLen": 23,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "emailId",
                  "name": "Email id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(.+)@(.+)$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=466"
            }
          ],
          "providers": []
        },
        {
          "name": "Magma HDI - Motor Insurance",
          "billers": [
            {
              "op": 467,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[P][0-9]{10}/[4][1][0-9]{2}/[0-9]{6}$",
                  "maxLen": 23,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "emailId",
                  "name": "Email id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(.+)@(.+)$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "registrationNumber",
                  "name": "Registration Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{2}-[0-9]{2}-[A-Z]{1,2}-[0-9]{4}",
                  "maxLen": 14,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=467"
            }
          ],
          "providers": []
        },
        {
          "name": "Max Bupa Health Insurance",
          "billers": [
            {
              "op": 417,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{14}$",
                  "maxLen": 14,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=417"
            }
          ],
          "providers": []
        },
        {
          "name": "Max Life Insurance",
          "billers": [
            {
              "op": 239,
              "fields": [
                {
                  "id": "cn",
                  "name": "POLICY NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9}$",
                  "maxLen": 9,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=239"
            }
          ],
          "providers": []
        },
        {
          "name": "Pramerica Life Insurance Limited",
          "billers": [
            {
              "op": 315,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=315"
            }
          ],
          "providers": []
        },
        {
          "name": "Reliance General Insurance Company Limited",
          "billers": [
            {
              "op": 405,
              "fields": [
                {
                  "id": "cn",
                  "name": "Previous Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{16,18}$",
                  "maxLen": 18,
                  "icon": "V"
                },
                {
                  "id": "emailId",
                  "name": "Email id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^(.+)@(.+)$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J"
                },
                {
                  "id": "registrationNumber",
                  "name": "Registration Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{2}\\-[0-9]{2}\\-[A-Z]{2}\\-[0-9]{4}$",
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=405"
            }
          ],
          "providers": []
        },
        {
          "name": "Reliance General Insurance Company Limited (Health)",
          "billers": [
            {
              "op": 632,
              "fields": [
                {
                  "id": "cn",
                  "name": "Previous Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{16,18}$",
                  "maxLen": 18,
                  "icon": "V"
                },
                {
                  "id": "dateofBirth",
                  "name": "Previous Policy End Date",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J"
                },
                {
                  "id": "emailId",
                  "name": "Email id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9A-Za-z]{10,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=632"
            }
          ],
          "providers": []
        },
        {
          "name": "Reliance Nippon Life Insurance",
          "billers": [
            {
              "op": 328,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=328"
            }
          ],
          "providers": []
        },
        {
          "name": "Go Digit Insurance",
          "billers": [
            {
              "op": 633,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=633"
            }
          ],
          "providers": []
        },
        {
          "name": "Care Health Insurance",
          "billers": [
            {
              "op": 306,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{8}$",
                  "maxLen": 8,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "hint": "e.g. 00667935"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy-MM-dd",
                  "icon": "J",
                  "hint": "e.g. 01021980"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=306"
            }
          ],
          "providers": []
        },
        {
          "name": "Royal Sundaram General Insurance Co. Limited",
          "billers": [
            {
              "op": 468,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{1,}[A-Z0-9]{2,}$",
                  "maxLen": 25,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "hint": "e.g. 00667935"
                },
                {
                  "id": "dateofBirth",
                  "name": "Expiry Date",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J",
                  "hint": "e.g. 15/01/1988"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=468"
            }
          ],
          "providers": []
        },
        {
          "name": "TATA AIG General Insurance co. Ltd Retail",
          "billers": [
            {
              "op": 985,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{6,15}$",
                  "minLen": 6,
                  "maxLen": 15
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=985"
            }
          ],
          "providers": []
        },
        {
          "name": "SBI Life Insurance",
          "billers": [
            {
              "op": 134,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{11}$",
                  "maxLen": 20,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "hint": "e.g. 1P006459903"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "yyyy/MM/dd",
                  "icon": "J",
                  "hint": "e.g. 15/01/1988"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=134"
            }
          ],
          "providers": []
        },
        {
          "name": "SBI General Insurance",
          "billers": [
            {
              "op": 275,
              "fields": [
                {
                  "id": "link",
                  "type": "LINK_PARAMS"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=275"
            }
          ],
          "providers": []
        },
        {
          "name": "Shriram General Insurance",
          "billers": [
            {
              "op": 418,
              "fields": [
                {
                  "icon": "Ã†â€™",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 25,
                  "name": "Policy Number",
                  "regex": "^[0-9]{6}/[0-9]{2}/[0-9]{2}/[0-9]{6}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "emailId",
                  "isnumeric": false,
                  "name": "Email id",
                  "regex": "^(.+@(.+$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "mobileNumber",
                  "isnumeric": true,
                  "maxLen": 10,
                  "name": "Mobile Number",
                  "regex": "^[0-9]{10,10}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "vehicleregistrationnumber",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 4,
                  "name": "Vehicle Registration Number",
                  "regex": "^[A-Z]{2}[0-9]{1,2}(?:[A-Z])?(?:[A-Z]*)?[0-9]{4}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=418"
            }
          ],
          "providers": []
        },
        {
          "name": "Shriram Life Insurance Co Ltd",
          "billers": [
            {
              "op": 394,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{14}$",
                  "maxLen": 14,
                  "minLen": 14,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth (DDMMYYYY)",
                  "type": "INPUT",
                  "regex": "^[0-9]{8}$",
                  "icon": "J",
                  "hint": "e.g. 15011988"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=394"
            }
          ],
          "providers": []
        },
        {
          "name": "Star Union Dai Ichi Life Insurance",
          "billers": [
            {
              "op": 363,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "Ã†â€™"
                },
                {
                  "id": "dateofBirth",
                  "name": "Date Of Birth",
                  "type": "DATE",
                  "regex": "dd/MM/yyyy",
                  "icon": "J",
                  "hint": "e.g. 15/01/1988"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "regex": "^[5-9][0-9]{9}$",
                  "icon": "J"
                },
                {
                  "id": "emailId",
                  "name": "Email Id",
                  "type": "INPUT",
                  "regex": "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=363"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata AIA Life Insurance",
          "billers": [
            {
              "op": 42,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,11}$",
                  "maxLen": 10,
                  "icon": "Ãƒâ€ Ã¢â‚¬â„¢",
                  "hint": "e.g. U011458886"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=42"
            }
          ],
          "providers": []
        },
        {
          "name": "Agriculture Insurance Company of India Ltd",
          "billers": [
            {
              "op": 1495,
              "fields": [
                {
                  "id": "cn",
                  "name": "Proposal Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9A-Za-z/]{15,22}$",
                  "maxLen": 22,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1495"
            }
          ],
          "providers": []
        },
        {
          "name": "Kotak Mahindra General Insurance Company Limited",
          "billers": [
            {
              "op": 1496,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,100}$",
                  "maxLen": 100,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "icon": "V",
                  "id": "productGroup",
                  "maxLen": 100,
                  "minLen": 3,
                  "name": "Product Group",
                  "type": "LIST",
                  "fieldValues": [
                    "Two Wheeler",
                    "Car"
                  ]
                },
                {
                  "id": "Registration Number",
                  "name": "Registration Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "regex": "^[A-Za-z0-9]{1,20}$",
                  "maxLen": 10,
                  "skipIfConnection": true,
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1496"
            }
          ],
          "providers": []
        },
        {
          "name": "Raheja QBE General Insurance Company Limited",
          "billers": [
            {
              "op": 1374,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 8,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9]{8,20}$",
                  "icon": "V"
                },
                {
                  "icon": "V",
                  "id": "dateofBirth",
                  "isnumeric": false,
                  "minLen": 11,
                  "maxLen": 11,
                  "name": "Expiry Date (DD-MMM-YYYY)",
                  "regex": "^(([0-2][0-9])|(3[0-1]))-(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)-([1-2][0-9][0-9][0-9])$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1374"
            }
          ],
          "providers": []
        },
        {
          "name": "ICICI Prudential Life Insurance First Premium",
          "billers": [
            {
              "op": 1576,
              "fields": [
                {
                  "id": "cn",
                  "name": "Application Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{10,15}$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "Date of Birth",
                  "name": "Date of Birth",
                  "type": "DATE",
                  "isnumeric": false,
                  "regex": "dd-MM-yyyy",
                  "minLen": 11,
                  "maxLen": 11,
                  "icon": "J"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1576"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "internationalrecharge",
      "name": "International Recharge",
      "providerRoot": [
        {
          "name": "DTone",
          "billers": [
            {
              "op": 259,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[+0-9]{9,20}$",
                  "maxLen": 20,
                  "icon": "V",
                  "hint": "Mobile Number With Country Code"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=259"
            },
            {
              "op": 259,
              "fields": [
                {
                  "id": "link",
                  "type": "LINK",
                  "prefixTagId": "cn"
                },
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[+0-9]{9,20}$",
                  "maxLen": 20,
                  "icon": "V",
                  "rightBtnEnable": "Confirm",
                  "hint": "Mobile Number"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=259"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "fasTag",
      "name": "FASTag Topup",
      "providerRoot": [
        {
          "name": "FASTag",
          "billers": [
            {
              "op": 294,
              "fields": [
                {
                  "id": "link",
                  "type": "LINK_PARAMS"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=294"
            }
          ],
          "providers": [
            {
              "operator_name": "Indian Highways Management Company Ltd-Indusind FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "11",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770409919"
            },
            {
              "operator_name": "Indusind Bank",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "12",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770409919"
            },
            {
              "operator_name": "Bank Of Baroda",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "13",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1723129018824"
            },
            {
              "operator_name": "ICICI Bank",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "14",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1546866608044"
            },
            {
              "operator_name": "HDFC Bank",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "15",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1723129058672"
            },
            {
              "operator_name": "Bajaj Finance Limited Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "41",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "additional_params_for_payment_api": "",
              "image": "https://billhub.in/others/cdn/bbps/fastag/?p=1720537151540.png"
            },
            {
              "operator_name": "Airtel Payments Bank NETC FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "30",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666768542616"
            },
            {
              "operator_name": "IDFC FIRST Bank - FasTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "16",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770363173"
            },
            {
              "operator_name": "Axis Bank",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "17",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1718898219636"
            },
            {
              "operator_name": "Kotak Mahindra Bank",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "18",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1723129374143"
            },
            {
              "operator_name": "Equitas FASTag Recharge",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "19",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770106495"
            },
            {
              "operator_name": "Paul Merchants",
              "viewbill": "Not Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "21",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770974393"
            },
            {
              "operator_name": "Jammu and Kashmir Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "22",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770623439"
            },
            {
              "operator_name": "Federal Bank - FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "23",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770174843"
            },
            {
              "operator_name": "IDBI Bank FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "24",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770315378"
            },
            {
              "operator_name": "UCO Bank FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "25",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770908915"
            },
            {
              "operator_name": "Transaction Analyst FASTag",
              "viewbill": "Not Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "26",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770974393"
            },
            {
              "operator_name": "IOB FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "27",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770480488"
            },
            {
              "operator_name": "State Bank of India FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "31",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770796176"
            },
            {
              "operator_name": "Transcorp International Limited",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "28",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770974393"
            },
            {
              "operator_name": "Karnataka Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "29",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770663023"
            },
            {
              "operator_name": "Bank of Maharashtra FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "34",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770036487"
            },
            {
              "operator_name": "South Indian Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "32",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770845804"
            },
            {
              "operator_name": "Saraswat Bank - FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "33",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770974393"
            },
            {
              "operator_name": "Indian Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "35",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666770974393"
            },
            {
              "operator_name": "Livquik Technology India Private Limited",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "36",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1666771026989"
            },
            {
              "operator_name": "Union Bank of India FASTag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "37",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1668167502199"
            },
            {
              "operator_name": "Canara Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "38",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1676439190987"
            },
            {
              "operator_name": "AU Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "39",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1684755094284"
            },
            {
              "operator_name": "Bandhan Bank Fastag",
              "viewbill": "Required",
              "bbps_enabled": "TRUE",
              "regex": "",
              "name": "Vehicle Registration Number",
              "cn": "Vehicle Registration Number",
              "ad1": "40",
              "ad2": "",
              "ad3": "",
              "ad4": "",
              "icon": "https://billhub.in/others/cdn/bbps/fastag/?p=1695214548049"
            }
          ]
        }
      ]
    },
    {
      "categoryId": "landline",
      "name": "Landline",
      "providerRoot": [
        {
          "name": "Airtel Landline",
          "billers": [
            {
              "op": 28,
              "fields": [
                {
                  "id": "cn",
                  "name": "Landline Number (with STD Code)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11}$",
                  "maxLen": 11,
                  "minLen": 11,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=28"
            }
          ],
          "providers": []
        },
        {
          "name": "BSNL Landline - Corporate",
          "billers": [
            {
              "op": 191,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=191"
            }
          ],
          "providers": []
        },
        {
          "name": "MTNL Mumbai Lease Circuit",
          "billers": [
            {
              "op": 841,
              "fields": [
                {
                  "id": "cn",
                  "name": "iLCID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=841"
            }
          ],
          "providers": []
        },
        {
          "name": "BSNL Landline - Individual",
          "billers": [
            {
              "op": 131,
              "fields": [
                {
                  "id": "cn",
                  "name": "Telephone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=131"
            }
          ],
          "providers": []
        },
        {
          "name": "BSNL Broadband - Individual",
          "billers": [
            {
              "op": 1057,
              "fields": [
                {
                  "id": "cn",
                  "name": "Telephone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1057"
            }
          ],
          "providers": []
        },
        {
          "name": "MTNL Delhi",
          "billers": [
            {
              "op": 40,
              "fields": [
                {
                  "id": "cn",
                  "name": "Telephone Number (Without STD Code)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "d"
                },
                {
                  "id": "customerAccountNumber",
                  "name": "Customer Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=40"
            }
          ],
          "providers": []
        },
        {
          "name": "MTNL Mumbai",
          "billers": [
            {
              "op": 133,
              "fields": [
                {
                  "id": "cn",
                  "name": "Telephone Number (Without STD Code)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "d"
                },
                {
                  "id": "accountNumber",
                  "name": "Customer Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=133"
            }
          ],
          "providers": []
        },
        {
          "name": "MTNL Mumbai (Multiple Bills)",
          "billers": [
            {
              "op": 648,
              "fields": [
                {
                  "id": "cn",
                  "name": "Telephone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "d"
                },
                {
                  "id": "accountNumber",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=648"
            }
          ],
          "providers": []
        },
        {
          "name": "Tata TeleServices (CDMA)",
          "billers": [
            {
              "op": 43,
              "fields": [
                {
                  "id": "cn",
                  "name": "Landline Number with STD Code (without 0)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=43"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "broadband",
      "name": "Broadband",
      "providerRoot": [
        {
          "name": "Act Fibernet",
          "billers": [
            {
              "op": 129,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number/User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,50}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=129"
            }
          ],
          "providers": []
        },
        {
          "name": "One Broadband",
          "billers": [
            {
              "op": 706,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:#|\\-%^&amp;*()!\\/$-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=706"
            }
          ],
          "providers": []
        },
        {
          "name": "Aeronet Online Services Private Limited",
          "billers": [
            {
              "op": 979,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[A-Za-z0-9]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=979"
            }
          ],
          "providers": []
        },
        {
          "name": "Orange Infocom Pvt Ltd",
          "billers": [
            {
              "op": 989,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9_.@#]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=989"
            }
          ],
          "providers": []
        },
        {
          "name": "Island Broadband",
          "billers": [
            {
              "op": 991,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Chip Id",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=991"
            }
          ],
          "providers": []
        },
        {
          "name": "Padmesh Broadband Pvt Ltd",
          "billers": [
            {
              "op": 994,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9_.@#]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=994"
            }
          ],
          "providers": []
        },
        {
          "name": "Esto Broadband Private Ltd",
          "billers": [
            {
              "op": 995,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9_.@#]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=995"
            }
          ],
          "providers": []
        },
        {
          "name": "SR NET KAVALI",
          "billers": [
            {
              "op": 1002,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1002"
            }
          ],
          "providers": []
        },
        {
          "name": "Anthariksha Fiber",
          "billers": [
            {
              "op": 1011,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1011"
            }
          ],
          "providers": []
        },
        {
          "name": "ANU Broadband",
          "billers": [
            {
              "op": 1012,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1012"
            }
          ],
          "providers": []
        },
        {
          "name": "Future Connect Broadband",
          "billers": [
            {
              "op": 1015,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9.]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1015"
            }
          ],
          "providers": []
        },
        {
          "name": "GRB infotech",
          "billers": [
            {
              "op": 1016,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1016"
            }
          ],
          "providers": []
        },
        {
          "name": "Netway Infotech Private Limited",
          "billers": [
            {
              "op": 1018,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 48,
                  "name": "User Name/Phone Number",
                  "regex": "^[a-zA-Z0-9@_.-]{3,48}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1018"
            }
          ],
          "providers": []
        },
        {
          "name": "OXYNET",
          "billers": [
            {
              "op": 1019,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Client ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1019"
            }
          ],
          "providers": []
        },
        {
          "name": "Skynet Internet Broadband Pvt Ltd",
          "billers": [
            {
              "op": 1020,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9@_:=#%*+!.$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1020"
            }
          ],
          "providers": []
        },
        {
          "name": "Igen Networks",
          "billers": [
            {
              "op": 1023,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "UserName/PhoneNumber",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1023"
            }
          ],
          "providers": []
        },
        {
          "name": "Gateway Networks",
          "billers": [
            {
              "op": 1024,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1024"
            }
          ],
          "providers": []
        },
        {
          "name": "Seyon Teleinfra",
          "billers": [
            {
              "op": 1028,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1028"
            }
          ],
          "providers": []
        },
        {
          "name": "DVPL BB",
          "billers": [
            {
              "op": 1051,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1051"
            }
          ],
          "providers": []
        },
        {
          "name": "Apex",
          "billers": [
            {
              "op": 1052,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User Name/Phone Number",
                  "regex": "^[a-zA-Z0-9@_:=#%*+!.$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1052"
            }
          ],
          "providers": []
        },
        {
          "name": "Renu Broadband",
          "billers": [
            {
              "op": 1053,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 24,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9_.@#$-]{3,24}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1053"
            }
          ],
          "providers": []
        },
        {
          "name": "Aitspl",
          "billers": [
            {
              "op": 1058,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1058"
            }
          ],
          "providers": []
        },
        {
          "name": "CNC Broadband",
          "billers": [
            {
              "op": 1068,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1068"
            }
          ],
          "providers": []
        },
        {
          "name": "Comcast Broadband Services",
          "billers": [
            {
              "op": 1069,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 46,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9-+@._]{3,46}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1069"
            }
          ],
          "providers": []
        },
        {
          "name": "Extreme Broadband",
          "billers": [
            {
              "op": 1071,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Phone Number",
                  "regex": "^[4-9][0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1071"
            }
          ],
          "providers": []
        },
        {
          "name": "T-Way",
          "billers": [
            {
              "op": 1076,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Phone Number",
                  "regex": "^[4-9][0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1076"
            }
          ],
          "providers": []
        },
        {
          "name": "You Broadband",
          "billers": [
            {
              "op": 1077,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "Username / Account no.",
                  "regex": "^[0-9A-Za-z_]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1077"
            }
          ],
          "providers": []
        },
        {
          "name": "Roarnet Broadband Private Limited",
          "billers": [
            {
              "op": 1079,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 7,
                  "maxLen": 20,
                  "name": "Client Id",
                  "regex": "^[1-9][0-9]{6,19}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1079"
            }
          ],
          "providers": []
        },
        {
          "name": "Rapidnet",
          "billers": [
            {
              "op": 1080,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1080"
            }
          ],
          "providers": []
        },
        {
          "name": "Jabbar Communications",
          "billers": [
            {
              "op": 1081,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1081"
            }
          ],
          "providers": []
        },
        {
          "name": "Softnet Digital",
          "billers": [
            {
              "op": 1059,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 10,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{5,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1059"
            }
          ],
          "providers": []
        },
        {
          "name": "Skyair Internet",
          "billers": [
            {
              "op": 1082,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1082"
            }
          ],
          "providers": []
        },
        {
          "name": "FiberX",
          "billers": [
            {
              "op": 1087,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1087"
            }
          ],
          "providers": []
        },
        {
          "name": "Treelink Broadband",
          "billers": [
            {
              "op": 1088,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1088"
            }
          ],
          "providers": []
        },
        {
          "name": "Logon Broadband",
          "billers": [
            {
              "op": 1092,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 46,
                  "name": "User Name",
                  "regex": "^[a-zA-Z0-9_.@]{3,46}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1092"
            }
          ],
          "providers": []
        },
        {
          "name": "Rida Online",
          "billers": [
            {
              "op": 1093,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1093"
            }
          ],
          "providers": []
        },
        {
          "name": "Nitro Broadband",
          "billers": [
            {
              "op": 1094,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1094"
            }
          ],
          "providers": []
        },
        {
          "name": "Wandoor Multiverse Pvt Ltd",
          "billers": [
            {
              "op": 1098,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 18,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1098"
            }
          ],
          "providers": []
        },
        {
          "name": "Auriga",
          "billers": [
            {
              "op": 1101,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 100,
                  "name": "UserId",
                  "regex": "^[a-zA-Z0-9@_]{3,100}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1101"
            }
          ],
          "providers": []
        },
        {
          "name": "Ss Cablenet",
          "billers": [
            {
              "op": 1105,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1105"
            }
          ],
          "providers": []
        },
        {
          "name": "Eknath",
          "billers": [
            {
              "op": 1106,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1106"
            }
          ],
          "providers": []
        },
        {
          "name": "Ssky Conneect Private Limited",
          "billers": [
            {
              "op": 1117,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1117"
            }
          ],
          "providers": []
        },
        {
          "name": "Stromnet Broadband",
          "billers": [
            {
              "op": 1120,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1120"
            }
          ],
          "providers": []
        },
        {
          "name": "Baroda Broadband",
          "billers": [
            {
              "op": 1123,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "Account number",
                  "regex": "^[0-9A-Za-z_]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1123"
            }
          ],
          "providers": []
        },
        {
          "name": "Megasoft Broadband",
          "billers": [
            {
              "op": 1128,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1128"
            }
          ],
          "providers": []
        },
        {
          "name": "RCOM Networks",
          "billers": [
            {
              "op": 1129,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1129"
            }
          ],
          "providers": []
        },
        {
          "name": "Willaegis",
          "billers": [
            {
              "op": 1130,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Email ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1130"
            }
          ],
          "providers": []
        },
        {
          "name": "Nexen Broadband",
          "billers": [
            {
              "op": 1135,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z.]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1135"
            }
          ],
          "providers": []
        },
        {
          "name": "Bsb Networks",
          "billers": [
            {
              "op": 1136,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1136"
            }
          ],
          "providers": []
        },
        {
          "name": "Crystalclear Network",
          "billers": [
            {
              "op": 1137,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1137"
            }
          ],
          "providers": []
        },
        {
          "name": "INRI Communications Pvt Ltd",
          "billers": [
            {
              "op": 1138,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1138"
            }
          ],
          "providers": []
        },
        {
          "name": "Dreamnet Gigafiber",
          "billers": [
            {
              "op": 1139,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z.]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1139"
            }
          ],
          "providers": []
        },
        {
          "name": "Easy Net",
          "billers": [
            {
              "op": 1143,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1143"
            }
          ],
          "providers": []
        },
        {
          "name": "More Wifi",
          "billers": [
            {
              "op": 1144,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1144"
            }
          ],
          "providers": []
        },
        {
          "name": "Shiv Shakti Computers",
          "billers": [
            {
              "op": 1145,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1145"
            }
          ],
          "providers": []
        },
        {
          "name": "Skyworld Infotech",
          "billers": [
            {
              "op": 1146,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1146"
            }
          ],
          "providers": []
        },
        {
          "name": "Starnetworks",
          "billers": [
            {
              "op": 1147,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1147"
            }
          ],
          "providers": []
        },
        {
          "name": "Suraj Networks",
          "billers": [
            {
              "op": 1148,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1148"
            }
          ],
          "providers": []
        },
        {
          "name": "Air Internet",
          "billers": [
            {
              "op": 1156,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1156"
            }
          ],
          "providers": []
        },
        {
          "name": "Quadplay",
          "billers": [
            {
              "op": 1157,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1157"
            }
          ],
          "providers": []
        },
        {
          "name": "Hasten",
          "billers": [
            {
              "op": 1158,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1158"
            }
          ],
          "providers": []
        },
        {
          "name": "Winux Communications",
          "billers": [
            {
              "op": 1159,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1159"
            }
          ],
          "providers": []
        },
        {
          "name": "RailWire Broadband",
          "billers": [
            {
              "op": 1164,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 45,
                  "name": "Mobile No/User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{3,45}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1164"
            }
          ],
          "providers": []
        },
        {
          "name": "Zapbytes Fibernet",
          "billers": [
            {
              "op": 1165,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z#_.]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1165"
            }
          ],
          "providers": []
        },
        {
          "name": "Samiksha Network Solutions",
          "billers": [
            {
              "op": 1166,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1166"
            }
          ],
          "providers": []
        },
        {
          "name": "DSCN",
          "billers": [
            {
              "op": 1167,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1167"
            }
          ],
          "providers": []
        },
        {
          "name": "Spider Broadband",
          "billers": [
            {
              "op": 1169,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z@_:=#%*+!.$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1169"
            }
          ],
          "providers": []
        },
        {
          "name": "Singh Televentures",
          "billers": [
            {
              "op": 1170,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1170"
            }
          ],
          "providers": []
        },
        {
          "name": "Maya Electronice And Internet Service",
          "billers": [
            {
              "op": 1175,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9]{2,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1175"
            }
          ],
          "providers": []
        },
        {
          "name": "Chakdaha Cable and Broadband",
          "billers": [
            {
              "op": 1176,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1176"
            }
          ],
          "providers": []
        },
        {
          "name": "Air Services",
          "billers": [
            {
              "op": 1177,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1177"
            }
          ],
          "providers": []
        },
        {
          "name": "Shark Broadband",
          "billers": [
            {
              "op": 1178,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_:=#%*+!.$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1178"
            }
          ],
          "providers": []
        },
        {
          "name": "NPR Broadband Services",
          "billers": [
            {
              "op": 1181,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1181"
            }
          ],
          "providers": []
        },
        {
          "name": "Speed Hex Tele Communications Pvt Ltd",
          "billers": [
            {
              "op": 1182,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1182"
            }
          ],
          "providers": []
        },
        {
          "name": "Galaxynet",
          "billers": [
            {
              "op": 1193,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1193"
            }
          ],
          "providers": []
        },
        {
          "name": "Gangotri Telenet Pvt Ltd",
          "billers": [
            {
              "op": 1194,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1194"
            }
          ],
          "providers": []
        },
        {
          "name": "Siliguri Internet And Cable TV Pvt Ltd",
          "billers": [
            {
              "op": 1195,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Unique Subscriber Number",
                  "regex": "^[a-zA-Z0-9,()/._''-@]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1195"
            }
          ],
          "providers": []
        },
        {
          "name": "Airgenie Communications",
          "billers": [
            {
              "op": 1201,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "minLen": 3,
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1201"
            }
          ],
          "providers": []
        },
        {
          "name": "Dainik Savera Net",
          "billers": [
            {
              "op": 1202,
              "fields": [
                {
                  "id": "cn",
                  "name": "User ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z_@]{4,50}$",
                  "minLen": 4,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1202"
            }
          ],
          "providers": []
        },
        {
          "name": "Zyetek Stream",
          "billers": [
            {
              "op": 1203,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "minLen": 3,
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1203"
            }
          ],
          "providers": []
        },
        {
          "name": "SuperNetplus",
          "billers": [
            {
              "op": 1204,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@.-_]{2,48}$",
                  "minLen": 2,
                  "maxLen": 48,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1204"
            }
          ],
          "providers": []
        },
        {
          "name": "Ishan Netsol Private Ltd",
          "billers": [
            {
              "op": 1210,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 6,
                  "maxLen": 22,
                  "name": "Unique ID",
                  "regex": "^[0-9A-Za-z/-]{6,22}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1210"
            }
          ],
          "providers": []
        },
        {
          "name": "MB Net",
          "billers": [
            {
              "op": 1211,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z_@.*-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1211"
            }
          ],
          "providers": []
        },
        {
          "name": "Kingnet",
          "billers": [
            {
              "op": 1212,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1212"
            }
          ],
          "providers": []
        },
        {
          "name": "Nikki Internet Services",
          "billers": [
            {
              "op": 1213,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1213"
            }
          ],
          "providers": []
        },
        {
          "name": "Zita Telecom",
          "billers": [
            {
              "op": 1214,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1214"
            }
          ],
          "providers": []
        },
        {
          "name": "BCTN Broadband",
          "billers": [
            {
              "op": 1221,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1221"
            }
          ],
          "providers": []
        },
        {
          "name": "Nageshwar Broadband",
          "billers": [
            {
              "op": 1222,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1222"
            }
          ],
          "providers": []
        },
        {
          "name": "Niss Fibernet",
          "billers": [
            {
              "op": 1223,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1223"
            }
          ],
          "providers": []
        },
        {
          "name": "Win Communications",
          "billers": [
            {
              "op": 1224,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1224"
            }
          ],
          "providers": []
        },
        {
          "name": "Multicraft Digital Technologies Private Limited",
          "billers": [
            {
              "op": 1229,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 25,
                  "name": "User ID",
                  "regex": "^[A-Za-z0-9_.@-]{4,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1229"
            }
          ],
          "providers": []
        },
        {
          "name": "My Internet Zone",
          "billers": [
            {
              "op": 1235,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_]{1,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1235"
            }
          ],
          "providers": []
        },
        {
          "name": "DJio Net",
          "billers": [
            {
              "op": 1240,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 18,
                  "name": "Customer Number",
                  "regex": "^[a-zA-Z0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1240"
            }
          ],
          "providers": []
        },
        {
          "name": "Frontline Internet Services",
          "billers": [
            {
              "op": 1236,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z.,_]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1236"
            }
          ],
          "providers": []
        },
        {
          "name": "Aparna Star TV Network",
          "billers": [
            {
              "op": 1246,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "User Name/Phone Number",
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1246"
            }
          ],
          "providers": []
        },
        {
          "name": "Netstra",
          "billers": [
            {
              "op": 1253,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1253"
            }
          ],
          "providers": []
        },
        {
          "name": "Bhima Riddhi Broadband Private Limited",
          "billers": [
            {
              "op": 1259,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 25,
                  "name": "User ID",
                  "regex": "^[ A-Za-z0-9@_.]{3,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1259"
            }
          ],
          "providers": []
        },
        {
          "name": "Broadband 24X7",
          "billers": [
            {
              "op": 1260,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1260"
            }
          ],
          "providers": []
        },
        {
          "name": "RVR Digital",
          "billers": [
            {
              "op": 1261,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z@_.:-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1261"
            }
          ],
          "providers": []
        },
        {
          "name": "Unique Broadband Service Private Limited",
          "billers": [
            {
              "op": 1262,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1262"
            }
          ],
          "providers": []
        },
        {
          "name": "ST Broadband biller",
          "billers": [
            {
              "op": 1266,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]{1,30}$",
                  "minLen": 1,
                  "maxLen": 30,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1266"
            }
          ],
          "providers": []
        },
        {
          "name": "World Phone Internet Services Pvt Ltd",
          "billers": [
            {
              "op": 1267,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[ A-Za-z0-9@_.]{3,25}$",
                  "minLen": 3,
                  "maxLen": 25,
                  "icon": "Ã†â€™"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1267"
            }
          ],
          "providers": []
        },
        {
          "name": "Samaira Infotech Pvt. Ltd",
          "billers": [
            {
              "op": 1273,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_]{1,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1273"
            }
          ],
          "providers": []
        },
        {
          "name": "B-Fi Networks",
          "billers": [
            {
              "op": 1274,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1274"
            }
          ],
          "providers": []
        },
        {
          "name": "One touch express",
          "billers": [
            {
              "op": 1276,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer Number",
                  "regex": "^[0-9A-Za-z@_.:-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1276"
            }
          ],
          "providers": []
        },
        {
          "name": "Esto Media Private Limited",
          "billers": [
            {
              "op": 1277,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer Number",
                  "regex": "^[0-9A-Za-z@_:=#%*+!.$\\-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1277"
            }
          ],
          "providers": []
        },
        {
          "name": "Hightech Broadband Services Pvt Ltd",
          "billers": [
            {
              "op": 1278,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username/CAF No/Phone No",
                  "regex": "^[0-9A-Za-z._@-]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1278"
            }
          ],
          "providers": []
        },
        {
          "name": "Worldnet Broadband",
          "billers": [
            {
              "op": 1279,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username/Mobile No",
                  "regex": "^[0-9A-Za-z._]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1279"
            }
          ],
          "providers": []
        },
        {
          "name": "Ayman Internet",
          "billers": [
            {
              "op": 1281,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 3,
                  "maxLen": 18,
                  "name": "Customer ID",
                  "regex": "^[0-9]{3,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1281"
            }
          ],
          "providers": []
        },
        {
          "name": "Anupama Cable And Internet Service",
          "billers": [
            {
              "op": 1291,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Unique Subscriber Number",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1291"
            }
          ],
          "providers": []
        },
        {
          "name": "Grey Sky Internet",
          "billers": [
            {
              "op": 1292,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 6,
                  "maxLen": 24,
                  "name": "Profile ID",
                  "regex": "^[0-9A-Za-z]{6,24}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1292"
            }
          ],
          "providers": []
        },
        {
          "name": "Hybrid Network",
          "billers": [
            {
              "op": 1293,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1293"
            }
          ],
          "providers": []
        },
        {
          "name": "RK Internet",
          "billers": [
            {
              "op": 1295,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1295"
            }
          ],
          "providers": []
        },
        {
          "name": "Royal Networks",
          "billers": [
            {
              "op": 1296,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1296"
            }
          ],
          "providers": []
        },
        {
          "name": "Sri Sai Communication and Internet Private Limited",
          "billers": [
            {
              "op": 1304,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1304"
            }
          ],
          "providers": []
        },
        {
          "name": "Sun Broadband And Data Services Pvt Ltd",
          "billers": [
            {
              "op": 1305,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Customer No / Account No",
                  "regex": "^[0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1305"
            }
          ],
          "providers": []
        },
        {
          "name": "Weone Broadband",
          "billers": [
            {
              "op": 1306,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Username/Customer ID/Phone Number",
                  "regex": "^[0-9A-Za-z-@#$*_.]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1306"
            }
          ],
          "providers": []
        },
        {
          "name": "Benvar",
          "billers": [
            {
              "op": 1314,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1314"
            }
          ],
          "providers": []
        },
        {
          "name": "UCN Fibernet Pvt Ltd",
          "billers": [
            {
              "op": 1315,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z_@.-]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1315"
            }
          ],
          "providers": []
        },
        {
          "name": "Rainbow Communications India Pvt Ltd",
          "billers": [
            {
              "op": 1328,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z.@_]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1328"
            }
          ],
          "providers": []
        },
        {
          "name": "Earthlink Net",
          "billers": [
            {
              "op": 1329,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1329"
            }
          ],
          "providers": []
        },
        {
          "name": "Starlings Broadband",
          "billers": [
            {
              "op": 1330,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[a-zA-Z0-9@_]{3,30}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1330"
            }
          ],
          "providers": []
        },
        {
          "name": "Linktel Broadband",
          "billers": [
            {
              "op": 1294,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z_@.]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1294"
            }
          ],
          "providers": []
        },
        {
          "name": "Globnet Broadband",
          "billers": [
            {
              "op": 1247,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "name": "User Name/Phone Number",
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1247"
            }
          ],
          "providers": []
        },
        {
          "name": "Paglachandi Cable Network",
          "billers": [
            {
              "op": 1254,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1254"
            }
          ],
          "providers": []
        },
        {
          "name": "Skynet Fiber Broadband",
          "billers": [
            {
              "op": 1335,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_-]{1,30}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1335"
            }
          ],
          "providers": []
        },
        {
          "name": "GSR Broadband",
          "billers": [
            {
              "op": 1336,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1336"
            }
          ],
          "providers": []
        },
        {
          "name": "Toptus Broadband Services",
          "billers": [
            {
              "op": 1337,
              "fields": [
                {
                  "id": "cn",
                  "name": "Client ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 3,
                  "maxLen": 18,
                  "regex": "^[0-9]{3,18}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1337"
            }
          ],
          "providers": []
        },
        {
          "name": "Megnet",
          "billers": [
            {
              "op": 1338,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1338"
            }
          ],
          "providers": []
        },
        {
          "name": "Raghavendra Network Services",
          "billers": [
            {
              "op": 1339,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1339"
            }
          ],
          "providers": []
        },
        {
          "name": "SS Broadband",
          "billers": [
            {
              "op": 1341,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1341"
            }
          ],
          "providers": []
        },
        {
          "name": "SVS Broadband",
          "billers": [
            {
              "op": 1342,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1342"
            }
          ],
          "providers": []
        },
        {
          "name": "UNM Broadband Service",
          "billers": [
            {
              "op": 1343,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z._]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1343"
            }
          ],
          "providers": []
        },
        {
          "name": "Varsha Fibernet",
          "billers": [
            {
              "op": 1344,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z._]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1344"
            }
          ],
          "providers": []
        },
        {
          "name": "APB Broadband",
          "billers": [
            {
              "op": 1380,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1380"
            }
          ],
          "providers": []
        },
        {
          "name": "Isolnet Integrated Solutions",
          "billers": [
            {
              "op": 1381,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1381"
            }
          ],
          "providers": []
        },
        {
          "name": "NetSanchar Internet",
          "billers": [
            {
              "op": 1382,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1382"
            }
          ],
          "providers": []
        },
        {
          "name": "NGC IT Works",
          "billers": [
            {
              "op": 1383,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1383"
            }
          ],
          "providers": []
        },
        {
          "name": "ODiGiTEL Broadband",
          "billers": [
            {
              "op": 1388,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1388"
            }
          ],
          "providers": []
        },
        {
          "name": "Future Netsanchar Limited",
          "billers": [
            {
              "op": 1393,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1393"
            }
          ],
          "providers": []
        },
        {
          "name": "Ansari Cable Tv",
          "billers": [
            {
              "op": 1394,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1394"
            }
          ],
          "providers": []
        },
        {
          "name": "Sunny Cable",
          "billers": [
            {
              "op": 1395,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Reference No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "maxLen": 10,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1395"
            }
          ],
          "providers": []
        },
        {
          "name": "Hydranet Broadband",
          "billers": [
            {
              "op": 1389,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1389"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Auto Credit Limited",
          "billers": [
            {
              "op": 1401,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{14}$",
                  "maxLen": 14,
                  "minLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1401"
            }
          ],
          "providers": []
        },
        {
          "name": "Chachyot Nidhi",
          "billers": [
            {
              "op": 1402,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID/Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-_]{3,20}$",
                  "maxLen": 20,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1402"
            }
          ],
          "providers": []
        },
        {
          "name": "Metrocity Finance Pvt Ltd",
          "billers": [
            {
              "op": 1403,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID/Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-_]{3,20}$",
                  "maxLen": 20,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1403"
            }
          ],
          "providers": []
        },
        {
          "name": "Lucknow Nagar Nigam",
          "billers": [
            {
              "op": 1404,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{9,12}$",
                  "maxLen": 12,
                  "minLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1404"
            }
          ],
          "providers": []
        },
        {
          "name": "I Com Broadband Service",
          "billers": [
            {
              "op": 1392,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1392"
            }
          ],
          "providers": []
        },
        {
          "name": "Siti Vision Data",
          "billers": [
            {
              "op": 1390,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1390"
            }
          ],
          "providers": []
        },
        {
          "name": "Modina Cable Network",
          "billers": [
            {
              "op": 1384,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Registration No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "maxLen": 13,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1384"
            }
          ],
          "providers": []
        },
        {
          "name": "B Tel Internet Pvt Ltd",
          "billers": [
            {
              "op": 1391,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,18}$",
                  "maxLen": 18,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1391"
            }
          ],
          "providers": []
        },
        {
          "name": "Tiffany Finance Private Limited",
          "billers": [
            {
              "op": 1299,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 5,
                  "maxLen": 50,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1299"
            }
          ],
          "providers": []
        },
        {
          "name": "HDFC Ergo General Insurance Company (Health)",
          "billers": [
            {
              "op": 1332,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 16,
                  "maxLen": 20,
                  "regex": "^[0-9A-Za-z]{16,20}$",
                  "icon": "V"
                },
                {
                  "icon": "V",
                  "id": "dateofBirth",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Date of birth (YYYY-MM-DD)",
                  "regex": "^/d{4}:/d{2}:/d{2}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1332"
            }
          ],
          "providers": []
        },
        {
          "name": "Tirumala Tirupati Devasthanam (TTD) Water",
          "billers": [
            {
              "op": 1285,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 35,
                  "name": "Consumer Id",
                  "regex": "^[0-9A-Za-z]{1,35}$",
                  "type": "INPUT"
                },
                {
                  "id": "tenantno",
                  "name": "Tenant No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1285"
            }
          ],
          "providers": []
        },
        {
          "name": "Babasaheb Deshmukh Sahakari Bank Limited Atpadi",
          "billers": [
            {
              "op": 1244,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Loan Account Number",
                  "regex": "^[0-9]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1244"
            }
          ],
          "providers": []
        },
        {
          "name": "Dreamland Cables",
          "billers": [
            {
              "op": 1196,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 10,
                  "name": "Unique Reference No",
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1196"
            }
          ],
          "providers": []
        },
        {
          "name": "M M Communication",
          "billers": [
            {
              "op": 1197,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 10,
                  "name": "Unique Reference No",
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1197"
            }
          ],
          "providers": []
        },
        {
          "name": "Davangere Citi Municipal Corporation",
          "billers": [
            {
              "op": 1408,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{1,30}$",
                  "maxLen": 30,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1408"
            }
          ],
          "providers": []
        },
        {
          "name": "Satsky",
          "billers": [
            {
              "op": 1409,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1409"
            }
          ],
          "providers": []
        },
        {
          "name": "U Tele Services Pvt Ltd",
          "billers": [
            {
              "op": 1410,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1410"
            }
          ],
          "providers": []
        },
        {
          "name": "Speedsy",
          "billers": [
            {
              "op": 1411,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z.]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1411"
            }
          ],
          "providers": []
        },
        {
          "name": "G Link Fibernet",
          "billers": [
            {
              "op": 1412,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1412"
            }
          ],
          "providers": []
        },
        {
          "name": "Karnet Broadband",
          "billers": [
            {
              "op": 1413,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1413"
            }
          ],
          "providers": []
        },
        {
          "name": "Praction Networks",
          "billers": [
            {
              "op": 1414,
              "fields": [
                {
                  "id": "cn",
                  "name": "User name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@=#%*+!.&amp;$\\-]{1,40}$",
                  "maxLen": 40,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1414"
            }
          ],
          "providers": []
        },
        {
          "name": "Galactic Internet",
          "billers": [
            {
              "op": 1420,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1420"
            }
          ],
          "providers": []
        },
        {
          "name": "Garuda Groups",
          "billers": [
            {
              "op": 1421,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1421"
            }
          ],
          "providers": []
        },
        {
          "name": "Clicknet Communication",
          "billers": [
            {
              "op": 1427,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1427"
            }
          ],
          "providers": []
        },
        {
          "name": "GenZ Broadband",
          "billers": [
            {
              "op": 1428,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1428"
            }
          ],
          "providers": []
        },
        {
          "name": "Juweriyah Networks (Jeebr)",
          "billers": [
            {
              "op": 1429,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9\\.\\_]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1429"
            }
          ],
          "providers": []
        },
        {
          "name": "777 Network Broadband",
          "billers": [
            {
              "op": 1435,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1435"
            }
          ],
          "providers": []
        },
        {
          "name": "AAA Internet Services Pvt Ltd",
          "billers": [
            {
              "op": 1436,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1436"
            }
          ],
          "providers": []
        },
        {
          "name": "Apsara Communications",
          "billers": [
            {
              "op": 1437,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number/UserId",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z.]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1437"
            }
          ],
          "providers": []
        },
        {
          "name": "Catla Broadband",
          "billers": [
            {
              "op": 1438,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1438"
            }
          ],
          "providers": []
        },
        {
          "name": "GEFO Fibernet",
          "billers": [
            {
              "op": 1439,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1439"
            }
          ],
          "providers": []
        },
        {
          "name": "Hi Tech Broadband",
          "billers": [
            {
              "op": 1440,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1440"
            }
          ],
          "providers": []
        },
        {
          "name": "IBPL",
          "billers": [
            {
              "op": 1441,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1441"
            }
          ],
          "providers": []
        },
        {
          "name": "Indinet Service Pvt Ltd",
          "billers": [
            {
              "op": 1442,
              "fields": [
                {
                  "id": "cn",
                  "name": "User ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9_]{1,30}$",
                  "maxLen": 30,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1442"
            }
          ],
          "providers": []
        },
        {
          "name": "Jeetu Broadband",
          "billers": [
            {
              "op": 1443,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1443"
            }
          ],
          "providers": []
        },
        {
          "name": "Link4data Broadband",
          "billers": [
            {
              "op": 1444,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1444"
            }
          ],
          "providers": []
        },
        {
          "name": "Telex Broadband",
          "billers": [
            {
              "op": 1445,
              "fields": [
                {
                  "id": "cn",
                  "name": "Phone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1445"
            }
          ],
          "providers": []
        },
        {
          "name": "Yash Instant Online India Private Limited (Demandpay)",
          "billers": [
            {
              "op": 1451,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z.]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1451"
            }
          ],
          "providers": []
        },
        {
          "name": "Gloriosa Infotel",
          "billers": [
            {
              "op": 1453,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/ User ID/ Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1453"
            }
          ],
          "providers": []
        },
        {
          "name": "Network Cable Systems",
          "billers": [
            {
              "op": 1454,
              "fields": [
                {
                  "id": "cn",
                  "name": "Registered Mobile No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1454"
            }
          ],
          "providers": []
        },
        {
          "name": "Go Digit Life Insurance Ltd",
          "billers": [
            {
              "op": 1456,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{6,15}$",
                  "maxLen": 15,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1456"
            }
          ],
          "providers": []
        },
        {
          "name": "CreditAccess Life Insurance",
          "billers": [
            {
              "op": 1457,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number/Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{2,10}$",
                  "maxLen": 10,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1457"
            }
          ],
          "providers": []
        },
        {
          "name": "Fusion Finance Ltd",
          "billers": [
            {
              "op": 1458,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan App ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1458"
            }
          ],
          "providers": []
        },
        {
          "name": "Perfect Finsec Pvt. Ltd.",
          "billers": [
            {
              "op": 1459,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{7,10}$",
                  "maxLen": 10,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1459"
            }
          ],
          "providers": []
        },
        {
          "name": "Muthoot BL SME",
          "billers": [
            {
              "op": 1462,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{9,20}$",
                  "maxLen": 20,
                  "minLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1462"
            }
          ],
          "providers": []
        },
        {
          "name": "Save Microfinance Private Limited",
          "billers": [
            {
              "op": 1463,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{12,16}$",
                  "maxLen": 16,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1463"
            }
          ],
          "providers": []
        },
        {
          "name": "Trunet Broadband",
          "billers": [
            {
              "op": 1464,
              "fields": [
                {
                  "id": "cn",
                  "name": "UserId",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_.@#$%&amp;*]{1,50}[^-\\s]$",
                  "maxLen": 50,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1464"
            }
          ],
          "providers": []
        },
        {
          "name": "Jhanjra Cable And Broadband Service",
          "billers": [
            {
              "op": 1465,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Customer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1465"
            }
          ],
          "providers": []
        },
        {
          "name": "AMU Leasing Pvt Ltd",
          "billers": [
            {
              "op": 1466,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[\\-a-zA-Z0-9]{5,25}$",
                  "maxLen": 25,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1466"
            }
          ],
          "providers": []
        },
        {
          "name": "Paymytv – Den",
          "billers": [
            {
              "op": 1467,
              "fields": [
                {
                  "id": "cn",
                  "name": "Subscriber Number/Mobile Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]{6,25}$",
                  "maxLen": 25,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1467"
            }
          ],
          "providers": []
        },
        {
          "name": "Paymytv – Hathway",
          "billers": [
            {
              "op": 1468,
              "fields": [
                {
                  "id": "cn",
                  "name": "Subscriber Number/Mobile Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]{6,25}$",
                  "maxLen": 25,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1468"
            }
          ],
          "providers": []
        },
        {
          "name": "Sadbhav Mutual Benefit Nidhi",
          "billers": [
            {
              "op": 1469,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{7,12}$",
                  "maxLen": 12,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1469"
            }
          ],
          "providers": []
        },
        {
          "name": "Ujjwal Mudra Benefits Nidhi Limited",
          "billers": [
            {
              "op": 1470,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,18}$",
                  "maxLen": 18,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1470"
            }
          ],
          "providers": []
        },
        {
          "name": "Svatantra Micro Housing Finance Corporation Limited",
          "billers": [
            {
              "op": 1472,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Application No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z-]{11,11}$",
                  "maxLen": 11,
                  "minLen": 11,
                  "icon": "V"
                },
                {
                  "id": "Registered Mobile Number",
                  "name": "Registered Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1472"
            }
          ],
          "providers": []
        },
        {
          "name": "RBA Finance Pvt Ltd",
          "billers": [
            {
              "op": 1473,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]*$",
                  "maxLen": 50,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1473"
            }
          ],
          "providers": []
        },
        {
          "name": "Ncore Creative Technologies Private Limited",
          "billers": [
            {
              "op": 1474,
              "fields": [
                {
                  "id": "cn",
                  "name": "Subscriber Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1474"
            }
          ],
          "providers": []
        },
        {
          "name": "Maben Nidhi Gold loans",
          "billers": [
            {
              "op": 1475,
              "fields": [
                {
                  "id": "cn",
                  "name": "Pledge Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{16,16}$",
                  "maxLen": 16,
                  "minLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1475"
            }
          ],
          "providers": []
        },
        {
          "name": "R K Bansal Finance Private Limited",
          "billers": [
            {
              "op": 1476,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1476"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Parishad Yavatmal",
          "billers": [
            {
              "op": 1477,
              "fields": [
                {
                  "id": "cn",
                  "name": "Ward No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{1,4}$",
                  "maxLen": 4,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "icon": "z",
                  "id": "Property No",
                  "isnumeric": true,
                  "maxLen": 6,
                  "minLen": 1,
                  "name": "Property No",
                  "regex": "^[0-9]{1,6}$",
                  "skipIfConnection": true,
                  "type": "INPUT"
                },
                {
                  "icon": "z",
                  "id": "Partition No",
                  "isnumeric": true,
                  "maxLen": 5,
                  "minLen": 1,
                  "name": "Partition No",
                  "regex": "^[0-9]{1,5}$",
                  "skipIfConnection": true,
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1477"
            }
          ],
          "providers": []
        },
        {
          "name": "Bengal Gas Company Limited",
          "billers": [
            {
              "op": 1478,
              "fields": [
                {
                  "id": "cn",
                  "name": "BP Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,10}$",
                  "maxLen": 10,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1478"
            }
          ],
          "providers": []
        },
        {
          "name": "Choice Finserv Pvt Ltd",
          "billers": [
            {
              "op": 1481,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[\\-a-zA-Z0-9]{4,25}$",
                  "minLen": 4,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1481"
            }
          ],
          "providers": []
        },
        {
          "name": "Solapur Municipal Corporation",
          "billers": [
            {
              "op": 1482,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9/]{5,12}$",
                  "minLen": 5,
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1482"
            }
          ],
          "providers": []
        },
        {
          "name": "Kamal Autofinance Pvt Ltd",
          "billers": [
            {
              "op": 1483,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1483"
            }
          ],
          "providers": []
        },
        {
          "name": "ACT Cable TV",
          "billers": [
            {
              "op": 1484,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number/Mobile Number/MAC ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z-]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1484"
            }
          ],
          "providers": []
        },
        {
          "name": "JM Financial Home Loans Ltd.",
          "billers": [
            {
              "op": 1485,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z-]{12,16}$",
                  "minLen": 12,
                  "maxLen": 16,
                  "icon": "V"
                },
                {
                  "icon": "z",
                  "id": "mobileNumber",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 10,
                  "name": "Mobile Number",
                  "regex": "^[0-9]{10}$",
                  "skipIfConnection": true,
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1485"
            }
          ],
          "providers": []
        },
        {
          "name": "Liberty General Insurance Limited",
          "billers": [
            {
              "op": 1486,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]*$",
                  "minLen": 1,
                  "maxLen": 24,
                  "icon": "V"
                },
                {
                  "id": "VehicleNumber",
                  "name": "Vehicle Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]*$",
                  "minLen": 1,
                  "maxLen": 36,
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1486"
            }
          ],
          "providers": []
        },
        {
          "name": "Nirav Infoway Pvt Ltd",
          "billers": [
            {
              "op": 1430,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1430"
            }
          ],
          "providers": []
        },
        {
          "name": "SBASS",
          "billers": [
            {
              "op": 1431,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1431"
            }
          ],
          "providers": []
        },
        {
          "name": "Tact Communication Pvt Ltd",
          "billers": [
            {
              "op": 1432,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.-]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1432"
            }
          ],
          "providers": []
        },
        {
          "name": "Keshaw Microfinance",
          "billers": [
            {
              "op": 1434,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.-]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1434"
            }
          ],
          "providers": []
        },
        {
          "name": "Velicham Finance",
          "billers": [
            {
              "op": 1449,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]{13,14}$",
                  "maxLen": 14,
                  "minLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1449"
            }
          ],
          "providers": []
        },
        {
          "name": "Treedha Finance Private Limited",
          "billers": [
            {
              "op": 1450,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{4,25}$",
                  "maxLen": 25,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1450"
            }
          ],
          "providers": []
        },
        {
          "name": "Cholamandalam MS General Insurance Co Ltd",
          "billers": [
            {
              "op": 1425,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/]{19,25}$",
                  "maxLen": 25,
                  "minLen": 19,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1425"
            }
          ],
          "providers": []
        },
        {
          "name": "KLM Axiva Finvest Limited",
          "billers": [
            {
              "op": 1426,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/]{19,25}$",
                  "maxLen": 25,
                  "minLen": 19,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1426"
            }
          ],
          "providers": []
        },
        {
          "name": "Upkaar Micro Finance",
          "billers": [
            {
              "op": 1417,
              "fields": [
                {
                  "id": "cn",
                  "name": "LOAN ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12,12}$",
                  "maxLen": 12,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1417"
            }
          ],
          "providers": []
        },
        {
          "name": "Blackbuck Finserve",
          "billers": [
            {
              "op": 1418,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{6,20}$",
                  "maxLen": 20,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1418"
            }
          ],
          "providers": []
        },
        {
          "name": "KPS MICRO SERVICES FOUNDATION",
          "billers": [
            {
              "op": 1419,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID/Loan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{4,7}$",
                  "maxLen": 7,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1419"
            }
          ],
          "providers": []
        },
        {
          "name": "Plassey Cable Network",
          "billers": [
            {
              "op": 1205,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Registration No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "minLen": 1,
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1205"
            }
          ],
          "providers": []
        },
        {
          "name": "Tarapith Cable Link",
          "billers": [
            {
              "op": 1206,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Set Top Box Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1206"
            }
          ],
          "providers": []
        },
        {
          "name": "Badanganj Cable Network",
          "billers": [
            {
              "op": 1207,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Reference No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1207"
            }
          ],
          "providers": []
        },
        {
          "name": "Tara Maa Cable Network",
          "billers": [
            {
              "op": 1215,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Unique Consumer Number",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1215"
            }
          ],
          "providers": []
        },
        {
          "name": "Pal Cable Network",
          "billers": [
            {
              "op": 1216,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 10,
                  "name": "Unique Reference No",
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1216"
            }
          ],
          "providers": []
        },
        {
          "name": "Metro Cast Network India Pvt Ltd",
          "billers": [
            {
              "op": 1217,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 30,
                  "name": "Mobile No./Account No./MAC ID – Card No./STB No.",
                  "regex": "^[0-9A-Za-z-_:]{4,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1217"
            }
          ],
          "providers": []
        },
        {
          "name": "Laxmimata Cable Network",
          "billers": [
            {
              "op": 1225,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Unique Consumer Number",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1225"
            }
          ],
          "providers": []
        },
        {
          "name": "See Cable Tv",
          "billers": [
            {
              "op": 1230,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1230"
            }
          ],
          "providers": []
        },
        {
          "name": "Adaptive Networks",
          "billers": [
            {
              "op": 1183,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 18,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1183"
            }
          ],
          "providers": []
        },
        {
          "name": "Jtel",
          "billers": [
            {
              "op": 1184,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 10,
                  "name": "Account Number",
                  "regex": "^[0-9]{10,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1184"
            }
          ],
          "providers": []
        },
        {
          "name": "Skynet",
          "billers": [
            {
              "op": 1200,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "minLen": 3,
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1200"
            }
          ],
          "providers": []
        },
        {
          "name": "Vdigital",
          "billers": [
            {
              "op": 1179,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_:=#%*+!.$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1179"
            }
          ],
          "providers": []
        },
        {
          "name": "National Broadband Network",
          "billers": [
            {
              "op": 1171,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 15,
                  "name": "Unique Subscriber No",
                  "regex": "^[a-zA-Z0-9]{1,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1171"
            }
          ],
          "providers": []
        },
        {
          "name": "TP Western Odisha Distribution Ltd-Smart Prepaid Meter Recharge",
          "billers": [
            {
              "op": 1168,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 20,
                  "name": "Consumer Number",
                  "regex": "^[A-Za-z0-9]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1168"
            }
          ],
          "providers": []
        },
        {
          "name": "Assam Power Distribution Company Ltd- Smart Prepaid Recharge",
          "billers": [
            {
              "op": 1173,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 12,
                  "maxLen": 12,
                  "name": "Consumer Number",
                  "regex": "^[0-9]{12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1173"
            }
          ],
          "providers": []
        },
        {
          "name": "Speednet Broadband",
          "billers": [
            {
              "op": 1161,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1161"
            }
          ],
          "providers": []
        },
        {
          "name": "CableGuy",
          "billers": [
            {
              "op": 1149,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 30,
                  "name": "Mobile No./Account No./MAC ID-Card No./STB No.",
                  "regex": "^[0-9A-Za-z:]{4,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1149"
            }
          ],
          "providers": []
        },
        {
          "name": "Infonet Comm Enterprises Pvt Ltd",
          "billers": [
            {
              "op": 1131,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z_@.*-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1131"
            }
          ],
          "providers": []
        },
        {
          "name": "Sndc Communication Private Limited",
          "billers": [
            {
              "op": 1109,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 3,
                  "maxLen": 18,
                  "name": "Customer id",
                  "regex": "^[0-9]{3,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1109"
            }
          ],
          "providers": []
        },
        {
          "name": "Vayu Online Pvt Ltd",
          "billers": [
            {
              "op": 1110,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer Number",
                  "regex": "^[0-9A-Za-z@_:=#%*+!.$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1110"
            }
          ],
          "providers": []
        },
        {
          "name": "Khetan Telecommunications Pvt Ltd",
          "billers": [
            {
              "op": 1111,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1111"
            }
          ],
          "providers": []
        },
        {
          "name": "Metanet",
          "billers": [
            {
              "op": 1083,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9_@]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1083"
            }
          ],
          "providers": []
        },
        {
          "name": "Charotar Broadband",
          "billers": [
            {
              "op": 1084,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z_]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1084"
            }
          ],
          "providers": []
        },
        {
          "name": "Skynet Wireless",
          "billers": [
            {
              "op": 1060,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1060"
            }
          ],
          "providers": []
        },
        {
          "name": "Bijis Internet Private Limited",
          "billers": [
            {
              "op": 980,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "UserId",
                  "regex": "^[A-Za-z0-9]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=980"
            }
          ],
          "providers": []
        },
        {
          "name": "GBPL",
          "billers": [
            {
              "op": 981,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=981"
            }
          ],
          "providers": []
        },
        {
          "name": "MS Networks",
          "billers": [
            {
              "op": 983,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Mobile Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=983"
            }
          ],
          "providers": []
        },
        {
          "name": "Gulbarga Mega Speed",
          "billers": [
            {
              "op": 833,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=833"
            }
          ],
          "providers": []
        },
        {
          "name": "Deco Broadband",
          "billers": [
            {
              "op": 957,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 35,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z_]{2,35}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=957"
            }
          ],
          "providers": []
        },
        {
          "name": "Threesa",
          "billers": [
            {
              "op": 971,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=971"
            }
          ],
          "providers": []
        },
        {
          "name": "Khatore It Solutions Private Limited",
          "billers": [
            {
              "op": 958,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 35,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z_]{2,35}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=958"
            }
          ],
          "providers": []
        },
        {
          "name": "Raze Networks",
          "billers": [
            {
              "op": 962,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=962"
            }
          ],
          "providers": []
        },
        {
          "name": "Way2Net IT Services Pvt Ltd",
          "billers": [
            {
              "op": 977,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_#-.]{1,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=977"
            }
          ],
          "providers": []
        },
        {
          "name": "MM Networks",
          "billers": [
            {
              "op": 879,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.-:]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=879"
            }
          ],
          "providers": []
        },
        {
          "name": "ANONET Partner",
          "billers": [
            {
              "op": 880,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=880"
            }
          ],
          "providers": []
        },
        {
          "name": "Feathers",
          "billers": [
            {
              "op": 882,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_.:=#%*+!$\\/-]{2,50}",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=882"
            }
          ],
          "providers": []
        },
        {
          "name": "Fiber Power Connects Private Limited",
          "billers": [
            {
              "op": 883,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 48,
                  "name": "UserName",
                  "regex": "^[a-zA-Z0-9@_.]{3,48}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=883"
            }
          ],
          "providers": []
        },
        {
          "name": "Orange Fibernet and TV",
          "billers": [
            {
              "op": 886,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.-:]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=886"
            }
          ],
          "providers": []
        },
        {
          "name": "MANOJAVA BROADBAND PRIVATE LTD",
          "billers": [
            {
              "op": 902,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=902"
            }
          ],
          "providers": []
        },
        {
          "name": "Reach Broadband",
          "billers": [
            {
              "op": 904,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=904"
            }
          ],
          "providers": []
        },
        {
          "name": "Kord Broadband Services Pvt Ltd",
          "billers": [
            {
              "op": 905,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z_@.-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=905"
            }
          ],
          "providers": []
        },
        {
          "name": "Imperium Digital Network Private Limited",
          "billers": [
            {
              "op": 906,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z@_:=#%+!*.$-/]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=906"
            }
          ],
          "providers": []
        },
        {
          "name": "Arihant Network",
          "billers": [
            {
              "op": 907,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9@_*.$-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=907"
            }
          ],
          "providers": []
        },
        {
          "name": "AT Broadband",
          "billers": [
            {
              "op": 908,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9@_:=#%+!*.$-\\/]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=908"
            }
          ],
          "providers": []
        },
        {
          "name": "One Click Internet Services",
          "billers": [
            {
              "op": 911,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=911"
            }
          ],
          "providers": []
        },
        {
          "name": "Gtech Partner",
          "billers": [
            {
              "op": 912,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=912"
            }
          ],
          "providers": []
        },
        {
          "name": "QNet",
          "billers": [
            {
              "op": 913,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9@_*.-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=913"
            }
          ],
          "providers": []
        },
        {
          "name": "Gtech Broadband",
          "billers": [
            {
              "op": 915,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=915"
            }
          ],
          "providers": []
        },
        {
          "name": "Cloudlasers Broadband",
          "billers": [
            {
              "op": 932,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=932"
            }
          ],
          "providers": []
        },
        {
          "name": "Cyber Broadband Pvt Ltd",
          "billers": [
            {
              "op": 933,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=933"
            }
          ],
          "providers": []
        },
        {
          "name": "Daksh Telecom",
          "billers": [
            {
              "op": 934,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=934"
            }
          ],
          "providers": []
        },
        {
          "name": "Globalfibertel",
          "billers": [
            {
              "op": 935,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=935"
            }
          ],
          "providers": []
        },
        {
          "name": "Krp Fibernet",
          "billers": [
            {
              "op": 937,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=937"
            }
          ],
          "providers": []
        },
        {
          "name": "Net 9 Fibernet Private Limited",
          "billers": [
            {
              "op": 940,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 40,
                  "name": "UserId",
                  "regex": "^[a-zA-Z0-9._@#-]{3,40}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=940"
            }
          ],
          "providers": []
        },
        {
          "name": "Krishiinet Infocom Pvt Ltd",
          "billers": [
            {
              "op": 920,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer Number",
                  "regex": "^[a-zA-Z0-9@_*.-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=920"
            }
          ],
          "providers": []
        },
        {
          "name": "Pegasuswave Pvt Ltd",
          "billers": [
            {
              "op": 929,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Username",
                  "regex": "^[a-zA-Z0-9@&amp;_:=#%+!*.$-\\/]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=929"
            }
          ],
          "providers": []
        },
        {
          "name": "Rajesh Digital and Datacom Private Limited",
          "billers": [
            {
              "op": 887,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 48,
                  "name": "UserName",
                  "regex": "^[a-zA-Z0-9@_.]{3,48}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=887"
            }
          ],
          "providers": []
        },
        {
          "name": "Smart Net India Pvt Ltd",
          "billers": [
            {
              "op": 888,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "UserName",
                  "regex": "^[0-9A-Za-z@_.:=#%*+!$\\/-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=888"
            }
          ],
          "providers": []
        },
        {
          "name": "Xpress Fiber",
          "billers": [
            {
              "op": 889,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.-:]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=889"
            }
          ],
          "providers": []
        },
        {
          "name": "Wave Fiber",
          "billers": [
            {
              "op": 892,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                },
                {
                  "id": "state",
                  "name": "State",
                  "type": "LIST",
                  "icon": "V",
                  "fieldValues": [
                    "Andhra Pradesh",
                    "Telangana"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=892"
            }
          ],
          "providers": []
        },
        {
          "name": "ACNS Pvt Ltd",
          "billers": [
            {
              "op": 894,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=894"
            }
          ],
          "providers": []
        },
        {
          "name": "Adigital",
          "billers": [
            {
              "op": 895,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z@_*.$-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=895"
            }
          ],
          "providers": []
        },
        {
          "name": "Cloud ISP",
          "billers": [
            {
              "op": 899,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 50,
                  "name": "Customer Number",
                  "regex": "^[0-9A-Za-z@_*.$-]{2,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=899"
            }
          ],
          "providers": []
        },
        {
          "name": "Crystal Broadband",
          "billers": [
            {
              "op": 900,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=900"
            }
          ],
          "providers": []
        },
        {
          "name": "Amber Online Services",
          "billers": [
            {
              "op": 896,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=896"
            }
          ],
          "providers": []
        },
        {
          "name": "VILCOM",
          "billers": [
            {
              "op": 834,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=834"
            }
          ],
          "providers": []
        },
        {
          "name": "Confiar Broadband",
          "billers": [
            {
              "op": 842,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=842"
            }
          ],
          "providers": []
        },
        {
          "name": "Inet Fiber",
          "billers": [
            {
              "op": 843,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_.:-]{3,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=843"
            }
          ],
          "providers": []
        },
        {
          "name": "Nextgen ANT Fiber Broadband",
          "billers": [
            {
              "op": 844,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=844"
            }
          ],
          "providers": []
        },
        {
          "name": "Orange Broadband",
          "billers": [
            {
              "op": 845,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=845"
            }
          ],
          "providers": []
        },
        {
          "name": "RDS NET",
          "billers": [
            {
              "op": 846,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User Name",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=846"
            }
          ],
          "providers": []
        },
        {
          "name": "Digital World",
          "billers": [
            {
              "op": 836,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=836"
            }
          ],
          "providers": []
        },
        {
          "name": "Anonet Communications Private Limited",
          "billers": [
            {
              "op": 837,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 26,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z@_&amp;-]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=837"
            }
          ],
          "providers": []
        },
        {
          "name": "Compliance Broadband (CBPL)",
          "billers": [
            {
              "op": 838,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z@._$#]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=838"
            }
          ],
          "providers": []
        },
        {
          "name": "Balaji Broadband",
          "billers": [
            {
              "op": 800,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "name": "User Name",
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_]{1,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=800"
            }
          ],
          "providers": []
        },
        {
          "name": "I Net Broadband",
          "billers": [
            {
              "op": 815,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9a-zA-Z@_:.-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=815"
            }
          ],
          "providers": []
        },
        {
          "name": "Meghlink",
          "billers": [
            {
              "op": 816,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9a-zA-Z@_:.-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=816"
            }
          ],
          "providers": []
        },
        {
          "name": "PeerCast",
          "billers": [
            {
              "op": 817,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 6,
                  "maxLen": 12,
                  "name": "User Name",
                  "regex": "^[A-Za-z0-9]{6,12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=817"
            }
          ],
          "providers": []
        },
        {
          "name": "SBR Telecom",
          "billers": [
            {
              "op": 850,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 26,
                  "name": "Customer Id",
                  "regex": "^[0-9A-Za-z]{3,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=850"
            }
          ],
          "providers": []
        },
        {
          "name": "Arjun Telecom",
          "billers": [
            {
              "op": 851,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=851"
            }
          ],
          "providers": []
        },
        {
          "name": "VCC Broadband",
          "billers": [
            {
              "op": 852,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=852"
            }
          ],
          "providers": []
        },
        {
          "name": "Plex Broadband",
          "billers": [
            {
              "op": 853,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=853"
            }
          ],
          "providers": []
        },
        {
          "name": "Airnetz",
          "billers": [
            {
              "op": 854,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=854"
            }
          ],
          "providers": []
        },
        {
          "name": "NSPL",
          "billers": [
            {
              "op": 855,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=855"
            }
          ],
          "providers": []
        },
        {
          "name": "Ne Line",
          "billers": [
            {
              "op": 856,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=856"
            }
          ],
          "providers": []
        },
        {
          "name": "Infinity Fibernet",
          "billers": [
            {
              "op": 857,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=857"
            }
          ],
          "providers": []
        },
        {
          "name": "SR Broadband",
          "billers": [
            {
              "op": 867,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=867"
            }
          ],
          "providers": []
        },
        {
          "name": "Vision Fibernet",
          "billers": [
            {
              "op": 868,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=868"
            }
          ],
          "providers": []
        },
        {
          "name": "SG Broadband",
          "billers": [
            {
              "op": 874,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 64,
                  "name": "Username/Mobile Number",
                  "regex": "^[a-zA-Z0-9@_.-]{1,64}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=874"
            }
          ],
          "providers": []
        },
        {
          "name": "REALTEL",
          "billers": [
            {
              "op": 877,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=877"
            }
          ],
          "providers": []
        },
        {
          "name": "IRRA Internet Service Private Limited",
          "billers": [
            {
              "op": 878,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 30,
                  "name": "User Name/Phone Number",
                  "regex": "^[0-9A-Za-z_]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=878"
            }
          ],
          "providers": []
        },
        {
          "name": "Quicknet Communication",
          "billers": [
            {
              "op": 866,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 26,
                  "name": "Username/Phone Number",
                  "regex": "^[0-9A-Za-z_]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=866"
            }
          ],
          "providers": []
        },
        {
          "name": "TATA PLAY FIBER",
          "billers": [
            {
              "op": 828,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 26,
                  "name": "Customer ID",
                  "regex": "^[0-9a-zA-Z]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=828"
            }
          ],
          "providers": []
        },
        {
          "name": "Speednet Unique Network",
          "billers": [
            {
              "op": 801,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[0-9a-zA-Z@_:.-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=801"
            }
          ],
          "providers": []
        },
        {
          "name": "Manas Broadband",
          "billers": [
            {
              "op": 802,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=802"
            }
          ],
          "providers": []
        },
        {
          "name": "DHL Fibernet",
          "billers": [
            {
              "op": 803,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[0-9a-zA-Z@_:.-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=803"
            }
          ],
          "providers": []
        },
        {
          "name": "SS INTERNET",
          "billers": [
            {
              "op": 804,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 26,
                  "name": "Username/Mobile Number",
                  "regex": "^[0-9a-zA-Z@#$%^&amp;*()_+=.,-]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=804"
            }
          ],
          "providers": []
        },
        {
          "name": "Ufibernet",
          "billers": [
            {
              "op": 805,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User Id",
                  "regex": "^[0-9a-zA-Z@_:.-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=805"
            }
          ],
          "providers": []
        },
        {
          "name": "MS Broadband",
          "billers": [
            {
              "op": 799,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 30,
                  "name": "User Name/Mobile Number",
                  "regex": "^[0-9a-zA-Z@_:.-]{2,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=799"
            }
          ],
          "providers": []
        },
        {
          "name": "FABNET",
          "billers": [
            {
              "op": 796,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 30,
                  "name": "User Id",
                  "regex": "^[0-9A-Za-z\\\\@\\\\-\\\\_\\\\:\\\\.]{1,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=796"
            }
          ],
          "providers": []
        },
        {
          "name": "TJ Broadband Network Pvt Ltd",
          "billers": [
            {
              "op": 788,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 50,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z@_:=#%*+.$-]{4,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=788"
            }
          ],
          "providers": []
        },
        {
          "name": "Eway FiberNet",
          "billers": [
            {
              "op": 789,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z_/\\.-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=789"
            }
          ],
          "providers": []
        },
        {
          "name": "Infinet",
          "billers": [
            {
              "op": 781,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 15,
                  "name": "User Name",
                  "regex": "^[0-9a-zA-Z]{4,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=781"
            }
          ],
          "providers": []
        },
        {
          "name": "Udupi Fastnet",
          "billers": [
            {
              "op": 732,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "name": "Account Number",
                  "regex": "^[A-Za-z0-9]{}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=732"
            }
          ],
          "providers": []
        },
        {
          "name": "Reisnet Broadband",
          "billers": [
            {
              "op": 733,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 26,
                  "name": "Username/Customer ID",
                  "regex": "^[\\d\\w\\W]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=733"
            }
          ],
          "providers": []
        },
        {
          "name": "Weebo Networks Pvt Ltd",
          "billers": [
            {
              "op": 734,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "name": "User Name/Phone Number",
                  "regex": "^[\\d\\w\\W]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=734"
            }
          ],
          "providers": []
        },
        {
          "name": "Pioneer Elabs Limited",
          "billers": [
            {
              "op": 735,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 26,
                  "name": "User Name/Customer Id/Mobile No",
                  "regex": "^[0-9A-Za-z@_,]{2,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=735"
            }
          ],
          "providers": []
        },
        {
          "name": "TSK Giga Fibber",
          "billers": [
            {
              "op": 736,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[a-zA-Z0-9]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=736"
            }
          ],
          "providers": []
        },
        {
          "name": "Lotus Broadband",
          "billers": [
            {
              "op": 737,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 20,
                  "name": "User ID",
                  "regex": "^[A-Za-z0-9]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=737"
            }
          ],
          "providers": []
        },
        {
          "name": "Quest Consultancy",
          "billers": [
            {
              "op": 738,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z@_-]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=738"
            }
          ],
          "providers": []
        },
        {
          "name": "Airnet Networks",
          "billers": [
            {
              "op": 713,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "name": "Username",
                  "regex": "^[A-Za-z0-9]{}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=713"
            }
          ],
          "providers": []
        },
        {
          "name": "Air Connect",
          "billers": [
            {
              "op": 695,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 9,
                  "maxLen": 9,
                  "name": "User Name",
                  "regex": "^[A-Za-z0-9]{9}$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "yearMonth",
                  "isnumeric": false,
                  "minLen": 7,
                  "maxLen": 7,
                  "name": "Year Month(YYYY-MM)",
                  "regex": "^[0-9]{4}[-]{1}[0-9]{2}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=695"
            }
          ],
          "providers": []
        },
        {
          "name": "Apple Fibernet",
          "billers": [
            {
              "op": 673,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 20,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z@_.:-]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=673"
            }
          ],
          "providers": []
        },
        {
          "name": "Spiderlink Networks Pvt Ltd",
          "billers": [
            {
              "op": 717,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 24,
                  "name": "Username",
                  "regex": "^[0-9A-Za-z@_()#-.!]{3,24}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=717"
            }
          ],
          "providers": []
        },
        {
          "name": "Cloudsky Superfast Broadband & Services Pvt Ltd",
          "billers": [
            {
              "op": 752,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "name": "Username/Phonenumber",
                  "regex": "^[0-9A-Za-z@_-]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=752"
            }
          ],
          "providers": []
        },
        {
          "name": "Spidernet Broadband",
          "billers": [
            {
              "op": 753,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 30,
                  "name": "User ID",
                  "regex": "^[0-9A-Za-z]{1,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=753"
            }
          ],
          "providers": []
        },
        {
          "name": "GBPS Networks Pvt Ltd",
          "billers": [
            {
              "op": 754,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 50,
                  "name": "Username/Phone Number/Email Id",
                  "regex": "^[0-9A-Za-z]{1,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=754"
            }
          ],
          "providers": []
        },
        {
          "name": "Ethernet Xpress",
          "billers": [
            {
              "op": 755,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 3,
                  "maxLen": 25,
                  "name": "User Id",
                  "regex": "^[A-Za-z0-9_]{3,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=755"
            }
          ],
          "providers": []
        },
        {
          "name": "Deshkal Networks",
          "billers": [
            {
              "op": 756,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z@-_:.]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=756"
            }
          ],
          "providers": []
        },
        {
          "name": "SRI LAKSHMI NETWORKS PRIVATE LIMITED",
          "billers": [
            {
              "op": 758,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z@_.-]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=758"
            }
          ],
          "providers": []
        },
        {
          "name": "Shine Broadband",
          "billers": [
            {
              "op": 765,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z@_.#*-]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=765"
            }
          ],
          "providers": []
        },
        {
          "name": "SCCNET",
          "billers": [
            {
              "op": 766,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z@_#-.~@#$%^&amp;*()+=:;'&lt;&gt;,.?]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=766"
            }
          ],
          "providers": []
        },
        {
          "name": "ANI Network Pvt Ltd",
          "billers": [
            {
              "op": 767,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Customer ID/Phone Number",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z@_#-.!]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=767"
            }
          ],
          "providers": []
        },
        {
          "name": "B Fibernet",
          "billers": [
            {
              "op": 768,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Username/Phone Number",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 26,
                  "regex": "^[0-9A-Za-z.*@_-]{1,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=768"
            }
          ],
          "providers": []
        },
        {
          "name": "Super Sonic Broadband Private Limited",
          "billers": [
            {
              "op": 769,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "User Name",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9@_.]{3,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=769"
            }
          ],
          "providers": []
        },
        {
          "name": "Correl Internet",
          "billers": [
            {
              "op": 775,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "User Name",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 40,
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_]{1,40}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=775"
            }
          ],
          "providers": []
        },
        {
          "name": "Cherrinet",
          "billers": [
            {
              "op": 759,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "name": "Mobile Number",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 10,
                  "regex": "^[0-9]{10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=759"
            }
          ],
          "providers": []
        },
        {
          "name": "Pink Broadband",
          "billers": [
            {
              "op": 674,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "name": "Customer ID",
                  "regex": "^[0-9A-Za-z]{5,50}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=674"
            }
          ],
          "providers": []
        },
        {
          "name": "Hi Reach Broadband",
          "billers": [
            {
              "op": 714,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 10,
                  "name": "Username/Phonenumber",
                  "regex": "^[0-9A-Za-z]{1,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=714"
            }
          ],
          "providers": []
        },
        {
          "name": "Deenet Services Private Limited",
          "billers": [
            {
              "op": 715,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phonenumber",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_\\/-]{4,20}$",
                  "minLen": 4,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=715"
            }
          ],
          "providers": []
        },
        {
          "name": "DVR Broadband Services",
          "billers": [
            {
              "op": 716,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Phonenumber",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,35}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=716"
            }
          ],
          "providers": []
        },
        {
          "name": "Kings Broadband",
          "billers": [
            {
              "op": 664,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9@._-]{1,35}$",
                  "maxLen": 35,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=664"
            }
          ],
          "providers": []
        },
        {
          "name": "Microscan Infocommtech Pvt Ltd",
          "billers": [
            {
              "op": 647,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9@._-]{1,50}$",
                  "minLen": 1,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=647"
            }
          ],
          "providers": []
        },
        {
          "name": "Limras Eronet",
          "billers": [
            {
              "op": 656,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,35}$ ",
                  "maxLen": 35,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=656"
            }
          ],
          "providers": []
        },
        {
          "name": "Linkio Fibernet",
          "billers": [
            {
              "op": 657,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,7}(\\.[0-9]{0,2})?$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=657"
            }
          ],
          "providers": []
        },
        {
          "name": "DWAN Supports Private Ltd",
          "billers": [
            {
              "op": 650,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/().*@_-]{1,35}$",
                  "maxLen": 35,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=650"
            }
          ],
          "providers": []
        },
        {
          "name": "NS Broadband",
          "billers": [
            {
              "op": 659,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9\\-\\@\\.\\_]{1,50}$",
                  "minLen": 1,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=659"
            }
          ],
          "providers": []
        },
        {
          "name": "TIC FIBER",
          "billers": [
            {
              "op": 660,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]+$",
                  "maxLen": 35,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=660"
            }
          ],
          "providers": []
        },
        {
          "name": "Airtel Broadband",
          "billers": [
            {
              "op": 214,
              "fields": [
                {
                  "id": "cn",
                  "name": "Landline Number (with STD Code)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{11}$",
                  "maxLen": 11,
                  "minLen": 11,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=214"
            }
          ],
          "providers": []
        },
        {
          "name": "AirJaldi - Rural Broadband",
          "billers": [
            {
              "op": 523,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,16}$",
                  "minLen": 3,
                  "maxLen": 16,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=523"
            }
          ],
          "providers": []
        },
        {
          "name": "Alliance Broadband",
          "billers": [
            {
              "op": 519,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=519"
            }
          ],
          "providers": []
        },
        {
          "name": "ASIANET Broadband (ASIANET)",
          "billers": [
            {
              "op": 254,
              "fields": [
                {
                  "id": "cn",
                  "name": "Sub Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{3,10}$",
                  "minLen": 3,
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=254"
            }
          ],
          "providers": []
        },
        {
          "name": "BSNL Broadband",
          "billers": [
            {
              "op": 131,
              "fields": [
                {
                  "id": "telephoneNumber",
                  "name": "Telephone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "icon": "d"
                },
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=131"
            }
          ],
          "providers": []
        },
        {
          "name": "Comway Broadband",
          "billers": [
            {
              "op": 252,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{1,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=252"
            }
          ],
          "providers": []
        },
        {
          "name": "Connect Broadband",
          "billers": [
            {
              "op": 136,
              "fields": [
                {
                  "id": "cn",
                  "name": "Directory Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[1-9a-zA-Z][0-9a-zA-Z]{3,11}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=136"
            }
          ],
          "providers": []
        },
        {
          "name": "DEN Broadband",
          "billers": [
            {
              "op": 283,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,25}$",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=283"
            }
          ],
          "providers": []
        },
        {
          "name": "Digiway Net",
          "billers": [
            {
              "op": 666,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,35}$",
                  "maxLen": 35,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=666"
            }
          ],
          "providers": []
        },
        {
          "name": "Excell Broadband",
          "billers": [
            {
              "op": 549,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,15}$",
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6789][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=549"
            }
          ],
          "providers": []
        },
        {
          "name": "Ficus Telecom Pvt Ltd",
          "billers": [
            {
              "op": 629,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username/Mobile Numbe",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{1,64}$",
                  "maxLen": 64,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=629"
            }
          ],
          "providers": []
        },
        {
          "name": "Flash Fibernet",
          "billers": [
            {
              "op": 314,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=314"
            }
          ],
          "providers": []
        },
        {
          "name": "FusionNet Broadband",
          "billers": [
            {
              "op": 253,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{1,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=253"
            }
          ],
          "providers": []
        },
        {
          "name": "Hathway Broadband",
          "billers": [
            {
              "op": 135,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^(10|11|12|13|14|15)\\d{8}$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=135"
            }
          ],
          "providers": []
        },
        {
          "name": "ION",
          "billers": [
            {
              "op": 395,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[HWThwt][0-9]{1,8}$",
                  "minLen": 1,
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=395"
            }
          ],
          "providers": []
        },
        {
          "name": "Instalinks",
          "billers": [
            {
              "op": 278,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\@\\:\\.]{4,25}$",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=278"
            }
          ],
          "providers": []
        },
        {
          "name": "GTPL KCBPL Broadband Pvt Ltd",
          "billers": [
            {
              "op": 589,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z._/\\\\!@#$%^&amp;*()_-]{1,100}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=589"
            }
          ],
          "providers": []
        },
        {
          "name": "Kerala Vision Broadband Pvt Ltd",
          "billers": [
            {
              "op": 623,
              "fields": [
                {
                  "id": "cn",
                  "name": "Username",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z.@_-]{1,20}$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=623"
            }
          ],
          "providers": []
        },
        {
          "name": "M-NET Fiber Fast",
          "billers": [
            {
              "op": 281,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\@\\-\\_\\#\\/]{3,40}$",
                  "minLen": 3,
                  "maxLen": 40,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=281"
            }
          ],
          "providers": []
        },
        {
          "name": "MTNL Delhi Broadband",
          "billers": [
            {
              "op": 40,
              "fields": [
                {
                  "id": "telephoneNumber",
                  "name": "Telephone Number (Without STD Code)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "d"
                },
                {
                  "id": "cn",
                  "name": "Customer Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=40"
            }
          ],
          "providers": []
        },
        {
          "name": "MTNL Mumbai Broadband",
          "billers": [
            {
              "op": 133,
              "fields": [
                {
                  "id": "cn",
                  "name": "Telephone Number (Without STD Code)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "maxLen": 8,
                  "icon": "d"
                },
                {
                  "id": "accountNumber",
                  "name": "Customer Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=133"
            }
          ],
          "providers": []
        },
        {
          "name": "Netplus Broadband",
          "billers": [
            {
              "op": 305,
              "fields": [
                {
                  "id": "cn",
                  "name": "Billing Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=305"
            }
          ],
          "providers": []
        },
        {
          "name": "Nextra Broadband",
          "billers": [
            {
              "op": 145,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{5,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=145"
            }
          ],
          "providers": []
        },
        {
          "name": "Spectra",
          "billers": [
            {
              "op": 137,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number (last 6 digit number)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{6,15}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=137"
            }
          ],
          "providers": []
        },
        {
          "name": "Swifttele Enterprises Private Limited",
          "billers": [
            {
              "op": 451,
              "fields": [
                {
                  "id": "cn",
                  "name": "Landline Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{11}$",
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=451"
            }
          ],
          "providers": []
        },
        {
          "name": "Tikona Infinet Private Limited",
          "billers": [
            {
              "op": 56,
              "fields": [
                {
                  "id": "cn",
                  "name": "Service Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=56"
            }
          ],
          "providers": []
        },
        {
          "name": "Timbl Broadband",
          "billers": [
            {
              "op": 284,
              "fields": [
                {
                  "id": "cn",
                  "name": "CustomerId/RMN",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=284"
            }
          ],
          "providers": []
        },
        {
          "name": "TTN BroadBand",
          "billers": [
            {
              "op": 213,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=213"
            }
          ],
          "providers": []
        },
        {
          "name": "Vfibernet Broadband",
          "billers": [
            {
              "op": 289,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=289"
            }
          ],
          "providers": []
        },
        {
          "name": "Wish Net Pvt Ltd",
          "billers": [
            {
              "op": 588,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,18}$",
                  "maxLen": 18,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=588"
            }
          ],
          "providers": []
        },
        {
          "name": "BCN Digital",
          "billers": [
            {
              "op": 1490,
              "fields": [
                {
                  "id": "cn",
                  "name": "VC Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1490"
            }
          ],
          "providers": []
        },
        {
          "name": "SGK Broadband",
          "billers": [
            {
              "op": 1491,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z.]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1491"
            }
          ],
          "providers": []
        },
        {
          "name": "Satellite Netcom Private Limited",
          "billers": [
            {
              "op": 1493,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9._@#-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1493"
            }
          ],
          "providers": []
        },
        {
          "name": "NextGen Broadband Pvt Ltd",
          "billers": [
            {
              "op": 1497,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-@_]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1497"
            }
          ],
          "providers": []
        },
        {
          "name": "Vision Hi Speed",
          "billers": [
            {
              "op": 1498,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z\\_\\.\\,\\@]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1498"
            }
          ],
          "providers": []
        },
        {
          "name": "N4U Broadband",
          "billers": [
            {
              "op": 1499,
              "fields": [
                {
                  "id": "cn",
                  "name": "Phone Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9]{1}[0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1499"
            }
          ],
          "providers": []
        },
        {
          "name": "Syncevo Broadband Scify",
          "billers": [
            {
              "op": 1500,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Name/Phone Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z_]{3,26}$",
                  "maxLen": 26,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1500"
            }
          ],
          "providers": []
        },
        {
          "name": "Airtel Wi-Fi recharge",
          "billers": [
            {
              "op": 1574,
              "fields": [
                {
                  "id": "cn",
                  "name": "Broadband Id/landline number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z_]{10,18}$",
                  "minLen": 10,
                  "maxLen": 18,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1574"
            }
          ],
          "providers": []
        },
        {
          "name": "Sgs Broadband",
          "billers": [
            {
              "op": 1584,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Customer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1584"
            }
          ],
          "providers": []
        },
        {
          "name": "Veloxr Telecom Pvt Ltd",
          "billers": [
            {
              "op": 1587,
              "fields": [
                {
                  "id": "cn",
                  "name": "User Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9._@#-]{3,25}$",
                  "minLen": 3,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1587"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "gas",
      "name": "Piped Gas",
      "providerRoot": [
        {
          "name": "Adani Gas",
          "billers": [
            {
              "op": 126,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=126"
            }
          ],
          "providers": []
        },
        {
          "name": "Indian Oil Corporation Ltd-Piped Gas",
          "billers": [
            {
              "op": 677,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 12,
                  "minLen": 12,
                  "name": "Customer Number",
                  "regex": "^[0-9]{12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=677"
            }
          ],
          "providers": []
        },
        {
          "name": "Purba Bharati Gas Pvt Ltd",
          "billers": [
            {
              "op": 762,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 10,
                  "name": "Customer Id",
                  "regex": "^[a-zA-Z0-9]{10,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=762"
            }
          ],
          "providers": []
        },
        {
          "name": "Hindustan Petroleum Corporation Ltd-Piped Gas",
          "billers": [
            {
              "op": 965,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 5,
                  "name": "BP Number",
                  "regex": "^[0-9A-Za-z]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=965"
            }
          ],
          "providers": []
        },
        {
          "name": "AGP City Gas Pvt Ltd",
          "billers": [
            {
              "op": 1063,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 12,
                  "minLen": 12,
                  "name": "CA Number",
                  "regex": "^[0-9]{12,12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1063"
            }
          ],
          "providers": []
        },
        {
          "name": "Goa Natural Gas",
          "billers": [
            {
              "op": 1270,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Customer Id",
                  "regex": "^[0-9A-Za-z]{10,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1270"
            }
          ],
          "providers": []
        },
        {
          "name": "AGP CGD India Pvt Ltd",
          "billers": [
            {
              "op": 1064,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 12,
                  "minLen": 12,
                  "name": "CA Number",
                  "regex": "^[0-9]{12,12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1064"
            }
          ],
          "providers": []
        },
        {
          "name": "Godavari Gas Pvt Ltd",
          "billers": [
            {
              "op": 1102,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 3,
                  "name": "CRN",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                },
                {
                  "id": "invoicetype",
                  "name": "Invoice Type",
                  "type": "LIST",
                  "icon": "V",
                  "maxLen": 30,
                  "minLen": 3,
                  "fieldValues": [
                    "Total Outstanding Amount",
                    "Current Month"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1102"
            }
          ],
          "providers": []
        },
        {
          "name": "Torrent Gas",
          "billers": [
            {
              "op": 1126,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 15,
                  "minLen": 4,
                  "name": "CRN",
                  "regex": "^[0-9]{4,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1126"
            }
          ],
          "providers": []
        },
        {
          "name": "Bajaj Finance Limited Agent Collection",
          "billers": [
            {
              "op": 1127,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 1,
                  "name": "CRN",
                  "regex": "^[0-9A-Za-z]{1,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1127"
            }
          ],
          "providers": []
        },
        {
          "name": "Ajeevak Nidhi Limited",
          "billers": [
            {
              "op": 1132,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 18,
                  "minLen": 2,
                  "name": "Unique Loan Number",
                  "regex": "^[0-9]{2,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1132"
            }
          ],
          "providers": []
        },
        {
          "name": "Rahimatpur Sahakari Bank Ltd",
          "billers": [
            {
              "op": 1141,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 30,
                  "minLen": 3,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1141"
            }
          ],
          "providers": []
        },
        {
          "name": "Amarpadma Credits Pvt Ltd",
          "billers": [
            {
              "op": 1152,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9,()/._'-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1152"
            }
          ],
          "providers": []
        },
        {
          "name": "Arthmate Financing India Private Limited",
          "billers": [
            {
              "op": 1153,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 21,
                  "minLen": 2,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{2,21}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1153"
            }
          ],
          "providers": []
        },
        {
          "name": "Rajasthan Mahila Nidhi",
          "billers": [
            {
              "op": 1154,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 32,
                  "minLen": 17,
                  "name": "MN ID",
                  "regex": "^[0-9A-Za-z]{17,32}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1154"
            }
          ],
          "providers": []
        },
        {
          "name": "Navi Loans",
          "billers": [
            {
              "op": 1162,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 16,
                  "minLen": 9,
                  "name": "Loan Account Number (LAN)",
                  "regex": "^[0-9]{9,16}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1162"
            }
          ],
          "providers": []
        },
        {
          "name": "Strr Nidhi Limited",
          "billers": [
            {
              "op": 1186,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 1,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1186"
            }
          ],
          "providers": []
        },
        {
          "name": "Ummeed Housing Finance Pvt. Ltd.",
          "billers": [
            {
              "op": 1188,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 28,
                  "minLen": 20,
                  "name": "Loan Number",
                  "regex": "^[0-9A-Za-z-]{20,28}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1188"
            }
          ],
          "providers": []
        },
        {
          "name": "Wheelsemi Pvt Ltd",
          "billers": [
            {
              "op": 1189,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 18,
                  "minLen": 13,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]+$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1189"
            }
          ],
          "providers": []
        },
        {
          "name": "Kannattu Finance Nidhi Ltd",
          "billers": [
            {
              "op": 1198,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 24,
                  "minLen": 10,
                  "name": "Loan No",
                  "regex": "^[0-9A-Za-z]{10,24}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1198"
            }
          ],
          "providers": []
        },
        {
          "name": "Kannattu Fingold Finance Pvt Ltd",
          "billers": [
            {
              "op": 1199,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 24,
                  "minLen": 10,
                  "name": "Loan No",
                  "regex": "^[0-9A-Za-z]{10,24}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1199"
            }
          ],
          "providers": []
        },
        {
          "name": "Moneyboxx Finance Limited",
          "billers": [
            {
              "op": 1208,
              "fields": [
                {
                  "id": "cn",
                  "name": "Agreement No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{10,11}$",
                  "minLen": 10,
                  "maxLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1208"
            }
          ],
          "providers": []
        },
        {
          "name": "MAS Financial Services Limited",
          "billers": [
            {
              "op": 1218,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 9,
                  "name": "Loan Account Number",
                  "regex": "^[0-9A-Za-z]{5,9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1218"
            }
          ],
          "providers": []
        },
        {
          "name": "Srlf Micro Care Foundation",
          "billers": [
            {
              "op": 1220,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1220"
            }
          ],
          "providers": []
        },
        {
          "name": "MGM Financiers",
          "billers": [
            {
              "op": 1226,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 15,
                  "name": "Loan Number",
                  "regex": "^[0-9A-Za-z]{1,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1226"
            }
          ],
          "providers": []
        },
        {
          "name": "Reliant Credits India Limited",
          "billers": [
            {
              "op": 1227,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 20,
                  "name": "Loan Id",
                  "regex": "^[a-zA-Z0-9]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1227"
            }
          ],
          "providers": []
        },
        {
          "name": "Visionfund India Private Limited",
          "billers": [
            {
              "op": 1228,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 15,
                  "name": "Client ID",
                  "regex": "^(?:-?\\d){1,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1228"
            }
          ],
          "providers": []
        },
        {
          "name": "IFL Housing Finance Ltd Gold Loan",
          "billers": [
            {
              "op": 1233,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 12,
                  "maxLen": 20,
                  "name": "Loan Account Number",
                  "regex": "^[A-Za-z0-9]{12,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1233"
            }
          ],
          "providers": []
        },
        {
          "name": "IFL Housing Finance Ltd Home Loan",
          "billers": [
            {
              "op": 1234,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 12,
                  "maxLen": 20,
                  "name": "Loan Account Number",
                  "regex": "^[A-Za-z0-9]{12,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1234"
            }
          ],
          "providers": []
        },
        {
          "name": "Dadhich Finserv PVt Ltd",
          "billers": [
            {
              "op": 1209,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1209"
            }
          ],
          "providers": []
        },
        {
          "name": "Art Housing Finance (India) Limited",
          "billers": [
            {
              "op": 1190,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 18,
                  "minLen": 5,
                  "name": "Loan Number",
                  "regex": "^[0-9a-zA-Z-]{5,20}$",
                  "type": "INPUT"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1190"
            }
          ],
          "providers": []
        },
        {
          "name": "BWDA Finance Ltd",
          "billers": [
            {
              "op": 1187,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 2,
                  "name": "Loan Account Number",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1187"
            }
          ],
          "providers": []
        },
        {
          "name": "Rajasthan State Gas Limited",
          "billers": [
            {
              "op": 818,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 15,
                  "minLen": 10,
                  "name": "Customer Id",
                  "regex": "^[0-9]{10,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=818"
            }
          ],
          "providers": []
        },
        {
          "name": "Aavantika Gas Ltd",
          "billers": [
            {
              "op": 221,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]*$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=221"
            }
          ],
          "providers": []
        },
        {
          "name": "Assam Gas Company Limited",
          "billers": [
            {
              "op": 287,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\-]{13}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=287"
            }
          ],
          "providers": []
        },
        {
          "name": "Bhagyanagar Gas Limited",
          "billers": [
            {
              "op": 296,
              "fields": [
                {
                  "id": "cn",
                  "name": "CRN No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{11}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=296"
            }
          ],
          "providers": []
        },
        {
          "name": "Central U.P. Gas Limited",
          "billers": [
            {
              "op": 226,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Code / CRN Number",
                  "type": "INPUT",
                  "minLen": 6,
                  "maxLen": 10,
                  "isnumeric": false,
                  "regex": "^[0-9A-Z]{6,10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=226"
            }
          ],
          "providers": []
        },
        {
          "name": "Charotar Gas Sahakari Mandali Ltd",
          "billers": [
            {
              "op": 212,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,5}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=212"
            }
          ],
          "providers": []
        },
        {
          "name": "Gail Gas Limited",
          "billers": [
            {
              "op": 242,
              "fields": [
                {
                  "id": "cn",
                  "name": "BP NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=242"
            }
          ],
          "providers": []
        },
        {
          "name": "GAIL India",
          "billers": [
            {
              "op": 469,
              "fields": [
                {
                  "id": "cn",
                  "name": "BP NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=469"
            }
          ],
          "providers": []
        },
        {
          "name": "Green Gas Limited(GGL)",
          "billers": [
            {
              "op": 266,
              "fields": [
                {
                  "id": "cn",
                  "name": "CRN Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 11,
                  "maxLen": 17,
                  "regex": "^[0-9A-Za-z]{11,17}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=266"
            }
          ],
          "providers": []
        },
        {
          "name": "Gujarat Gas Ltd",
          "billers": [
            {
              "op": 66,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,15}$",
                  "maxLen": 15,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6789][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                },
                {
                  "id": "emailId",
                  "name": "Email id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+",
                  "maxLen": 50,
                  "icon": "x"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=66"
            }
          ],
          "providers": []
        },
        {
          "name": "Gujarat State Petronet Limited",
          "billers": [
            {
              "op": 535,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=535"
            }
          ],
          "providers": []
        },
        {
          "name": "HCG distribution pvt ltd",
          "billers": [
            {
              "op": 166,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "name": "CRN Number",
                  "regex": "^[a-zA-Z0-9\\-]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=166"
            }
          ],
          "providers": []
        },
        {
          "name": "Indian Oil-Adani Gas Private Limited",
          "billers": [
            {
              "op": 231,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=231"
            }
          ],
          "providers": []
        },
        {
          "name": "Indraprastha Gas Limited (IGL)",
          "billers": [
            {
              "op": 65,
              "fields": [
                {
                  "id": "cn",
                  "name": "BP Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=65"
            }
          ],
          "providers": []
        },
        {
          "name": "HP Oil Gas Private Limited",
          "billers": [
            {
              "op": 884,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Code",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9A-Za-z]{12}$",
                  "minLen": 12,
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=884"
            }
          ],
          "providers": []
        },
        {
          "name": "IRM Energy Limited",
          "billers": [
            {
              "op": 244,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer_ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=244"
            }
          ],
          "providers": []
        },
        {
          "name": "Mahanagar Gas Limited",
          "billers": [
            {
              "op": 38,
              "fields": [
                {
                  "id": "cn",
                  "name": "CA Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=38"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Natural Gas Limited",
          "billers": [
            {
              "op": 202,
              "fields": [
                {
                  "id": "cn",
                  "name": "BP Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7,10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=202"
            }
          ],
          "providers": []
        },
        {
          "name": "Megha Gas",
          "billers": [
            {
              "op": 450,
              "fields": [
                {
                  "id": "cn",
                  "name": "CRN NO",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9,11}$",
                  "maxLen": 11,
                  "minLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=450"
            }
          ],
          "providers": []
        },
        {
          "name": "Naveriya Gas Pvt Ltd",
          "billers": [
            {
              "op": 382,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9}$",
                  "maxLen": 9,
                  "minLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=382"
            }
          ],
          "providers": []
        },
        {
          "name": "Sabarmati Gas Limited (SGL)",
          "billers": [
            {
              "op": 173,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=173"
            }
          ],
          "providers": []
        },
        {
          "name": "Tripura Natural Gas",
          "billers": [
            {
              "op": 176,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=176"
            }
          ],
          "providers": []
        },
        {
          "name": "Unique Central Piped Gases Pvt Ltd (UCPGPL)",
          "billers": [
            {
              "op": 195,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{8}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=195"
            }
          ],
          "providers": []
        },
        {
          "name": "Vadodara Gas Limited",
          "billers": [
            {
              "op": 196,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7}$",
                  "maxLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=196"
            }
          ],
          "providers": []
        },
        {
          "name": "Think Gas Pvt Ltd",
          "billers": [
            {
              "op": 1479,
              "fields": [
                {
                  "id": "cn",
                  "name": "BP Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[\\-a-zA-Z0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                },
                {
                  "icon": "V",
                  "id": "Segment",
                  "isnumeric": false,
                  "maxLen": 22,
                  "minLen": 0,
                  "name": "Segment",
                  "skipIfConnection": true,
                  "type": "LIST",
                  "fieldValues": [
                    "HOUSEHOLD",
                    "COMMERCIAL",
                    "INDUSTRIAL"
                  ]
                },
                {
                  "icon": "V",
                  "id": "Model",
                  "isnumeric": false,
                  "maxLen": 22,
                  "minLen": 0,
                  "name": "Model",
                  "skipIfConnection": true,
                  "type": "LIST",
                  "fieldValues": [
                    "PREPAID",
                    "POSTPAID"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1479"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "lpgBooking",
      "name": "LPG Booking",
      "providerRoot": [
        {
          "name": "Bharat Gas (BPCL)",
          "billers": [
            {
              "op": 288,
              "fields": [
                {
                  "id": "cn",
                  "name": "Registered Contact Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=288"
            }
          ],
          "providers": []
        },
        {
          "name": "Bharat Gas (BPCL) - Commercial",
          "billers": [
            {
              "op": 897,
              "fields": [
                {
                  "id": "cn",
                  "name": "LPG_ID or Contact Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$|^[0-9]{17}$",
                  "minLen": 10,
                  "maxLen": 17,
                  "icon": "V"
                },
                {
                  "id": "Product Qty",
                  "name": "Product Qty",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,3}$",
                  "icon": "V"
                },
                {
                  "id": "SV Number",
                  "name": "SV Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "maxLen": 10,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=897"
            }
          ],
          "providers": []
        },
        {
          "name": "Indane Gas (Indian Oil)",
          "billers": [
            {
              "op": 293,
              "fields": [
                {
                  "id": "cn",
                  "name": "Registered Contact Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=293"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "water",
      "name": "Water",
      "providerRoot": [
        {
          "name": "Bangalore Water Supply and Sewerage Board",
          "billers": [
            {
              "op": 70,
              "fields": [
                {
                  "id": "cn",
                  "name": "RR Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 8,
                  "maxLen": 8,
                  "regex": ".+",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=70"
            }
          ],
          "providers": []
        },
        {
          "name": "Shimla Jal Prabandhan",
          "billers": [
            {
              "op": 751,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9-_]{3,30}$",
                  "minLen": 3,
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=751"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Halondi Nal Paani Puravatha",
          "billers": [
            {
              "op": 968,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,18}$",
                  "minLen": 1,
                  "maxLen": 18,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=968"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Jeevan Pradhikaran 105Vrr Amravati",
          "billers": [
            {
              "op": 923,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=923"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Jeevan Pradikaran Daryapur",
          "billers": [
            {
              "op": 954,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=954"
            }
          ],
          "providers": []
        },
        {
          "name": "Chandrapur Municipal Corporation",
          "billers": [
            {
              "op": 956,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{2,14}$",
                  "minLen": 2,
                  "maxLen": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=956"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Jeevan Pradikaran 79Vrr Anjangaon",
          "billers": [
            {
              "op": 922,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,5}$",
                  "minLen": 1,
                  "maxLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=922"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Jeevan Pradhikaran Anjangaon",
          "billers": [
            {
              "op": 924,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,5}$",
                  "minLen": 1,
                  "maxLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=924"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Jeevan Pradhikaran 156Vrr Daryapur",
          "billers": [
            {
              "op": 925,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,5}$",
                  "minLen": 1,
                  "maxLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=925"
            }
          ],
          "providers": []
        },
        {
          "name": "Mysuruvani Vilas Water Works 24X7",
          "billers": [
            {
              "op": 926,
              "fields": [
                {
                  "id": "cn",
                  "name": "Tap No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,7}$",
                  "minLen": 1,
                  "maxLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=926"
            }
          ],
          "providers": []
        },
        {
          "name": "Maharashtra Jeevan Pradhikaran Amravati Urban",
          "billers": [
            {
              "op": 939,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,5}$",
                  "minLen": 1,
                  "maxLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=939"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Ambegaon",
          "billers": [
            {
              "op": 1046,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1046"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Nevari",
          "billers": [
            {
              "op": 1047,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1047"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Hingangaon Budruk",
          "billers": [
            {
              "op": 1048,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1048"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Kheradewangi",
          "billers": [
            {
              "op": 1049,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1049"
            }
          ],
          "providers": []
        },
        {
          "name": "Gram Panchayat Wangi - Water",
          "billers": [
            {
              "op": 1073,
              "fields": [
                {
                  "id": "cn",
                  "name": "Water Tax Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.\\/:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1073"
            }
          ],
          "providers": []
        },
        {
          "name": "Thane Municipal Corporation Water Tax",
          "billers": [
            {
              "op": 824,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "maxLen": 48,
                  "minLen": 1,
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_\\/]{1,48}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=824"
            }
          ],
          "providers": []
        },
        {
          "name": "Talegaon Dabhade Nagar Parishad - Water Payments",
          "billers": [
            {
              "op": 825,
              "fields": [
                {
                  "id": "cn",
                  "name": "Water Bill ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 4,
                  "regex": "^[A-Za-z0-9]{4,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=825"
            }
          ],
          "providers": []
        },
        {
          "name": "Chennai Metropolitan Water Supply And Sewerage Board",
          "billers": [
            {
              "op": 849,
              "fields": [
                {
                  "id": "cn",
                  "name": "Bill Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 11,
                  "regex": "^[0-9A-Za-z]{11,13}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=849"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhya Pradesh Urban Administration and Development - Water",
          "billers": [
            {
              "op": 370,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 55,
                  "name": "ULB Code",
                  "regex": "^[a-zA-Z0-9_]*$",
                  "type": "INPUT"
                },
                {
                  "icon": "V",
                  "id": "ConNo",
                  "isnumeric": false,
                  "maxLen": 30,
                  "name": "Consumer Number",
                  "regex": "^[a-zA-Z0-9_]*$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=370"
            }
          ],
          "providers": []
        },
        {
          "name": "Jejuri Nagarparishad Water",
          "billers": [
            {
              "op": 704,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{}$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=704"
            }
          ],
          "providers": []
        },
        {
          "name": "Public Works Department (PWD),Goa",
          "billers": [
            {
              "op": 705,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": " ^[0-9]{4,10}$",
                  "minLen": 4,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=705"
            }
          ],
          "providers": []
        },
        {
          "name": "MCGM Water Department",
          "billers": [
            {
              "op": 644,
              "fields": [
                {
                  "id": "cn",
                  "name": "Water Connection Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{2}[a-zA-Z0-9@,$&amp;#*]{1}[0-9]{7,12}$",
                  "minLen": 10,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=644"
            }
          ],
          "providers": []
        },
        {
          "name": "Delhi Jal Board",
          "billers": [
            {
              "op": 262,
              "fields": [
                {
                  "id": "cn",
                  "name": "K No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=262"
            }
          ],
          "providers": []
        },
        {
          "name": "Delhi Development Authority (DDA) - Water",
          "billers": [
            {
              "op": 273,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,13}$",
                  "maxLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=273"
            }
          ],
          "providers": []
        },
        {
          "name": "Department of Public Health Engineering-Water, Mizoram",
          "billers": [
            {
              "op": 276,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\-]{5,15}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=276"
            }
          ],
          "providers": []
        },
        {
          "name": "Greater Warangal Municipal Corporation",
          "billers": [
            {
              "op": 241,
              "fields": [
                {
                  "id": "cn",
                  "name": "CONNECTION ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{7,15}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=241"
            }
          ],
          "providers": []
        },
        {
          "name": "Haryana Urban Development Authority",
          "billers": [
            {
              "op": 264,
              "fields": [
                {
                  "id": "cn",
                  "name": "Site Code",
                  "type": "INPUT",
                  "regex": "^[0-9]{6,10}$",
                  "isnumeric": true,
                  "maxLen": 10,
                  "icon": "z"
                },
                {
                  "id": "consumerNumber",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=264"
            }
          ],
          "providers": []
        },
        {
          "name": "Hyderabad Metropolitan Water Supply and Sewerage Board",
          "billers": [
            {
              "op": 211,
              "fields": [
                {
                  "id": "cn",
                  "name": "CAN Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=211"
            }
          ],
          "providers": []
        },
        {
          "name": "Jammu Kashmir Water Billing-JKPHE Jammu",
          "billers": [
            {
              "op": 581,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{3,15}",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=581"
            }
          ],
          "providers": []
        },
        {
          "name": "Jammu Kashmir Water Billing-JKPHE Kashmir",
          "billers": [
            {
              "op": 580,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{3,15}",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=580"
            }
          ],
          "providers": []
        },
        {
          "name": "Kerala Water Authority (KWA)",
          "billers": [
            {
              "op": 298,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "maxLen": 10,
                  "minLen": 10,
                  "regex": "^[1-9]\\d{9}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=298"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation of Amritsar",
          "billers": [
            {
              "op": 279,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 9,
                  "regex": "^[0-9]{1,9}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Consumer Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=279"
            }
          ],
          "providers": []
        },
        {
          "name": "Kolkata Municipal Corporation - Market Regular Demand",
          "billers": [
            {
              "op": 1174,
              "fields": [
                {
                  "id": "cn",
                  "name": "Stall Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 11,
                  "maxLen": 11,
                  "regex": "^[0-9]{11,11}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "d"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1174"
            }
          ],
          "providers": []
        },
        {
          "name": "Agartala Municipal Corporation",
          "billers": [
            {
              "op": 1191,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 6,
                  "maxLen": 8,
                  "regex": "^[A-Za-z0-9]{6,8}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1191"
            }
          ],
          "providers": []
        },
        {
          "name": "Gramin Nalpani Yojana Grampanchayat Shiye",
          "billers": [
            {
              "op": 1258,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 18,
                  "name": "Customer Number",
                  "regex": "^[a-zA-Z0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1258"
            }
          ],
          "providers": []
        },
        {
          "name": "Ulhasnagar Municipal Corporation",
          "billers": [
            {
              "op": 1275,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 13,
                  "maxLen": 14,
                  "name": "Property Number",
                  "regex": "^[0-9A-Za-z]{13,14}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1275"
            }
          ],
          "providers": []
        },
        {
          "name": "Pachgaon Grampanchayat",
          "billers": [
            {
              "op": 1300,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 18,
                  "name": "Customer Number",
                  "regex": "^[a-zA-Z0-9]{1,18}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1300"
            }
          ],
          "providers": []
        },
        {
          "name": "Directorate of Land Revenue and Settlement Dept - Mizoram",
          "billers": [
            {
              "op": 1192,
              "fields": [
                {
                  "id": "cn",
                  "name": "Family ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 12,
                  "maxLen": 16,
                  "regex": "^[A-Za-z0-9]{12,16}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1192"
            }
          ],
          "providers": []
        },
        {
          "name": "Dewas Municipal Corporation",
          "billers": [
            {
              "op": 1245,
              "fields": [
                {
                  "id": "cn",
                  "name": "Identification Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1245"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhya Pradesh Urban (e-Nagarpalika)- Water",
          "billers": [
            {
              "op": 370,
              "fields": [
                {
                  "id": "cn",
                  "name": "ULB Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 55,
                  "icon": "V"
                },
                {
                  "id": "ConNo",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=370"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Chandigarh",
          "billers": [
            {
              "op": 330,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No without(/)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 7,
                  "maxLen": 20,
                  "regex": "^[0-9A-Za-z]{7,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=330"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Gurugram Water",
          "billers": [
            {
              "op": 185,
              "fields": [
                {
                  "id": "cn",
                  "name": "Site Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 6,
                  "maxLen": 21,
                  "regex": "^[A-Za-z_ 0-9]{7,20}$",
                  "hint": "GURGAON_I 131419",
                  "icon": "V"
                },
                {
                  "id": "consumerNumber",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "minLen": 6,
                  "maxLen": 15,
                  "regex": "^[0-9]{6,15}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=185"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Jalandhar",
          "billers": [
            {
              "op": 220,
              "fields": [
                {
                  "id": "cn",
                  "name": "W/s ID No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{2,9}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Consumer Mobile Number",
                  "type": "INPUT",
                  "regex": "^[0-9]{10}$",
                  "isnumeric": true,
                  "maxLen": 10,
                  "icon": "z"
                },
                {
                  "id": "emailId",
                  "name": "Consumer Email Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$",
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=220"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Ludhiana - Water",
          "billers": [
            {
              "op": 222,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "regex": "^[0-9]{10}$",
                  "isnumeric": true,
                  "maxLen": 10,
                  "icon": "z"
                },
                {
                  "id": "emailId",
                  "name": "Email Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$",
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=222"
            }
          ],
          "providers": []
        },
        {
          "name": "Mysuru City Corporation",
          "billers": [
            {
              "op": 268,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,7}$",
                  "maxLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=268"
            }
          ],
          "providers": []
        },
        {
          "name": "New Delhi Municipal Council (NDMC) - Water",
          "billers": [
            {
              "op": 218,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8}$",
                  "minLen": 8,
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=218"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Nigam Aligarh - Water",
          "billers": [
            {
              "op": 509,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection/Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,25}$",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=509"
            }
          ],
          "providers": []
        },
        {
          "name": "Port Blair Municipal Council - Water",
          "billers": [
            {
              "op": 564,
              "fields": [
                {
                  "id": "cn",
                  "name": "Citizen Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=564"
            }
          ],
          "providers": []
        },
        {
          "name": "Public Health Engineering Department, Haryana",
          "billers": [
            {
              "op": 514,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,50}$",
                  "minLen": 1,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=514"
            }
          ],
          "providers": []
        },
        {
          "name": "Pune Municipal Corporation",
          "billers": [
            {
              "op": 157,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=157"
            }
          ],
          "providers": []
        },
        {
          "name": "Punjab Municipal Corporations/Councils",
          "billers": [
            {
              "op": 270,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1}[1-9]{1}[0-9]{8}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=270"
            }
          ],
          "providers": []
        },
        {
          "name": "Ranchi Municipal Corporation",
          "billers": [
            {
              "op": 256,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{6,25}$",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=256"
            }
          ],
          "providers": []
        },
        {
          "name": "Silvassa Municipal Council",
          "billers": [
            {
              "op": 257,
              "fields": [
                {
                  "id": "cn",
                  "name": "Form No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,14}$",
                  "max": 14,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=257"
            }
          ],
          "providers": []
        },
        {
          "name": "Shivamogga City Corporation - Water Tax",
          "billers": [
            {
              "op": 578,
              "fields": [
                {
                  "id": "cn",
                  "name": "Sequence Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "max": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=578"
            }
          ],
          "providers": []
        },
        {
          "name": "Surat Municipal Corporation - Water",
          "billers": [
            {
              "op": 232,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z/]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=232"
            }
          ],
          "providers": []
        },
        {
          "name": "Ujjain Nagar Nigam - PHED",
          "billers": [
            {
              "op": 236,
              "fields": [
                {
                  "id": "cn",
                  "name": "Business Partner Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{8,10}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=236"
            }
          ],
          "providers": []
        },
        {
          "name": "Urban Improvement Trust (UIT) - Bhiwadi",
          "billers": [
            {
              "op": 178,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{3,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=178"
            }
          ],
          "providers": []
        },
        {
          "name": "Uttarakhand Jal Sansthan",
          "billers": [
            {
              "op": 149,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number (Last 7 Digits)",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7}$",
                  "minLen": 7,
                  "maxLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=149"
            }
          ],
          "providers": []
        },
        {
          "name": "Vasai Virar Municipal Corporation - Water",
          "billers": [
            {
              "op": 565,
              "fields": [
                {
                  "id": "cn",
                  "name": "Zone ID/Ward ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_\\/]{15,60}$",
                  "minLen": 15,
                  "maxLen": 60,
                  "icon": "V"
                },
                {
                  "id": "ConnectionNo",
                  "name": "Connection No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/]{2,25}$",
                  "minLen": 2,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=565"
            }
          ],
          "providers": []
        },
        {
          "name": "Vatva Industrial Estate Infrastructure Development Ltd",
          "billers": [
            {
              "op": 540,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=540"
            }
          ],
          "providers": []
        },
        {
          "name": "City Municipal Council –Ilkal",
          "billers": [
            {
              "op": 624,
              "fields": [
                {
                  "id": "cn",
                  "name": "Sequence Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,7}$",
                  "minLen": 1,
                  "maxLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=624"
            }
          ],
          "providers": []
        },
        {
          "name": "Vijayapura Water Board",
          "billers": [
            {
              "op": 595,
              "fields": [
                {
                  "id": "cn",
                  "name": "Sequence Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{1,9}$",
                  "minLen": 1,
                  "maxLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=595"
            }
          ],
          "providers": []
        },
        {
          "name": "Puducherry Public Health Division PWD",
          "billers": [
            {
              "op": 1487,
              "fields": [
                {
                  "id": "cn",
                  "name": "Policy Code Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{1,3}[/][0-9a-zA-Z]{1,7}$",
                  "maxLen": 11,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1487"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Aitawade Khurd Water",
          "billers": [
            {
              "op": 1406,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 46,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1406"
            }
          ],
          "providers": []
        },
        {
          "name": "Public Health Engineering Department - Rajasthan",
          "billers": [
            {
              "op": 1571,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "maxLen": 12,
                  "minLen": 12,
                  "name": "Emitra CID Code",
                  "regex": "^[0-9]{12}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1571"
            }
          ],
          "providers": []
        },
        {
          "name": "Odisha Municipal Payments - Water Tax",
          "billers": [
            {
              "op": 1290,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 9,
                  "maxLen": 21,
                  "name": "WNS (Water Services)",
                  "regex": "^[0-9A-Za-z-]{9,21}$",
                  "type": "INPUT"
                },
                {
                  "id": "ulbname",
                  "name": "ULB Name",
                  "type": "LIST",
                  "fieldValues": [
                    "Anandapur",
                    "Angul",
                    "Aska",
                    "Athagarh",
                    "Athmallik",
                    "Attabira",
                    "Balangir",
                    "Balasore",
                    "Balimela",
                    "Balliguda",
                    "Balugaon",
                    "Banki",
                    "Banpur",
                    "Bargarh",
                    "Barbil",
                    "Baripada",
                    "Barpali",
                    "Basudevpur",
                    "Bellaguntha",
                    "Belpahar",
                    "Bhadrak",
                    "Bhanjanagar",
                    "Bhawanipatna",
                    "Bhuban",
                    "Bijepur",
                    "Binka",
                    "Boudhgarh",
                    "Brajrajnagar",
                    "Buguda",
                    "Champua",
                    "Chandbali",
                    "Chatrapur",
                    "Chikiti",
                    "Choudwar",
                    "Cuttack",
                    "Daspalla",
                    "Deogarh",
                    "Dhenkanal",
                    "Dharamgarh",
                    "Dhamnagar",
                    "Digapahandi",
                    "G.Udayagiri",
                    "Ganjam",
                    "Gopalpur",
                    "Gudari",
                    "Gunupur",
                    "Hinjilicut",
                    "Hindol",
                    "Jagatsinghpur",
                    "Jajpur",
                    "Jaleswar",
                    "Jatni",
                    "Jeypore",
                    "Jharsuguda",
                    "Joda",
                    "Junagarh",
                    "Kabisuryanagar",
                    "Kamakhyanagar",
                    "Kantabanji",
                    "Karanjia",
                    "Kashinagar",
                    "Khandapada",
                    "Khariar",
                    "Khariar Road",
                    "Khordha",
                    "Kodala",
                    "Konark",
                    "Koraput",
                    "Kotpad",
                    "Kuchinda",
                    "Malkangiri",
                    "Nayagarh",
                    "Nilgiri",
                    "Nimapara",
                    "Nuapada",
                    "Odagaon",
                    "Padampur",
                    "Paradeep",
                    "Paralakhemundi",
                    "Patnagarh",
                    "Pattamundai",
                    "Phulbani",
                    "Pipli",
                    "Polasara",
                    "Puri",
                    "Purushottampur",
                    "Rairangpur",
                    "Rajgangpur",
                    "Rambha",
                    "Ranpur",
                    "Rayagada",
                    "Redhakhol",
                    "Remuna",
                    "Rourkela",
                    "Sambalpur",
                    "Sonepur",
                    "Soro",
                    "Sundargarh",
                    "Surada",
                    "Sunabeda",
                    "Talcher",
                    "Tarbha",
                    "Titilagarh",
                    "Tusura",
                    "Udala",
                    "Umerkote",
                    "Vyasanagar"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1290"
            }
          ],
          "providers": []
        },
        {
          "name": "Hubli Dharwad Municipal Corporation Water",
          "billers": [
            {
              "op": 1597,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "minLen": 5,
                  "maxLen": 10,
                  "name": "Place",
                  "type": "LIST",
                  "fieldValues": [
                    "Dharwad",
                    "Hubli"
                  ]
                },
                {
                  "icon": "z",
                  "id": "RR No",
                  "minLen": 1,
                  "maxLen": 30,
                  "name": "RR No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,30}$"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1597"
            }
          ],
          "providers": []
        },
        {
          "name": "Mira Bhayander Municipal Corporation-Water",
          "billers": [
            {
              "op": 1598,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 8,
                  "maxLen": 25,
                  "name": "Connection No.",
                  "regex": "^[A-Za-z0-9]{8,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1598"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "cable",
      "name": "Digital Cable TV",
      "providerRoot": [
        {
          "name": "Asianet Digital",
          "billers": [
            {
              "op": 435,
              "fields": [
                {
                  "id": "cn",
                  "name": "Subscriber Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9-]{6,12}$",
                  "maxLen": 12,
                  "minLen": 6,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=435"
            }
          ],
          "providers": []
        },
        {
          "name": "GTPL Hathway Limited",
          "billers": [
            {
              "op": 675,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 4,
                  "name": "Customer ID",
                  "regex": "^[A-Za-z0-9]{4,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=675"
            }
          ],
          "providers": []
        },
        {
          "name": "St Sebastian Cable Network",
          "billers": [
            {
              "op": 1100,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 1,
                  "name": "CRF Number",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1100"
            }
          ],
          "providers": []
        },
        {
          "name": "CATV DIGITAL",
          "billers": [
            {
              "op": 1118,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 4,
                  "name": "Mobile No./Account No./MAC ID-Card No./STB No",
                  "regex": "^[0-9A-Za-z@_.:-]{4,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1118"
            }
          ],
          "providers": []
        },
        {
          "name": "Angel Cable And Broadband Service",
          "billers": [
            {
              "op": 1172,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 10,
                  "minLen": 1,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1172"
            }
          ],
          "providers": []
        },
        {
          "name": "Satellite Cable Communication",
          "billers": [
            {
              "op": 797,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 7,
                  "name": "SetTop Box Number OR Smart Card Number",
                  "regex": "^[A-Za-z0-9]{7,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=797"
            }
          ],
          "providers": []
        },
        {
          "name": "Poochakal Cable Vision",
          "billers": [
            {
              "op": 950,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "name": "Customer Id",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=950"
            }
          ],
          "providers": []
        },
        {
          "name": "Alka Vishwadarshan",
          "billers": [
            {
              "op": 967,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 10,
                  "name": "Card No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{10,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=967"
            }
          ],
          "providers": []
        },
        {
          "name": "Aryan Cable Network",
          "billers": [
            {
              "op": 969,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "name": "Customer ID",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=969"
            }
          ],
          "providers": []
        },
        {
          "name": "Star Samir Cable Network",
          "billers": [
            {
              "op": 990,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 1,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=990"
            }
          ],
          "providers": []
        },
        {
          "name": "Cochin Cable Vision",
          "billers": [
            {
              "op": 997,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Customer ID",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=997"
            }
          ],
          "providers": []
        },
        {
          "name": "New Airnet Cable",
          "billers": [
            {
              "op": 999,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Customer ID",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=999"
            }
          ],
          "providers": []
        },
        {
          "name": "Bapi Electric And Cable Network",
          "billers": [
            {
              "op": 1029,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1029"
            }
          ],
          "providers": []
        },
        {
          "name": "Channel Vision Cable TV Network",
          "billers": [
            {
              "op": 1030,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 40,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,40}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1030"
            }
          ],
          "providers": []
        },
        {
          "name": "Devi Sat Vision Cable TV Network",
          "billers": [
            {
              "op": 1031,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Bill No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1031"
            }
          ],
          "providers": []
        },
        {
          "name": "Dishergarh Cable TV",
          "billers": [
            {
              "op": 1032,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 15,
                  "name": "Unique Subscriber Number",
                  "regex": "^[0-9]{1,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1032"
            }
          ],
          "providers": []
        },
        {
          "name": "Maa Durga Cable Broadband Service",
          "billers": [
            {
              "op": 1033,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 15,
                  "name": "Unique Client ID",
                  "regex": "^[0-9]{1,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1033"
            }
          ],
          "providers": []
        },
        {
          "name": "Mondal Cable TV Network",
          "billers": [
            {
              "op": 1034,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1034"
            }
          ],
          "providers": []
        },
        {
          "name": "New Samananta Cable",
          "billers": [
            {
              "op": 1035,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1035"
            }
          ],
          "providers": []
        },
        {
          "name": "Parbati Cable Network",
          "billers": [
            {
              "op": 1036,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 13,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1036"
            }
          ],
          "providers": []
        },
        {
          "name": "Sakthi Cable TV",
          "billers": [
            {
              "op": 1054,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 20,
                  "name": "Bill No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1054"
            }
          ],
          "providers": []
        },
        {
          "name": "Rudra Communication",
          "billers": [
            {
              "op": 1061,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 20,
                  "name": "Customer Id",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1061"
            }
          ],
          "providers": []
        },
        {
          "name": "High Range Communication",
          "billers": [
            {
              "op": 1062,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 20,
                  "name": "Customer Id",
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1062"
            }
          ],
          "providers": []
        },
        {
          "name": "UCN Cable",
          "billers": [
            {
              "op": 963,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 4,
                  "name": "Set Top Box Number",
                  "regex": "^[0-9a-zA-Z]{4,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=963"
            }
          ],
          "providers": []
        },
        {
          "name": "TCN Digital",
          "billers": [
            {
              "op": 891,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 30,
                  "minLen": 3,
                  "name": "VC Number",
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=891"
            }
          ],
          "providers": []
        },
        {
          "name": "Sangli Media communication",
          "billers": [
            {
              "op": 832,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 15,
                  "minLen": 8,
                  "name": "Cid",
                  "regex": "^[A-Za-z0-9]{8,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=832"
            }
          ],
          "providers": []
        },
        {
          "name": "Golden Cable Network",
          "billers": [
            {
              "op": 858,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 1,
                  "name": "Consumer No",
                  "regex": "^[a-zA-Z0-9,()&amp;/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=858"
            }
          ],
          "providers": []
        },
        {
          "name": "Deetech Cable Network",
          "billers": [
            {
              "op": 865,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 13,
                  "minLen": 1,
                  "name": "Unique Registration No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,13}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=865"
            }
          ],
          "providers": []
        },
        {
          "name": "Amrita Cable Network",
          "billers": [
            {
              "op": 881,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 25,
                  "minLen": 10,
                  "name": "Consumer Id No",
                  "regex": "^[a-zA-Z0-9,()/._''-]{10,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=881"
            }
          ],
          "providers": []
        },
        {
          "name": "Intermedia Cable Communication Pvt Ltd",
          "billers": [
            {
              "op": 718,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 7,
                  "name": "SetTop Box Number",
                  "regex": "^[A-Za-z0-9]{7,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=718"
            }
          ],
          "providers": []
        },
        {
          "name": "Hathway Digital TV",
          "billers": [
            {
              "op": 138,
              "fields": [
                {
                  "id": "cn",
                  "name": "Account No/ VC No/ MAC ID/ VSC No/ RMN",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[1][0-9]{9}$|^[0-9]{12}$|^[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}$|^[Nn][0-9]{11}$|^[1-9]{1}[0-9]{9}$",
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=138"
            }
          ],
          "providers": []
        },
        {
          "name": "Incable Digital TV",
          "billers": [
            {
              "op": 141,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Account Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[1,2][0-9]{7}$",
                  "maxLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=141"
            }
          ],
          "providers": []
        },
        {
          "name": "INDigital",
          "billers": [
            {
              "op": 596,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Id / STB Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{7,20}$",
                  "maxLen": 25,
                  "minLen": 8,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=596"
            }
          ],
          "providers": []
        },
        {
          "name": "Sun Cable Network",
          "billers": [
            {
              "op": 1508,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Customer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1508"
            }
          ],
          "providers": []
        },
        {
          "name": "Mobiezy",
          "billers": [
            {
              "op": 1316,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 20,
                  "name": "Customer ID/Viewing Card Number",
                  "regex": "^[0-9A-Za-z]{5,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1316"
            }
          ],
          "providers": []
        },
        {
          "name": "Jemari Cable Darshan",
          "billers": [
            {
              "op": 1366,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1366"
            }
          ],
          "providers": []
        },
        {
          "name": "Ayyappa Swamy Siti Cable Network Badvel",
          "billers": [
            {
              "op": 1307,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 40,
                  "name": "Subscriber Number",
                  "regex": "^[a-zA-Z0-9]{4,40}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1307"
            }
          ],
          "providers": []
        },
        {
          "name": "Maa Sidheswari Enterprises",
          "billers": [
            {
              "op": 1263,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 10,
                  "maxLen": 10,
                  "name": "Mobile Number",
                  "regex": "^[0-9]{10,10}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1263"
            }
          ],
          "providers": []
        },
        {
          "name": "Maa Tara Network",
          "billers": [
            {
              "op": 1264,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Unique Consumer Number",
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1264"
            }
          ],
          "providers": []
        },
        {
          "name": "Santishree Cable",
          "billers": [
            {
              "op": 1301,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 13,
                  "maxLen": 13,
                  "name": "Unique Consumer Number",
                  "regex": "^[A-Z]{4}[0-9]{9}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1301"
            }
          ],
          "providers": []
        },
        {
          "name": "CCNDS Cable",
          "billers": [
            {
              "op": 1237,
              "fields": [
                {
                  "id": "cn",
                  "name": "Recharge Type",
                  "type": "LIST",
                  "fieldValues": [
                    "Franchise",
                    "Customer"
                  ],
                  "icon": "V"
                },
                {
                  "id": "VCNumberCardNumberFranchiseeCode",
                  "name": "VC Number / Card Number / Franchisee Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-]{2,50}$",
                  "maxLen": 50,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1237"
            }
          ],
          "providers": []
        },
        {
          "name": "Lugvalley Digital Cable Network",
          "billers": [
            {
              "op": 1578,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer No.",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,20}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1578"
            }
          ],
          "providers": []
        },
        {
          "name": "Sweety Cable",
          "billers": [
            {
              "op": 1586,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Reference Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,15}$",
                  "minLen": 1,
                  "maxLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1586"
            }
          ],
          "providers": []
        },
        {
          "name": "Sri Vijayalaksmhi Digital Vision",
          "billers": [
            {
              "op": 723,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 20,
                  "name": "Username/Phonenumber",
                  "regex": "^[A-Za-z0-9]{}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=723"
            }
          ],
          "providers": []
        },
        {
          "name": "Haur Cable Network",
          "billers": [
            {
              "op": 1591,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": true,
                  "minLen": 1,
                  "maxLen": 15,
                  "name": "Unique Reference Number",
                  "regex": "^[0-9]{1,15}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1591"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "datacard",
      "name": "Data Card",
      "providerRoot": [
        {
          "name": "JioFi",
          "billers": [
            {
              "op": 143,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": false,
                  "isnumeric": true,
                  "regex": "^[6789][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=143"
            },
            {
              "op": 144,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "contactPicker": true,
                  "mapOpAndCir": true,
                  "isnumeric": true,
                  "regex": "^[6789][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a",
                  "isAboveOperator": true
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=144"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "muncipality",
      "name": "Property Tax",
      "providerRoot": [
        {
          "name": "Raipur Municipal Corporation",
          "billers": [
            {
              "op": 746,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]$",
                  "maxLen": 18,
                  "minLen": 12,
                  "icon": "V"
                },
                {
                  "id": "WardNo",
                  "name": "Ward No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[a-zA-Z0-9]$",
                  "maxLen": 3,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=746"
            }
          ],
          "providers": []
        },
        {
          "name": "Siliguri Jalpaiguri Development Authority",
          "billers": [
            {
              "op": 790,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{1,11}$",
                  "maxLen": 11,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=790"
            }
          ],
          "providers": []
        },
        {
          "name": "Pimpri Chinchwad Municipal Corporation (PCMC)",
          "billers": [
            {
              "op": 947,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9.]{13,15}$",
                  "maxLen": 15,
                  "minLen": 13,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=947"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Palika Jaitaran",
          "billers": [
            {
              "op": 960,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Reg No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=960"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Palika Parishad Muzaffarnagar",
          "billers": [
            {
              "op": 1006,
              "fields": [
                {
                  "id": "cn",
                  "name": "PTIN",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{2,17}$",
                  "maxLen": 17,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1006"
            }
          ],
          "providers": []
        },
        {
          "name": "Varanasi Nagar Nigam Property Tax",
          "billers": [
            {
              "op": 1027,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9.\\/-]{2,10}$",
                  "maxLen": 10,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1027"
            }
          ],
          "providers": []
        },
        {
          "name": "Tamil Nadu Civil Supplies And Customer Protection Dept",
          "billers": [
            {
              "op": 1044,
              "fields": [
                {
                  "id": "cn",
                  "name": "Registration Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{2,20}$",
                  "maxLen": 20,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1044"
            }
          ],
          "providers": []
        },
        {
          "name": "Gram Panchayat Dhamner",
          "billers": [
            {
              "op": 1056,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Tax Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1056"
            }
          ],
          "providers": []
        },
        {
          "name": "Raha Municipal Corporation",
          "billers": [
            {
              "op": 1066,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Ref No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1066"
            }
          ],
          "providers": []
        },
        {
          "name": "Gram Panchayat Wangi",
          "billers": [
            {
              "op": 1072,
              "fields": [
                {
                  "id": "cn",
                  "name": "Unique Ref No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z@_.\\/:-]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1072"
            }
          ],
          "providers": []
        },
        {
          "name": "Vadodara Municipal Corporation Property Tax",
          "billers": [
            {
              "op": 1086,
              "fields": [
                {
                  "id": "cn",
                  "name": "Census Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{2}[-][0-9]{2}[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}[-][0-9]{3}$",
                  "maxLen": 21,
                  "minLen": 21,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1086"
            }
          ],
          "providers": []
        },
        {
          "name": "Tarapith Rampurhat Development Authority(TRDA)",
          "billers": [
            {
              "op": 1091,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{3,12}$",
                  "maxLen": 12,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1091"
            }
          ],
          "providers": []
        },
        {
          "name": "Vadiyeraibag Grampanchayat",
          "billers": [
            {
              "op": 1133,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Tax Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1133"
            }
          ],
          "providers": []
        },
        {
          "name": "Patna Municipal Corporation",
          "billers": [
            {
              "op": 1142,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{7,11}$",
                  "maxLen": 11,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1142"
            }
          ],
          "providers": []
        },
        {
          "name": "Vadiyeraibag Gp Water Tax",
          "billers": [
            {
              "op": 1134,
              "fields": [
                {
                  "id": "cn",
                  "name": "Water Tax Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/]{3,30}$",
                  "maxLen": 30,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1134"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Nevari",
          "billers": [
            {
              "op": 1040,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1040"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Kheradewangi",
          "billers": [
            {
              "op": 1041,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1041"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Ambegaon",
          "billers": [
            {
              "op": 1042,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1042"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Hingangaon Budruk",
          "billers": [
            {
              "op": 1043,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "CustomerMobile",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10,10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1043"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Halondi Gram Nidhi",
          "billers": [
            {
              "op": 952,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,18}$",
                  "maxLen": 18,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=952"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Of The City Of Chandrapur",
          "billers": [
            {
              "op": 966,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,6}$",
                  "maxLen": 6,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "id": "WardNo",
                  "name": "Ward Number",
                  "type": "INPUT",
                  "regex": "^[A-Za-z0-9]{1,6}$",
                  "isnumeric": false,
                  "maxLen": 6,
                  "icon": "z"
                },
                {
                  "id": "PartitionNumber",
                  "name": "Partition Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,5}$",
                  "maxLen": 5,
                  "icon": "z"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=966"
            }
          ],
          "providers": []
        },
        {
          "name": "NAGARPALIKA PARISAD KHODA GHAZIABAD",
          "billers": [
            {
              "op": 901,
              "fields": [
                {
                  "id": "cn",
                  "name": "Pin Identification No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,15}$",
                  "maxLen": 15,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=901"
            }
          ],
          "providers": []
        },
        {
          "name": "RDPR - KARNATAKA - BAPUJI SEVA KENDRA",
          "billers": [
            {
              "op": 1000,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{2,18}$",
                  "maxLen": 18,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1000"
            }
          ],
          "providers": []
        },
        {
          "name": "Ajmer Nagar Nigam",
          "billers": [
            {
              "op": 798,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{9,15}$",
                  "maxLen": 15,
                  "minLen": 9,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=798"
            }
          ],
          "providers": []
        },
        {
          "name": "Kolkata Municipla Corporation",
          "billers": [
            {
              "op": 885,
              "fields": [
                {
                  "id": "cn",
                  "name": "Assesse No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{12,12}$",
                  "maxLen": 12,
                  "minLen": 12,
                  "icon": "V"
                },
                {
                  "id": "Mobile Number",
                  "maxLen": 10,
                  "minLen": 10,
                  "isnumeric": true,
                  "name": "Mobile Number",
                  "regex": "^[6-9][0-9]{9}$",
                  "icon": "J",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=885"
            }
          ],
          "providers": []
        },
        {
          "name": "Thane Municipal Corporation Property Tax",
          "billers": [
            {
              "op": 822,
              "fields": [
                {
                  "id": "cn",
                  "name": "ConsumerNumber",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9\\@\\-\\.\\_\\/]{1,48}$",
                  "maxLen": 48,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=822"
            }
          ],
          "providers": []
        },
        {
          "name": "Commissioner and Director of Municipal Administration Hyderabad, Telangana",
          "billers": [
            {
              "op": 931,
              "fields": [
                {
                  "id": "cn",
                  "name": "Assessment Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{10,13}$",
                  "maxLen": 13,
                  "minLen": 10,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=931"
            }
          ],
          "providers": []
        },
        {
          "name": "Talegaon Dabhade Nagar Parishad - Municipal Taxes and Services Payments",
          "billers": [
            {
              "op": 823,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{4,20}$",
                  "maxLen": 20,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=823"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Bhopal",
          "billers": [
            {
              "op": 826,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z0-9]{10,12}$",
                  "maxLen": 12,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=826"
            }
          ],
          "providers": []
        },
        {
          "name": "Greater Hyderabad Municipal Corporation",
          "billers": [
            {
              "op": 863,
              "fields": [
                {
                  "id": "cn",
                  "name": "PTIN",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9A-Za-z]{1,10}$",
                  "maxLen": 10,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=863"
            }
          ],
          "providers": []
        },
        {
          "name": "Directorate of Municipal Administration Karnataka",
          "billers": [
            {
              "op": 709,
              "fields": [
                {
                  "id": "cn",
                  "name": "Challan Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{5,50}$",
                  "minLen": 5,
                  "maxLen": 50,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=709"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Palika Parishad - Sitapur",
          "billers": [
            {
              "op": 731,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{1,10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=731"
            }
          ],
          "providers": []
        },
        {
          "name": "Kolhapur Municipal corporation- Property tax",
          "billers": [
            {
              "op": 719,
              "fields": [
                {
                  "id": "cn",
                  "name": "Assessment No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9]{2,12}$",
                  "minLen": 2,
                  "maxLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=719"
            }
          ],
          "providers": []
        },
        {
          "name": "Jejuri Nagarparishad",
          "billers": [
            {
              "op": 700,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{}$",
                  "minLen": 1,
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=700"
            }
          ],
          "providers": []
        },
        {
          "name": "Mira Bhayander Municipal Corporation",
          "billers": [
            {
              "op": 710,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/]{10,52}$",
                  "minLen": 52,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=710"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Palika Palia Kalan",
          "billers": [
            {
              "op": 684,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "maxLen": 16,
                  "minLen": 1,
                  "name": "Unique Id Code",
                  "regex": "^[0-9A-Za-z]{2,25}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=684"
            }
          ],
          "providers": []
        },
        {
          "name": "Greater Chennai Corporation",
          "billers": [
            {
              "op": 538,
              "fields": [
                {
                  "id": "cn",
                  "name": "New Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z-]{12,30}$",
                  "maxLen": 30,
                  "minLen": 12,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=538"
            }
          ],
          "providers": []
        },
        {
          "name": "Hubli-Dharwad Municipal Corporation",
          "billers": [
            {
              "op": 563,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\\\]",
                  "maxLen": 25,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=563"
            }
          ],
          "providers": []
        },
        {
          "name": "Kolhapur Municipal Corporation - Water Tax",
          "billers": [
            {
              "op": 522,
              "fields": [
                {
                  "id": "cn",
                  "name": "Connection No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z]{3,10}$",
                  "maxLen": 10,
                  "minLen": 3,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=522"
            }
          ],
          "providers": []
        },
        {
          "name": "Madhya Pradesh Urban (e-Nagarpalika) - Property",
          "billers": [
            {
              "op": 371,
              "fields": [
                {
                  "id": "cn",
                  "name": "ULB Code",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9- ]+$",
                  "maxLen": 55,
                  "minLen": 4,
                  "icon": "V"
                },
                {
                  "id": "PropId",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=371"
            }
          ],
          "providers": []
        },
        {
          "name": "Minicipal Corporation - Meerut",
          "billers": [
            {
              "op": 547,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "minLen": 7,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=547"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Rohtak",
          "billers": [
            {
              "op": 573,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=573"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Nigam Agra",
          "billers": [
            {
              "op": 546,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{4,25}$",
                  "minLen": 4,
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=546"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Palika Parishad Lalitpur",
          "billers": [
            {
              "op": 548,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Tax ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 16,
                  "icon": "V"
                },
                {
                  "id": "housenumber",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=548"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Nigam Aligarh- Property",
          "billers": [
            {
              "op": 498,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property/PTI Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 25,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=498"
            }
          ],
          "providers": []
        },
        {
          "name": "Port Blair Municipal Council",
          "billers": [
            {
              "op": 439,
              "fields": [
                {
                  "id": "cn",
                  "name": "Shop ID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=439"
            }
          ],
          "providers": []
        },
        {
          "name": "Prayagraj Nagar Nigam - Property",
          "billers": [
            {
              "op": 416,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 25,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=416"
            }
          ],
          "providers": []
        },
        {
          "name": "Puducherry UT (Local Bodies) -Property Tax",
          "billers": [
            {
              "op": 597,
              "fields": [
                {
                  "id": "cn",
                  "name": "Service Unique Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 15,
                  "minLen": 7,
                  "icon": "V"
                },
                {
                  "id": "localBody",
                  "name": "Local Body",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_ \\\\-]*$",
                  "maxLen": 50,
                  "minLen": 5,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=597"
            }
          ],
          "providers": []
        },
        {
          "name": "Rajkot Municipal Corporation",
          "billers": [
            {
              "op": 567,
              "fields": [
                {
                  "id": "cn",
                  "name": "CA No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 11,
                  "minLen": 11,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=567"
            }
          ],
          "providers": []
        },
        {
          "name": "Shivamogga City Corporation",
          "billers": [
            {
              "op": 517,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Identification Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^(0|[1-9][0-9]*)$",
                  "maxLen": 7,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "id": "assessmentyear",
                  "name": "Assessment Year(YYYY-YY)",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "\\d{4}-\\d{2}",
                  "maxLen": 7,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=517"
            }
          ],
          "providers": []
        },
        {
          "name": "Corporation of City Panaji",
          "billers": [
            {
              "op": 598,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=598"
            }
          ],
          "providers": []
        },
        {
          "name": "Margao Municipal Council",
          "billers": [
            {
              "op": 599,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=599"
            }
          ],
          "providers": []
        },
        {
          "name": "Mhapsa Municipal Council",
          "billers": [
            {
              "op": 600,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=600"
            }
          ],
          "providers": []
        },
        {
          "name": "Mormugao Municipal Council",
          "billers": [
            {
              "op": 601,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=601"
            }
          ],
          "providers": []
        },
        {
          "name": "Ponda Municipal Council",
          "billers": [
            {
              "op": 602,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=602"
            }
          ],
          "providers": []
        },
        {
          "name": "Sankhali Municipal council",
          "billers": [
            {
              "op": 603,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=603"
            }
          ],
          "providers": []
        },
        {
          "name": "Pernem Municipal council",
          "billers": [
            {
              "op": 604,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=604"
            }
          ],
          "providers": []
        },
        {
          "name": "Valpoi Municipal council",
          "billers": [
            {
              "op": 605,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=605"
            }
          ],
          "providers": []
        },
        {
          "name": "Quepem Municipal council",
          "billers": [
            {
              "op": 606,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=606"
            }
          ],
          "providers": []
        },
        {
          "name": "Bicholim Municipal council",
          "billers": [
            {
              "op": 607,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=607"
            }
          ],
          "providers": []
        },
        {
          "name": "Curchorem Cacora Municipal council",
          "billers": [
            {
              "op": 608,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=608"
            }
          ],
          "providers": []
        },
        {
          "name": "Sanguem Municipal council",
          "billers": [
            {
              "op": 609,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=609"
            }
          ],
          "providers": []
        },
        {
          "name": "Canacona Municipal council",
          "billers": [
            {
              "op": 610,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=610"
            }
          ],
          "providers": []
        },
        {
          "name": "Cuncolim Municipal council",
          "billers": [
            {
              "op": 611,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9 ( )/-]{3,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=611"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Nigam Mathura-Vrindavan",
          "billers": [
            {
              "op": 612,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 17,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=612"
            }
          ],
          "providers": []
        },
        {
          "name": "MCGM Property Tax",
          "billers": [
            {
              "op": 672,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Z]{2}[0-9]{13}$",
                  "maxLen": 15,
                  "minLen": 15,
                  "icon": "V"
                },
                {
                  "id": "propertyType",
                  "name": "Property Account Number",
                  "icon": "V",
                  "fieldValues": [
                    "Property Tax",
                    "Repair Cess",
                    "Government Properties",
                    "Maharashtra Tax on Building"
                  ],
                  "type": "LIST"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=672"
            }
          ],
          "providers": []
        },
        {
          "name": "Poonawalla Housing Finance Ltd",
          "billers": [
            {
              "op": 1163,
              "fields": [
                {
                  "id": "cn",
                  "name": "Loan Account Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9\\/]{2,22}$",
                  "maxLen": 22,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "overdueandcharges",
                  "name": "Overdue and Charges Type",
                  "icon": "V",
                  "fieldValues": [
                    "Total Outstanding Amount",
                    "EMI Overdue Amount",
                    "Cheque Bouncing Charges",
                    "Delay Payment Charges",
                    "NOC Charges",
                    "Statement of Account Charges",
                    "Swap Charges",
                    "Foreclosure Letter Charges"
                  ],
                  "type": "LIST"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[5-9][0-9]{9}$",
                  "minLen": 10,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1163"
            }
          ],
          "providers": []
        },
        {
          "name": "Uttarakhand Property Tax",
          "billers": [
            {
              "op": 621,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^PT\\-\\d{6}\\-\\d{6}$",
                  "maxLen": 25,
                  "minLen": 4,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=621"
            }
          ],
          "providers": []
        },
        {
          "name": "Municipal Corporation Shimla",
          "billers": [
            {
              "op": 622,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "id": "billNumber",
                  "name": "Bill Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "minLen": 1,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=622"
            }
          ],
          "providers": []
        },
        {
          "name": "Gulbarga City Corporation",
          "billers": [
            {
              "op": 630,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,8}$",
                  "maxLen": 8,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=630"
            }
          ],
          "providers": []
        },
        {
          "name": "Vasai Virar Municipal Corporation - Property",
          "billers": [
            {
              "op": 380,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property Id",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z\\/]{2,25}$",
                  "maxLen": 25,
                  "minLen": 7,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=380"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Nigam Firozabad",
          "billers": [
            {
              "op": 1488,
              "fields": [
                {
                  "id": "cn",
                  "name": "Property ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9A-Za-z]{2,10}$",
                  "maxLen": 10,
                  "minLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1488"
            }
          ],
          "providers": []
        },
        {
          "name": "Grampanchayat Aitawade Khurd",
          "billers": [
            {
              "op": 1405,
              "fields": [
                {
                  "id": "cn",
                  "name": "Customer ID",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_@./#&amp;+-]{2,25}$",
                  "maxLen": 25,
                  "minLen": 2,
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Customer Mobile",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "icon": "a"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1405"
            }
          ],
          "providers": []
        },
        {
          "name": "Ahmedabad Municipal Corporation",
          "billers": [
            {
              "op": 373,
              "fields": [
                {
                  "id": "cn",
                  "name": "Tenement No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{15}$",
                  "maxLen": 15,
                  "minLen": 15,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=373"
            }
          ],
          "providers": []
        },
        {
          "name": "Kolkata Municipal Corporation-Trade license",
          "billers": [
            {
              "op": 1312,
              "fields": [
                {
                  "id": "cn",
                  "name": "CE number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "maxLen": 12,
                  "minLen": 12,
                  "regex": "^[0-9A-Za-z]{12,12}$",
                  "icon": "V"
                },
                {
                  "id": "mobileNumber",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[6-9][0-9]{9}$",
                  "maxLen": 10,
                  "minLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1312"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Parishad Beawar",
          "billers": [
            {
              "op": 1313,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Reg No",
                  "type": "INPUT",
                  "isnumeric": false,
                  "maxLen": 20,
                  "minLen": 1,
                  "regex": "^[a-zA-Z0-9,()/._''-]{1,20}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1313"
            }
          ],
          "providers": []
        },
        {
          "name": "Odisha Municipal Payments - Property Tax",
          "billers": [
            {
              "op": 1289,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 9,
                  "maxLen": 21,
                  "name": "PT (Property ID)",
                  "regex": "^[0-9A-Za-z-]{9,21}$",
                  "type": "INPUT"
                },
                {
                  "id": "ulbname",
                  "name": "ULB Name",
                  "type": "LIST",
                  "fieldValues": [
                    "Anandapur",
                    "Angul",
                    "Aska",
                    "Athagarh",
                    "Athmallik",
                    "Attabira",
                    "Balangir",
                    "Balasore",
                    "Balimela",
                    "Balliguda",
                    "Balugaon",
                    "Banki",
                    "Banpur",
                    "Bargarh",
                    "Barbil",
                    "Baripada",
                    "Barpali",
                    "Basudevpur",
                    "Bellaguntha",
                    "Belpahar",
                    "Bhadrak",
                    "Bhanjanagar",
                    "Bhawanipatna",
                    "Bhuban",
                    "Bijepur",
                    "Binka",
                    "Boudhgarh",
                    "Brajrajnagar",
                    "Buguda",
                    "Champua",
                    "Chandbali",
                    "Chatrapur",
                    "Chikiti",
                    "Choudwar",
                    "Cuttack",
                    "Daspalla",
                    "Deogarh",
                    "Dhenkanal",
                    "Dharamgarh",
                    "Dhamnagar",
                    "Digapahandi",
                    "G.Udayagiri",
                    "Ganjam",
                    "Gopalpur",
                    "Gudari",
                    "Gunupur",
                    "Hinjilicut",
                    "Hindol",
                    "Jagatsinghpur",
                    "Jajpur",
                    "Jaleswar",
                    "Jatni",
                    "Jeypore",
                    "Jharsuguda",
                    "Joda",
                    "Junagarh",
                    "Kabisuryanagar",
                    "Kamakhyanagar",
                    "Kantabanji",
                    "Karanjia",
                    "Kashinagar",
                    "Khandapada",
                    "Khariar",
                    "Khariar Road",
                    "Khordha",
                    "Kodala",
                    "Konark",
                    "Koraput",
                    "Kotpad",
                    "Kuchinda",
                    "Malkangiri",
                    "Nayagarh",
                    "Nilgiri",
                    "Nimapara",
                    "Nuapada",
                    "Odagaon",
                    "Padampur",
                    "Paradeep",
                    "Paralakhemundi",
                    "Patnagarh",
                    "Pattamundai",
                    "Phulbani",
                    "Pipli",
                    "Polasara",
                    "Puri",
                    "Purushottampur",
                    "Rairangpur",
                    "Rajgangpur",
                    "Rambha",
                    "Ranpur",
                    "Rayagada",
                    "Redhakhol",
                    "Remuna",
                    "Rourkela",
                    "Sambalpur",
                    "Sonepur",
                    "Soro",
                    "Sundargarh",
                    "Surada",
                    "Sunabeda",
                    "Talcher",
                    "Tarbha",
                    "Titilagarh",
                    "Tusura",
                    "Udala",
                    "Umerkote",
                    "Vyasanagar"
                  ]
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1289"
            }
          ],
          "providers": []
        },
        {
          "name": "Mangalore Municipal Corporation",
          "billers": [
            {
              "op": 1379,
              "fields": [
                {
                  "id": "cn",
                  "name": "Consumer Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 1,
                  "maxLen": 12,
                  "regex": "^[A-Za-z0-9]{1,12}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1379"
            }
          ],
          "providers": []
        },
        {
          "name": "Bicholim Municipal council Trade License",
          "billers": [
            {
              "op": 1352,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1352"
            }
          ],
          "providers": []
        },
        {
          "name": "Canacona Municipal Council Trade License",
          "billers": [
            {
              "op": 1353,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1353"
            }
          ],
          "providers": []
        },
        {
          "name": "Corporation of City Panaji Trade License",
          "billers": [
            {
              "op": 1354,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1354"
            }
          ],
          "providers": []
        },
        {
          "name": "Cuncolim Municipal Council Trade License",
          "billers": [
            {
              "op": 1355,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1355"
            }
          ],
          "providers": []
        },
        {
          "name": "Curchorem Cacora Municipal Council Trade License",
          "billers": [
            {
              "op": 1356,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1356"
            }
          ],
          "providers": []
        },
        {
          "name": "Margao Municipal Council Trade License",
          "billers": [
            {
              "op": 1357,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1357"
            }
          ],
          "providers": []
        },
        {
          "name": "Mhapsa Municipal Council Trade License",
          "billers": [
            {
              "op": 1358,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1358"
            }
          ],
          "providers": []
        },
        {
          "name": "Mormugao Municipal Council Trade License",
          "billers": [
            {
              "op": 1359,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1359"
            }
          ],
          "providers": []
        },
        {
          "name": "Pernem Municipal council Trade License",
          "billers": [
            {
              "op": 1360,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1360"
            }
          ],
          "providers": []
        },
        {
          "name": "Ponda Municipal Council Trade License",
          "billers": [
            {
              "op": 1361,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1361"
            }
          ],
          "providers": []
        },
        {
          "name": "Quepem Municipal council Trade License",
          "billers": [
            {
              "op": 1362,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1362"
            }
          ],
          "providers": []
        },
        {
          "name": "Sanguem Municipal Council Trade License",
          "billers": [
            {
              "op": 1363,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1363"
            }
          ],
          "providers": []
        },
        {
          "name": "Sankhali Municipal council Trade License",
          "billers": [
            {
              "op": 1364,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1364"
            }
          ],
          "providers": []
        },
        {
          "name": "Valpoi Municipal council Trade License",
          "billers": [
            {
              "op": 1365,
              "fields": [
                {
                  "id": "cn",
                  "name": "House Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "minLen": 2,
                  "maxLen": 25,
                  "regex": "^[a-zA-Z0-9()/-]{2,25}$",
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1365"
            }
          ],
          "providers": []
        },
        {
          "name": "Nagar Nigam Jhansi",
          "billers": [
            {
              "op": 1601,
              "fields": [
                {
                  "icon": "V",
                  "id": "cn",
                  "isnumeric": false,
                  "minLen": 5,
                  "maxLen": 55,
                  "name": "Property ID",
                  "regex": "^[A-Za-z0-9/]{5,55}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1601"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "housing",
      "name": "Housing Payments",
      "providerRoot": [
        {
          "name": "Apartments",
          "billers": [
            {
              "op": 205,
              "fields": [
                {
                  "id": "link",
                  "type": "LINK_PARAMS"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=205"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "Education",
      "name": "Fee Payment",
      "providerRoot": [
        {
          "name": "Institutes",
          "billers": [
            {
              "op": 274,
              "fields": [
                {
                  "id": "link",
                  "type": "LINK_PARAMS"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=274"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "hospitals",
      "name": "Hospitals",
      "providerRoot": [
        {
          "name": "B.K. Arogyam and Research Pvt. Ltd",
          "billers": [
            {
              "op": 446,
              "fields": [
                {
                  "id": "cn",
                  "name": "Mobile Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{10}$",
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=446"
            }
          ],
          "providers": []
        },
        {
          "name": "Billroth Hospitals Pvt Ltd",
          "billers": [
            {
              "op": 536,
              "fields": [
                {
                  "id": "cn",
                  "name": "UHID",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 20,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=536"
            }
          ],
          "providers": []
        },
        {
          "name": "Caritas Hospital",
          "billers": [
            {
              "op": 869,
              "fields": [
                {
                  "id": "cn",
                  "name": "Bill Number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[0-9a-zA-Z@#$%^&amp;*()_+=.,-]{4,26}$",
                  "maxLen": 26,
                  "minLen": 4,
                  "icon": "V"
                },
                {
                  "icon": "V",
                  "id": "IpNumber",
                  "isnumeric": false,
                  "minLen": 4,
                  "maxLen": 26,
                  "name": "IP Number",
                  "regex": "^[0-9a-zA-Z@#$%^&amp;*()_+=.,-]{4,26}$",
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=869"
            }
          ],
          "providers": []
        },
        {
          "name": "Sahagene Biosciences Private Limited",
          "billers": [
            {
              "op": 1583,
              "fields": [
                {
                  "id": "cn",
                  "name": "Reference Number",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1583"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "clubs",
      "name": "Clubs and Associations",
      "providerRoot": [
        {
          "name": "Madhya Pradesh Chamber Of Commerce And Industry",
          "billers": [
            {
              "op": 550,
              "fields": [
                {
                  "id": "cn",
                  "name": "Group No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,2}$",
                  "maxLen": 2,
                  "icon": "V"
                },
                {
                  "id": "SerialNo",
                  "name": "Serial No",
                  "type": "INPUT",
                  "isnumeric": true,
                  "regex": "^[0-9]{1,2}$",
                  "maxLen": 2,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=550"
            }
          ],
          "providers": []
        },
        {
          "name": "Naval Officers Institute",
          "billers": [
            {
              "op": 739,
              "fields": [
                {
                  "id": "cn",
                  "name": "MEMBERSHIP NUMBER",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": " ^[0-9A-Za-z]{1,16}$",
                  "minLen": 1,
                  "maxLen": 16,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=739"
            }
          ],
          "providers": []
        },
        {
          "name": "Rajindra Gymkhana And Mahendra Club Ltd",
          "billers": [
            {
              "op": 544,
              "fields": [
                {
                  "id": "cn",
                  "name": "Membership number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=544"
            }
          ],
          "providers": []
        },
        {
          "name": "The Institute of Indian Foundrymen",
          "billers": [
            {
              "op": 571,
              "fields": [
                {
                  "id": "cn",
                  "name": "Membership number",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9_]*$",
                  "maxLen": 30,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=571"
            }
          ],
          "providers": []
        },
        {
          "name": "The Choryasi Taluka Co op Milk Sale Society Ltd",
          "billers": [
            {
              "op": 1559,
              "fields": [
                {
                  "id": "cn",
                  "name": "Membership No.",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,100}$",
                  "maxLen": 100,
                  "minLen": 1,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1559"
            }
          ],
          "providers": []
        },
        {
          "name": "AL Ashraf Trust",
          "billers": [
            {
              "op": 1573,
              "fields": [
                {
                  "id": "cn",
                  "name": "Membership No.",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[a-zA-Z0-9]{1,10}$",
                  "minLen": 1,
                  "maxLen": 10,
                  "icon": "V"
                }
              ],
              "isAmountRequired": false,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1573"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "paylater",
      "name": "Zip/PayLater",
      "providerRoot": [
        {
          "name": "Zip/PayLater",
          "billers": [
            {
              "op": 260,
              "fields": [],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=260"
            }
          ],
          "providers": []
        }
      ]
    },
    {
      "categoryId": "subscription",
      "name": "Subscriptions",
      "providerRoot": [
        {
          "name": "Carpathy",
          "billers": [
            {
              "op": 355,
              "fields": [],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=355"
            }
          ],
          "providers": []
        },
        {
          "name": "Tinkle",
          "billers": [
            {
              "op": 689,
              "fields": [],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=689"
            }
          ],
          "providers": []
        },
        {
          "name": "Nat Geo Traveller India",
          "billers": [
            {
              "op": 690,
              "fields": [],
              "isAmountRequired": false,
              "bbpsEnabled": false,
              "icon": "https://billhub.in/others/cdn/bbps/?p=690"
            }
          ],
          "providers": []
        },
        {
          "name": "Shri Mata Vaishno Devi Shrine Board",
          "billers": [
            {
              "op": 1268,
              "fields": [
                {
                  "id": "cn",
                  "name": "Full Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z]+(?:\\s[A-Za-z]+)*$",
                  "maxLen": 50,
                  "minLen": 3,
                  "icon": "V"
                },
                {
                  "icon": "z",
                  "id": "emailId",
                  "isnumeric": false,
                  "maxLen": 100,
                  "name": "Email id",
                  "regex": "^[0-9a-zA-Z-\\\\._@]{1,200}",
                  "skipIfConnection": true,
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1268"
            }
          ],
          "providers": []
        },
        {
          "name": "Shri Ram Janmbhoomi Teerth Kshetra",
          "billers": [
            {
              "op": 1269,
              "fields": [
                {
                  "id": "cn",
                  "name": "Full Name",
                  "type": "INPUT",
                  "isnumeric": false,
                  "regex": "^[A-Za-z]+(?:\\s[A-Za-z]+)*$",
                  "maxLen": 50,
                  "minLen": 3,
                  "icon": "V"
                },
                {
                  "icon": "z",
                  "id": "emailId",
                  "isnumeric": false,
                  "maxLen": 100,
                  "name": "Email id",
                  "regex": "^[0-9a-zA-Z-\\\\._@]{1,200}",
                  "skipIfConnection": true,
                  "type": "INPUT"
                }
              ],
              "isAmountRequired": true,
              "bbpsEnabled": true,
              "icon": "https://billhub.in/others/cdn/bbps/?p=1269"
            }
          ],
          "providers": []
        }
      ]
    }
  ]
};