package breizhcamp.demo;

import org.prevayler.*;
import breizhcamp.demo.StockagePersonnes;

import java.io.IOException;
import java.lang.String;

public class OPEngine {

	Prevayler prevayler;

	OPEngine() throws Exception {
		prevayler  = PrevaylerFactory.createPrevayler(new StockagePersonnes(), "persistance");
	}
	
	void AjouterPersonne(String Prenom, String Nom, int Age) {
		prevayler.execute(new AjouterPersonne(Prenom, Nom, Age));
	}
	
	int CompterPersonnes() throws Exception {
		return (Integer) prevayler.execute(new CompterPersonnes());
	}
	
	void PrendreCliche() throws IOException {
		prevayler.takeSnapshot();
	}
}
