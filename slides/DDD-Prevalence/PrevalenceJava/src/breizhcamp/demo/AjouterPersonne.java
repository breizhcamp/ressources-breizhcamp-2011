package breizhcamp.demo;

import java.util.Date;
import java.lang.String;
import org.prevayler.Transaction;
import breizhcamp.demo.StockagePersonnes;

public class AjouterPersonne implements Transaction {

	private static final long serialVersionUID = 3433795009742736223L;

	private String _Prenom;
	private String _Nom;
	private int _Age;
	
	AjouterPersonne(String Prenom, String Nom, int Age) {
		_Prenom = Prenom;
		_Nom = Nom;
		_Age = Age;
	}
	
	@Override
	public void executeOn(Object prevalentSystem, Date ignored) {
		((StockagePersonnes)prevalentSystem).Personnes.add(new Personne(_Prenom, _Nom, _Age));
	}
}
