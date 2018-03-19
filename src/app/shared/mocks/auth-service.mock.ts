import {of} from 'rxjs/observable/of';

export const authServiceMock = {
  login: () => of('mocked-value'),
  saveToken: () => {}
};
