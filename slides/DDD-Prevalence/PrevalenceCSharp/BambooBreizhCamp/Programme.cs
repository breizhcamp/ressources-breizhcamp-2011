using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bamboo.Prevalence;

namespace BambooBreizhCamp
{
    public class Programme : IDisposable
    {
        //private Stockage _Stockage = null;

        public Programme()
        {
            //_Stockage = new Stockage();
        }

        public void AjouterPersonne(string Nom, string Prenom, int Age)
        {
            //_Stockage.ListePersonnes.Add(new Personne() { Nom = Nom, Prenom = Prenom, Age = Age });

            ICommand Commande = new CommandeAjouterPersonne(Nom, Prenom, Age);
            MoteurPrevalence.Moteur.ExecuteCommand(Commande);
        }

        public int CompterPersonnes()
        {
            //return _Stockage.ListePersonnes.Count;

            IQuery Requete = new RequeteNombrePersonnes();
            return (int)MoteurPrevalence.Moteur.ExecuteQuery(Requete);
        }

        public void Dispose()
        {
            MoteurPrevalence.Moteur.TakeSnapshot();
        }
    }
}
