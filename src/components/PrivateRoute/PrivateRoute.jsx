import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export function PrivateRoute({ children, ...props }) {
  let { user } = useUser();

  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
