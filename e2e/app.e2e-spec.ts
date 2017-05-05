import { ZadankoPage } from './app.po';

describe('zadanko App', () => {
  let page: ZadankoPage;

  beforeEach(() => {
    page = new ZadankoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
