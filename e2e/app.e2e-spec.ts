import { AnCentralSuperPaoPage } from './app.po';

describe('an-central-super-pao App', () => {
  let page: AnCentralSuperPaoPage;

  beforeEach(() => {
    page = new AnCentralSuperPaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
