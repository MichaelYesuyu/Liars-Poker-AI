import numpy as np
import random

class Card:
    def __init__ (self, suit, value):
        self.suit = suit
        self.value = value
    
    #just for testing purposes
    def printCard(self):
        print(str(self.value)+str(self.suit))

#card = Card('d','6')
#Card.printCard(card)

class Deck:
    def __init__ (self):
        self.Cards = []
    
    def buildDeck(self):
        #adds the 52 cards in the deck to Cards list
        for suits in ['D','H','C','S']:
            self.Cards.append(Card(suits,'A'))
            for values in range(2,11):
                self.Cards.append(Card(suits,str(values)))
            self.Cards.append(Card(suits,'J'))
            self.Cards.append(Card(suits,'Q'))
            self.Cards.append(Card(suits,'K'))

    def shuffleDeck(self):
        random.shuffle(self.Cards)

    def drawCards(self,numCards):
        drawDeck = []
        for i in range(numCards):
            drawDeck.append(self.Cards[0])
            del self.Cards[0]
        return drawDeck 

    #below 2 functions just for testing purposes
    def printCard(self):
        for card in self.Cards:
            card.printCard()

    def printDrawnCards(self):
        testDeck = Deck.drawCards(self,30)
        for card in testDeck:
            card.printCard()

class Player:
    def __init__(self, numCards, cardList):
        self.numCards = numCards
        self.cardList = cardList

#below are the check functions for seeing if the cards are there
def CheckHigh(cardPoo, highCard):
    return #TODO

def CheckPair(cardPool, pairCard):
    return #TODO

def CheckTwoPair(cardPool, pairCard1, pairCard2):
    return #TODO

def CheckThreeKind(cardPool, tripleCard):
    return #TODO

def CheckStraight(cardPool, highCard):
    return #TODO

def CheckFlush(cardPool, highCard, suit):
    return #TODO

def CheckFullHouse(cardPool, tripleCard, pairCard):
    return #TODO

def CheckFourKind(cardPool, quadCard):
    return #TODO

def CheckStraightFlush(cardPool, highCard, suit):
    return #TODO

def CheckRoyalFlush(cardPool, suit):
    return CheckStraightFlush(cardPool,'A',suit)

#end of check cards

#supports up to 5 players, default is 2
def gameRound(p1,p2,p3=None,p4=None,p5=None):
    #creates a fresh shuffled deck
    deck = Deck()
    deck.buildDeck()
    deck.shuffleDeck()

    #draws cards for each player
    player1Cards = deck.drawCards(p1.numCards)
    p1.cardList = player1Cards
    player2Cards = deck.drawCards(p2.numCards)
    p2.cardList = player2Cards
    if p3 is not None:
        player3Cards = deck.drawCards(p3.numCards)
        p3.cardList = player3Cards
    if p4 is not None:
        player4Cards = deck.drawCards(p4.numCards)
        p4.cardList = player4Cards
    if p5 is not None:
        player5Cards = deck.drawCards(p5.numCards)
        p5.cardList = player5Cards

    #2 ways to end a round - call bluff or declare royal flush
    callBluff = False
    royalFlush = False

    while not callBluff and not royalFlush:
        return # TODO

    


#deck = Deck()
#deck.buildDeck()
#deck.shuffleDeck()
#deck.printCard()
#deck.printDrawnCards()
    
#game starts below
#print('Game starting......')

