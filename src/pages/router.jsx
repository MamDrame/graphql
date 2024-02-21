import { useEffect, useState } from 'react';
import ErrorPage from './ErrorPage.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage());

  // Fonction pour obtenir la page initiale en fonction de l'URL
  function getInitialPage() {
    const path = window.location.pathname;
    if (path === '/profile') {
      return 'profile';
    } else {
      return '';
    }
  }

  // Fonction pour mettre à jour la page en fonction de l'URL
  function handlePageChange() {
    const path = window.location.pathname;
    if (path === '/profile') {
      setCurrentPage('profile');
    } else {
      setCurrentPage('');
    }
  }

  // Fonction pour changer de page à l'intérieur de l'application
  const navigateTo = (page) => {
    setCurrentPage(page);
    // Mettre à jour l'URL en fonction de la page naviguée
    window.history.pushState(null, null, `/${page}`);
  };

  useEffect(() => {
    // Écouter les changements d'URL
    window.addEventListener('popstate', handlePageChange);

    return () => {
      // Retirer l'écouteur lors du démontage du composant
      window.removeEventListener('popstate', handlePageChange);
    };
  }, []);

  // Rendu conditionnel en fonction de la page actuelle
  let pageContent;
  switch (currentPage) {
    case '':
      pageContent = <Home navigateTo={navigateTo} />;
      break;
    case 'profile':
      pageContent = <Profile navigateTo={navigateTo} />;
      break;
    default:
      pageContent = <ErrorPage />;
  }
console.log(pageContent);
  return <>{pageContent}</>;
}

export default App;
