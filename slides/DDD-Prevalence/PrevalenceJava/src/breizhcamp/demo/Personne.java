package breizhcamp.demo;

import java.lang.String;
import java.io.Serializable;

public class Personne implements Serializable {

	private static final long serialVersionUID = 920394837439199618L;

	private String _Prenom;
	private String _Nom;
	private int _Age;
	
	Personne(String Prenom, String Nom, int Age) {
		_Prenom = Prenom;
		_Nom = Nom;
		_Age = Age;
	}
}
