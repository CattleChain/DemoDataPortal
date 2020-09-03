
#!/bin/bash


# echo 'adding quantumleap subscription.....'
# curl --location --request POST 'http://localhost:1026/v2/subscriptions/' \
# --header 'content-type: application/json' \
# --header 'fiware-service: cattlechain' \
# --header 'fiware-servicepath: /CattleChainService' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#   "description": "Notify to quantumleap",
#   "subject": {
#     "entities": [
#       {
#         "idPattern": "Device.*"
#       }
#     ],
#      "condition": {
#       "attrs": [ "activity","temprature","weight","drinkingbehaviour","rest_time","dairy_time" ]
#     }
#   },
#   "notification": {
#     "http": {
#       "url": "http://quantumleap:8668/v2/notify"
#     }
#   }
# }'
# echo 'quantumleap subscription added !!!!'

# echo 'adding quantumleap subscription.....'
# curl --location --request POST 'http://localhost:1026/v2/subscriptions/' \
# --header 'content-type: application/json' \
# --header 'fiware-service: cattlechain' \
# --header 'fiware-servicepath: /CattleChainService' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#   "description": "Notify to quantumleap",
#   "subject": {
#     "entities": [
#       {
#         "idPattern": "Event.*"
#       }
#     ],
#      "condition": {
#       "attrs": [ "activity","temprature","weight","drinkingbehaviour","rest_time","dairy_time" ]
#     }
#   },
#   "notification": {
#     "http": {
#       "url": "http://quantumleap:8668/v2/notify"
#     }
#   }
# }'
# echo 'quantumleap subscription added !!!!'


# echo 'adding cygnus subscription.....'
# curl --location --request POST 'http://46.17.108.38:1026/v2/subscriptions/' \
# --header 'content-type: application/json' \
# --header 'fiware-service: cattlechain' \
# --header 'fiware-servicepath: /CattleChainService' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#   "description": "Notify to cygnus",
#   "subject": {
#     "entities": [
#       {
#         "idPattern": ".*"
#       }
#     ]
#   },
#   "notification": {
#     "http": {
#       "url": "http://46.17.108.38:5051/notify"
#     }
#   }
# }'

# echo 'quantumleap cygnus added !!!!'