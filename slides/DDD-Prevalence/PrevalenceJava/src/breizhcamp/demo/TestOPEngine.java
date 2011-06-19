/**
 * 
 */
package breizhcamp.demo;

import org.junit.Assert;
import org.junit.Test;

public class TestOPEngine {

	@Test
	public void testAjout() throws Exception {
		OPEngine Gestionnaire = new OPEngine();
		int NbPersonnes = Gestionnaire.CompterPersonnes();
		Gestionnaire.AjouterPersonne("JP", "Gouigoux", 36);
		Assert.assertEquals(NbPersonnes + 1, Gestionnaire.CompterPersonnes());
	}
	@Test
	public void testPersistance() throws Exception {
		OPEngine Gestionnaire = new OPEngine();
		int NbPersonnes = Gestionnaire.CompterPersonnes();
		Gestionnaire.AjouterPersonne("JP", "Gouigoux", 36);
		//Gestionnaire.PrendreCliche();
		Gestionnaire = new OPEngine();
		Assert.assertEquals(NbPersonnes + 1, Gestionnaire.CompterPersonnes());
	}
}
