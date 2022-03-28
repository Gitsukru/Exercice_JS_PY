
def calculDelivery(total, country = "CH"):
	if country == "CH":
		if total <= 50:
			print("Les frais de port sont de 20.-")
		elif total <= 100:
			print("Les frais de port sont de 10.-")
		elif total <= 150:
		  	print("Les frais de port sont de 5.-")
		else:
			print("Les frais de port sont gratuits !")
	elif country == "FR" or country == "DE": 
			if total <= 50:
				print("Les frais de port sont de 30.-")
			else:
		  		print("Les frais de port sont de 20.-")
	else: 
		print("Nous ne livrons pas dans cette zone !")
	  
	  
#Get user input
total = int(input("Quel est le montant total de la commande ?")) 
country = input("Quel est le pays de destination ( CH FR ou DE ) ?")

calculDelivery(total,country)