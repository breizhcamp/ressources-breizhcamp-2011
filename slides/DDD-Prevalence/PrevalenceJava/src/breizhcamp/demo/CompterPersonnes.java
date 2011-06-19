package breizhcamp.demo;

import java.util.Date;

import org.prevayler.Query;

public class CompterPersonnes implements Query {

	@Override
	public Object query(Object prevalentSystem, Date ignored) throws Exception {
		return (Integer) ((StockagePersonnes)prevalentSystem).Personnes.size();
	}

}
