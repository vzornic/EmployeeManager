import { EmplyeeManagerPage } from './app.po';

describe('emplyee-manager App', () => {
  let page: EmplyeeManagerPage;

  beforeEach(() => {
    page = new EmplyeeManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
