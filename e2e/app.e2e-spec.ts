import { CinemaTutorialPage } from './app.po';

describe('cinema-tutorial App', () => {
  let page: CinemaTutorialPage;

  beforeEach(() => {
    page = new CinemaTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
