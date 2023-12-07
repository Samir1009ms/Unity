import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const isAuthenticadetGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {
  const auth = new AuthService()
  const router: Router = new Router();
  return auth.isLoggedIn$.pipe(
    tap((isLogged) => {
      console.log(auth.isLoggedIn$);
      if (!isLogged) {
        router.navigate(['/login'])
      }
    })
  )
};
