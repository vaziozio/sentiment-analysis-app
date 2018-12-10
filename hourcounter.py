import datetime
#json to count
tweets_count = {0:{'Negativo':0,'Neutro':0,'Positivo':0},
                1:{'Negativo':0,'Neutro':0,'Positivo':0},
                2:{'Negativo':0,'Neutro':0,'Positivo':0},
                3:{'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                4: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                5: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                6: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                7: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                8: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                9: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                10: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                11: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                12:{'Negativo':0,'Neutro':0,'Positivo':0},
                13:{'Negativo':0,'Neutro':0,'Positivo':0},
                14:{'Negativo':0,'Neutro':0,'Positivo':0},
                15:{'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                16: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                17: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                18: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                19:{'Negativo':0,'Neutro':0,'Positivo':0},
                20:{'Negativo':0,'Neutro':0,'Positivo':0},
                21:{'Negativo':0,'Neutro':0,'Positivo':0},
                22:{'Negativo': 0, 'Neutro': 0, 'Positivo': 0},
                23: {'Negativo': 0, 'Neutro': 0, 'Positivo': 0}
                }

def count_tweets(sentiment):
    hour = datetime.datetime.now().hour
    tweets_count[hour][sentiment] +=1
    return tweets_count