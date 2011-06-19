using BambooBreizhCamp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace Tests
{
    /// <summary>
    ///Classe de test pour ProgrammeTest, destinée à contenir tous
    ///les tests unitaires ProgrammeTest
    ///</summary>
    [TestClass()]
    public class ProgrammeTest
    {
        private TestContext testContextInstance;

        /// <summary>
        ///Obtient ou définit le contexte de test qui fournit
        ///des informations sur la série de tests active ainsi que ses fonctionnalités.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Attributs de tests supplémentaires
        // 
        //Vous pouvez utiliser les attributs supplémentaires suivants lorsque vous écrivez vos tests :
        //
        //Utilisez ClassInitialize pour exécuter du code avant d'exécuter le premier test dans la classe
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Utilisez ClassCleanup pour exécuter du code après que tous les tests ont été exécutés dans une classe
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Utilisez TestInitialize pour exécuter du code avant d'exécuter chaque test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Utilisez TestCleanup pour exécuter du code après que chaque test a été exécuté
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion

        /// <summary>
        ///Test pour AjouterPersonne
        ///</summary>
        [TestMethod()]
        public void AjouterPersonneTest()
        {
            Programme target = new Programme();
            int NombrePersonnes = target.CompterPersonnes();
            target.AjouterPersonne("Gouigoux", "JP", 36);
            Assert.AreEqual(NombrePersonnes + 1, target.CompterPersonnes());
            target.Dispose();
            target = new Programme();
            Assert.AreEqual(NombrePersonnes + 1, target.CompterPersonnes());
        }
    }
}
