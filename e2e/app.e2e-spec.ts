import { ListingappsemanticPage } from './app.po';

describe('listingappsemantic App', () => {
  let page: ListingappsemanticPage;

  beforeEach(() => {
    page = new ListingappsemanticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
